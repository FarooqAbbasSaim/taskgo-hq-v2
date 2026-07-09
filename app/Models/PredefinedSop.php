<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class PredefinedSop extends Model
{
    protected $table = 'predefined_sops';

    protected $fillable = [
        'customer_id',
        'title',
        'description',
        'document_path',
        'original_file_name',
        'mime_type',
        'version',
        'effective_date',
        'sort_order',
        'is_active',
    ];

    protected $casts = [
        'effective_date' => 'date',
        'is_active' => 'boolean',
    ];

    public function scopeHqCatalog($query)
    {
        return $query->whereNull('customer_id');
    }
}
