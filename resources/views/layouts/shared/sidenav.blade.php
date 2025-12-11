<!-- Sidenav Menu Start -->
<div class="sidenav-menu">
    <div class="scrollbar" data-simplebar>

        @if(env('RUNNING_LOCALLY', false))
        <!-- User -->         
        <div class="sidenav-user text-nowrap border border-dashed rounded-3">
            <a href="#!" class="sidenav-user-name d-flex align-items-center">
                <img src="/images/users/user-2.jpg" width="36" class="rounded-circle me-2 d-flex"
                     alt="user-image">
                <span>
                    <h5 class="my-0 fw-semibold">Maxine Kennedy</h5>
                    <h6 class="my-0 text-muted">Admin Head</h6>
                </span>
            </a>
        </div>
        @endif
        <!--- Sidenav Menu -->
        <ul class="side-nav">

            <li class="side-nav-item">
                <a href="/" class="side-nav-link">
                    <span class="menu-icon"><i data-lucide="circle-gauge"></i></span>
                    <span class="menu-text" data-lang="dashboard">Dashboard</span>
                </a>
            </li>

            <li class="side-nav-item">
                <a href="{{ route('admin.customers') }}" class="side-nav-link">
                    <span class="menu-icon"><i data-lucide="users"></i></span>
                    <span class="menu-text">Customers</span>
                </a>
            </li>

            <li class="side-nav-item">
                <a href="{{ route('admin.rx-users') }}" class="side-nav-link">
                    <span class="menu-icon"><i data-lucide="users"></i></span>
                    <span class="menu-text">Rx Users</span>
                </a>
            </li>

            <li class="side-nav-item">
                <a href="{{ route('admin.announcements') }}" class="side-nav-link">
                    <span class="menu-icon"><i data-lucide="megaphone"></i></span>
                    <span class="menu-text">Announcements</span>
                </a>
            </li>

            @if(env('RUNNING_LOCALLY', false))
            <li class="side-nav-item">
                <a href="{{ route('second', ['ton', 'ton-ai'])}}" class="side-nav-link">
                    <span class="menu-icon"><i data-lucide="sparkles"></i></span>
                    <span class="menu-text"> Ton AI </span>
                    <span class="badge text-bg-primary">Hot</span>
                </a>
            </li>
            @endif

            @if(env('RUNNING_LOCALLY', false))
            <li class="side-nav-item">
                <a href="{{ route('second', ['calendar', 'index'])}}" class="side-nav-link">
                    <span class="menu-icon"><i data-lucide="calendar"></i></span>
                    <span class="menu-text" data-lang="calendar"> Calendar </span>
                </a>
            </li>

            <li class="side-nav-item">
                <a href="{{ route('second', ['directory', 'index'])}}" class="side-nav-link">
                    <span class="menu-icon"><i data-lucide="book-user"></i></span>
                    <span class="menu-text" data-lang="directory"> Directory </span>
                </a>
            </li>

            <li class="side-nav-title mt-2" data-lang="pages-title">Custom Pages</li>
            @endif

            @if(env('RUNNING_LOCALLY', false))
            <li class="side-nav-item">
                <a data-bs-toggle="collapse" href="#sidebarPages" aria-expanded="false" aria-controls="sidebarPages"
                   class="side-nav-link">
                    <span class="menu-icon"><i data-lucide="notebook-text"></i></span>
                    <span class="menu-text" data-lang="pages"> Pages </span>
                    <span class="menu-arrow"></span>
                </a>
                <div class="collapse" id="sidebarPages">
                    <ul class="sub-menu">
                        <li class="side-nav-item">
                            <a href="{{ route('second', ['pages','pricing'])}}" class="side-nav-link">
                                <span class="menu-text" data-lang="pages-pricing">Pricing</span>
                            </a>
                        </li>
                        <li class="side-nav-item">
                            <a href="{{ route('second', ['pages', 'empty'])}}" class="side-nav-link">
                                <span class="menu-text" data-lang="pages-empty">Empty Page</span>
                            </a>
                        </li>
                        <li class="side-nav-item">
                            <a href="{{ route('second', ['pages','timeline'])}}" class="side-nav-link">
                                <span class="menu-text" data-lang="pages-timeline">Timeline</span>
                            </a>
                        </li>
                        <li class="side-nav-item">
                            <a href="{{ route('second', ['pages', 'terms-conditions'])}}" class="side-nav-link">
                                <span class="menu-text" data-lang="pages-terms-conditions">Terms & Conditions</span>
                            </a>
                        </li>
                        <li class="side-nav-item">
                            <a href="{{ route('second', ['pages', 'invoice'])}}" class="side-nav-link">
                                <span class="menu-text" data-lang="invoice">Invoice</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </li>
            @endif

            @if(env('RUNNING_LOCALLY', false))
            <li class="side-nav-item">
                <a data-bs-toggle="collapse" href="#sidebarPagesAuth" aria-expanded="false"
                   aria-controls="sidebarPagesAuth" class="side-nav-link">
                    <span class="menu-icon"><i data-lucide="fingerprint"></i></span>
                    <span class="menu-text" data-lang="authentication"> Authentication </span>
                    <span class="menu-arrow"></span>
                </a>
                <div class="collapse" id="sidebarPagesAuth">
                    <ul class="sub-menu">
                        <li class="side-nav-item">
                            <a href="{{ route('second', ['auth', 'sign-in'])}}" class="side-nav-link">
                                <span class="menu-text" data-lang="auth-sign-in">Sign In</span>
                            </a>
                        </li>
                        <li class="side-nav-item">
                            <a href="{{ route('second', ['auth', 'sign-up'])}}" class="side-nav-link">
                                <span class="menu-text" data-lang="auth-sign-up">Sign Up</span>
                            </a>
                        </li>
                        <li class="side-nav-item">
                            <a href="{{ route('second', ['auth', 'reset-pass'])}}" class="side-nav-link">
                                <span class="menu-text" data-lang="auth-reset-pass">Reset Password</span>
                            </a>
                        </li>
                        <li class="side-nav-item">
                            <a href="{{ route('second', ['auth', 'new-pass'])}}" class="side-nav-link">
                                <span class="menu-text" data-lang="auth-new-pass">New Password</span>
                            </a>
                        </li>
                        <li class="side-nav-item">
                            <a href="{{ route('second', ['auth', 'two-factor'])}}" class="side-nav-link">
                                <span class="menu-text" data-lang="auth-two-factor">Two Factor</span>
                            </a>
                        </li>
                        <li class="side-nav-item">
                            <a href="{{ route('second', ['auth', 'lock-screen'])}}" class="side-nav-link">
                                <span class="menu-text" data-lang="auth-lock-screen">Lock Screen</span>
                            </a>
                        </li>
                        <li class="side-nav-item">
                            <a href="{{ route('second', ['auth', '404'])}}" class="side-nav-link">
                                <span class="menu-text" data-lang="error-404">404 – Not Found</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </li>
            @endif

            @if(env('RUNNING_LOCALLY', false))
            <li class="side-nav-item">
                <a data-bs-toggle="collapse" href="#sidebarBaseUI" aria-expanded="false" aria-controls="sidebarBaseUI"
                   class="side-nav-link">
                    <span class="menu-icon"><i data-lucide="pencil-ruler"></i></span>
                    <span class="menu-text" data-lang="ui-components"> UI Components </span>
                    <span class="menu-arrow"></span>
                </a>
                <div class="collapse" id="sidebarBaseUI">
                    <ul class="sub-menu">
                        <li class="side-nav-item">
                            <a href="{{ route('second', ['ui', 'core']) }}" class="side-nav-link">
                                <span class="menu-text" data-lang="ui-core">Core Elements</span>
                            </a>
                        </li>
                        <li class="side-nav-item">
                            <a href="{{ route('second', ['ui', 'interactive'])}}" class="side-nav-link">
                                <span class="menu-text" data-lang="ui-interactive">Interactive Features</span>
                            </a>
                        </li>
                        <li class="side-nav-item">
                            <a href="{{ route('second', ['ui', 'menu-links'])}}" class="side-nav-link">
                                <span class="menu-text" data-lang="ui-menu-links">Menu & Links</span>
                            </a>
                        </li>
                        <li class="side-nav-item">
                            <a href="{{ route('second', ['ui', 'visual-feedback'])}}" class="side-nav-link">
                                <span class="menu-text" data-lang="ui-visual-feedback">Visual Feedback</span>
                            </a>
                        </li>
                        <li class="side-nav-item">
                            <a href="{{ route('second', ['ui', 'utilities'])}}" class="side-nav-link">
                                <span class="menu-text" data-lang="ui-utilities">Utilities</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </li>
            @endif

            @if(env('RUNNING_LOCALLY', false))
            <li class="side-nav-item">
                <a href="{{ route('second', ['charts', 'index'])}}" class="side-nav-link">
                    <span class="menu-icon"><i data-lucide="chart-pie"></i></span>
                    <span class="menu-text" data-lang="charts"> Charts </span>
                </a>
            </li>
            @endif

            @if(env('RUNNING_LOCALLY', false))
            <li class="side-nav-item">
                <a data-bs-toggle="collapse" href="#sidebarForms" aria-expanded="false" aria-controls="sidebarForms"
                   class="side-nav-link">
                    <span class="menu-icon"><i data-lucide="square-pi"></i></span>
                    <span class="menu-text" data-lang="forms">Forms</span>
                    <span class="menu-arrow"></span>
                </a>
                <div class="collapse" id="sidebarForms">
                    <ul class="sub-menu">
                        <li class="side-nav-item">
                            <a href="{{ route('second', ['form', 'elements'])}}" class="side-nav-link">
                                <span class="menu-text" data-lang="form-elements">Basic Elements</span>
                            </a>
                        </li>
                        <li class="side-nav-item">
                            <a href="{{ route('second', ['form', 'plugins'])}}" class="side-nav-link">
                                <span class="menu-text" data-lang="form-plugins">Plugins</span>
                            </a>
                        </li>
                        <li class="side-nav-item">
                            <a href="{{ route('second', ['form', 'validation'])}}" class="side-nav-link">
                                <span class="menu-text" data-lang="form-validation">Validation</span>
                            </a>
                        </li>
                        <li class="side-nav-item">
                            <a href="{{ route('second', ['form', 'wizard'])}}" class="side-nav-link">
                                <span class="menu-text" data-lang="form-wizard">Wizard</span>
                            </a>
                        </li>
                        <li class="side-nav-item">
                            <a href="{{ route('second', ['form', 'fileuploads'])}}" class="side-nav-link">
                                <span class="menu-text" data-lang="form-fileuploads">File Uploads</span>
                            </a>
                        </li>
                        <li class="side-nav-item">
                            <a href="{{ route('second', ['form', 'quill-editor'])}}" class="side-nav-link">
                                <span class="menu-text" data-lang="form-quilljs">Quilljs Editors</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </li>
            @endif

            @if(env('RUNNING_LOCALLY', false))
            <li class="side-nav-item">
                <a data-bs-toggle="collapse" href="#sidebarTables" aria-expanded="false" aria-controls="sidebarTables"
                   class="side-nav-link">
                    <span class="menu-icon"><i data-lucide="table-2"></i></span>
                    <span class="menu-text" data-lang="tables">Tables</span>
                    <span class="menu-arrow"></span>
                </a>
                <div class="collapse" id="sidebarTables">
                    <ul class="sub-menu">
                        <li class="side-nav-item">
                            <a href="{{ route('second', ['tables', 'static'])}}" class="side-nav-link">
                                <span class="menu-text" data-lang="tables-static">Static Tables</span>
                            </a>
                        </li>
                        <li class="side-nav-item">
                            <a data-bs-toggle="collapse" href="#sidebarDataTables" aria-expanded="false"
                               aria-controls="sidebarDataTables" class="side-nav-link">
                                <span class="menu-text" data-lang="datatables">DataTables</span>
                                <span class="badge bg-success">09</span>
                            </a>
                            <div class="collapse" id="sidebarDataTables">
                                <ul class="sub-menu">
                                    <li class="side-nav-item">
                                        <a href="{{ route('second', ['tables', 'datatables-basic'])}}" class="side-nav-link">
                                            <span class="menu-text" data-lang="tables-datatables-basic">Basic</span>
                                        </a>
                                    </li>
                                    <li class="side-nav-item">
                                        <a href="{{ route('second', ['tables', 'datatables-export-data'])}}" class="side-nav-link">
                                            <span class="menu-text" data-lang="tables-datatables-export-data">Export Data</span>
                                        </a>
                                    </li>
                                    <li class="side-nav-item">
                                        <a href="{{ route('second', ['tables', 'datatables-select'])}}" class="side-nav-link">
                                            <span class="menu-text" data-lang="tables-datatables-select">Select</span>
                                        </a>
                                    </li>
                                    <li class="side-nav-item">
                                        <a href="{{ route('second', ['tables', 'datatables-ajax'])}}" class="side-nav-link">
                                            <span class="menu-text" data-lang="tables-datatables-ajax">Ajax</span>
                                        </a>
                                    </li>
                                    <li class="side-nav-item">
                                        <a href="{{ route('second', ['tables', 'datatables-javascript'])}}" class="side-nav-link">
                                            <span class="menu-text" data-lang="tables-datatables-javascript">Javascript Source</span>
                                        </a>
                                    </li>
                                    <li class="side-nav-item">
                                        <a href="{{ route('second', ['tables', 'datatables-rendering'])}}" class="side-nav-link">
                                            <span class="menu-text" data-lang="tables-datatables-rendering">Data Rendering</span>
                                        </a>
                                    </li>
                                    <li class="side-nav-item">
                                        <a href="{{ route('second', ['tables', 'datatables-columns'])}}" class="side-nav-link">
                                            <span class="menu-text" data-lang="tables-datatables-columns">Show & Hide Column</span>
                                        </a>
                                    </li>
                                    <li class="side-nav-item">
                                        <a href="{{ route('second', ['tables', 'datatables-child-rows'])}}" class="side-nav-link">
                                            <span class="menu-text"
                                                  data-lang="tables-datatables-child-rows">Child Rows</span>
                                        </a>
                                    </li>
                                    <li class="side-nav-item">
                                        <a href="{{ route('second', ['tables', 'datatables-checkbox-select'])}}" class="side-nav-link">
                                            <span class="menu-text" data-lang="tables-datatables-checkbox-select">Checkbox Select</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>
            </li>
            @endif

            @if(env('RUNNING_LOCALLY', false))
            <li class="side-nav-item">
                <a data-bs-toggle="collapse" href="#sidebarIcons" aria-expanded="false" aria-controls="sidebarIcons"
                   class="side-nav-link">
                    <span class="menu-icon"><i data-lucide="layers-2"></i></span>
                    <span class="menu-text" data-lang="icons">Icons</span>
                    <span class="menu-arrow"></span>
                </a>
                <div class="collapse" id="sidebarIcons">
                    <ul class="sub-menu">
                        <li class="side-nav-item">
                            <a href="{{ route('second', ['icons', 'tabler'])}}" class="side-nav-link">
                                <span class="menu-text" data-lang="icons-tabler">Tabler</span>
                            </a>
                        </li>
                        <li class="side-nav-item">
                            <a href="{{ route('second', ['icons', 'lucide'])}}" class="side-nav-link">
                                <span class="menu-text" data-lang="icons-lucide">Lucide</span>
                            </a>
                        </li>
                        <li class="side-nav-item">
                            <a href="{{ route('second', ['icons', 'flags'])}}" class="side-nav-link">
                                <span class="menu-text" data-lang="icons-flags">Flags</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </li>
            @endif

            @if(env('RUNNING_LOCALLY', false))
            <li class="side-nav-item">
                <a data-bs-toggle="collapse" href="#sidebarMaps" aria-expanded="false" aria-controls="sidebarMaps"
                   class="side-nav-link">
                    <span class="menu-icon"><i data-lucide="map-pin"></i></span>
                    <span class="menu-text" data-lang="maps">Maps</span>
                    <span class="menu-arrow"></span>
                </a>
                <div class="collapse" id="sidebarMaps">
                    <ul class="sub-menu">
                        <li class="side-nav-item">
                            <a href="{{ route('second', ['maps', 'vector'])}}" class="side-nav-link">
                                <span class="menu-text" data-lang="maps-vector">Vector Maps</span>
                            </a>
                        </li>
                        <li class="side-nav-item">
                            <a href="{{ route('second', ['maps', 'leaflet'])}}" class="side-nav-link">
                                <span class="menu-text" data-lang="maps-leaflet">Leaflet Maps</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </li>

            <li class="side-nav-title mt-2" data-lang="items-title">Menu Items</li>

            <li class="side-nav-item">
                <a data-bs-toggle="collapse" href="#sidebarMenuLevels" aria-expanded="false"
                   aria-controls="sidebarMenuLevels" class="side-nav-link">
                    <span class="menu-icon"><i data-lucide="command"></i></span>
                    <span class="menu-text" data-lang="menu-levels"> Menu Levels </span>
                    <span class="menu-arrow"></span>
                </a>
                <div class="collapse" id="sidebarMenuLevels">
                    <ul class="sub-menu">
                        <li class="side-nav-item">
                            <a data-bs-toggle="collapse" href="#sidebarSecondLevel" aria-expanded="false"
                               aria-controls="sidebarSecondLevel" class="side-nav-link">
                                <span class="menu-text" data-lang="second-level"> Second Level </span>
                                <span class="menu-arrow"></span>
                            </a>
                            <div class="collapse" id="sidebarSecondLevel">
                                <ul class="sub-menu">
                                    <li class="side-nav-item">
                                        <a href="javascript: void(0);" class="side-nav-link">
                                            <span class="menu-text">Item 2.1</span>
                                        </a>
                                    </li>
                                    <li class="side-nav-item">
                                        <a href="javascript: void(0);" class="side-nav-link">
                                            <span class="menu-text">Item 2.2</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li class="side-nav-item">
                            <a data-bs-toggle="collapse" href="#sidebarThirdLevel" aria-expanded="false"
                               aria-controls="sidebarThirdLevel" class="side-nav-link">
                                <span class="menu-text" data-lang="third-level"> Third Level </span>
                                <span class="menu-arrow"></span>
                            </a>
                            <div class="collapse" id="sidebarThirdLevel">
                                <ul class="sub-menu">
                                    <li class="side-nav-item">
                                        <a href="javascript: void(0);" class="side-nav-link">Item 1</a>
                                    </li>
                                    <li class="side-nav-item">
                                        <a data-bs-toggle="collapse" href="#sidebarFourthLevel" aria-expanded="false"
                                           aria-controls="sidebarFourthLevel" class="side-nav-link">
                                            <span class="menu-text"> Item 2 </span>
                                            <span class="menu-arrow"></span>
                                        </a>
                                        <div class="collapse" id="sidebarFourthLevel">
                                            <ul class="sub-menu">
                                                <li class="side-nav-item">
                                                    <a href="javascript: void(0);" class="side-nav-link">
                                                        <span class="menu-text">Item 3.1</span>
                                                    </a>
                                                </li>
                                                <li class="side-nav-item">
                                                    <a href="javascript: void(0);" class="side-nav-link">
                                                        <span class="menu-text">Item 3.2</span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>
            </li>

            <li class="side-nav-item">
                <a href="#!" class="side-nav-link disabled">
                    <span class="menu-icon"><i data-lucide="shield-ban"></i></span>
                    <span class="menu-text" data-lang="disabled-menu"> Disabled Menu </span>
                </a>
            </li>
            @endif
        </ul>
    </div>

    <div class="menu-collapse-box d-none d-xl-block">
        <button class="button-collapse-toggle">
            <i data-lucide="square-chevron-left" class="align-middle flex-shrink-0"></i> <span>Collapse Menu</span>
        </button>
    </div>
</div>
<!-- Sidenav Menu End -->