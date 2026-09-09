@extends('layouts.vertical', ['title' => $title])

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
                            <div style="white-space:pre-wrap">{{ $message->body }}</div>
                            @if($message->attachments->isNotEmpty())<div class="mt-2">@foreach($message->attachments as $file)<a href="{{ route('admin.support.attachments', $file) }}" class="btn btn-sm btn-outline-secondary me-1">📎 {{ $file->original_name }}</a>@endforeach</div>@endif
                        </article>
                    @endforeach
                </div>
            </div>

            <div class="card">
                <div class="card-header"><h2 class="h5 mb-0">Reply or add a private note</h2></div>
                <form method="post" action="{{ route('admin.support.reply', $ticket) }}" enctype="multipart/form-data" data-support-loading-form>
                    @csrf
                    <div class="card-body">
                        <textarea class="form-control mb-3" name="body" rows="6" maxlength="20000" required placeholder="Write a response…"></textarea>
                        <div class="row g-3">
                            <div class="col-md-5"><label class="form-label">After sending</label><select class="form-select" name="status_after_reply"><option value="waiting_for_customer">Waiting for customer</option><option value="in_progress">Keep in progress</option><option value="resolved">Resolved</option></select></div>
                            <div class="col-md-7"><label class="form-label">Attachment</label><input class="form-control" type="file" name="attachment" accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"><div class="form-text">One PDF, Word, JPG, or PNG file. Maximum 10 MB.</div></div>
                        </div>
                        <div class="form-check mt-3"><input class="form-check-input" type="checkbox" value="1" name="is_internal" id="privateNote"><label class="form-check-label" for="privateNote">Private internal note — do not email or show to customer</label></div>
                    </div>
                    <div class="card-footer text-end"><button class="btn btn-primary" data-submit-button><span class="spinner-border spinner-border-sm me-1 d-none" aria-hidden="true" data-submit-spinner></span><span>Submit</span></button></div>
                </form>
            </div>
        </div>

        <div class="col-xl-4">
            <div class="card mb-3">
                <div class="card-header"><h2 class="h5 mb-0">Manage ticket</h2></div>
                <form method="post" action="{{ route('admin.support.update', $ticket) }}" data-support-loading-form>@csrf @method('put')
                    <div class="card-body">
                        <label class="form-label">Status</label><select class="form-select mb-3" name="status">@foreach($statuses as $status)<option value="{{ $status }}" @selected($ticket->status === $status)>{{ ucwords(str_replace('_', ' ', $status)) }}</option>@endforeach</select>
                        <label class="form-label">Urgency</label><select class="form-select mb-3" name="urgency">@foreach(['low','normal','high','urgent'] as $urgency)<option value="{{ $urgency }}" @selected($ticket->urgency === $urgency)>{{ ucfirst($urgency) }}</option>@endforeach</select>
                        <label class="form-label">Assigned to</label><select class="form-select mb-3" name="assigned_to"><option value="">Unassigned</option>@foreach($hqUsers as $hqUser)<option value="{{ $hqUser->id }}" @selected((int)$ticket->assigned_to === $hqUser->id)>{{ $hqUser->name }}</option>@endforeach</select>
                        <label class="form-label">Duplicate of reference</label><input class="form-control" name="duplicate_reference" placeholder="TG-…" value="{{ optional(\App\Models\SupportTicket::find($ticket->duplicate_of))->reference }}">
                    </div>
                    <div class="card-footer d-flex justify-content-between"><button class="btn btn-outline-primary" form="assign-to-me" data-submit-button><span class="spinner-border spinner-border-sm me-1 d-none" aria-hidden="true" data-submit-spinner></span><span>Assign to me</span></button><button class="btn btn-primary" data-submit-button><span class="spinner-border spinner-border-sm me-1 d-none" aria-hidden="true" data-submit-spinner></span><span>Update</span></button></div>
                </form>
                <form id="assign-to-me" method="post" action="{{ route('admin.support.assign', $ticket) }}" data-support-loading-form>@csrf</form>
            </div>

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
<script>
document.querySelectorAll('[data-support-loading-form]').forEach(function (form) {
    form.addEventListener('submit', function (event) {
        var submitter = event.submitter || document.querySelector('[form="' + form.id + '"]');
        if (!submitter) return;
        submitter.disabled = true;
        var spinner = submitter.querySelector('[data-submit-spinner]');
        if (spinner) spinner.classList.remove('d-none');
    });
});
</script>
@endsection
