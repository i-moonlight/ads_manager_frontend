import { createSlice } from '@reduxjs/toolkit';
import { adAccountsApiSlice } from '../../apis/ad-accounts-api-slice';

const initialState = {
    accounts_loader: false,
    ad_accounts: {
        google_ads: null,
        linkedin: null,
        meta_ads: null,
        pinterest: null,
        snapchat: null,
        tiktok: null
    },
    ad_platform: null,
    platform_accounts: null,
    show_form: false,
    window_url: '',
    window_location: false,
    message: null,
    ad_accounts_requested: false,
    ad_account_submitted: false
};

const slice = createSlice({
    name: 'adAccounts',
    initialState,
    reducers: {
        closeModal: (state) => {
            state.show_form = false;
            state.accounts_loader = false;
        },
        openModal: (state) => {
            state.accounts_loader = true;
        },
        resetAdAccounts: () => {
            return initialState;
        },
        resetAccountAds: (state) => {
            state.ad_accounts.google_ads = null;
            state.ad_accounts.linkedin = null;
            state.ad_accounts.meta_ads = null;
            state.ad_accounts.pinterest = null;
            state.ad_accounts.snapchat = null;
            state.ad_accounts.tiktok = null;
            state.ad_platform = null;
            state.show_form = false;
        },
        setAdAccount: (state, action) => {
            const { message, ad_platform, account_name } = action.payload;
            state.message = message;
            state.ad_platform = null;
            state.show_form = false;
            state.ad_accounts[ad_platform] = account_name;
        },
        resetAdAuthenticate: (state) => {
            state.ad_platform = null;
            state.platform_accounts = null;
            state.window_location = false;
            state.window_url = '';
        }
    },
    extraReducers: (builder) => {
        builder.addMatcher(adAccountsApiSlice.endpoints.getAccountAdsAll.matchFulfilled, (state, action) => {
            const { message, accounts } = action.payload;

            const google_ads = accounts?.find(
                (account) => account.ad_platform_data.account_platform === 'google_ads' && message === 'success'
            );

            const meta_ads = accounts?.find((account) => account.ad_platform_data.account_platform === 'meta_ads' && message === 'success');

            const linkedin = accounts?.find((account) => account.ad_platform_data.account_platform === 'linkedin' && message === 'success');

            const pinterest = accounts?.find(
                (account) => account.ad_platform_data.account_platform === 'pinterest' && message === 'success'
            );

            const snapchat = accounts?.find((account) => account.ad_platform_data.account_platform === 'snapchat' && message === 'success');

            const tiktok = accounts?.find((account) => account.ad_platform_data.account_platform === 'tiktok' && message === 'success');

            state.message = message;
            state.ad_platform = null;
            state.show_form = false;
            state.ad_accounts.google_ads = google_ads?.account_name;
            state.ad_accounts.linkedin = linkedin?.account_name;
            state.ad_accounts.meta_ads = meta_ads?.account_name;
            state.ad_accounts.pinterest = pinterest?.account_name;
            state.ad_accounts.snapchat = snapchat?.account_name;
            state.ad_accounts.tiktok = tiktok?.account_name;
        });
        builder.addMatcher(adAccountsApiSlice.endpoints.submitAds.matchFulfilled, (state) => {
            state.show_form = false;
            state.ad_account_submitted = true;
            state.ad_platform = null;
        });
        builder.addMatcher(adAccountsApiSlice.endpoints.googleAuthenticateStart.matchFulfilled, (state, action) => {
            const { authorization_url } = action.payload;
            state.ad_platform = 'google_ads';
            state.ad_accounts_requested = false;
            state.ad_account_submitted = false;
            state.show_form = false;
            state.window_location = true;
            state.window_url = authorization_url;

            window.location.replace(authorization_url);
        });
        builder.addMatcher(adAccountsApiSlice.endpoints.googleAuthenticate.matchFulfilled, (state, action) => {
            if (action.payload.accounts.length > 1) {
                state.platform_accounts = action.payload.accounts;
                state.ad_platform = 'google_ads';
                state.show_form = true;
                state.ad_accounts_requested = true;
                state.accounts_loader = false;
                state.window_url = '';
            }
        });
        builder.addMatcher(adAccountsApiSlice.endpoints.googleDisableAds.matchFulfilled, (state) => {
            state.window_url = '';
            state.ad_platform = null;
            state.show_form = false;
            state.ad_accounts.google_ads = null;
        });
        builder.addMatcher(adAccountsApiSlice.endpoints.linkedinAuthenticateStart.matchFulfilled, (state, action) => {
            const { authorization_url } = action.payload;

            state.ad_platform = 'linkedin';
            state.ad_accounts_requested = false;
            state.ad_account_submitted = false;
            state.show_form = false;
            state.window_location = true;
            state.window_url = authorization_url;

            window.location.replace(authorization_url);
        });
        builder.addMatcher(adAccountsApiSlice.endpoints.linkedinAuthenticate.matchFulfilled, (state, action) => {
            if (action.payload.accounts.length > 1) {
                state.platform_accounts = action.payload.accounts;
                state.ad_platform = 'linkedin';
                state.show_form = true;
                state.ad_accounts_requested = true;
                state.accounts_loader = false;
                state.window_url = '';
            }
        });
        builder.addMatcher(adAccountsApiSlice.endpoints.linkedinDisableAds.matchFulfilled, (state) => {
            state.window_url = '';
            state.ad_platform = null;
            state.show_form = false;
            state.ad_accounts.linkedin = null;
        });
        builder.addMatcher(adAccountsApiSlice.endpoints.metaAuthenticateStart.matchFulfilled, (state, action) => {
            const { authorization_url } = action.payload;

            state.ad_platform = 'meta_ads';
            state.ad_accounts_requested = false;
            state.ad_account_submitted = false;
            state.show_form = false;
            state.window_location = true;
            state.window_url = authorization_url;

            window.location.replace(authorization_url);
        });
        builder.addMatcher(adAccountsApiSlice.endpoints.metaAuthenticate.matchFulfilled, (state, action) => {
            if (action.payload.accounts.length > 1) {
                state.platform_accounts = action.payload.accounts;
                state.ad_platform = 'meta_ads';
                state.show_form = true;
                state.ad_accounts_requested = true;
                state.window_url = '';
            }
        });
        builder.addMatcher(adAccountsApiSlice.endpoints.metaDisableAds.matchFulfilled, (state) => {
            state.window_url = '';
            state.ad_platform = null;
            state.show_form = false;
            state.ad_accounts.meta_ads = null;
        });
        builder.addMatcher(adAccountsApiSlice.endpoints.pinterestAuthenticateStart.matchFulfilled, (state, action) => {
            const { authorization_url } = action.payload;

            state.ad_platform = 'pinterest';
            state.ad_accounts_requested = false;
            state.ad_account_submitted = false;
            state.show_form = false;
            state.window_location = true;
            state.window_url = authorization_url;

            window.location.replace(authorization_url);
        });
        builder.addMatcher(adAccountsApiSlice.endpoints.pinterestAuthenticate.matchFulfilled, (state, action) => {
            if (action.payload.accounts.length > 1) {
                state.platform_accounts = action.payload.accounts;
                state.ad_platform = 'pinterest';
                state.show_form = true;
                state.ad_accounts_requested = true;
                state.accounts_loader = false;
                state.window_url = '';
            }
        });
        builder.addMatcher(adAccountsApiSlice.endpoints.pinterestDisableAds.matchFulfilled, (state) => {
            state.window_url = '';
            state.ad_platform = null;
            state.show_form = false;
            state.ad_accounts.pinterest = null;
        });
        builder.addMatcher(adAccountsApiSlice.endpoints.snapchatAuthenticateStart.matchFulfilled, (state, action) => {
            const { authorization_url } = action.payload;

            state.ad_platform = 'snapchat';
            state.ad_accounts_requested = false;
            state.ad_account_submitted = false;
            state.show_form = false;
            state.window_location = true;
            state.window_url = authorization_url;

            window.location.replace(authorization_url);
        });
        builder.addMatcher(adAccountsApiSlice.endpoints.snapchatAuthenticate.matchFulfilled, (state, action) => {
            if (action.payload.accounts.length > 1) {
                state.platform_accounts = action.payload.accounts;
                state.ad_platform = 'snapchat';
                state.show_form = true;
                state.ad_accounts_requested = true;
                state.accounts_loader = false;
                state.window_url = '';
            }
        });
        builder.addMatcher(adAccountsApiSlice.endpoints.snapchatDisableAds.matchFulfilled, (state) => {
            state.window_url = '';
            state.ad_platform = null;
            state.show_form = false;
            state.ad_accounts.snapchat = null;
        });
        builder.addMatcher(adAccountsApiSlice.endpoints.tiktokAuthenticateStart.matchFulfilled, (state, action) => {
            const { authorization_url } = action.payload;

            state.ad_platform = 'tiktok';
            state.ad_accounts_requested = false;
            state.ad_account_submitted = false;
            state.show_form = false;
            state.window_location = true;
            state.window_url = authorization_url;

            window.location.replace(authorization_url);
        });
        builder.addMatcher(adAccountsApiSlice.endpoints.tiktokAuthenticate.matchFulfilled, (state, action) => {
            if (action.payload.accounts.length > 1) {
                state.platform_accounts = action.payload.accounts;
                state.ad_platform = 'tiktok';
                state.show_form = true;
                state.ad_accounts_requested = true;
                state.accounts_loader = false;
                state.window_url = '';
            }
        });
        builder.addMatcher(adAccountsApiSlice.endpoints.tiktokDisableAds.matchFulfilled, (state) => {
            state.window_url = '';
            state.ad_platform = null;
            state.show_form = false;
            state.ad_accounts.tiktok = null;
        });
    }
});

export const { closeModal, openModal, resetAdAccounts, resetAccountAds, setAdAccount, resetAdAuthenticate } = slice.actions;

export const selectAccountsLoader = (state) => state[slice.name].accounts_loader;
export const selectAdAccounts = (state) => state[slice.name].ad_accounts;
export const selectAdPlatform = (state) => state[slice.name].ad_platform;
export const selectPlatformAccounts = (state) => state[slice.name].platform_accounts;
export const selectShowForm = (state) => state[slice.name].show_form;
export const selectWindowUrl = (state) => state[slice.name].window_url;
export const selectWindowLocation = (state) => state[slice.name].window_location;
export const selectMessage = (state) => state[slice.name].message;
export const selectAdAccountsRequested = (state) => state[slice.name].ad_accounts_requested;
export const selectAdAccountSubmitted = (state) => state[slice.name].ad_account_submitted;

export default slice.reducer;
