<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\View;

class RoutingController extends Controller
{

    public function index(Request $request)
    {
        $response = response()->view('index');
        $response->headers->set('Cache-Control', 'no-cache, no-store, must-revalidate');
        $response->headers->set('Pragma', 'no-cache');
        $response->headers->set('Expires', '0');
        
        return $response;
    }

    public function root(Request $request, $first)
    {
        // Check if the view exists
        if (View::exists($first)) {
            return view($first);
        }
        
        // If view doesn't exist, return 404
        abort(404);
    }

    public function secondLevel(Request $request, $first, $second)
    {
        $viewName = $first . '.' . $second;
        
        // Check if the view exists
        if (View::exists($viewName)) {
            return view($viewName);
        }
        
        // If view doesn't exist, return 404
        abort(404);
    }

    public function thirdLevel(Request $request, $first, $second, $third)
    {
        $viewName = $first . '.' . $second . '.' . $third;
        
        // Check if the view exists
        if (View::exists($viewName)) {
            return view($viewName);
        }
        
        // If view doesn't exist, return 404
        abort(404);
    }
}
