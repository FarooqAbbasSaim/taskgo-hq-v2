<?php

return [
    'cc_email' => env('SUPPORT_CC_EMAIL', 'info@taskgo.ie'),
    // Reply-To for HQ → customer mail so the customer can reply into the ticket.
    // Format: support+{public_token}@{domain} (CRM inbound webhook).
    'inbound_reply_local' => env('SUPPORT_INBOUND_REPLY_LOCAL', 'support'),
    'inbound_reply_domain' => env('SUPPORT_INBOUND_REPLY_DOMAIN'),
];
