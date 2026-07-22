<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\PredefinedSop;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Symfony\Component\HttpFoundation\StreamedResponse;

class SopCatalogController extends Controller
{
    public function index()
    {
        return view('admin.sop-catalog', [
            'title' => 'SOP Catalog',
        ]);
    }

    public function list()
    {
        $items = PredefinedSop::hqCatalog()
            ->orderByDesc('created_at')
            ->get()
            ->map(fn (PredefinedSop $item) => $this->serializeCatalogItem($item));

        return response()->json([
            'success' => true,
            'data' => $items,
        ]);
    }

    public function store(Request $request)
    {
        $request->validate([
            'sop_documents' => ['required', 'array', 'min:1'],
            'sop_documents.*' => ['file', 'mimes:doc,docx', 'max:20480'],
        ]);

        $created = [];

        foreach ($request->file('sop_documents', []) as $file) {
            $stored = $this->storeCatalogDocument($file);
            $title = $this->titleFromFilename($file->getClientOriginalName());

            $item = PredefinedSop::create([
                'customer_id' => null,
                'title' => $title,
                'description' => null,
                'document_path' => $stored['path'],
                'original_file_name' => $stored['name'],
                'mime_type' => $stored['mime_type'],
                'version' => '1.0',
                'effective_date' => now()->toDateString(),
                'sort_order' => 0,
                'is_active' => true,
            ]);

            $created[] = $this->serializeCatalogItem($item);
        }

        return response()->json([
            'success' => true,
            'message' => count($created) === 1
                ? 'SOP document uploaded successfully.'
                : count($created) . ' SOP documents uploaded successfully.',
            'data' => $created,
        ]);
    }

    public function viewDocument(int $id): StreamedResponse
    {
        return $this->streamCatalogDocument($id, false);
    }

    public function downloadDocument(int $id): StreamedResponse
    {
        return $this->streamCatalogDocument($id, true);
    }

    public function destroy(int $id)
    {
        $item = $this->findCatalogItem($id);

        DB::transaction(function () use ($item) {
            // Pharmacy imports copy the file locally; clear the catalog link only.
            if (
                DB::getSchemaBuilder()->hasTable('sops')
                && DB::getSchemaBuilder()->hasColumn('sops', 'predefined_sop_id')
            ) {
                DB::table('sops')
                    ->where('predefined_sop_id', $item->id)
                    ->update(['predefined_sop_id' => null]);
            }

            $this->deleteLocalDocument($item->document_path);
            $item->delete();
        });

        return response()->json([
            'success' => true,
            'message' => 'SOP catalog item deleted. Pharmacy copies are unchanged.',
        ]);
    }

    private function findCatalogItem(int $id): PredefinedSop
    {
        return PredefinedSop::hqCatalog()->findOrFail($id);
    }

    private function streamCatalogDocument(int $id, bool $asDownload): StreamedResponse
    {
        $item = $this->findCatalogItem($id);
        $absolutePath = $this->absoluteDocumentPath($item->document_path);

        if (! $item->document_path || ! is_file($absolutePath)) {
            abort(404, 'Catalog document file is missing.');
        }

        $downloadName = $item->original_file_name
            ?: basename((string) $item->document_path)
            ?: 'sop-document.docx';

        $mime = $item->mime_type ?: 'application/octet-stream';
        $extension = strtolower(pathinfo($downloadName, PATHINFO_EXTENSION));
        if ($extension === 'doc') {
            $mime = 'application/msword';
        } elseif ($extension === 'docx') {
            $mime = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document';
        }

        return response()->streamDownload(function () use ($absolutePath) {
            $handle = fopen($absolutePath, 'rb');
            if ($handle === false) {
                return;
            }

            while (! feof($handle)) {
                echo fread($handle, 8192);
            }

            fclose($handle);
        }, $downloadName, [
            'Content-Type' => $mime,
            'Content-Disposition' => ($asDownload ? 'attachment' : 'inline') . '; filename="' . str_replace('"', '', $downloadName) . '"',
            'Cache-Control' => 'no-store, no-cache, must-revalidate, max-age=0',
            'Pragma' => 'no-cache',
        ], $asDownload ? 'attachment' : 'inline');
    }

    private function serializeCatalogItem(PredefinedSop $item): array
    {
        return [
            'id' => $item->id,
            'title' => $item->title,
            'original_file_name' => $item->original_file_name,
            'is_active' => (bool) $item->is_active,
            'is_imported' => (bool) $item->is_imported,
            'added_on' => optional($item->created_at)->format('d-m-Y'),
            'view_url' => url('/api/sop-catalog/' . $item->id . '/document'),
            'download_url' => url('/api/sop-catalog/' . $item->id . '/download'),
        ];
    }

    private function titleFromFilename(string $filename): string
    {
        $name = pathinfo($filename, PATHINFO_FILENAME);
        $name = str_replace(['_', '-'], ' ', $name);
        $name = preg_replace('/\s+/', ' ', trim($name)) ?? '';

        return $name !== '' ? $name : 'SOP Document';
    }

    private function storeCatalogDocument($file): array
    {
        $directory = rtrim(config('taskgo.crm_public_path'), '/') . '/images/hq-sop-catalog';

        if (! is_dir($directory) && ! mkdir($directory, 0775, true) && ! is_dir($directory)) {
            throw new \RuntimeException('Could not create HQ SOP catalog storage directory.');
        }

        $extension = strtolower($file->getClientOriginalExtension() ?: 'docx');
        $name = time() . '-' . mt_rand(1000, 9999) . '.' . $extension;
        $originalName = $file->getClientOriginalName();
        $mimeType = $file->getClientMimeType();
        $file->move($directory, $name);

        return [
            'path' => 'images/hq-sop-catalog/' . $name,
            'name' => $originalName,
            'mime_type' => $mimeType,
        ];
    }

    private function absoluteDocumentPath(?string $path): string
    {
        return rtrim(config('taskgo.crm_public_path'), '/') . '/' . ltrim((string) $path, '/');
    }

    private function deleteLocalDocument(?string $path): void
    {
        if (! $path) {
            return;
        }

        $absolutePath = $this->absoluteDocumentPath($path);
        if (is_file($absolutePath)) {
            @unlink($absolutePath);
        }
    }
}
