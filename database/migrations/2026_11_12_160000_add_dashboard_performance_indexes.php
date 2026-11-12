<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        if (! $this->hasIndex('rx_orders', 'rx_orders_created_at_status_index')) {
            Schema::table('rx_orders', function (Blueprint $table) {
                $table->index(['created_at', 'status'], 'rx_orders_created_at_status_index');
            });
        }

        if (! $this->hasIndex('appointments', 'appointments_status_date_index')) {
            Schema::table('appointments', function (Blueprint $table) {
                $table->index(['status', 'date'], 'appointments_status_date_index');
            });
        }

        if (! $this->hasIndex('pharmacies', 'pharmacies_created_at_index')) {
            // pharmacies.updated_at has an invalid zero-date default on prod;
            // Schema::table ALTER trips sql_mode, so create the index raw.
            $previousMode = DB::selectOne('SELECT @@SESSION.sql_mode AS mode')->mode ?? '';
            DB::statement('SET SESSION sql_mode = ""');
            try {
                DB::statement('CREATE INDEX pharmacies_created_at_index ON pharmacies (created_at)');
            } finally {
                DB::statement('SET SESSION sql_mode = ?', [$previousMode]);
            }
        }
    }

    public function down(): void
    {
        if ($this->hasIndex('rx_orders', 'rx_orders_created_at_status_index')) {
            Schema::table('rx_orders', function (Blueprint $table) {
                $table->dropIndex('rx_orders_created_at_status_index');
            });
        }

        if ($this->hasIndex('appointments', 'appointments_status_date_index')) {
            Schema::table('appointments', function (Blueprint $table) {
                $table->dropIndex('appointments_status_date_index');
            });
        }

        if ($this->hasIndex('pharmacies', 'pharmacies_created_at_index')) {
            Schema::table('pharmacies', function (Blueprint $table) {
                $table->dropIndex('pharmacies_created_at_index');
            });
        }
    }

    private function hasIndex(string $table, string $name): bool
    {
        return collect(DB::select("SHOW INDEX FROM {$table} WHERE Key_name = ?", [$name]))->isNotEmpty();
    }
};
