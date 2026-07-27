<?php

namespace App\Support;

use Illuminate\Support\Collection;

/**
 * Resolve pharmacy assignment display for HQ staff investigation,
 * matching CRM access rules where relevant.
 */
class StaffPharmacyAssignment
{
    /**
     * Relief pharmacists: explicit relief_pharmacist_pharmacies rows, or CRM fallback
     * to all organisation pharmacies when the pivot is empty.
     *
     * @param  iterable<int, object|array>  $explicitAssignments
     * @param  array<int, int|string>  $orgPharmacyIds
     * @param  Collection<int|string, string>|array<int|string, string>  $pharmacyNameMap
     * @return array{
     *     pharmacy_ids: array<int, int>,
     *     pharmacy_names: array<int, string>,
     *     pharmacies_display: string,
     *     uses_crm_relief_fallback: bool
     * }
     */
    public static function forReliefPharmacist($explicitAssignments, array $orgPharmacyIds, $pharmacyNameMap): array
    {
        $assigned = collect($explicitAssignments);
        $ids = $assigned->pluck('pharmacy_id')->map(fn ($id) => (int) $id)->filter()->values()->all();
        $names = $assigned->pluck('pharmacy_name')->filter()->values()->all();

        if ($ids !== []) {
            return [
                'pharmacy_ids' => $ids,
                'pharmacy_names' => array_values($names),
                'pharmacies_display' => implode(', ', $names),
                'uses_crm_relief_fallback' => false,
            ];
        }

        // Match CRM getReliefPharmacistPharmacyIds(): no pivot → all org pharmacies.
        $ids = array_values(array_unique(array_filter(array_map('intval', $orgPharmacyIds))));
        $map = collect($pharmacyNameMap);
        $names = collect($ids)
            ->map(function ($id) use ($map) {
                return $map->get($id) ?? $map->get((string) $id);
            })
            ->filter()
            ->values()
            ->all();

        if ($names === []) {
            return [
                'pharmacy_ids' => [],
                'pharmacy_names' => [],
                'pharmacies_display' => 'Not Assigned',
                'uses_crm_relief_fallback' => false,
            ];
        }

        return [
            'pharmacy_ids' => $ids,
            'pharmacy_names' => $names,
            'pharmacies_display' => 'All org pharmacies (CRM fallback — no explicit relief assignment)',
            'uses_crm_relief_fallback' => true,
        ];
    }
}
