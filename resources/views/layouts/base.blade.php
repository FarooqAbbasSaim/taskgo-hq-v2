<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <title>{{ $title }} | Simple - Responsive Bootstrap 5 Admin Dashboard</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description"
        content="admin dashboard template on Themeforest. Perfect for building CRM, CMS, project management tools, and custom web apps with clean UI, responsive design, and powerful features.">
    <meta name="keywords"
        content="Simple, Admin dashboard, Themeforest, HTML template,Shadcn, Bootstrap admin, CRM template, CMS template, responsive admin, web app UI, admin theme, best admin template">
    <meta name="author" content="Coderthemes">

    <!-- App favicon -->
    <link rel="shortcut icon" href="/images/favicon.ico">

    @include('layouts.shared/head-css')
</head>

<body>

    @yield('content')

    @include('layouts.shared/footer-scripts')

</body>

</html>
