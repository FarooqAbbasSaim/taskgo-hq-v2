<?php

namespace Tests\Feature;

use Tests\TestCase;

class StaffSopPolicyStatsTest extends TestCase
{
    public function test_staff_stats_use_applicable_documents_not_raw_pivot_counts(): void
    {
        $controller = file_get_contents(app_path('Http/Controllers/Api/PharmacyInvestigationController.php'));
        $view = file_get_contents(resource_path('views/staff-view.blade.php'));

        $this->assertStringContainsString('staffApplicableDocumentStats', $controller);
        $this->assertStringContainsString('applicablePublishedDocIds', $controller);
        $this->assertStringContainsString('needs_reminder', $controller);
        $this->assertStringContainsString('unread_names', $controller);
        $this->assertStringNotContainsString("\$sopStats['total'] = \$sopRows->count()", $controller);
        $this->assertStringNotContainsString("\$policyStats['total'] = \$policyRows->count()", $controller);

        $this->assertStringContainsString('staffDocReminderAlert', $view);
        $this->assertStringContainsString('stats.needs_reminder', $view);
        $this->assertStringContainsString('Would receive SOP/Policy reminders', $view);
    }
}
