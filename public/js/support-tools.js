window.SupportTools = {
    copyText(text, successMessage) {
        if (!text) return;
        const done = () => {
            if (typeof successMessage === 'string' && window.bootstrap) {
                // noop — callers show their own toast
            }
        };
        if (navigator.clipboard && window.isSecureContext) {
            navigator.clipboard.writeText(text).then(done).catch(() => this.fallbackCopy(text));
        } else {
            this.fallbackCopy(text);
        }
    },

    fallbackCopy(text) {
        const input = document.createElement('textarea');
        input.value = text;
        document.body.appendChild(input);
        input.select();
        document.execCommand('copy');
        document.body.removeChild(input);
    },

    escapeHtml(value) {
        return String(value ?? '')
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;');
    },

    copyButton(value, label) {
        const safe = this.escapeHtml(value || '');
        return `<button type="button" class="btn btn-sm btn-outline-secondary py-0 px-1 ms-1" title="Copy ${label}" onclick="SupportTools.copyText('${safe.replace(/'/g, "\\'")}')"><i class="ti ti-copy"></i></button>`;
    },
};

document.addEventListener('DOMContentLoaded', function () {
    const input = document.getElementById('globalSupportSearch');
    const resultsEl = document.getElementById('globalSupportSearchResults');
    if (!input || !resultsEl) return;

    let timer = null;

    const render = (items) => {
        if (!items.length) {
            resultsEl.innerHTML = '<div class="dropdown-item text-muted small">No matches</div>';
            resultsEl.classList.add('show');
            return;
        }
        resultsEl.innerHTML = items.map(item => `
            <a class="dropdown-item py-2" href="${item.url}">
                <div class="d-flex justify-content-between gap-2">
                    <span class="fw-semibold">${SupportTools.escapeHtml(item.label)}</span>
                    <span class="badge bg-light text-dark text-capitalize">${SupportTools.escapeHtml(item.type)}</span>
                </div>
                <div class="small text-muted">${SupportTools.escapeHtml(item.meta || '')}</div>
            </a>
        `).join('');
        resultsEl.classList.add('show');
    };

    const search = async (q) => {
        if (q.length < 2) {
            resultsEl.classList.remove('show');
            resultsEl.innerHTML = '';
            return;
        }
        try {
            const response = await fetch('/api/support/search?q=' + encodeURIComponent(q), {
                headers: { 'Accept': 'application/json' },
            });
            const result = await response.json();
            render(result.success ? (result.data || []) : []);
        } catch (e) {
            resultsEl.innerHTML = '<div class="dropdown-item text-danger small">Search failed</div>';
            resultsEl.classList.add('show');
        }
    };

    input.addEventListener('input', function () {
        clearTimeout(timer);
        timer = setTimeout(() => search(input.value.trim()), 250);
    });

    input.addEventListener('focus', function () {
        if (input.value.trim().length >= 2) search(input.value.trim());
    });

    document.addEventListener('click', function (e) {
        if (!input.contains(e.target) && !resultsEl.contains(e.target)) {
            resultsEl.classList.remove('show');
        }
    });
});
