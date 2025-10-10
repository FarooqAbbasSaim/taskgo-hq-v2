<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PharmacySubscription extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'pharmacy_name',
        'registration_number',
        'status',
        'start_date',
        'expiry_date'
    ];

    protected $casts = [
        'start_date' => 'date',
        'expiry_date' => 'date',
    ];

    /**
     * Get the user that owns the subscription
     */
    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
