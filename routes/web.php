<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\RoutingController;
use App\Http\Controllers\Auth\LoginController;

// Test route
Route::get('/test', function () {
    return 'Application is working!';
});

// Test 404 route (for testing custom error pages)
Route::get('/test-404', function () {
    abort(404);
});

// Root route - redirect based on authentication status
Route::get('/', function () {
    if (Auth::guard('hq')->check()) {
        return redirect('/admin/dashboard');
    }
    return redirect('/login');
})->name('root');

// Authentication routes
Route::get('/login', [LoginController::class, 'showLoginForm'])->name('login');
Route::post('/login', [LoginController::class, 'login']);
Route::post('/logout', [LoginController::class, 'logout'])->name('logout');

// Two-factor authentication routes
Route::get('2fa', [LoginController::class, 'show2faForm'])->name('2fa.form');
Route::post('2fa', [LoginController::class, 'verify2fa'])->name('2fa.verify');

// Protected admin routes
Route::middleware(['auth:hq'])->prefix('admin')->group(function () {
    Route::get('/dashboard', [RoutingController::class, 'index'])->name('admin.dashboard');
});

// Protected dynamic routes for new UI pages (fallback)
Route::middleware(['auth:hq'])->group(function () {
    Route::get('{first}/{second}/{third}', [RoutingController::class, 'thirdLevel'])->name('third');
    Route::get('{first}/{second}', [RoutingController::class, 'secondLevel'])->name('second');
    Route::get('{any}', [RoutingController::class, 'root'])->name('any');
});
