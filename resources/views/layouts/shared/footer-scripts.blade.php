@vite(['resources/js/app.js'])

@if(auth('hq')->check())
<script src="/js/support-tools.js?v={{ time() }}"></script>
@endif

@yield('scripts')