@extends('layouts.vertical', ['title' => 'Starter Page'])

@section('styles')
@endsection

@section('content')
    @include('layouts.shared.page-title', [
        'title' => 'Blank Starter Page',
        'subTitle' =>
            'A clean slate to kickstart your custom page development. Use this template to build anything from scratch.',
        'badgeIcon' => 'book-open',
        'badgeTitle' => 'Start Fresh',
    ])
@endsection

@section('scripts')
@endsection
