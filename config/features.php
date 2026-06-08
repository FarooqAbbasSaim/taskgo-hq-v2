<?php

return [
    'disposable_email_audit_logs' => env('DISPOSABLE_EMAIL_AUDIT_LOGS_ENABLED', false),
    'corporate_registrations' => env('HQ_CORPORATE_REGISTRATIONS_ENABLED', false),
    'patient_auth_events_log' => env('PATIENT_AUTH_EVENTS_LOG_ENABLED', false),
    'platform_insights' => env('HQ_PLATFORM_INSIGHTS_ENABLED', false),
];

