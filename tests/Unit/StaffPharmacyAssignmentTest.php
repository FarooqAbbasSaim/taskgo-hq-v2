<?php

namespace Tests\Unit;

use App\Support\StaffPharmacyAssignment;
use PHPUnit\Framework\TestCase;

class StaffPharmacyAssignmentTest extends TestCase
{
    public function test_relief_with_explicit_assignments_lists_those_pharmacies(): void
    {
        $result = StaffPharmacyAssignment::forReliefPharmacist(
            [
                (object) ['pharmacy_id' => '10', 'pharmacy_name' => 'Kilkenny'],
                (object) ['pharmacy_id' => 11, 'pharmacy_name' => 'New Ross'],
            ],
            [10, 11, 12],
            [10 => 'Kilkenny', 11 => 'New Ross', 12 => 'Waterford']
        );

        $this->assertSame([10, 11], $result['pharmacy_ids']);
        $this->assertSame(['Kilkenny', 'New Ross'], $result['pharmacy_names']);
        $this->assertFalse($result['uses_crm_relief_fallback']);
        $this->assertStringContainsString('Kilkenny', $result['pharmacies_display']);
    }

    public function test_relief_with_empty_pivot_uses_crm_all_org_fallback(): void
    {
        $result = StaffPharmacyAssignment::forReliefPharmacist(
            [],
            [10, 11, 12],
            [10 => 'Kilkenny', 11 => 'New Ross', 12 => 'Waterford']
        );

        $this->assertSame([10, 11, 12], $result['pharmacy_ids']);
        $this->assertSame(['Kilkenny', 'New Ross', 'Waterford'], $result['pharmacy_names']);
        $this->assertTrue($result['uses_crm_relief_fallback']);
        $this->assertStringContainsString('CRM fallback', $result['pharmacies_display']);
    }
}
