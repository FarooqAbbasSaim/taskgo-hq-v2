<?php

namespace App\Services;

use RuntimeException;

class CcsFormTemplateCatalog
{
    /**
     * @return list<array{key:string,title:string,question_count:int}>
     */
    public function list(): array
    {
        $forms = $this->allForms();
        $items = [];

        foreach ($forms as $key => $form) {
            if (! is_string($key) || ! is_array($form)) {
                continue;
            }

            $items[] = [
                'key' => $key,
                'title' => (string) ($form['title'] ?? $this->humanizeKey($key)),
                'question_count' => count($form['questions'] ?? []),
            ];
        }

        usort($items, fn (array $a, array $b) => strcasecmp($a['title'], $b['title']));

        return $items;
    }

    /**
     * @return array{key:string,title:string,questions:list<array<string,mixed>>,blockers:array<string,mixed>}
     */
    public function get(string $key): array
    {
        $forms = $this->allForms();
        if (! isset($forms[$key]) || ! is_array($forms[$key])) {
            throw new RuntimeException('CCS form template not found.');
        }

        $form = $forms[$key];

        return [
            'key' => $key,
            'title' => (string) ($form['title'] ?? $this->humanizeKey($key)),
            'questions' => array_values(array_filter(
                $form['questions'] ?? [],
                fn ($q) => is_array($q)
            )),
            'blockers' => is_array($form['blockers'] ?? null) ? $form['blockers'] : [],
        ];
    }

    /**
     * @return array<string, array<string, mixed>>
     */
    public function allForms(): array
    {
        $path = $this->formsConfigPath();
        if (! is_file($path)) {
            throw new RuntimeException('CCS appointment forms config not found at: ' . $path);
        }

        $forms = require $path;
        if (! is_array($forms)) {
            throw new RuntimeException('CCS appointment forms config is invalid.');
        }

        return $forms;
    }

    public function formsConfigPath(): string
    {
        $configured = trim((string) config('taskgo.crm_ccs_forms_path', ''));
        if ($configured !== '') {
            return $configured;
        }

        $crmRoot = rtrim((string) config('taskgo.crm_path', ''), '/');
        if ($crmRoot === '') {
            $publicPath = rtrim((string) config('taskgo.crm_public_path', ''), '/');
            $crmRoot = $publicPath !== '' ? dirname($publicPath) : dirname(base_path()) . '/taskgo-crm';
        }

        return $crmRoot . '/config/ccs-appointment-forms.php';
    }

    private function humanizeKey(string $key): string
    {
        return ucwords(str_replace('_', ' ', $key));
    }
}
