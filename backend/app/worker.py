import smtplib
from email.message import EmailMessage
from celery import Celery
from twilio.rest import Client
from app.config import settings

celery_app = Celery(
    "worker",
    broker=settings.REDIS_URL,
    backend=settings.REDIS_URL
)

celery_app.conf.update(
    task_serializer="json",
    accept_content=["json"],
    result_serializer="json",
    timezone="UTC",
    enable_utc=True,
)

@celery_app.task
def send_email_task(to_email: str, subject: str, body: str):
    if not settings.SMTP_HOST or not settings.SMTP_USER:
        print(f"[Worker] SMTP not configured. Would send email to {to_email}: {subject}")
        return False
        
    msg = EmailMessage()
    msg.set_content(body)
    msg["Subject"] = subject
    msg["From"] = settings.EMAIL_FROM
    msg["To"] = to_email

    try:
        server = smtplib.SMTP(settings.SMTP_HOST, settings.SMTP_PORT)
        server.starttls()
        server.login(settings.SMTP_USER, settings.SMTP_PASS)
        server.send_message(msg)
        server.quit()
        print(f"[Worker] Email sent to {to_email}")
        return True
    except Exception as e:
        print(f"[Worker] Failed to send email to {to_email}: {e}")
        return False

@celery_app.task
def send_sms_task(to_phone: str, body: str):
    if not settings.TWILIO_ACCOUNT_SID or not settings.TWILIO_AUTH_TOKEN:
        print(f"[Worker] Twilio not configured. Would send SMS to {to_phone}: {body}")
        return False
        
    try:
        client = Client(settings.TWILIO_ACCOUNT_SID, settings.TWILIO_AUTH_TOKEN)
        message = client.messages.create(
            body=body,
            from_=settings.TWILIO_PHONE_NUMBER,
            to=to_phone
        )
        print(f"[Worker] SMS sent to {to_phone}, SID: {message.sid}")
        return True
    except Exception as e:
        print(f"[Worker] Failed to send SMS to {to_phone}: {e}")
        return False

@celery_app.task
def send_whatsapp_task(to_phone: str, body: str):
    if not settings.TWILIO_ACCOUNT_SID or not settings.TWILIO_AUTH_TOKEN:
        print(f"[Worker] Twilio not configured. Would send WhatsApp to {to_phone}: {body}")
        return False
        
    try:
        client = Client(settings.TWILIO_ACCOUNT_SID, settings.TWILIO_AUTH_TOKEN)
        message = client.messages.create(
            body=body,
            from_=f"whatsapp:{settings.TWILIO_WHATSAPP_NUMBER}",
            to=f"whatsapp:{to_phone}"
        )
        print(f"[Worker] WhatsApp sent to {to_phone}, SID: {message.sid}")
        return True
    except Exception as e:
        print(f"[Worker] Failed to send WhatsApp to {to_phone}: {e}")
        return False
