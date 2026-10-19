<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>{{ $form['title'] }}</title>
    <style>
        @page { margin: 12mm 12mm 14mm; }
        * { box-sizing: border-box; }
        body {
            margin: 0;
            padding: 0;
            font-family: DejaVu Sans, Arial, sans-serif;
            font-size: 11px;
            line-height: 1.45;
            color: #222;
        }
        .header {
            width: 100%;
            border-bottom: 2px solid #17365d;
            padding-bottom: 8px;
            margin-bottom: 14px;
        }
        .eyebrow {
            font-size: 10px;
            letter-spacing: 1px;
            text-transform: uppercase;
            color: #5b6b7c;
            margin-bottom: 4px;
        }
        .title {
            font-size: 16px;
            font-weight: bold;
            color: #17365d;
            margin: 0;
        }
        .meta {
            margin-top: 6px;
            font-size: 10px;
            color: #5b6b7c;
        }
        .question {
            border: 1px solid #d7e0ea;
            margin: 0 0 10px;
            page-break-inside: avoid;
        }
        .question-id {
            background: #f4f7fb;
            padding: 5px 8px;
            font-size: 10px;
            color: #5b6b7c;
            border-bottom: 1px solid #d7e0ea;
        }
        .question-text {
            padding: 8px;
            font-weight: bold;
        }
        .options {
            padding: 0 8px 8px;
        }
        .option {
            margin: 3px 0;
        }
        .box {
            display: inline-block;
            width: 10px;
            height: 10px;
            border: 1px solid #333;
            margin-right: 6px;
            vertical-align: middle;
        }
        .blank-line {
            border-bottom: 1px solid #999;
            height: 18px;
            margin-top: 4px;
        }
        .blank-area {
            border: 1px dashed #999;
            min-height: 48px;
            margin-top: 4px;
        }
        .required {
            color: #b30000;
            font-size: 10px;
            font-weight: normal;
        }
        .footer {
            margin-top: 18px;
            font-size: 9px;
            color: #8a95a3;
            text-align: center;
        }
    </style>
</head>
<body>
    <div class="header">
        <div class="eyebrow">CCS blank form template</div>
        <h1 class="title">{{ $form['title'] }}</h1>
        <div class="meta">
            Key: {{ $form['key'] }}
            · {{ count($form['questions']) }} questions
            · Generated {{ $generatedAt->format('j M Y H:i') }} ({{ $generatedAt->timezoneName }})
        </div>
    </div>

    @foreach($form['questions'] as $question)
        @php
            $type = $question['type'] ?? 'text';
            $options = $question['options'] ?? [];
        @endphp
        <div class="question">
            <div class="question-id">
                Q {{ $question['id'] ?? '—' }}
                · {{ strtoupper(str_replace('_', ' ', (string) $type)) }}
                @if(!empty($question['required']))
                    · <span class="required">Required</span>
                @endif
            </div>
            <div class="question-text">{{ $question['question'] ?? 'Question' }}</div>
            <div class="options">
                @if(in_array($type, ['yes_no', 'yes_no_na', 'multi_select'], true))
                    @foreach($options as $option)
                        @php
                            $label = is_array($option)
                                ? ($option['label'] ?? $option['value'] ?? '')
                                : (string) $option;
                        @endphp
                        <div class="option"><span class="box"></span>{{ $label }}</div>
                    @endforeach
                @elseif($type === 'textarea')
                    <div class="blank-area"></div>
                    <div class="blank-area"></div>
                @else
                    <div class="blank-line"></div>
                @endif
            </div>
        </div>
    @endforeach

    <div class="footer">
        Blank CCS questionnaire template for reference / offline use. Not a completed patient form.
    </div>
</body>
</html>
