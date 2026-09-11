<!doctype html>
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width"><title>Taskgo Support</title></head>
<body style="margin:0;background:#fff;font-family:Arial,sans-serif;color:#4b5563">
<div style="max-width:600px;background:#f7f7f7;padding:30px;border-radius:8px">
    <div style="text-align:center;background:#444e58;color:#fff;padding:12px 20px;font-size:18px;font-weight:600;border-radius:5px">Taskgo Support Status Update</div>
    <div style="padding:20px;background:#fff;line-height:1.6">
        <p>Hello {{ $ticket->requester_name }},</p>
        <p>The status of ticket <strong>{{ $ticket->reference }}</strong> — {{ $ticket->subject }} — is now:</p>
        <div style="margin:16px 0;padding:16px;text-align:center;background:#fff8dc;border:1px solid #f2cf5b;border-radius:6px;font-size:18px;font-weight:bold">{{ ucwords(str_replace('_', ' ', $ticket->status)) }}</div>
        <p>You can view the ticket and add more information from My Support Tickets in Taskgo.</p>
    </div>
    <div style="text-align:center;font-size:12px;color:#888;margin-top:20px">&copy; {{ date('Y') }} Taskgo. All rights reserved.</div>
</div>
</body></html>
