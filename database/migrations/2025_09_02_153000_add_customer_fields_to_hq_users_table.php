<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('hq_users', function (Blueprint $table) {
            // Customer management fields
            $table->unsignedBigInteger('pharmacy_subscription_id')->nullable()->after('user_type');
            $table->string('status')->default('active')->after('pharmacy_subscription_id');
            $table->timestamp('email_verified_at')->nullable()->after('status');
            $table->unsignedBigInteger('created_by')->nullable()->after('email_verified_at');
            
            // Package plan fields
            $table->decimal('total_credit', 10, 2)->default(0)->after('created_by');
            $table->decimal('openai_cost', 10, 2)->default(0)->after('total_credit');
            $table->decimal('sms_cost', 10, 2)->default(0)->after('openai_cost');
            
            // Additional customer fields
            $table->string('user_pharmacy')->nullable()->after('sms_cost');
            $table->string('company_name')->nullable()->after('user_pharmacy');
            $table->string('company_logo')->nullable()->after('company_name');
            $table->string('image')->nullable()->after('company_logo');
            $table->string('signature_image')->nullable()->after('image');
            $table->string('notification_status')->default('1')->after('signature_image');
            $table->string('device_id')->nullable()->after('notification_status');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('hq_users', function (Blueprint $table) {
            $table->dropColumn([
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
                'device_id'
            ]);
        });
    }
};
