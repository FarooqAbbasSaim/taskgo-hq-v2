<!DOCTYPE html>
<html>
<head>
    <title>Taskgo HQ Login Verification</title>
    <style>
        /* Add your custom styles here */
        body {
            font-family: Arial, sans-serif;
            color: #333;
        }
        .container {
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
            background-color: #f5f5f5;
            border-radius: 5px;
        }
        h1 {
            color: #007bff;
        }
        .code {
            font-size: 24px;
            font-weight: bold;
            color: #007bff;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Two-Factor Authentication Code</h1>
        <p>Hello {{ $user->name }},</p>
        <p>Your verification code is:</p>
        <p class="code">{{ $code }}</p>
        <p>Please enter this code in the app to complete the authentication process.</p>
        <p>If you didn't request this code, please ignore this email.</p>
        <p>Thank you for using Taskgo HQ!</p>
    </div>
</body>
</html>

