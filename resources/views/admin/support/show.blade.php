@extends('layouts.vertical', ['title' => $title])

@section('styles')
<link href="https://cdn.jsdelivr.net/npm/quill@1.3.7/dist/quill.snow.css" rel="stylesheet">
<style>
    .support-quill-mount {
        background: #fff;
        border: 1px solid #ced4da;
        border-radius: 0.375rem;
        margin-bottom: 1rem;
    }
    .support-quill-mount .ql-toolbar.ql-snow {
        border: 0;
        border-bottom: 1px solid #ced4da;
        border-radius: 0.375rem 0.375rem 0 0;
    }
    .support-quill-mount .ql-container.ql-snow {
        border: 0;
        border-radius: 0 0 0.375rem 0.375rem;
        font-size: 0.95rem;
    }
    .support-quill-mount .ql-editor {
        min-height: 160px;
        max-height: 360px;
        overflow-y: auto;
    }
    .support-message-body a { word-break: break-word; }
</style>
@endsection

@section('content')
<div class="container-fluid py-4">
    <a href="{{ route('admin.support.index') }}" class="btn btn-sm btn-light mb-3">&larr; Support tickets</a>
    @if(session('success'))<div class="alert alert-success">{{ session('success') }}</div>@endif
    @if(session('warning'))<div class="alert alert-warning">{{ session('warning') }}</div>@endif
    @if($errors->any())<div class="alert alert-danger">{{ $errors->first() }}</div>@endif

    <div class="row g-3">
        <div class="col-xl-8">
            <div class="card mb-3">
                <div class="card-body">
                    <div class="d-flex justify-content-between align-items-start gap-3"><div><div class="text-muted small">{{ $ticket->reference }}</div><h1 class="h4 mb-1">{{ $ticket->subject }}</h1><div class="text-muted">{{ $ticket->area }} · {{ ucfirst($ticket->urgency) }} urgency</div></div><span class="badge text-bg-primary fs-6">{{ ucwords(str_replace('_', ' ', $ticket->status)) }}</span></div>
                    @if($ticket->help_topic)<div class="alert alert-light border mt-3 mb-0">Help topic viewed first: @if($ticket->help_url)<a href="{{ $ticket->help_url }}" target="_blank">{{ $ticket->help_topic }}</a>@else{{ $ticket->help_topic }}@endif</div>@endif
                </div>
            </div>

            <div class="card mb-3">
                <div class="card-header"><h2 class="h5 mb-0">Conversation</h2></div>
                <div class="card-body">
                    @foreach($ticket->messages as $message)
                        <article class="p-3 mb-3 rounded border {{ $message->is_internal ? 'border-warning bg-warning-subtle' : ($message->sender_type === 'hq' ? 'border-primary-subtle bg-primary-subtle' : 'bg-light') }}">
                            <div class="d-flex justify-content-between gap-2 mb-2"><strong>{{ $message->sender_name ?: ucfirst($message->sender_type) }} @if($message->is_internal)<span class="badge text-bg-warning ms-1">Private note</span>@endif</strong><span class="text-muted small">{{ $message->created_at->format('d M Y H:i') }}{{ $message->source === 'email' ? ' · via email' : '' }}</span></div>
                            <div class="support-message-body">{!! \App\Support\SupportMessageBody::render($message->body) !!}</div>
                            @if($message->attachments->isNotEmpty())<div class="mt-2">@foreach($message->attachments as $file)<a href="{{ route('admin.support.attachments', $file) }}" class="btn btn-sm btn-outline-secondary me-1">📎 {{ $file->original_name }}</a>@endforeach</div>@endif
                        </article>
                    @endforeach
                </div>
            </div>

            <div class="card">
                <div class="card-header"><h2 class="h5 mb-0">Reply or add a private note</h2></div>
                <form method="post" action="{{ route('admin.support.reply', $ticket) }}" enctype="multipart/form-data" data-support-loading-form id="supportReplyForm">
                    @csrf
                    <div class="card-body">
                        <label class="form-label" for="supportReplyQuill">Message</label>
                        <div id="supportReplyQuill" class="support-quill-mount"></div>
                        <textarea class="d-none" name="body" id="supportReplyBody" maxlength="20000" required>{{ old('body') }}</textarea>
                        <div class="row g-3">
                            <div class="col-md-5">
                                <label class="form-label">After sending</label>
                                <select class="form-select" name="status_after_reply">
                                    <option value="waiting_for_customer">Waiting for customer</option>
                                    <option value="in_progress">Keep in progress</option>
                                    <option value="resolved">Resolved</option>
                                </select>
                            </div>
                            <div class="col-md-7">
                                <label class="form-label">Attachment</label>
                                <input class="form-control" type="file" name="attachment" accept=".pdf,.doc,.docx,.jpg,.jpeg,.png">
                                <div class="form-text">One PDF, Word, JPG, or PNG file. Maximum 10 MB.</div>
                            </div>
                        </div>
                        <div class="form-check mt-3"><input class="form-check-input" type="checkbox" value="1" name="is_internal" id="privateNote"><label class="form-check-label" for="privateNote">Private internal note — do not email or show to customer</label></div>
                    </div>
                    <div class="card-footer text-end"><button class="btn btn-primary" data-submit-button><span class="spinner-border spinner-border-sm me-1 d-none" aria-hidden="true" data-submit-spinner></span><span>Submit</span></button></div>
                </form>
            </div>
        </div>

        <div class="col-xl-4">
            <div class="card">
                <div class="card-header"><h2 class="h5 mb-0">Customer & pharmacy</h2></div>
                <div class="card-body small">
                    @foreach(['Name' => $ticket->requester_name, 'Email' => $ticket->requester_email, 'Phone' => $ticket->requester_phone, 'User type' => $ticket->requester_user_type, 'Personal address' => $ticket->requester_address, 'Pharmacy' => $ticket->pharmacy_name, 'Pharmacy email' => $ticket->pharmacy_email, 'Pharmacy phone' => $ticket->pharmacy_phone, 'Pharmacy address' => $ticket->pharmacy_address] as $label => $value)
                        <div class="mb-2"><div class="text-muted">{{ $label }}</div><div class="fw-semibold">{{ $value ?: 'Not provided' }}</div></div>
                    @endforeach
                </div>
            </div>
        </div>
    </div>
</div>
@endsection

@section('scripts')
<script src="https://cdn.jsdelivr.net/npm/quill@1.3.7/dist/quill.min.js"></script>
<script>
(function () {
    var bodyField = document.getElementById('supportReplyBody');
    var mount = document.getElementById('supportReplyQuill');
    var quill = null;

    function isEmptyHtml(html) {
        return !html || html === '<p><br></p>' || html === '<p><br></p>\n';
    }

    function syncReplyBody() {
        if (!quill || !bodyField) return;
        var html = quill.root.innerHTML;
        bodyField.value = isEmptyHtml(html) ? '' : html;
    }

    if (mount && typeof Quill !== 'undefined') {
        quill = new Quill(mount, {
            theme: 'snow',
            placeholder: 'Write a response…',
            modules: {
                toolbar: [
                    ['bold', 'italic', 'underline'],
                    [{ list: 'ordered' }, { list: 'bullet' }],
                    ['link']
                ]
            }
        });
        if (bodyField && bodyField.value.trim() !== '') {
            quill.clipboard.dangerouslyPasteHTML(bodyField.value);
        }
        quill.on('text-change', syncReplyBody);
        syncReplyBody();
    }

    document.querySelectorAll('[data-support-loading-form]').forEach(function (form) {
        form.addEventListener('submit', function (event) {
            if (form.id === 'supportReplyForm') {
                syncReplyBody();
                if (!bodyField || !bodyField.value.trim()) {
                    event.preventDefault();
                    if (quill) quill.focus();
                    return;
                }
            }
            var submitter = event.submitter || form.querySelector('[data-submit-button]');
            if (!submitter) return;
            submitter.disabled = true;
            var spinner = submitter.querySelector('[data-submit-spinner]');
            if (spinner) spinner.classList.remove('d-none');
        });
    });
})();
</script>
@endsection
