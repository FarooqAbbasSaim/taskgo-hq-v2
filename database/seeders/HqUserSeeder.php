<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\HqUser;
use Illuminate\Support\Facades\Hash;

class HqUserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        HqUser::create([
            'name' => 'Admin User',
            'email' => 'admin@taskgo.com',
            'password' => Hash::make('password'),
            'user_type' => 'hq_admin',
            'status' => 'active',
            'email_verified_at' => now(),
            'two_factor_enabled' => true,
        ]);
    }
}
