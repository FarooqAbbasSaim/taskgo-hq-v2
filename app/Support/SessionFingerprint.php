<?php

namespace App\Support;

use Illuminate\Http\Request;

class SessionFingerprint
{
    public const SESSION_KEY = '_session_fingerprint';

    public static function enabled(): bool
    {
        return (bool) config('session.fingerprint_enabled', true);
    }

    public static function bind(Request $request): void
    {
        if (! self::enabled()) {
            return;
        }

        $request->session()->put(self::SESSION_KEY, self::hash($request));
    }

    public static function matches(Request $request): bool
    {
        $stored = $request->session()->get(self::SESSION_KEY);
        if (! is_string($stored) || $stored === '') {
            return false;
        }

        return hash_equals($stored, self::hash($request));
    }

    public static function has(Request $request): bool
    {
        $stored = $request->session()->get(self::SESSION_KEY);

        return is_string($stored) && $stored !== '';
    }

    public static function clear(Request $request): void
    {
        $request->session()->forget(self::SESSION_KEY);
    }

    public static function hash(Request $request): string
    {
        $parts = [
            (string) $request->userAgent(),
        ];

        if ((bool) config('session.fingerprint_bind_ip', false)) {
            $parts[] = (string) $request->ip();
        }

        return hash('sha256', implode('|', $parts));
    }
}
