<?php

namespace Tests\Unit;

use App\Support\CustomerCdIsolationSummary;
use PHPUnit\Framework\TestCase;

class CustomerCdIsolationSummaryTest extends TestCase
{
    public function test_enrich_pharmacies_attaches_cd_counts(): void
    {
        $enriched = CustomerCdIsolationSummary::enrichPharmacies(
            [
                (object) ['id' => 10, 'pharmacy_name' => 'Wilsons'],
                ['id' => 11, 'pharmacy_name' => 'New Pharmacy'],
            ],
            [10 => 4, 11 => 0],
            [
                10 => ['activity_count' => 12, 'last_activity_at' => '2026-08-17 09:54:00'],
            ]
        );

        $this->assertSame(10, $enriched[0]['id']);
        $this->assertSame(4, $enriched[0]['cd_register_count']);
        $this->assertSame(12, $enriched[0]['cd_activity_count']);
        $this->assertSame('2026-08-17 09:54:00', $enriched[0]['last_cd_activity_at']);
        $this->assertSame(0, $enriched[1]['cd_register_count']);
        $this->assertSame(0, $enriched[1]['cd_activity_count']);
        $this->assertNull($enriched[1]['last_cd_activity_at']);
    }

    public function test_investigation_note_includes_customer_id(): void
    {
        $note = CustomerCdIsolationSummary::investigationNote(42);

        $this->assertStringContainsString('created_by = 42', $note);
        $this->assertStringContainsString('Wilsons', $note);
    }
}
