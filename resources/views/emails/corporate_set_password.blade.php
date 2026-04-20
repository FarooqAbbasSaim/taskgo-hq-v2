<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Set your password</title>
</head>
<body style="font-family: Arial, sans-serif; line-height: 1.5; color: #111827;">
    <p>Hello{{ !empty($companyName) ? ' '.$companyName : '' }},</p>

    <p>Your organisation has been approved on <strong>My Vaccine Portal</strong>.</p>

    <p>
        Please set your password using the link below (valid for {{ $expiresHours ?? 48 }} hours):
    </p>

    <p>
        <a href="{{ $setPasswordUrl }}">{{ $setPasswordUrl }}</a>
    </p>

    <p>If you did not request this, you can ignore this email.</p>
</body>
</html>

