<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class CorporateRegistration extends Model
{
    protected $table = 'corporate_registrations';

    protected $fillable = [
        'company_name',
        'employee_count_on_site',
        'cro_number',
        'contact_name',
        'email',
        'phone',
        'premises_eircode',
        'consent_pharmacy_hse',
        'status',
        'approved_at',
        'approved_by_hq_user_id',
        'set_password_email_sent_at',
    ];

    protected function casts(): array
    {
        return [
            'employee_count_on_site' => 'integer',
            'consent_pharmacy_hse' => 'boolean',
            'approved_at' => 'datetime',
            'set_password_email_sent_at' => 'datetime',
        ];
    }
}

