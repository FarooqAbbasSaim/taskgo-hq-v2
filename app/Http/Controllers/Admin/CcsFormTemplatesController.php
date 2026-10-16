<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Services\CcsFormTemplateCatalog;
use Barryvdh\DomPDF\Facade\Pdf;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use RuntimeException;
use Symfony\Component\HttpFoundation\StreamedResponse;
use ZipArchive;

class CcsFormTemplatesController extends Controller
{
    public function index(CcsFormTemplateCatalog $catalog)
    {
        abort_unless((bool) config('features.ccs_form_templates', false), 404);

        try {
            $forms = $catalog->list();
            $error = null;
        } catch (RuntimeException $e) {
            $forms = [];
            $error = $e->getMessage();
        }

        return view('admin.ccs-form-templates', [
            'title' => 'CCS Form Templates',
            'forms' => $forms,
            'error' => $error,
        ]);
    }

    public function download(string $key, CcsFormTemplateCatalog $catalog): Response|StreamedResponse
    {
        abort_unless((bool) config('features.ccs_form_templates', false), 404);

        try {
            $form = $catalog->get($key);
        } catch (RuntimeException $e) {
            abort(404, $e->getMessage());
        }

        return $this->pdfDownload($form);
    }

    public function downloadSelected(Request $request, CcsFormTemplateCatalog $catalog)
    {
        abort_unless((bool) config('features.ccs_form_templates', false), 404);

        $validated = $request->validate([
            'keys' => ['required', 'array', 'min:1'],
            'keys.*' => ['required', 'string', 'max:100'],
        ]);

        $keys = array_values(array_unique(array_map(
            fn ($key) => trim((string) $key),
            $validated['keys']
        )));

        $available = array_column($catalog->list(), 'key');
        $keys = array_values(array_intersect($keys, $available));
        if ($keys === []) {
            return redirect()
                ->route('admin.ccs-form-templates')
                ->with('error', 'No valid CCS form templates selected.');
        }

        if (count($keys) === 1) {
            return $this->pdfDownload($catalog->get($keys[0]));
        }

        if (! class_exists(ZipArchive::class)) {
            abort(500, 'ZIP support is not available on this server.');
        }

        $zipPath = tempnam(sys_get_temp_dir(), 'ccs-forms-');
        if ($zipPath === false) {
            abort(500, 'Unable to create temporary zip file.');
        }

        $zip = new ZipArchive();
        if ($zip->open($zipPath, ZipArchive::OVERWRITE) !== true) {
            @unlink($zipPath);
            abort(500, 'Unable to open zip archive.');
        }

        $generatedAt = now()->timezone(config('app.timezone', 'UTC'));
        foreach ($keys as $key) {
            $form = $catalog->get($key);
            $pdfBinary = Pdf::loadView('pdfs.ccs-form-template', [
                'form' => $form,
                'generatedAt' => $generatedAt,
            ])->setPaper('a4')->output();

            $zip->addFromString('ccs-form-template-' . $key . '.pdf', $pdfBinary);
        }
        $zip->close();

        return response()->download($zipPath, 'ccs-form-templates.zip')->deleteFileAfterSend(true);
    }

    /**
     * @param  array{key:string,title:string,questions:list<array<string,mixed>>,blockers:array<string,mixed>}  $form
     */
    private function pdfDownload(array $form): Response|StreamedResponse
    {
        $pdf = Pdf::loadView('pdfs.ccs-form-template', [
            'form' => $form,
            'generatedAt' => now()->timezone(config('app.timezone', 'UTC')),
        ])->setPaper('a4');

        return $pdf->download('ccs-form-template-' . $form['key'] . '.pdf');
    }
}
