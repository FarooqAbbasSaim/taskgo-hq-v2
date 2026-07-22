@if(!empty($breadcrumbs) && is_array($breadcrumbs))
<nav aria-label="breadcrumb" class="mb-3">
    <ol class="breadcrumb mb-0">
        @foreach($breadcrumbs as $item)
            @if(!empty($item['url']) && !$loop->last)
                <li class="breadcrumb-item"><a href="{{ $item['url'] }}">{{ $item['label'] }}</a></li>
            @else
                <li class="breadcrumb-item active" aria-current="page">{{ $item['label'] }}</li>
            @endif
        @endforeach
    </ol>
</nav>
@endif
