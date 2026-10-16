@extends('layouts.vertical', ['title' => $title ?? 'CCS Form Templates'])

@section('content')
    <div class="row mt-4">
        <div class="col-12">
            <div class="card mb-4">
                <div class="card-header border-dashed">
                    <h4 class="card-title mb-1">CCS Form Templates</h4>
                    <p class="text-muted mb-0">
                        Download blank Common Conditions Service questionnaire templates as they appear on booking forms.
                    </p>
                </div>
                <div class="card-body">
                    @if(!empty($error))
                        <div class="alert alert-danger mb-0">
                            {{ $error }}
                        </div>
                    @else
                        <div class="alert alert-info">
                            Each download is a <strong>blank PDF template</strong> (questions + answer options, no patient answers).
                            Source: CRM <code>config/ccs-appointment-forms.php</code>.
                            Select multiple forms to download as a zip of separate PDFs.
                        </div>

                        @if(empty($forms))
                            <div class="text-muted">No CCS form templates found.</div>
                        @else
                            <form id="ccsFormTemplatesBulkForm" method="POST" action="{{ route('admin.ccs-form-templates.download-selected') }}">
                                @csrf
                                <div class="d-flex flex-wrap align-items-center justify-content-between gap-2 mb-3">
                                    <div class="form-check mb-0">
                                        <input class="form-check-input" type="checkbox" id="ccsSelectAll">
                                        <label class="form-check-label" for="ccsSelectAll">Select all</label>
                                    </div>
                                    <button type="submit" class="btn btn-primary btn-sm" id="ccsDownloadSelectedBtn" disabled>
                                        <i class="ti ti-download me-1"></i>
                                        Download selected (<span id="ccsSelectedCount">0</span>)
                                    </button>
                                </div>

                                <div class="table-responsive">
                                    <table class="table table-bordered align-middle mb-0">
                                        <thead>
                                            <tr>
                                                <th style="width: 48px;"></th>
                                                <th>Form</th>
                                                <th style="width: 140px;">Key</th>
                                                <th style="width: 120px;">Questions</th>
                                                <th style="width: 160px;">Download</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            @foreach($forms as $form)
                                                <tr>
                                                    <td class="text-center">
                                                        <input
                                                            class="form-check-input ccs-form-checkbox"
                                                            type="checkbox"
                                                            name="keys[]"
                                                            value="{{ $form['key'] }}"
                                                            aria-label="Select {{ $form['title'] }}"
                                                        >
                                                    </td>
                                                    <td class="fw-semibold">{{ $form['title'] }}</td>
                                                    <td><code>{{ $form['key'] }}</code></td>
                                                    <td>{{ $form['question_count'] }}</td>
                                                    <td>
                                                        <a
                                                            class="btn btn-sm btn-outline-primary"
                                                            href="{{ route('admin.ccs-form-templates.download', ['key' => $form['key']]) }}"
                                                        >
                                                            <i class="ti ti-download me-1"></i>Download PDF
                                                        </a>
                                                    </td>
                                                </tr>
                                            @endforeach
                                        </tbody>
                                    </table>
                                </div>
                            </form>
                        @endif
                    @endif
                </div>
            </div>
        </div>
    </div>
@endsection

@section('scripts')
<script>
document.addEventListener('DOMContentLoaded', function () {
    const selectAll = document.getElementById('ccsSelectAll');
    const checkboxes = Array.from(document.querySelectorAll('.ccs-form-checkbox'));
    const countEl = document.getElementById('ccsSelectedCount');
    const downloadBtn = document.getElementById('ccsDownloadSelectedBtn');
    const form = document.getElementById('ccsFormTemplatesBulkForm');

    if (!selectAll || !checkboxes.length || !downloadBtn || !form) {
        return;
    }

    function syncUi() {
        const selected = checkboxes.filter((cb) => cb.checked);
        countEl.textContent = String(selected.length);
        downloadBtn.disabled = selected.length === 0;
        selectAll.checked = selected.length === checkboxes.length;
        selectAll.indeterminate = selected.length > 0 && selected.length < checkboxes.length;
    }

    selectAll.addEventListener('change', function () {
        checkboxes.forEach((cb) => {
            cb.checked = selectAll.checked;
        });
        syncUi();
    });

    checkboxes.forEach((cb) => cb.addEventListener('change', syncUi));

    form.addEventListener('submit', function (event) {
        if (checkboxes.filter((cb) => cb.checked).length === 0) {
            event.preventDefault();
        }
    });

    syncUi();
});
</script>
@endsection
