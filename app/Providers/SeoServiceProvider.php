<?php

namespace App\Providers;

use App\Support\Seo;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\ServiceProvider;

class SeoServiceProvider extends ServiceProvider
{
    public function register(): void
    {
        $this->mergeConfigFrom(config_path('seo.php'), 'seo');
    }

    public function boot(): void
    {
        Route::get('/robots.txt', function () {
            if (! Seo::shouldPreventStagingIndexing()) {
                abort(404);
            }

            $body = "User-agent: *\nDisallow: /\n";

            return response($body, 200, [
                'Content-Type' => 'text/plain; charset=UTF-8',
                'X-Robots-Tag' => 'noindex, nofollow',
            ]);
        })->name('robots.txt.staging');
    }
}
