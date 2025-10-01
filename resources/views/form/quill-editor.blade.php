@extends('layouts.vertical', ['title' => 'Editors'])

@section('styles')
    @vite(['node_modules/quill/dist/quill.bubble.css', 'node_modules/quill/dist/quill.core.css', 'node_modules/quill/dist/quill.snow.css'])
@endsection

@section('content')
    @include('layouts.shared.page-title', [
        'title' => 'Rich Text Editor',
        'subTitle' =>
            'Create and edit beautifully formatted content with Quill.js — a modern WYSIWYG editor with extensible features.',
        'badgeIcon' => 'edit',
        'badgeTitle' => 'Quill.js Editor',
    ])

    <div class="row mt-3">
        <div class="col-12">
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title mb-1">Snow Editor</h5>
                    <p class="text-muted">Snow is a clean, flat toolbar theme.</p>
                    <div id="snow-editor" style="height: 300px;">
                        <h3>A powerful and responsive admin dashboard template built on Bootstrap.</h3>
                        <p><br /></p>
                        <ul>
                            <li>
                                Fully responsive layout with a sleek and modern design.
                            </li>
                            <li>
                                Multiple pre-built pages such as login, registration, dashboard, charts, tables,
                                and more.
                            </li>
                            <li>
                                Includes various components like modals, alerts, navigation menus, etc.
                            </li>
                            <li>
                                Easy to customize and extend to suit your project’s needs.
                            </li>
                            <li>
                                Built with Bootstrap 5x, ensuring compatibility with a wide range of devices.
                            </li>
                        </ul>
                        <p><br /></p>
                        <p>
                            Simple Admin is the perfect choice for your next admin project. Get started today
                            and create a stunning interface for your application.
                        </p>
                    </div>
                </div>
                <div class="card-body mt-3">
                    <h5 class="card-title mb-1">Bubble Editor</h5>
                    <p class="text-muted">Bubble is a simple tooltip based theme.</p>
                    <div id="bubble-editor" style="height: 300px;">
                        <h3>A powerful and responsive admin dashboard template built on Bootstrap.</h3>
                        <p><br /></p>
                        <ul>
                            <li>
                                Fully responsive layout with a sleek and modern design.
                            </li>
                            <li>
                                Multiple pre-built pages such as login, registration, dashboard, charts, tables,
                                and more.
                            </li>
                            <li>
                                Includes various components like modals, alerts, navigation menus, etc.
                            </li>
                            <li>
                                Easy to customize and extend to suit your project’s needs.
                            </li>
                            <li>
                                Built with Bootstrap 5x, ensuring compatibility with a wide range of devices.
                            </li>
                        </ul>
                        <p><br /></p>
                        <p>
                            Simple Admin is the perfect choice for your next admin project. Get started today
                            and create a stunning interface for your application.
                        </p>
                    </div> <!-- end Snow-editor-->
                </div>
            </div> <!-- end card-->
        </div> <!-- end col -->
    </div>
@endsection

@section('scripts')
    @vite(['resources/js/pages/form-quilljs.js'])
@endsection
