<?php

namespace Tests\Unit;

use Tests\TestCase;

class PlatformInsightsMvpMetricsTest extends TestCase
{
    public function test_service_exposes_mvp_and_dispensing_reason_helpers(): void
    {
        $service = file_get_contents(app_path('Services/PlatformInsightsService.php'));

        $this->assertStringContainsString('function mvpOptIns', $service);
        $this->assertStringContainsString('function mvpParticipants', $service);
        $this->assertStringContainsString('function topDispensingErrorReasons', $service);
        $this->assertStringContainsString("'mvp_opt_ins'", $service);
        $this->assertStringContainsString("'mvp_participants'", $service);
        $this->assertStringContainsString("'dispensing_error_top_reasons'", $service);
        $this->assertStringContainsString("participant_type', 'teacher'", $service);
        $this->assertStringContainsString("participant_type', 'student_18_plus'", $service);
        $this->assertStringContainsString('mvp_corporate_employee_forms', $service);
    }

    public function test_platform_insights_view_shows_mvp_and_top_reasons(): void
    {
        $view = file_get_contents(resource_path('views/admin/platform-insights.blade.php'));

        $this->assertStringContainsString('MVP opt-ins (all time)', $view);
        $this->assertStringContainsString('MVP registered participants (all time)', $view);
        $this->assertStringContainsString('Top 3 reasons (dropdown type)', $view);
        $this->assertStringContainsString("mvp_opt_ins']['schools']", $view);
        $this->assertStringContainsString("mvp_opt_ins']['corporates']", $view);
        $this->assertStringContainsString("mvp_participants']['children']", $view);
        $this->assertStringContainsString("mvp_participants']['teachers']", $view);
        $this->assertStringContainsString("mvp_participants']['students']", $view);
        $this->assertStringContainsString("mvp_participants']['employees']", $view);
        $this->assertStringContainsString('dispensing_error_top_reasons', $view);
    }
}
