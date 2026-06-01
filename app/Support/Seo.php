<?php

namespace App\Support;

class Seo
{
    public static function shouldPreventStagingIndexing(): bool
    {
        $configured = config('seo.prevent_staging_indexing');
        if ($configured !== null && $configured !== '') {
            return filter_var($configured, FILTER_VALIDATE_BOOLEAN);
        }

        if (env('APP_ENV') === 'staging') {
            return true;
        }

        $hosts = config('seo.staging_hosts', ['taskgo-test.com']);
        $candidates = array_filter([
            strtolower((string) config('app.url', '')),
            app()->runningInConsole() ? '' : strtolower((string) request()->getHost()),
        ]);

        foreach ($hosts as $host) {
            $host = strtolower(trim((string) $host));
            if ($host === '') {
                continue;
            }
            foreach ($candidates as $candidate) {
                if ($candidate !== '' && str_contains($candidate, $host)) {
                    return true;
                }
            }
        }

        return false;
    }

    public static function shouldNoindexAuthRequest(): bool
    {
        if (self::shouldPreventStagingIndexing()) {
            return true;
        }

        if (! config('seo.noindex_auth_pages', true)) {
            return false;
        }

        $patterns = config('seo.auth_path_patterns', []);

        return $patterns !== [] && request()->is($patterns);
    }

    public static function shouldSendNoindexHeaders(): bool
    {
        return self::shouldPreventStagingIndexing() || self::shouldNoindexAuthRequest();
    }
}
