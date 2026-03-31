<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\SystemSetting;
use Illuminate\Http\Request;

class SystemSettingsController extends Controller
{
    public function index()
    {
        $row = SystemSetting::query()->where('key', 'phone_call_billing')->first();
        $values = is_array($row?->values) ? $row->values : [];

        $defaults = [
            'mode' => 'per_minute',
            'rate_per_minute' => 5,
        ];

        $settings = array_merge($defaults, $values);

        return view('system-settings', [
            'settings' => $settings,
        ]);
    }

    public function update(Request $request)
    {
        $data = $request->validate([
            'rate_per_minute' => 'required|numeric|min:0|max:9999',
        ]);

        $values = [
            // Fixed policy: always per-minute billing, min 1 minute, ceil rounding.
            'mode' => 'per_minute',
            'rate_per_minute' => (float) $data['rate_per_minute'],
            'min_billed_seconds' => 60,
            'billing_increment' => 'ceil_minute',
            'charge_one_minute_when_duration_unknown' => true,
        ];

        SystemSetting::query()->updateOrCreate(
            ['key' => 'phone_call_billing'],
            ['values' => $values]
        );

        return redirect()
            ->route('admin.system-settings')
            ->with('success', 'System settings updated.');
    }
}

