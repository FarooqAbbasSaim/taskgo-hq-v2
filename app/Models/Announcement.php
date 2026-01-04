<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Announcement extends Model
{
    protected $fillable = [
        'enabled',
        'content'
    ];

    protected $casts = [
        'enabled' => 'boolean'
    ];

    /**
     * Get the single global announcement instance
     */
    public static function getGlobal()
    {
        $announcement = static::first();
        
        if (!$announcement) {
            $announcement = static::create([
                'enabled' => false,
                'content' => null
            ]);
        }
        
        return $announcement;
    }
}
