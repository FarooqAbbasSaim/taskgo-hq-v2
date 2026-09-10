@extends('layouts.vertical', ['title' => $title])

@section('content')
<div class="container-fluid py-4">
    <div class="d-flex align-items-center justify-content-between mb-3">
        <div><h1 class="h3 mb-1">Support Tickets</h1><p class="text-muted mb-0">Review and manage requests from Taskgo pharmacies.</p></div>
    </div>

    <div class="row g-3 mb-4">
        @foreach(['open' => ['Open', 'primary'], 'new' => ['New', 'warning'], 'waiting' => ['Waiting for customer', 'info'], 'resolved' => ['Resolved', 'success']] as $key => $card)
            <div class="col-sm-6 col-xl-3"><div class="card h-100"><div class="card-body"><div class="text-muted small">{{ $card[0] }}</div><div class="fs-2 fw-bold text-{{ $card[1] }}">{{ number_format($stats[$key]) }}</div></div></div></div>
        @endforeach
    </div>

    <div class="card">
        <div class="card-body border-bottom">
            <form class="row g-2 align-items-end" method="get">
                <div class="col-md-5"><label class="form-label">Search</label><input class="form-control" name="q" value="{{ request('q') }}" placeholder="Reference, subject, person, email, or pharmacy"></div>
                <div class="col-md-3"><label class="form-label">Status</label><select class="form-select" name="status"><option value="">All statuses</option>@foreach($statuses as $status)<option value="{{ $status }}" @selected(request('status') === $status)>{{ ucwords(str_replace('_', ' ', $status)) }}</option>@endforeach</select></div>
                <div class="col-md-2"><label class="form-label">Urgency</label><select class="form-select" name="urgency"><option value="">All</option>@foreach(['low','normal','high','urgent'] as $urgency)<option value="{{ $urgency }}" @selected(request('urgency') === $urgency)>{{ ucfirst($urgency) }}</option>@endforeach</select></div>
                <div class="col-md-2"><button class="btn btn-primary w-100">Filter</button></div>
            </form>
        </div>
        <div class="table-responsive">
            <table class="table table-hover align-middle mb-0">
                <thead><tr><th>Ticket</th><th>Customer / pharmacy</th><th>Area</th><th>Urgency</th><th>Status</th><th>Assigned</th><th>Updated</th></tr></thead>
                <tbody>
                @forelse($tickets as $ticket)
                    <tr>
                        <td><a class="fw-semibold" href="{{ route('admin.support.show', $ticket) }}">{{ $ticket->reference }}</a>@if($ticket->hq_unread)<span class="badge text-bg-warning ms-1">Unread</span>@endif<div class="text-muted small">{{ $ticket->subject }}</div></td>
                        <td>{{ $ticket->requester_name }}<div class="text-muted small">{{ $ticket->pharmacy_name ?: $ticket->requester_email }}</div></td>
                        <td>{{ $ticket->area }}</td>
                        <td><span class="badge {{ $ticket->urgency === 'urgent' ? 'text-bg-danger' : ($ticket->urgency === 'high' ? 'text-bg-warning' : 'text-bg-light') }}">{{ ucfirst($ticket->urgency) }}</span></td>
                        <td><span class="badge text-bg-{{ in_array($ticket->status, ['resolved','closed']) ? 'success' : ($ticket->status === 'new' ? 'warning' : 'primary') }}">{{ ucwords(str_replace('_', ' ', $ticket->status)) }}</span></td>
                        <td>{{ $ticket->assigned_name ?: 'Unassigned' }}</td>
                        <td>{{ $ticket->updated_at->format('d M Y H:i') }}</td>
                    </tr>
                @empty
                    <tr><td colspan="7" class="py-5 text-center text-muted">No support tickets match these filters.</td></tr>
                @endforelse
                </tbody>
            </table>
        </div>
        @if($tickets->hasPages())<div class="card-footer">{{ $tickets->links() }}</div>@endif
    </div>
</div>
@endsection
