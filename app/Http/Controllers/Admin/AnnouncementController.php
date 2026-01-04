<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Announcement;
use Illuminate\Http\Request;

class AnnouncementController extends Controller
{
    /**
     * Display the announcement management page
     */
    public function index()
    {
        $announcement = Announcement::getGlobal();
        
        return view('announcements', compact('announcement'));
    }

    /**
     * Update the global announcement
     */
    public function update(Request $request)
    {
        $request->validate([
            'enabled' => 'boolean',
            'content' => 'nullable|string'
        ]);

        $announcement = Announcement::getGlobal();
        
        // Clean the content - remove inline styles, keep only semantic tags
        $content = $request->input('content');
        if ($content) {
            // Remove style attributes
            $content = preg_replace('/\s*style\s*=\s*["\'][^"\']*["\']/i', '', $content);
            // Remove other unwanted attributes except class
            $content = preg_replace('/\s*(?!class\s*=)[a-z-]+\s*=\s*["\'][^"\']*["\']/i', '', $content);
            // Remove empty tags
            $content = preg_replace('/<(\w+)[^>]*>\s*<\/\1>/i', '', $content);
            // Trim whitespace
            $content = trim($content);
        }
        
        $announcement->update([
            'enabled' => $request->boolean('enabled'),
            'content' => $content
        ]);

        return response()->json([
            'success' => true,
            'message' => 'Announcement updated successfully',
            'content' => $announcement->content // Return cleaned content
        ]);
    }

    /**
     * Get the global announcement (API endpoint for taskgo-rx)
     */
    public function getAnnouncement()
    {
        $announcement = Announcement::getGlobal();

        return response()->json([
            'enabled' => $announcement->enabled,
            'content' => $announcement->content
        ]);
    }
}
