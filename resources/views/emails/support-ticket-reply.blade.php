<!doctype html>
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width"><title>Taskgo Support</title></head>
<body style="margin:0;background:#fff;font-family:Arial,sans-serif;color:#4b5563">
<div style="max-width:600px;background:#f7f7f7;padding:30px;border-radius:8px">
    <div style="text-align:center;background:#444e58;color:#fff;padding:12px 20px;font-size:18px;font-weight:600;border-radius:5px">Taskgo Support Update</div>
    <div style="padding:20px;background:#fff;line-height:1.6">
        <p>Hello {{ $ticket->requester_name }},</p>
        <p>There is an update on ticket <strong>{{ $ticket->reference }}</strong>.</p>
        <div style="margin:16px 0;padding:16px;background:#f3f4f6;border:1px solid #d9dde3;border-radius:6px;">
            <div style="margin-bottom:8px;"><strong>Subject:</strong> {{ $ticket->subject }}</div>
            <div style="white-space:pre-wrap"><strong>Message:</strong><br>{{ $ticketMessage->body }}</div>
        </div>
        <p>You can view the ticket and add more information from My Support Tickets in Taskgo.</p>
        <p>Current status: {{ ucwords(str_replace('_', ' ', $ticket->status)) }}</p>
    </div>
    <div style="text-align:center;font-size:12px;color:#888;margin-top:20px">&copy; {{ date('Y') }} Taskgo. All rights reserved.</div>
</div>
</body></html>
