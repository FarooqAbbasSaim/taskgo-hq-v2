<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class SupportTicketMessage extends Model
{
    protected $guarded = [];
    protected $casts = ['is_internal' => 'boolean'];

    public function attachments()
    {
        return $this->hasMany(SupportTicketAttachment::class);
    }
}
