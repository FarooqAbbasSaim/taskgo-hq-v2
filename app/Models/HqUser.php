<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

class HqUser extends Authenticatable
{
    use HasFactory, Notifiable;

    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'hq_users';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 
        'email', 
        'password', 
        'user_type', 
        'pharmacy_subscription_id',
        'status',
        'email_verified_at',
        'created_by',
        'total_credit',
        'openai_cost',
        'sms_cost',
        'user_pharmacy',
        'company_name',
        'company_logo',
        'image',
        'signature_image',
        'notification_status',
        'device_id',
        'two_factor_code', 
        'two_factor_expires_at', 
        'last_login_at', 
        'two_factor_enabled'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 
        'remember_token',
        'two_factor_code',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
        'two_factor_expires_at' => 'datetime',
        'last_login_at' => 'datetime',
        'two_factor_enabled' => 'boolean',
        'total_credit' => 'decimal:2',
        'openai_cost' => 'decimal:2',
        'sms_cost' => 'decimal:2',
    ];

    /**
     * Check if 2FA is required for this user
     *
     * @return bool
     */
    public function requiresTwoFactor(): bool
    {
        return $this->two_factor_enabled;
    }

    /**
     * Check if the 2FA code has expired
     *
     * @return bool
     */
    public function isTwoFactorCodeExpired(): bool
    {
        return $this->two_factor_expires_at && $this->two_factor_expires_at->isPast();
    }

    /**
     * Clear the 2FA code and expiration
     *
     * @return void
     */
    public function clearTwoFactorCode(): void
    {
        $this->update([
            'two_factor_code' => null,
            'two_factor_expires_at' => null,
        ]);
    }

    /**
     * Get the subscription associated with the user
     */
    public function subscription()
    {
        return $this->hasOne(\App\Models\PharmacySubscription::class, 'id', 'pharmacy_subscription_id');
    }

    /**
     * Get the user who created this user
     */
    public function creator()
    {
        return $this->belongsTo(\App\Models\HqUser::class, 'created_by');
    }

    /**
     * Get users created by this user
     */
    public function createdUsers()
    {
        return $this->hasMany(\App\Models\HqUser::class, 'created_by');
    }
}
