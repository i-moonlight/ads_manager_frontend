import { closeModal, resetAccountAds, resetAdAuthenticate, setAdAccount } from '../store/slices/ad-accounts';
import { apiSlice } from './api-slice';

export const adAccountsApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getAccountAdsAll: builder.query({
            query: () => 'ad_accounts/',
            async onQueryStarted(_, { dispatch, queryFulfilled }) {
                try {
                    await queryFulfilled;
                } catch (error) {
                    dispatch(resetAccountAds());
                }
            }
        }),
        submitAds: builder.mutation({
            query: ({ account_id, account_name, ad_platform }) => ({
                url: 'ad_accounts/',
                method: 'POST',
                body: { account_id, account_name, ad_platform }
            }),
            async onQueryStarted({ ad_platform }, { dispatch, queryFulfilled }) {
                const { data } = await queryFulfilled;
                const { message, ...submitAdsData } = data;

                dispatch(
                    adAccountsApiSlice.util.updateQueryData('getAccountAdsAll', undefined, (draft) => {
                        draft.accounts.push(submitAdsData);
                    })
                );

                dispatch(setAdAccount({ message, ad_platform, account_name: submitAdsData.account_name }));
            }
        }),
        googleAuthenticateStart: builder.query({ query: () => 'google_ads/enable' }),
        googleAuthenticate: builder.mutation({
            query: ({ state, code }) => ({
                url: 'google_ads/oauth',
                method: 'POST',
                body: { state, code }
            }),
            async onQueryStarted(_, { dispatch, queryFulfilled }) {
                try {
                    const { data } = await queryFulfilled;

                    if (data.accounts.length === 1) {
                        const { account_id, account_name } = data.accounts[0];
                        const ad_platform = data.ad_platform;

                        dispatch(adAccountsApiSlice.endpoints.submitAds.initiate({ account_id, account_name, ad_platform }));
                        dispatch(closeModal());
                    }
                } catch (error) {
                    dispatch(resetAdAuthenticate());
                }
            }
        }),
        googleDisableAds: builder.mutation({
            query: (taskId) => ({ url: 'google_ads/disable', method: 'DELETE', body: { taskId } }),
            async onQueryStarted(_, { dispatch, queryFulfilled }) {
                await queryFulfilled;
                dispatch(
                    adAccountsApiSlice.util.updateQueryData('getAccountAdsAll', undefined, (draft) => {
                        draft.accounts = draft.accounts.filter((account) => account.ad_platform_data.account_platform !== 'google_ads');
                    })
                );
            }
        }),
        linkedinAuthenticateStart: builder.query({ query: () => 'linkedin/enable' }),
        linkedinAuthenticate: builder.mutation({
            query: ({ code }) => ({
                url: 'linkedin/oauth',
                method: 'POST',
                body: { code }
            }),
            async onQueryStarted(_, { dispatch, queryFulfilled }) {
                try {
                    const { data } = await queryFulfilled;

                    if (data.accounts.length === 1) {
                        const { account_id, account_name } = data.accounts[0];
                        const ad_platform = data.ad_platform;

                        dispatch(adAccountsApiSlice.endpoints.submitAds.initiate({ account_id, account_name, ad_platform }));
                        dispatch(closeModal());
                    }
                } catch (error) {
                    dispatch(resetAdAuthenticate());
                }
            }
        }),
        linkedinDisableAds: builder.mutation({
            query: (taskId) => ({ url: 'linkedin/disable', method: 'DELETE', body: { taskId } }),
            async onQueryStarted(_, { dispatch, queryFulfilled }) {
                await queryFulfilled;
                dispatch(
                    adAccountsApiSlice.util.updateQueryData('getAccountAdsAll', undefined, (draft) => {
                        draft.accounts = draft.accounts.filter((account) => account.ad_platform_data.account_platform !== 'linkedin');
                    })
                );
            }
        }),
        metaAuthenticateStart: builder.query({ query: () => 'meta_ads/enable' }),
        metaAuthenticate: builder.mutation({
            query: ({ code }) => ({
                url: 'meta_ads/oauth',
                method: 'POST',
                body: { code }
            }),
            async onQueryStarted(_, { dispatch, queryFulfilled }) {
                try {
                    const { data } = await queryFulfilled;

                    if (data.accounts.length === 1) {
                        const { account_id, account_name } = data.accounts[0];
                        const ad_platform = data.ad_platform;

                        dispatch(adAccountsApiSlice.endpoints.submitAds.initiate({ account_id, account_name, ad_platform }));
                        dispatch(closeModal());
                    }
                } catch (error) {
                    dispatch(resetAdAuthenticate());
                }
            }
        }),
        metaDisableAds: builder.mutation({
            query: (taskId) => ({ url: 'meta_ads/disable', method: 'DELETE', body: { taskId } }),
            async onQueryStarted(_, { dispatch, queryFulfilled }) {
                await queryFulfilled;
                dispatch(
                    adAccountsApiSlice.util.updateQueryData('getAccountAdsAll', undefined, (draft) => {
                        draft.accounts = draft.accounts.filter((account) => account.ad_platform_data.account_platform !== 'meta_ads');
                    })
                );
            }
        }),
        pinterestAuthenticateStart: builder.query({ query: () => 'pinterest/enable' }),
        pinterestAuthenticate: builder.mutation({
            query: ({ code }) => ({
                url: 'pinterest/oauth',
                method: 'POST',
                body: { code }
            }),
            async onQueryStarted(_, { dispatch, queryFulfilled }) {
                try {
                    const { data } = await queryFulfilled;

                    if (data.accounts.length === 1) {
                        const { account_id, account_name } = data.accounts[0];
                        const ad_platform = data.ad_platform;

                        dispatch(adAccountsApiSlice.endpoints.submitAds.initiate({ account_id, account_name, ad_platform }));
                        dispatch(closeModal());
                    }
                } catch (error) {
                    dispatch(resetAdAuthenticate());
                }
            }
        }),
        pinterestDisableAds: builder.mutation({
            query: () => ({ url: 'pinterest/disable', method: 'DELETE' }),
            async onQueryStarted(_, { dispatch, queryFulfilled }) {
                await queryFulfilled;
                dispatch(
                    adAccountsApiSlice.util.updateQueryData('getAccountAdsAll', undefined, (draft) => {
                        draft.accounts = draft.accounts.filter((account) => account.ad_platform_data.account_platform !== 'pinterest');
                    })
                );
            }
        }),
        snapchatAuthenticateStart: builder.query({ query: () => 'snapchat/enable' }),
        snapchatAuthenticate: builder.mutation({
            query: ({ code }) => ({
                url: 'snapchat/oauth',
                method: 'POST',
                body: { code }
            }),
            async onQueryStarted(_, { dispatch, queryFulfilled }) {
                try {
                    const { data } = await queryFulfilled;

                    if (data.accounts.length === 1) {
                        const { account_id, account_name } = data.accounts[0];
                        const ad_platform = data.ad_platform;

                        dispatch(adAccountsApiSlice.endpoints.submitAds.initiate({ account_id, account_name, ad_platform }));
                        dispatch(closeModal());
                    }
                } catch (error) {
                    dispatch(resetAdAuthenticate());
                }
            }
        }),
        snapchatDisableAds: builder.mutation({
            query: () => ({ url: 'snapchat/disable', method: 'DELETE' }),
            async onQueryStarted(_, { dispatch, queryFulfilled }) {
                await queryFulfilled;
                dispatch(
                    adAccountsApiSlice.util.updateQueryData('getAccountAdsAll', undefined, (draft) => {
                        draft.accounts = draft.accounts.filter((account) => account.ad_platform_data.account_platform !== 'snapchat');
                    })
                );
            }
        }),
        tiktokAuthenticateStart: builder.query({ query: () => 'tiktok/enable' }),
        tiktokAuthenticate: builder.mutation({
            query: ({ code }) => ({
                url: 'tiktok/oauth',
                method: 'POST',
                body: { code }
            }),
            async onQueryStarted(_, { dispatch, queryFulfilled }) {
                try {
                    const { data } = await queryFulfilled;

                    if (data.accounts.length === 1) {
                        const { account_id, account_name } = data.accounts[0];
                        const ad_platform = data.ad_platform;

                        dispatch(adAccountsApiSlice.endpoints.submitAds.initiate({ account_id, account_name, ad_platform }));
                        dispatch(closeModal());
                    }
                } catch (error) {
                    dispatch(resetAdAuthenticate());
                }
            }
        }),
        tiktokDisableAds: builder.mutation({
            query: () => ({ url: 'tiktok/disable', method: 'DELETE' }),
            async onQueryStarted(_, { dispatch, queryFulfilled }) {
                await queryFulfilled;
                dispatch(
                    adAccountsApiSlice.util.updateQueryData('getAccountAdsAll', undefined, (draft) => {
                        draft.accounts = draft.accounts.filter((account) => account.ad_platform_data.account_platform !== 'tiktok');
                    })
                );
            }
        })
    })
});

export const {
    useGetAccountAdsAllQuery,
    useSubmitAdsMutation,
    useGoogleAuthenticateStartQuery,
    useGoogleAuthenticateMutation,
    useGoogleDisableAdsMutation,
    useLinkedinAuthenticateStartQuery,
    useLinkedinAuthenticateMutation,
    useLinkedinDisableAdsMutation,
    useMetaAuthenticateStartQuery,
    useMetaAuthenticateMutation,
    useMetaDisableAdsMutation,
    usePinterestAuthenticateStartQuery,
    usePinterestAuthenticateMutation,
    usePinterestDisableAdsMutation,
    useSnapchatAuthenticateStartQuery,
    useSnapchatAuthenticateMutation,
    useSnapchatDisableAdsMutation,
    useTiktokAuthenticateStartQuery,
    useTiktokAuthenticateMutation,
    useTiktokDisableAdsMutation
} = adAccountsApiSlice;
