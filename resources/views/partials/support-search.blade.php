@if(config('features.support_search', true) && auth('hq')->check())
<div class="app-search d-none d-xl-flex me-xl-2 position-relative">
    <input type="search" class="form-control topbar-search" id="globalSupportSearch"
           placeholder="Search customers, pharmacies, patients, orders..." autocomplete="off">
    <i data-lucide="search" class="app-search-icon text-muted"></i>
    <div class="dropdown-menu dropdown-menu-lg w-100 shadow show mt-1" id="globalSupportSearchResults" style="display:none; max-height: 360px; overflow-y: auto;"></div>
</div>
<script>
document.addEventListener('DOMContentLoaded', function () {
    const resultsEl = document.getElementById('globalSupportSearchResults');
    if (resultsEl) {
        const observer = new MutationObserver(function () {
            resultsEl.style.display = resultsEl.classList.contains('show') && resultsEl.innerHTML ? 'block' : 'none';
        });
        observer.observe(resultsEl, { attributes: true, childList: true, subtree: true });
    }
});
</script>
@endif
