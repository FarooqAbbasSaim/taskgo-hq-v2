<?php

namespace Tests\Feature;

use App\Services\CcsFormTemplateCatalog;
use Tests\TestCase;

class CcsFormTemplatesUiTest extends TestCase
{
    public function test_ccs_form_templates_are_feature_flagged_and_wired(): void
    {
        $features = file_get_contents(config_path('features.php'));
        $routes = file_get_contents(base_path('routes/web.php'));
        $sidenav = file_get_contents(resource_path('views/layouts/shared/sidenav.blade.php'));
        $controller = file_get_contents(app_path('Http/Controllers/Admin/CcsFormTemplatesController.php'));
        $view = file_get_contents(resource_path('views/admin/ccs-form-templates.blade.php'));
        $pdf = file_get_contents(resource_path('views/pdfs/ccs-form-template.blade.php'));

        $this->assertStringContainsString("'ccs_form_templates' => env('HQ_CCS_FORM_TEMPLATES_ENABLED', false)", $features);
        $this->assertStringContainsString("config('features.ccs_form_templates')", $sidenav);
        $this->assertStringContainsString('admin.ccs-form-templates', $sidenav);
        $this->assertStringContainsString("Route::get('/ccs-form-templates'", $routes);
        $this->assertStringContainsString('admin.ccs-form-templates.download', $routes);
        $this->assertStringContainsString('admin.ccs-form-templates.download-selected', $routes);
        $this->assertStringContainsString('function downloadSelected', $controller);
        $this->assertStringContainsString("abort_unless((bool) config('features.ccs_form_templates', false), 404)", $controller);
        $this->assertStringContainsString('Download PDF', $view);
        $this->assertStringContainsString('id="ccsSelectAll"', $view);
        $this->assertStringContainsString('Download selected', $view);
        $this->assertStringContainsString('CCS blank form template', $pdf);
        $this->assertTrue(class_exists(CcsFormTemplateCatalog::class));
    }

    public function test_catalog_lists_crm_ccs_forms_when_path_configured(): void
    {
        $crmForms = dirname(base_path()) . '/taskgo-crm/config/ccs-appointment-forms.php';
        if (! is_file($crmForms)) {
            $this->markTestSkipped('CRM CCS forms config not available beside HQ.');
        }

        config(['taskgo.crm_ccs_forms_path' => $crmForms]);

        $catalog = new CcsFormTemplateCatalog();
        $list = $catalog->list();
        $keys = array_column($list, 'key');

        $this->assertContains('allergic_rhinitis', $keys);
        $this->assertContains('uncomplicated_uti', $keys);

        $form = $catalog->get('cold_sores');
        $this->assertSame('cold_sores', $form['key']);
        $this->assertNotEmpty($form['questions']);
    }
}
