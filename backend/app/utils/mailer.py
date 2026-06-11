import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from app.config import settings


def _send_smtp(to: str, subject: str, html: str, text: str):
    msg = MIMEMultipart("alternative")
    msg["Subject"] = subject
    msg["From"] = f"Electronics Repair Shop <{settings.EMAIL_FROM}>"
    msg["To"] = to
    msg.attach(MIMEText(text, "plain"))
    msg.attach(MIMEText(html, "html"))

    with smtplib.SMTP(settings.SMTP_HOST, settings.SMTP_PORT) as server:
        server.starttls()
        server.login(settings.SMTP_USER, settings.SMTP_PASS)
        server.sendmail(settings.EMAIL_FROM, to, msg.as_string())


def _console_fallback(to: str, subject: str, text: str):
    print("\n=================== MOCK EMAIL SENT ===================")
    print(f"To:      {to}")
    print(f"Subject: {subject}")
    print(f"Content: {text}")
    print("=======================================================\n")


def send_mail(to: str, subject: str, html: str, text: str):
    if settings.SMTP_HOST and settings.SMTP_USER and settings.SMTP_PASS:
        try:
            _send_smtp(to, subject, html, text)
            print(f"[Mailer] Email sent to {to}")
        except Exception as e:
            print(f"[Mailer] SMTP failed: {e} — falling back to console")
            _console_fallback(to, subject, text)
    else:
        _console_fallback(to, subject, text)


def send_verification_otp(email: str, otp: str):
    subject = "Verify your email – Electronics Repair Shop"
    text = f"Your verification OTP is: {otp}  (valid for 10 minutes)"
    html = f"""
    <div style="font-family:Arial,sans-serif;max-width:600px;margin:auto;padding:24px;border:1px solid #ddd;border-radius:8px">
      <h2 style="color:#0070f3;text-align:center">Verify Your Account</h2>
      <p>Use the OTP below to verify your email address:</p>
      <div style="font-size:32px;font-weight:bold;letter-spacing:6px;text-align:center;
                  background:#f0f4ff;padding:20px;border-radius:6px;margin:20px 0">{otp}</div>
      <p style="color:#666;font-size:13px">Valid for 10 minutes. If you didn't sign up, ignore this email.</p>
    </div>"""
    send_mail(email, subject, html, text)


def send_reset_otp(email: str, otp: str):
    subject = "Password Reset OTP – Electronics Repair Shop"
    text = f"Your password reset OTP is: {otp}  (valid for 10 minutes)"
    html = f"""
    <div style="font-family:Arial,sans-serif;max-width:600px;margin:auto;padding:24px;border:1px solid #ddd;border-radius:8px">
      <h2 style="color:#dc3545;text-align:center">Reset Your Password</h2>
      <p>Use the OTP below to reset your password:</p>
      <div style="font-size:32px;font-weight:bold;letter-spacing:6px;text-align:center;
                  background:#fff3cd;padding:20px;border-radius:6px;margin:20px 0;color:#856404">{otp}</div>
      <p style="color:#666;font-size:13px">Valid for 10 minutes. If you didn't request this, change your password immediately.</p>
    </div>"""
    send_mail(email, subject, html, text)
