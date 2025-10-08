@props([
    'text' => 'Submit',
    'loadingText' => 'Please wait...',
    'type' => 'button',
    'variant' => 'primary',
    'size' => '',
    'spinnerSize' => 'sm',
    'spinnerColor' => '',
    'loadingClass' => 'loading',
    'disabled' => false,
    'class' => '',
    'id' => null,
    'onclick' => null,
    'form' => null,
    'name' => null,
    'value' => null
])

@php
    $buttonClasses = collect([
        'btn',
        'btn-' . $variant,
        $size ? 'btn-' . $size : '',
        $class
    ])->filter()->implode(' ');
    
    $spinnerClasses = collect([
        'spinner-border',
        $spinnerSize ? 'spinner-border-' . $spinnerSize : 'spinner-border-sm',
        $spinnerColor ? 'text-' . $spinnerColor : ''
    ])->filter()->implode(' ');
@endphp

<button 
    type="{{ $type }}"
    class="{{ $buttonClasses }}"
    data-loading-button
    data-loading-text="{{ $loadingText }}"
    data-spinner-size="{{ $spinnerSize }}"
    data-spinner-color="{{ $spinnerColor }}"
    data-loading-class="{{ $loadingClass }}"
    @if($disabled) disabled @endif
    @if($id) id="{{ $id }}" @endif
    @if($onclick) onclick="{{ $onclick }}" @endif
    @if($form) form="{{ $form }}" @endif
    @if($name) name="{{ $name }}" @endif
    @if($value) value="{{ $value }}" @endif
    {{ $attributes }}
>
    {{ $text }}
</button>
