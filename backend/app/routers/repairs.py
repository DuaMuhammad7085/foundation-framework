from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from uuid import UUID

from app.database import get_db
from app.models import Repair, User
from app.schemas import RepairCreate, RepairOut, RepairStatusUpdate, RepairTrackOut
from app.dependencies import require_roles
from app.utils.helpers import generate_tracking_id
from app.worker import send_email_task, send_whatsapp_task

router = APIRouter(prefix="/api/repairs", tags=["Repairs"])

VALID_STATUSES = ["received", "diagnosed", "repairing", "testing", "collection"]

STATUS_PROGRESS = {
    "received":   20,
    "diagnosed":  40,
    "repairing":  60,
    "testing":    80,
    "collection": 100,
}

def _notify_customer(repair, notification_preference, customer_email, event_type="created"):
    tracking_link = f"https://yourdomain.com/track/{repair.tracking_id}"
    if event_type == "created":
        msg = f"Hello {repair.customer_name}, your repair ticket for {repair.device_model} has been created. Your tracking ID is {repair.tracking_id}. Track it here: {tracking_link}"
        subj = f"Repair Ticket Created - Tracking ID {repair.tracking_id}"
    else:
        msg = f"Hello {repair.customer_name}, your repair ticket for {repair.device_model} status has been updated to '{repair.status}'. Track it here: {tracking_link}"
        subj = f"Repair Status Update - {repair.tracking_id}"

    if notification_preference == "whatsapp" and repair.customer_phone:
        send_whatsapp_task.delay(repair.customer_phone, msg)
    elif customer_email:
        send_email_task.delay(customer_email, subj, msg)
        

@router.post("/create", status_code=201)
def create_repair(
    body: RepairCreate,
    db: Session = Depends(get_db),
    _: User = Depends(require_roles("admin", "technician")),
):
    for _ in range(5):
        tracking_id = generate_tracking_id()
        if not db.query(Repair).filter(Repair.tracking_id == tracking_id).first():
            break
    else:
        raise HTTPException(500, "Could not generate a unique tracking ID.")

    repair = Repair(
        tracking_id=tracking_id,
        customer_name=body.customer_name,
        customer_phone=body.customer_phone,
        device_model=body.device_model,
        estimated_cost=body.estimated_cost,
        appointment_id=body.appointment_id,
        status="received",
        status_notes="Device received and queued for diagnostics.",
    )
    db.add(repair)
    db.commit()
    db.refresh(repair)
    
    _notify_customer(repair, body.notification_preference, body.customer_email, "created")

    return {
        "success": True,
        "message": "Repair ticket created successfully.",
        "tracking_id": tracking_id,
        "repair": RepairOut.model_validate(repair),
    }

@router.get("/track/{tracking_id}", response_model=dict)
def track_repair(tracking_id: str, db: Session = Depends(get_db)):
    repair = db.query(Repair).filter(Repair.tracking_id == tracking_id.upper()).first()
    if not repair:
        raise HTTPException(404, "Invalid tracking ID. Please double-check the ID.")

    return {
        "success": True,
        "data": RepairTrackOut(
            tracking_id=repair.tracking_id,
            customer_name=repair.customer_name,
            device_model=repair.device_model,
            status=repair.status,
            status_notes=repair.status_notes,
            estimated_cost=repair.estimated_cost,
            progress_percentage=STATUS_PROGRESS.get(repair.status, 0),
            last_updated=repair.updated_at,
            received_at=repair.created_at,
        ),
    }

@router.put("/{tracking_id}/status")
def update_repair_status(
    tracking_id: str,
    body: RepairStatusUpdate,
    db: Session = Depends(get_db),
    _: User = Depends(require_roles("admin", "technician")),
):
    if body.status not in VALID_STATUSES:
        raise HTTPException(400, f"Invalid status. Choose from: {', '.join(VALID_STATUSES)}")

    repair = db.query(Repair).filter(Repair.tracking_id == tracking_id.upper()).first()
    if not repair:
        raise HTTPException(404, "Repair record not found.")

    repair.status = body.status
    if body.status_notes is not None:
        repair.status_notes = body.status_notes
    if body.estimated_cost is not None:
        repair.estimated_cost = body.estimated_cost

    db.commit()
    db.refresh(repair)
    
    if body.notify_customer:
        # Assuming email might be linked via appointment, but for simplicity let's just use whatsapp if no email known
        # Or you could fetch the User object via appointment_id
        customer_email = None
        if repair.appointment and repair.appointment.customer_email:
            customer_email = repair.appointment.customer_email
        elif repair.appointment and repair.appointment.user:
            customer_email = repair.appointment.user.email
            
        _notify_customer(repair, "whatsapp" if not customer_email else "email", customer_email, "updated")

    return {
        "success": True,
        "message": f"Repair status updated to '{body.status}'.",
        "repair": RepairOut.model_validate(repair),
    }


@router.get("/all")
def all_repairs(
    db: Session = Depends(get_db),
    _: User = Depends(require_roles("admin", "technician")),
):
    repairs = db.query(Repair).order_by(Repair.updated_at.desc()).all()
    return {
        "success": True,
        "count": len(repairs),
        "repairs": [RepairOut.model_validate(r) for r in repairs],
    }
