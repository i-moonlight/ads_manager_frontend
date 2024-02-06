const menuItems = {
    items: [
        {
            id: 'navigation',
            type: 'group',
           
            children: [
				{
                    id: 'home',
                    title: 'Home',
                    type: 'item',
                	url: '/app/dashboard/default',                       
                    icon: 'feather icon-home',

                },
				//{
                //    id: 'analytics',
                //    title: 'Analytics',
                //    type: 'item',
                //    url: '/analytics',
                //    classes: 'nav-item',
                //    icon: 'feather icon-bar-chart-2'
                //},
				{
                    id: 'ads-manager',
                    title: 'Ads Manager',
                    type: 'item',
                    url: '/ads-manager',
                    classes: 'nav-item',
                    icon: 'fas fa-th'
                },
				{
                    id: 'ad-accounts',
                    title: 'Ad Accounts',
                    type: 'item',
                    url: '/ad-accounts',
                    classes: 'nav-item',
                    icon: 'feather icon-book',
					
                },
				{
                    id: 'media-library',
                    title: 'Media Library',
                    type: 'item',
                    url: '/media-library',
                    classes: 'nav-item',
                    icon: 'feather icon-grid'
                },
				//{
                //    id: 'callback-pixels',
                //    title: 'Callback Pixels',
                //    type: 'item',
                //    url: '/callback-pixels',
                //    classes: 'nav-item',
                //    icon: 'fas fa-project-diagram'
               // },
				{
                    id: 'account',
                    title: 'Account',
                    type: 'item',
                    url: '/account',
                    classes: 'nav-item',
                    icon: 'feather icon-user'
                },
				{
                    id: 'contact',
                    title: 'Contact',
                    type: 'item',
                    url: '/contact',
                    classes: 'nav-item',
                    icon: 'fa fa-envelope'
                },
				{
                    id: 'tos-page',
                    title: 'Terms of Service',
                    type: 'item',
                    url: '/tos',
                    classes: 'nav-item',
                    icon: 'fa fa-file'
                },
				{
                    id: 'privacy',
                    title: 'Privacy Policy',
                    type: 'item',
                    url: '/privacy',
                    classes: 'nav-item',
                    icon: 'fa fa-lock'
                },
                {
                    id: 'logout',
                    title: 'Logout',
                    type: 'item',
                    url: '/logout',
                    classes: 'nav-item',
                    icon: 'feather icon-log-out'
                },
				{
                    id: 'dashboard',
                    title: 'Dashboard',
                    type: 'collapse',
                    icon: 'feather icon-home',
                    children: [
                        {
                            id: 'default',
                            title: 'Default',
                            type: 'item',
                            url: '/app/dashboard/default'
                        },
                        {
                            id: 'e-commerce',
                            title: 'Ecommerce',
                            type: 'item',
                            url: '/app/dashboard/e-commerce'
                        },
                        {
                            id: 'crm',
                            title: 'CRM',
                            type: 'item',
                            url: '/app/dashboard/crm'
                        },
                        {
                            id: 'analytics',
                            title: 'Analytics',
                            type: 'item',
                            url: '/app/dashboard/analytics'
                        },
                        {
                            id: 'crypto',
                            title: 'Crypto',
                            type: 'item',
                            url: '/app/dashboard/crypto',
                            badge: {
                                title: 'NEW',
                                type: 'label-danger'
                            }
                        },
                        {
                            id: 'project',
                            title: 'Project',
                            type: 'item',
                            url: '/app/dashboard/project'
                        }
                    ]
                },
                {
                    id: 'layout',
                    title: 'Page Layouts',
                    type: 'collapse',
                    icon: 'feather icon-layout',
                    children: [
                        {
                            id: 'vertical',
                            title: 'Vertical',
                            type: 'collapse',
                            children: [
                                {
                                    id: 'static',
                                    title: 'Static',
                                    type: 'item',
                                    url: '/layout/vertical/static',
                                    target: true
                                },
                                {
                                    id: 'fixed',
                                    title: 'Fixed',
                                    type: 'item',
                                    url: '/layout/vertical/fixed',
                                    target: true
                                },
                                {
                                    id: 'nav-fixed',
                                    title: 'Navbar Fixed',
                                    type: 'item',
                                    url: '/layout/vertical/nav-fixed',
                                    target: true
                                },
                                {
                                    id: 'collapse-menu',
                                    title: 'Collapse Menu',
                                    type: 'item',
                                    url: '/layout/vertical/collapse-menu',
                                    target: true
                                },
                                {
                                    id: 'v-rtl',
                                    title: 'Vertical RTL',
                                    type: 'item',
                                    url: '/layout/vertical/v-rtl',
                                    target: true
                                }
                            ]
                        },
                        {
                            id: 'horizontal',
                            title: 'Horizontal',
                            type: 'item',
                            url: '/layout/horizontal',
                            target: true
                        },
                        {
                            id: 'horizontal-v2',
                            title: 'Horizontal v2',
                            type: 'item',
                            url: '/layout/horizontal-v2',
                            target: true
                        },
                        {
                            id: 'horizontal-rtl',
                            title: 'Horizontal RTL',
                            type: 'item',
                            url: '/layout/horizontal-rtl',
                            target: true
                        },
                        {
                            id: 'box',
                            title: 'Box Layout',
                            type: 'item',
                            url: '/layout/box',
                            target: true
                        },
                        {
                            id: 'light',
                            title: 'Light Layout',
                            type: 'item',
                            url: '/layout/light',
                            target: true
                        },
                        {
                            id: 'dark',
                            title: 'Dark Layout',
                            type: 'item',
                            url: '/layout/dark',
                            target: true,
                            badge: {
                                title: 'Hot',
                                type: 'badge-danger'
                            }
                        },
                        {
                            id: 'color-icon',
                            title: 'Color Icon',
                            type: 'item',
                            url: '/layout/color-icon',
                            target: true
                        }
                    ]
                },
                {
                    id: 'widgets',
                    title: 'Widget',
                    type: 'collapse',
                    icon: 'feather icon-layers',
                    badge: {
                        title: '100+',
                        type: 'badge-info'
                    },
                    children: [
                        {
                            id: 'widget-statistic',
                            title: 'Statistic',
                            type: 'item',
                            url: '/app/widgets/widget-statistic'
                        },
                        {
                            id: 'widget-data',
                            title: 'Data',
                            type: 'item',
                            url: '/app/widgets/widget-data'
                        },
                        {
                            id: 'widget-table',
                            title: 'Table',
                            type: 'item',
                            url: '/app/widgets/widget-table'
                        },
                        {
                            id: 'widget-user',
                            title: 'User',
                            type: 'item',
                            url: '/app/widgets/widget-user'
                        },
                        {
                            id: 'widget-chart',
                            title: 'Chart',
                            type: 'item',
                            url: '/app/widgets/widget-chart'
                        }
                    ]
                }
              
            ]
        },
        {
            id: 'ui-element',
            title: 'UI ELEMENT',
            type: 'group',
            icon: 'icon-ui',
            children: [
                {
                    id: 'basic',
                    title: 'Basic',
                    type: 'collapse',
                    icon: 'feather icon-box',
                    children: [
                        {
                            id: 'alert',
                            title: 'Alert',
                            type: 'item',
                            url: '/basic/alert'
                        },
                        {
                            id: 'button',
                            title: 'Button',
                            type: 'item',
                            url: '/basic/button'
                        },
                        {
                            id: 'badges',
                            title: 'Badges',
                            type: 'item',
                            url: '/basic/badges'
                        },
                        {
                            id: 'breadcrumb',
                            title: 'Breadcrumb',
                            type: 'item',
                            url: '/basic/breadcrumb'
                        },
                        {
                            id: 'pagination',
                            title: 'Pagination',
                            type: 'item',
                            url: '/basic/pagination'
                        },
                        {
                            id: 'cards',
                            title: 'Cards',
                            type: 'item',
                            url: '/basic/cards'
                        },
                        {
                            id: 'collapse',
                            title: 'Collapse',
                            type: 'item',
                            url: '/basic/collapse'
                        },
                        {
                            id: 'carousel',
                            title: 'Carousel',
                            type: 'item',
                            url: '/basic/carousel'
                        },
                        {
                            id: 'grid-system',
                            title: 'Grid System',
                            type: 'item',
                            url: '/basic/grid-system'
                        },
                        {
                            id: 'progress',
                            title: 'Progress',
                            type: 'item',
                            url: '/basic/progress'
                        },
                        {
                            id: 'modal',
                            title: 'Modal',
                            type: 'item',
                            url: '/basic/modal'
                        },
                        {
                            id: 'spinner',
                            title: 'Spinner',
                            type: 'item',
                            url: '/basic/spinner',
                            badge: {
                                title: 'New',
                                type: 'badge-danger'
                            }
                        },
                        {
                            id: 'tabs-pills',
                            title: 'Tabs & Pills',
                            type: 'item',
                            url: '/basic/tabs-pills'
                        },
                        {
                            id: 'typography',
                            title: 'Typography',
                            type: 'item',
                            url: '/basic/typography'
                        },
                        {
                            id: 'tooltip',
                            title: 'Tooltip',
                            type: 'item',
                            url: '/basic/tooltip'
                        },
                        {
                            id: 'popovers',
                            title: 'Popovers',
                            type: 'item',
                            url: '/basic/popovers'
                        },
                        {
                            id: 'other',
                            title: 'Other',
                            type: 'item',
                            url: '/basic/other'
                        }
                    ]
                },
                {
                    id: 'advance',
                    title: 'Advance',
                    type: 'collapse',
                    icon: 'feather icon-gitlab',
                    children: [
                        {
                            id: 'sweet-alert',
                            title: 'Sweet Alert',
                            type: 'item',
                            url: '/advance/sweet-alert'
                        },
                        {
                            id: 'datepicker',
                            title: 'Datepicker',
                            type: 'item',
                            url: '/advance/datepicker'
                        },
                        {
                            id: 'task-board',
                            title: 'Task Board',
                            type: 'item',
                            url: '/advance/task-board'
                        },
                        {
                            id: 'light-box',
                            title: 'Light Box',
                            type: 'item',
                            url: '/advance/light-box'
                        },
                        {
                            id: 'adv-modal',
                            title: 'Modal',
                            type: 'item',
                            url: '/advance/adv-modal'
                        },
                        {
                            id: 'notification',
                            title: 'Notification',
                            type: 'item',
                            url: '/advance/notification'
                        },
                        {
                            id: 'nestable',
                            title: 'Nestable',
                            type: 'item',
                            url: '/advance/nestable'
                        },
                        {
                            id: 'p-notify',
                            title: 'P-Notify',
                            type: 'item',
                            url: '/advance/p-notify'
                        },
                        {
                            id: 'rating',
                            title: 'Rating',
                            type: 'item',
                            url: '/advance/rating'
                        },
                        {
                            id: 'range-slider',
                            title: 'Range Slider',
                            type: 'item',
                            url: '/advance/range-slider'
                        },
                        {
                            id: 'slider',
                            title: 'Slider',
                            type: 'item',
                            url: '/advance/slider'
                        },
                        {
                            id: 'syntax-highlighter',
                            title: 'Syntax Highlighter',
                            type: 'item',
                            url: '/advance/syntax-highlighter'
                        },
                        {
                            id: 'tour',
                            title: 'Tour',
                            type: 'item',
                            url: '/advance/tour'
                        },
                        {
                            id: 'tree-view',
                            title: 'Tree View',
                            type: 'item',
                            url: '/advance/tree-view'
                        }
                    ]
                }
            ]
        },
        {
            id: 'ui-forms',
            title: 'Forms',
            type: 'group',
            icon: 'icon-group',
            children: [
                {
                    id: 'forms',
                    title: 'Forms',
                    type: 'collapse',
                    icon: 'feather icon-file-text',
                    children: [
                        {
                            id: 'form-basic',
                            title: 'Form Elements',
                            type: 'item',
                            url: '/forms/form-basic'
                        },
                        {
                            id: 'form-advance',
                            title: 'Form Advance',
                            type: 'item',
                            url: '/forms/form-advance'
                        },
                        {
                            id: 'form-validation',
                            title: 'Form Validation',
                            type: 'item',
                            url: '/forms/form-validation'
                        },
                        {
                            id: 'form-masking',
                            title: 'Form Masking',
                            type: 'item',
                            url: '/forms/form-masking'
                        },
                        {
                            id: 'form-wizard',
                            title: 'Form Wizard',
                            type: 'item',
                            url: '/forms/form-wizard'
                        },
                        {
                            id: 'form-picker',
                            title: 'Form Picker',
                            type: 'item',
                            url: '/forms/form-picker'
                        },
                        {
                            id: 'form-select',
                            title: 'Form Select',
                            type: 'item',
                            url: '/forms/form-select'
                        }
                    ]
                }
            ]
        },
        {
            id: 'table',
            title: 'Table',
            type: 'group',
            icon: 'icon-table',
            children: [
                {
                    id: 'tables',
                    title: 'Table',
                    type: 'collapse',
                    icon: 'feather icon-server',
                    children: [
                        {
                            id: 'bootstrap',
                            title: 'Bootstrap Table',
                            type: 'item',
                            url: '/tables/bootstrap'
                        },
                        {
                            id: 'datatable',
                            title: 'React Tables',
                            type: 'collapse',
                            children: [
                                {
                                    id: 'tbl-basic',
                                    title: 'Basic',
                                    type: 'item',
                                    url: '/table/datatable/tbl-basic'
                                },
                                {
                                    id: 'tbl-footer',
                                    title: 'Table Footer',
                                    type: 'item',
                                    url: '/table/datatable/tbl-footer'
                                },
                                {
                                    id: 'tbl-sorting',
                                    title: 'Sorting',
                                    type: 'item',
                                    url: '/table/datatable/tbl-sorting'
                                },
                                {
                                    id: 'tbl-filtering',
                                    title: 'Filtering',
                                    type: 'item',
                                    url: '/table/datatable/tbl-filtering'
                                },
                                {
                                    id: 'tbl-grouping',
                                    title: 'Grouping',
                                    type: 'item',
                                    url: '/table/datatable/tbl-grouping'
                                },
                                {
                                    id: 'tbl-pagination',
                                    title: 'Pagination',
                                    type: 'item',
                                    url: '/table/datatable/tbl-pagination'
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            id: 'chart-maps',
            title: 'Chart & Maps',
            type: 'group',
            icon: 'icon-charts',
            children: [
                {
                    id: 'charts',
                    title: 'Charts',
                    type: 'collapse',
                    icon: 'feather icon-pie-chart',
                    children: [
                        {
                            id: 'amchart',
                            title: 'AmChart4',
                            type: 'item',
                            url: '/charts/amchart'
                        },
                        {
                            id: 'apex-chart',
                            title: 'Apex Chart',
                            type: 'item',
                            url: '/charts/apex-chart'
                        },
                        {
                            id: 'chart-js',
                            title: 'Chart JS',
                            type: 'item',
                            url: '/charts/chart-js'
                        },
                        {
                            id: 'e-chart',
                            title: 'E-Chart',
                            type: 'item',
                            url: '/charts/e-chart'
                        },
                        {
                            id: 'google',
                            title: 'Google',
                            type: 'item',
                            url: '/charts/google-chart'
                        },
                        {
                            id: 'highchart',
                            title: 'Highchart',
                            type: 'item',
                            url: '/charts/highchart'
                        },
                        {
                            id: 'rechart',
                            title: 'Rechart',
                            type: 'item',
                            url: '/charts/rechart'
                        },
                        {
                            id: 'nvd3',
                            title: 'NVD3',
                            type: 'item',
                            url: '/charts/nvd3'
                        },
                        {
                            id: 'radial',
                            title: 'Radial',
                            type: 'item',
                            url: '/charts/radial'
                        }
                    ]
                },
                {
                    id: 'maps',
                    title: 'Maps',
                    type: 'collapse',
                    icon: 'feather icon-map',
                    children: [
                        {
                            id: 'google-map',
                            title: 'Google',
                            type: 'item',
                            url: '/maps/google-map'
                        },
                        {
                            id: 'vector-map',
                            title: 'Vector',
                            type: 'item',
                            url: '/maps/vector-map'
                        }
                    ]
                },
                {
                    id: 'landing-page',
                    title: 'Landing Page',
                    type: 'item',
                    icon: 'feather icon-navigation-2',
                    url: '/landing',
                    classes: 'nav-item',
                    target: true,
                    breadcrumbs: false
                }
            ]
        },
        {
            id: 'pages',
            title: 'Pages',
            type: 'group',
            icon: 'icon-pages',
            children: [
                {
                    id: 'auth',
                    title: 'Authentication',
                    type: 'collapse',
                    icon: 'feather icon-lock',
                    children: [
                        {
                            id: 'signup-1',
                            title: 'Sign up',
                            type: 'item',
                            url: '/auth/signup-1',
                            target: true,
                            breadcrumbs: false
                        },
                        {
                            id: 'signup-2',
                            title: 'Sign up v2',
                            type: 'item',
                            url: '/auth/signup-2',
                            target: true,
                            breadcrumbs: false
                        },
                        {
                            id: 'signup-3',
                            title: 'Sign up v3',
                            type: 'item',
                            url: '/auth/signup-3',
                            target: true,
                            breadcrumbs: false
                        },
                        {
                            id: 'signup-4',
                            title: 'Sign up v4',
                            type: 'item',
                            url: '/auth/signup-4',
                            target: true,
                            breadcrumbs: false
                        },
                        {
                            id: 'signup-5',
                            title: 'Sign up v5',
                            type: 'item',
                            url: '/auth/signup-5',
                            target: true,
                            breadcrumbs: false
                        },
                        {
                            id: 'signin-1',
                            title: 'Sign in',
                            type: 'item',
                            url: '/auth/signin-1',
                            target: true,
                            breadcrumbs: false
                        },
                        {
                            id: 'signin-2',
                            title: 'Sign in v2',
                            type: 'item',
                            url: '/auth/signin-2',
                            target: true,
                            breadcrumbs: false
                        },
                        {
                            id: 'signin-3',
                            title: 'Sign in v3',
                            type: 'item',
                            url: '/auth/signin-3',
                            target: true,
                            breadcrumbs: false
                        },
                        {
                            id: 'signin-4',
                            title: 'Sign in v4',
                            type: 'item',
                            url: '/auth/signin-4',
                            target: true,
                            breadcrumbs: false
                        },
                        {
                            id: 'signin-5',
                            title: 'Sign in v5',
                            type: 'item',
                            url: '/auth/signin-5',
                            target: true,
                            breadcrumbs: false
                        },
                        {
                            id: 'reset-password-1',
                            title: 'Reset Password',
                            type: 'item',
                            url: '/auth/reset-password-1',
                            target: true,
                            breadcrumbs: false
                        },
                        {
                            id: 'reset-password-2',
                            title: 'Reset Password v2',
                            type: 'item',
                            url: '/auth/reset-password-2',
                            target: true,
                            breadcrumbs: false
                        },
                        {
                            id: 'reset-password-3',
                            title: 'Reset Password v3',
                            type: 'item',
                            url: '/auth/reset-password-3',
                            target: true,
                            breadcrumbs: false
                        },
                        {
                            id: 'reset-password-4',
                            title: 'Reset Password v4',
                            type: 'item',
                            url: '/auth/reset-password-4',
                            target: true,
                            breadcrumbs: false
                        },
                        {
                            id: 'reset-password-5',
                            title: 'Reset Password v5',
                            type: 'item',
                            url: '/auth/reset-password-5',
                            target: true,
                            breadcrumbs: false
                        },
                        {
                            id: 'change-password',
                            title: 'Change Password',
                            type: 'item',
                            url: '/auth/change-password',
                            target: true,
                            breadcrumbs: false
                        },
                        {
                            id: 'tabs-auth',
                            title: 'Personal Information',
                            type: 'item',
                            url: '/auth/tabs-auth',
                            target: true,
                            breadcrumbs: false
                        },
                        {
                            id: 'profile-settings',
                            title: 'Profile Settings',
                            type: 'item',
                            url: '/auth/profile-settings',
                            target: true,
                            breadcrumbs: false
                        },
                        {
                            id: 'map-form',
                            title: 'Map Form',
                            type: 'item',
                            url: '/auth/map-form',
                            target: true,
                            breadcrumbs: false
                        },
                        {
                            id: 'subscribe',
                            title: 'Subscribe',
                            type: 'item',
                            url: '/auth/subscribe',
                            target: true,
                            breadcrumbs: false
                        }
                    ]
                },
                {
                    id: 'maintenance',
                    title: 'Maintenance',
                    type: 'collapse',
                    icon: 'feather icon-sliders',
                    children: [
                        {
                            id: 'error',
                            title: 'Error',
                            type: 'item',
                            url: '/maintenance/error',
                            target: true,
                            breadcrumbs: false
                        },
                        {
                            id: 'coming-soon',
                            title: 'Coming Soon',
                            type: 'item',
                            url: '/maintenance/coming-soon',
                            target: true,
                            breadcrumbs: false
                        },
                        {
                            id: 'offline-ui',
                            title: 'Offline UI',
                            type: 'item',
                            url: '/maintenance/offline-ui',
                            target: true,
                            breadcrumbs: false
                        }
                    ]
                }
            ]
        },
        {
            id: 'app',
            title: 'App',
            type: 'group',
            icon: 'icon-app',
            children: [
                {
                    id: 'message',
                    title: 'Message',
                    type: 'item',
                    classes: 'nav-item',
                    url: '/message',
                    icon: 'feather icon-message-circle'
                },
                {
                    id: 'task',
                    title: 'Task',
                    type: 'collapse',
                    icon: 'feather icon-clipboard',
                    children: [
                        {
                            id: 'task-list',
                            title: 'Task List',
                            type: 'item',
                            url: '/task/task-list'
                        },
                        {
                            id: 'task-board',
                            title: 'Task Board',
                            type: 'item',
                            url: '/task/task-board'
                        },
                        {
                            id: 'task-detail',
                            title: 'Task Detail',
                            type: 'item',
                            url: '/task/task-detail'
                        }
                    ]
                },
                {
                    id: 'to-dos',
                    title: 'Todo',
                    type: 'collapse',
                    icon: 'feather icon-check-square',
                    children: [
                        {
                            id: 'todo',
                            title: 'Todo',
                            type: 'item',
                            url: '/todo/todo-basic'
                        }
                    ]
                },
                {
                    id: 'gallery',
                    title: 'Gallery',
                    type: 'collapse',
                    icon: 'feather icon-image',
                    children: [
                        {
                            id: 'grid',
                            title: 'Grid',
                            type: 'item',
                            url: '/gallery/gallery-grid'
                        },
                        {
                            id: 'photo-grid',
                            title: 'Photo Gallery',
                            type: 'item',
                            url: '/gallery/photo-grid'
                        },
                        {
                            id: 'masonry',
                            title: 'Masonry',
                            type: 'item',
                            url: '/gallery/gallery-masonry'
                        },
                        {
                            id: 'gallery-advance',
                            title: 'Advance',
                            type: 'item',
                            url: '/gallery/gallery-advance'
                        }
                    ]
                }
            ]
        },
        {
            id: 'extension',
            title: 'Extension',
            type: 'group',
            icon: 'icon-extension',
            children: [
                {
                    id: 'editor',
                    title: 'Editor',
                    type: 'collapse',
                    icon: 'feather icon-file-plus',
                    children: [
                        {
                            id: 'ck-editor',
                            title: 'CK-Editor',
                            type: 'collapse',
                            children: [
                                {
                                    id: 'ck-classic',
                                    title: 'Classic Editor',
                                    type: 'item',
                                    url: '/editor/ck-editor/ck-classic',
                                    target: true
                                },
                                {
                                    id: 'ck-balloon',
                                    title: 'Balloon Editor',
                                    type: 'item',
                                    url: '/editor/ck-editor/ck-balloon',
                                    target: true
                                },
                                {
                                    id: 'ck-inline',
                                    title: 'Inline Editor',
                                    type: 'item',
                                    url: '/editor/ck-editor/ck-inline',
                                    target: true
                                },
                                {
                                    id: 'ck-document',
                                    title: 'Document Editor',
                                    type: 'item',
                                    url: '/editor/ck-editor/ck-document',
                                    target: true
                                }
                            ]
                        },
                        {
                            id: 'rich-editor',
                            title: 'Rich Editor',
                            type: 'item',
                            url: '/editor/rich-editor'
                        },
                        {
                            id: 'jodit-wysiwyg',
                            title: 'Jodit WYSIWYG',
                            type: 'item',
                            url: '/editor/jodit-wysiwyg'
                        }
                    ]
                },
                {
                    id: 'invoice',
                    title: 'Invoice',
                    type: 'collapse',
                    icon: 'feather icon-file-minus',
                    children: [
                        {
                            id: 'invoice-basic',
                            title: 'Invoice Basic',
                            type: 'item',
                            url: '/invoice/invoice-basic'
                        },
                        {
                            id: 'invoice-summary',
                            title: 'Invoice Summary',
                            type: 'item',
                            url: '/invoice/invoice-summary'
                        },
                        {
                            id: 'invoice-list',
                            title: 'Invoice List',
                            type: 'item',
                            url: '/invoice/invoice-list'
                        }
                    ]
                },
                {
                    id: 'full-calendar',
                    title: 'Full Calendar',
                    type: 'item',
                    url: '/full-calendar',
                    classes: 'nav-item',
                    icon: 'feather icon-calendar'
                },
                {
                    id: 'file-upload',
                    title: 'File Upload',
                    type: 'item',
                    url: '/file-upload',
                    classes: 'nav-item',
                    icon: 'feather icon-upload-cloud'
                },
                {
                    id: 'image-cropper',
                    title: 'Image Cropper',
                    type: 'item',
                    url: '/image-cropper',
                    classes: 'nav-item',
                    icon: 'feather icon-image'
                }
            ]
        },
        {
            id: 'support',
            title: 'Support',
            type: 'group',
            icon: 'icon-support',
            children: [
                {
                    id: 'menu-level',
                    title: 'Menu Levels',
                    type: 'collapse',
                    icon: 'feather icon-menu',
                    children: [
                        {
                            id: 'menu-level-1.1',
                            title: 'Menu Level 1.1',
                            type: 'item',
                            url: '#!'
                        },
                        {
                            id: 'menu-level-1.2',
                            title: 'Menu Level 2.2',
                            type: 'collapse',
                            children: [
                                {
                                    id: 'menu-level-2.1',
                                    title: 'Menu Level 2.1',
                                    type: 'item',
                                    url: '#'
                                },
                                {
                                    id: 'menu-level-2.2',
                                    title: 'Menu Level 2.2',
                                    type: 'collapse',
                                    children: [
                                        {
                                            id: 'menu-level-3.1',
                                            title: 'Menu Level 3.1',
                                            type: 'item',
                                            url: '#'
                                        },
                                        {
                                            id: 'menu-level-3.2',
                                            title: 'Menu Level 3.2',
                                            type: 'item',
                                            url: '#'
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
              
                {
                    id: 'sample-page',
                    title: 'Sample Page',
                    type: 'item',
                    url: '/sample-page',
                    classes: 'nav-item',
                    icon: 'feather icon-sidebar'
                },
				
                {
                    id: 'documentation',
                    title: 'Documentation',
                    type: 'item',
                    icon: 'feather icon-book',
                    classes: 'nav-item',
                    url: 'http://html.codedthemes.com/datta-able/react/docs',
                    target: true,
                    external: true
                }
            ]
        }

    ]
};

export default menuItems;
