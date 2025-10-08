<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <title>{{ $title }}</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="Admin Dashboard for Taskgo HQ Users">
    <meta name="keywords" content="taskgo, hq, dashboard, ai, dashboard, ai dashboards">
    <meta name="author" content="Adam Esa">
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <!-- App favicon -->
    <link rel="shortcut icon" href="/images/favicon.ico?v={{ time() }}">
    <link rel="icon" type="image/png" href="/images/favicon.png?v={{ time() }}">
    <link rel="icon" type="image/x-icon" href="/images/favicon.ico?v={{ time() }}">
    <link rel="apple-touch-icon" href="/images/favicon.png?v={{ time() }}">

    @yield('styles')

    @include('layouts.shared/head-css')
</head>

<body>
    <!-- Begin page -->
    <div class="wrapper">

        @include('layouts.shared/menu')

        <!-- ============================================================== -->
        <!-- Start Main Content -->
        <!-- ============================================================== -->
        <div class="content-page">
            <div class="container-fluid">

                @yield('content')
            </div>

            @include('layouts.shared/footer')

        </div>
    </div>

    @include('layouts.shared/customizer')

    @include('layouts.shared/footer-scripts')
</body>

</html>
