<?php

return [

    'noindex_auth_pages' => env('SEO_NOINDEX_AUTH_PAGES', true),

    'auth_path_patterns' => [
        '/',
        'login',
        '2fa',
        'sign-in',
        'sign-up',
        'reset-pass',
        'new-pass',
        'lock-screen',
        'two_factor',
        'two-factor',
        'password/*',
    ],

    'prevent_staging_indexing' => env('SEO_PREVENT_STAGING_INDEXING'),

    'staging_hosts' => array_values(array_filter(array_map('trim', explode(',', env(
        'SEO_STAGING_HOSTS',
        'taskgo-test.com'
    ))))),

];
