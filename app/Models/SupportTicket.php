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
        return $this->hasMany(SupportTicketMessage::class)->orderBy('created_at')->orderBy('id');
    }
}
