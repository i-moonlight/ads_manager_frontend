let BACKEND_SERVER = null;
if (process.env.REACT_APP_BACKEND_SERVER) {
    BACKEND_SERVER = process.env.REACT_APP_BACKEND_SERVER;
} else {
    BACKEND_SERVER = 'http://localhost:8000/api/';
}

export const BASENAME = ''; // don't add '/' at end off BASENAME
export const BASE_URL = '/app/dashboard/default';
export const BASE_TITLE = ' | Link Clicks ';
export const API_SERVER = BACKEND_SERVER;

export const CONFIG = {
    layout: 'vertical', // vertical, horizontal
    subLayout: '', // null, layout-2, layout-2-2, layout-3, layout-4, layout-4-2, layout-6, layout-8
    collapseMenu: false, // mini-menu
    layoutType: 'menu-dark', // menu-dark, menu-light, dark
    navIconColor: false,
    headerBackColor: 'header-default', // header-default, header-blue, header-red, header-purple, header-lightblue, header-dark
    navBackColor: 'navbar-default', // navbar-default, navbar-blue, navbar-red, navbar-purple, navbar-lightblue, navbar-dark
    navBrandColor: 'brand-default', // brand-default, brand-blue, brand-red, brand-purple, brand-lightblue, brand-dark
    navBackImage: false, // false, navbar-image-1, navbar-image-2, navbar-image-3, navbar-image-4, navbar-image-5
    rtlLayout: false,
    navFixedLayout: true, // only for vertical layouts
    headerFixedLayout: false, // only for vertical layouts
    boxLayout: false,
    navDropdownIcon: 'style1', // style1, style2, style3
    navListIcon: 'style1', // style1, style2, style3, style4, style5, style6
    navActiveListColor: 'active-default', // active-default, active-blue, active-red, active-purple, active-lightblue, active-dark
    navListTitleColor: 'title-default', // title-default, title-blue, title-red, title-purple, title-lightblue, title-dark
    navListTitleHide: false,
    configBlock: true,
    layout6Background: 'linear-gradient(to right, #A445B2 0%, #D41872 52%, #FF0066 100%)', // used only for pre-layout = layout-6
    layout6BackSize: '' // 'auto' - for background pattern, 'cover' - for background images & used only for pre-layout = layout-6
};

export const adsManagerTabs = {
    campaign: 'campaign',
    adSet: 'adSet',
    ad: 'ad'
};
