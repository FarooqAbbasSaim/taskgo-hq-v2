<?php

namespace App\Support;

/**
 * Formats CRM pharmacy rows with CD Register ownership stats for HQ investigation.
 */
class CustomerCdIsolationSummary
{
    /**
     * @param  iterable<int, object|array>  $pharmacies
     * @param  array<int|string, int>  $registerCounts  pharmacy_id => count
     * @param  array<int|string, array{activity_count?: int|string, last_activity_at?: string|null}>  $activityByPharmacy
     * @return array<int, array<string, mixed>>
     */
    public static function enrichPharmacies(
        iterable $pharmacies,
        array $registerCounts = [],
        array $activityByPharmacy = []
    ): array {
        return collect($pharmacies)->map(function ($pharmacy) use ($registerCounts, $activityByPharmacy) {
            $row = is_array($pharmacy) ? $pharmacy : (array) $pharmacy;
            $id = (int) ($row['id'] ?? 0);
            $activity = $activityByPharmacy[$id] ?? $activityByPharmacy[(string) $id] ?? [];

            if (is_object($activity)) {
                $activity = (array) $activity;
            }

            return array_merge($row, [
                'id' => $id,
                'cd_register_count' => (int) ($registerCounts[$id] ?? $registerCounts[(string) $id] ?? 0),
                'cd_activity_count' => (int) ($activity['activity_count'] ?? 0),
                'last_cd_activity_at' => $activity['last_activity_at'] ?? null,
            ]);
        })->values()->all();
    }

    public static function investigationNote(int $customerId): string
    {
        return 'CD Register Full Log History is scoped to pharmacies where created_by = '
            . $customerId
            . '. If an unexpected pharmacy (e.g. Wilsons / Tobin’s) appears here, this login owns that org’s CD data — often from changing the email on the wrong super-admin during onboarding.';
    }
}
