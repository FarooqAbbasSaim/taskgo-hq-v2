<?php

namespace App\Support;

class SupportMessageBody
{
    private const ALLOWED_TAGS = '<p><br><br/><strong><b><em><i><u><a><ul><ol><li><span>';

    public static function render(?string $body): string
    {
        $trimmed = trim((string) $body);
        if ($trimmed === '') {
            return '';
        }

        if ($trimmed !== strip_tags($trimmed)) {
            $safe = strip_tags($trimmed, self::ALLOWED_TAGS);
            // Drop event handlers / javascript: URLs from anchors while keeping href.
            $safe = preg_replace('/\son\w+="[^"]*"/i', '', $safe) ?? $safe;
            $safe = preg_replace("/\son\w+='[^']*'/i", '', $safe) ?? $safe;
            $safe = preg_replace('/href\s*=\s*([\'"])\s*javascript:[^\'"]*\1/i', 'href="#"', $safe) ?? $safe;

            return $safe;
        }

        return nl2br(e($trimmed), false);
    }
}
