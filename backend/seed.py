"""
Seed the database with:
  - 6 repair services
  - 1 admin user  (email: admin@repairshop.com / password: AdminPassword123)

Run with:
    python seed.py
"""
import sys
import os
sys.path.append(os.path.dirname(__file__))

from app.database import SessionLocal, engine, Base
from app.models import User, Service
from app.utils.helpers import hash_password

# Make sure tables exist
Base.metadata.create_all(bind=engine)

SERVICES = [
    {
        "name": "Screen Replacement",
        "description": "Cracked or bleeding screen repairs for smartphones, laptops, and tablets.",
        "base_price": 59.99,
        "estimated_time": "1-2 Hours",
        "icon_name": "smartphone",
    },
    {
        "name": "Battery Replacement",
        "description": "Fix battery drain issues, swelling batteries, or devices that won't turn on.",
        "base_price": 39.99,
        "estimated_time": "30-45 Mins",
        "icon_name": "battery-charging",
    },
    {
        "name": "Water Damage Diagnostics",
        "description": "Ultrasonic cleaning and professional repair for liquid-damaged logic boards.",
        "base_price": 49.99,
        "estimated_time": "24-48 Hours",
        "icon_name": "droplet",
    },
    {
        "name": "Charging Port Repair",
        "description": "Fix loose USB-C, Lightning, or charging pins that fail to connect.",
        "base_price": 29.99,
        "estimated_time": "1 Hour",
        "icon_name": "zap",
    },
    {
        "name": "Motherboard Repair / Soldering",
        "description": "Micro-soldering, IC replacements, and short circuit debugging.",
        "base_price": 99.99,
        "estimated_time": "3-5 Days",
        "icon_name": "cpu",
    },
    {
        "name": "Data Recovery",
        "description": "Retrieve lost photos, documents, and system files from broken drives and SSDs.",
        "base_price": 79.99,
        "estimated_time": "2-4 Days",
        "icon_name": "hard-drive",
    },
]

ADMIN = {
    "name": "Head Technician (Admin)",
    "email": "admin@repairshop.com",
    "password": "AdminPassword123",
    "phone": "1234567890",
    "role": "admin",
    "is_verified": True,
}


def seed():
    db = SessionLocal()
    try:
        # ── Services ──────────────────────────────────────────────────────────
        existing_services = db.query(Service).count()
        if existing_services == 0:
            for s in SERVICES:
                db.add(Service(**s))
            db.commit()
            print(f"[Seed] ✓  Inserted {len(SERVICES)} services.")
        else:
            print(f"[Seed] –  Services already seeded ({existing_services} found). Skipping.")

        # ── Admin User ────────────────────────────────────────────────────────
        existing_admin = db.query(User).filter(User.email == ADMIN["email"]).first()
        if not existing_admin:
            admin = User(
                name=ADMIN["name"],
                email=ADMIN["email"],
                password=hash_password(ADMIN["password"]),
                phone=ADMIN["phone"],
                role=ADMIN["role"],
                is_verified=ADMIN["is_verified"],
            )
            db.add(admin)
            db.commit()
            print(f"[Seed] ✓  Admin user created  →  {ADMIN['email']}  /  {ADMIN['password']}")
        else:
            print(f"[Seed] –  Admin user already exists. Skipping.")

        print("\n[Seed] Done! OK")
    finally:
        db.close()


if __name__ == "__main__":
    seed()
