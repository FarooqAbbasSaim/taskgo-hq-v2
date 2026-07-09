<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\PredefinedSop;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

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
                'is_active' => false,
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

    public function toggleActive(Request $request, int $id)
    {
        $item = $this->findCatalogItem($id);
        $item->is_active = $request->boolean('is_active');
        $item->save();

        return response()->json([
            'success' => true,
            'message' => $item->is_active ? 'SOP catalog item activated.' : 'SOP catalog item deactivated.',
            'data' => $this->serializeCatalogItem($item),
        ]);
    }

    public function destroy(int $id)
    {
        $item = $this->findCatalogItem($id);

        if ($this->catalogItemHasImports($item->id)) {
            return response()->json([
                'success' => false,
                'message' => 'This catalog SOP has already been imported by a pharmacy and cannot be deleted.',
            ], 422);
        }

        $this->deleteLocalDocument($item->document_path);
        $item->delete();

        return response()->json([
            'success' => true,
            'message' => 'SOP catalog item deleted.',
        ]);
    }

    private function findCatalogItem(int $id): PredefinedSop
    {
        return PredefinedSop::hqCatalog()->findOrFail($id);
    }

    private function catalogItemHasImports(int $id): bool
    {
        if (! DB::getSchemaBuilder()->hasTable('sops')) {
            return false;
        }

        if (! DB::getSchemaBuilder()->hasColumn('sops', 'predefined_sop_id')) {
            return false;
        }

        return DB::table('sops')->where('predefined_sop_id', $id)->exists();
    }

    private function serializeCatalogItem(PredefinedSop $item): array
    {
        return [
            'id' => $item->id,
            'title' => $item->title,
            'original_file_name' => $item->original_file_name,
            'is_active' => (bool) $item->is_active,
            'added_on' => optional($item->created_at)->format('d-m-Y'),
            'has_imports' => $this->catalogItemHasImports($item->id),
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

    private function deleteLocalDocument(?string $path): void
    {
        if (! $path) {
            return;
        }

        $absolutePath = rtrim(config('taskgo.crm_public_path'), '/') . '/' . ltrim($path, '/');
        if (is_file($absolutePath)) {
            @unlink($absolutePath);
        }
    }
}
