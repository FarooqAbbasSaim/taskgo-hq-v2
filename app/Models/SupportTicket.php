<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class SupportTicket extends Model
{
    public const STATUSES = [
        'new', 'assigned', 'in_progress', 'waiting_for_customer',
        'resolved', 'closed', 'reopened', 'duplicate', 'cancelled',
    ];

    protected $guarded = [];

    protected $casts = [
        'resolved_at' => 'datetime',
        'closed_at' => 'datetime',
        'customer_last_viewed_at' => 'datetime',
        'hq_last_viewed_at' => 'datetime',
        'customer_unread' => 'boolean',
        'hq_unread' => 'boolean',
    ];

    public function messages()
    {
        // Order by id (insert order). Do not sort by created_at alone: CRM uses
        // Europe/Dublin and HQ may use UTC against the same DB, so wall-clock
        // timestamps from each app can interleave incorrectly.
        return $this->hasMany(SupportTicketMessage::class)->orderBy('id');
    }

    public function inboundReplyAddress(): ?string
    {
        $domain = trim((string) config('support.inbound_reply_domain'));
        $token = trim((string) $this->public_token);
        if ($domain === '' || $token === '') {
            return null;
        }
        $local = trim((string) config('support.inbound_reply_local', 'support')) ?: 'support';

        return sprintf('%s+%s@%s', $local, $token, $domain);
    }
}
