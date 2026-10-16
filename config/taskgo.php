<?php

return [
    'crm_public_path' => env('TASKGO_CRM_PUBLIC_PATH', dirname(base_path()) . '/taskgo-crm/public'),
    'crm_path' => env('TASKGO_CRM_PATH', dirname(base_path()) . '/taskgo-crm'),
    'crm_ccs_forms_path' => env('TASKGO_CRM_CCS_FORMS_PATH'),
];
