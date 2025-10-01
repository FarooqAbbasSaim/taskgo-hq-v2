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
        Schema::create('pharmacy_subscriptions', function (Blueprint $table) {
            $table->id();
            $table->string('subscription_type');
            $table->date('start_date');
            $table->date('expiry_date');
            $table->string('status');
            $table->unsignedBigInteger('user_id');
            $table->string('pharmacy_name');
            $table->text('pharmacy_address');
            $table->string('registration_number');
            $table->string('superintendent_name');
            $table->string('superintendent_email');
            $table->string('superintendent_contact');
            $table->boolean('terms')->default(false);
            $table->timestamps();

            $table->foreign('user_id')->references('id')->on('hq_users')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('pharmacy_subscriptions');
    }
};

