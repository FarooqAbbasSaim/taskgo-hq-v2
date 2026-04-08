<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Verify Your New Email Address</title>
    <style>
        body { font-family: Arial, sans-serif; color: #333; background: #f5f7fb; margin: 0; padding: 24px; }
        .container { max-width: 600px; margin: 0 auto; background: #fff; border-radius: 8px; padding: 32px; }
        .button { display: inline-block; padding: 12px 20px; background: #3e60d5; color: #fff !important; text-decoration: none; border-radius: 6px; font-weight: 700; }
        .muted { color: #6c757d; font-size: 14px; }
    </style>
</head>
<body>
    <div class="container">
        <h1>Verify your new email address</h1>
        <p>Hello {{ $firstName }},</p>
        <p>Taskgo received a request to change the email address on your patient profile from <strong>{{ $currentEmail ?: 'your current email' }}</strong> to <strong>{{ $newEmail }}</strong>.</p>
        <p>Please confirm this change by clicking the button below within 24 hours.</p>
        <p>
            <a href="{{ $verificationUrl }}" class="button">Verify Email Address</a>
        </p>
        <p class="muted">This link expires on {{ $expiresAt->format('j F Y g:i A') }}.</p>
        <p class="muted">If you did not expect this change, you can ignore this email and your current email address will remain unchanged.</p>
    </div>
</body>
</html>
