<?php

namespace Tests\Unit;

use App\Services\PlatformInsightsService;
use Tests\TestCase;

class PlatformInsightsMvpMetricsTest extends TestCase
{
    public function test_service_exposes_mvp_and_dispensing_reason_helpers(): void
    {
        $service = file_get_contents(app_path('Services/PlatformInsightsService.php'));

        $this->assertStringContainsString('function mvpOptIns', $service);
        $this->assertStringContainsString('function mvpParticipants', $service);
        $this->assertStringContainsString('function topDispensingErrorReasons', $service);
        $this->assertStringContainsString('function recentWindowMetrics', $service);
        $this->assertStringContainsString('function bookingsByService', $service);
        $this->assertStringContainsString('function formatRecentCopyText', $service);
        $this->assertStringContainsString('function formatAllTimeCopyText', $service);
        $this->assertStringContainsString('function resolvePeriod', $service);
        $this->assertStringContainsString('function pharmacyOptions', $service);
        $this->assertStringContainsString('function organizationOptions', $service);
        $this->assertStringContainsString('function pharmacyIdsForOrganization', $service);
        $this->assertStringContainsString("'mvp_opt_ins'", $service);
        $this->assertStringContainsString("'mvp_participants'", $service);
        $this->assertStringContainsString("'dispensing_error_top_reasons'", $service);
        $this->assertStringContainsString("'recent'", $service);
        $this->assertStringContainsString("'attended'", $service);
        $this->assertStringContainsString("whereIn('appointments.status', ['claimed', 'attended'])", $service);
        $this->assertStringContainsString("'copy_text_recent'", $service);
        $this->assertStringContainsString("'copy_text_all_time'", $service);
        $this->assertStringContainsString("participant_type', 'teacher'", $service);
        $this->assertStringContainsString("participant_type', 'student_18_plus'", $service);
        $this->assertStringContainsString('mvp_corporate_employee_forms', $service);
        $this->assertStringContainsString('vaccination_outcome', $service);
        $this->assertStringContainsString('15d', $service);
        $this->assertStringContainsString("'all' => 'All time'", $service);
        $this->assertStringContainsString('custom', $service);
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
        $this->assertStringContainsString('Participants vaccinated', $view);
        $this->assertStringContainsString('Attended only:', $view);
        $this->assertStringContainsString("appointments']['attended']", $view);
        $this->assertStringContainsString('Offsite vaccine portal registrations', $view);
        $this->assertStringContainsString("mvp_registrations']['total']", $view);
        $this->assertStringContainsString('platformInsightsCopyRecentBtn', $view);
        $this->assertStringContainsString('platformInsightsCopyAllTimeBtn', $view);
        $this->assertStringContainsString('Copy period as text', $view);
        $this->assertStringContainsString('Copy all-time as text', $view);
        $this->assertStringContainsString('insightsOrganization', $view);
        $this->assertStringContainsString('organization_id', $view);
        $this->assertStringContainsString('data-organization-id', $view);
        $this->assertStringContainsString('filterPharmaciesByOrganization', $view);
        $this->assertStringContainsString('pharmacy_ids[]', $view);
        $this->assertStringContainsString('insights-pharmacy-check', $view);
        $this->assertStringContainsString('insightsPharmacySelectAll', $view);
        $this->assertStringContainsString('insightsPharmacyClear', $view);
        $this->assertStringContainsString('insightsPeriod', $view);
        $this->assertStringContainsString('insights-custom-dates', $view);
        $this->assertStringContainsString('by_service', $view);
    }

    public function test_normalize_pharmacy_ids_supports_multi_and_legacy_single(): void
    {
        $service = new PlatformInsightsService();

        $this->assertSame([12, 34], $service->normalizePharmacyIds([
            'pharmacy_ids' => ['12', 34, 0, 'x'],
        ]));
        $this->assertSame([9], $service->normalizePharmacyIds([
            'pharmacy_id' => 9,
        ]));
        $this->assertSame([], $service->normalizePharmacyIds([]));
    }

    public function test_resolve_period_presets_and_custom(): void
    {
        $service = new PlatformInsightsService();

        $twoMonths = $service->resolvePeriod(['period' => '2m']);
        $this->assertSame('2m', $twoMonths['period']);
        $this->assertSame('Last 2 months', $twoMonths['period_label']);

        $allTime = $service->resolvePeriod(['period' => 'all']);
        $this->assertSame('all', $allTime['period']);
        $this->assertSame('All time', $allTime['period_label']);
        $this->assertSame('2000-01-01', $allTime['from_input']);

        $custom = $service->resolvePeriod([
            'period' => 'custom',
            'from' => '2026-08-01',
            'to' => '2026-09-15',
        ]);
        $this->assertSame('custom', $custom['period']);
        $this->assertSame('2026-08-01', $custom['from_input']);
        $this->assertSame('2026-09-15', $custom['to_input']);
    }

    public function test_format_copy_text_splits_period_and_all_time(): void
    {
        $service = new PlatformInsightsService();
        $snapshot = [
            'generated_at' => 'Oct 16, 2026 12:00 PM',
            'recent' => [
                'period' => '2m',
                'period_label' => 'Last 2 months',
                'from_label' => 'Aug 16, 2026',
                'to_label' => 'Oct 16, 2026',
                'pharmacy_name' => '2 pharmacies selected',
                'pharmacy_names' => ['Drinagh Pharmacy, Dunmanway', 'Drinagh Pharmacy, Bantry'],
                'pharmacy_ids' => [213, 215],
                'appointments' => [
                    'booked' => 10,
                    'attended' => 7,
                    'non_cancelled' => 12,
                    'total' => 15,
                    'note' => 'Combined total.',
                ],
                'mvp_opt_ins' => ['schools' => 3, 'corporates' => 2, 'total' => 5],
                'mvp_registrations' => [
                    'schools' => 20,
                    'corporates' => 8,
                    'total' => 28,
                    'note' => 'Offsite registrations.',
                ],
                'vaccinated' => [
                    'schools' => 1,
                    'corporates' => 4,
                    'total' => 5,
                    'note' => 'Vaccinated in window.',
                ],
                'by_service' => [
                    'title' => 'Drinagh Pharmacy, Dunmanway — by service',
                    'total' => 2,
                    'rows' => [
                        ['name' => 'Flu Vaccination', 'count' => 2],
                    ],
                ],
            ],
            'ccs_bookings_total' => 100,
            'dispensing_error_logs_total' => 5,
            'dispensing_error_top_reasons' => [],
            'whatsapp' => ['total' => 1, 'breakdown' => []],
            'mvp_opt_ins' => ['schools' => 10, 'corporates' => 4, 'total' => 14],
            'mvp_participants' => [
                'children' => 1,
                'teachers' => 0,
                'students' => 0,
                'employees' => 2,
                'total' => 3,
            ],
            'top_medications' => [],
            'top_services' => [],
        ];

        $recent = $service->formatRecentCopyText($snapshot);
        $allTime = $service->formatAllTimeCopyText($snapshot);

        $this->assertStringContainsString('Period stats', $recent);
        $this->assertStringContainsString('Last 2 months', $recent);
        $this->assertStringContainsString('2 pharmacies selected', $recent);
        $this->assertStringContainsString('Drinagh Pharmacy, Bantry', $recent);
        $this->assertStringContainsString('Booked (excl. cancelled & waitlist): 10', $recent);
        $this->assertStringContainsString('Attended only (claimed + legacy attended): 7', $recent);
        $this->assertStringContainsString('Offsite vaccine portal registrations', $recent);
        $this->assertStringContainsString('Total: 28', $recent);
        $this->assertStringContainsString('Flu Vaccination', $recent);
        $this->assertStringNotContainsString('All-time snapshot', $recent);

        $this->assertStringContainsString('All-time snapshot', $allTime);
        $this->assertStringContainsString('CCS services booked: 100', $allTime);
        $this->assertStringNotContainsString('Period stats', $allTime);
    }
}
