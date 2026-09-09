<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Support\Facades\DB;

return new class extends Migration
{
    public function up(): void
    {
        DB::table('hq_users')
            ->where('email', 'dev@taskgo.ie')
            ->update(['name' => 'Taskgo Engineering']);
    }

    public function down(): void
    {
        DB::table('hq_users')
            ->where('email', 'dev@taskgo.ie')
            ->where('name', 'Taskgo Engineering')
            ->update(['name' => 'Dev TaskGo']);
    }
};
