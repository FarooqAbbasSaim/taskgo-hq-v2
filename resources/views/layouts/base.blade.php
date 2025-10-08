<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <title>{{ $title }}</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="Admin Dashboard for Taskgo HQ Users">
    <meta name="keywords" content="taskgo, hq, dashboard, ai, dashboard, ai dashboards">
    <meta name="author" content="Adam Esa">

    <!-- App favicon -->
    <link rel="shortcut icon" href="/images/favicon.ico?v={{ time() }}">
    <link rel="icon" type="image/png" href="/images/favicon.png?v={{ time() }}">
    <link rel="icon" type="image/x-icon" href="/images/favicon.ico?v={{ time() }}">
    <link rel="apple-touch-icon" href="/images/favicon.png?v={{ time() }}">

    @include('layouts.shared/head-css')
</head>

<body>

    @yield('content')

    @include('layouts.shared/footer-scripts')

</body>

</html>
