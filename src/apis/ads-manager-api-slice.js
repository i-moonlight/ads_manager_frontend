import * as urlApis from './constantsApi';
import { apiSlice } from './api-slice';

export const adsManagerApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        // campaign
        campaignGetByIdAndUser: builder.query({ query: (campaign_id) => urlApis.API_CAMPAIGN_GET_BY_ID_AND_USER + campaign_id + '/' }),
        campaignBasicGetAllByUser: builder.query({ query: () => urlApis.API_CAMPAIGN_BASIC_GET_ALL_BY_USER }),
        campaignAddWithDraftModeByUser: builder.mutation({
            query: (data) => ({
                url: urlApis.API_CAMPAIGN_ADD_WITH_DRAFT_MODE_BY_USER,
                method: 'POST',
                body: data
            }),
            async onQueryStarted(_, { dispatch, getState, queryFulfilled }) {
                const { data } = await queryFulfilled;

                dispatch(
                    adsManagerApiSlice.util.updateQueryData(
                        'adsManagerIndex',
                        { startDate: getState().adsManager.startDate, endDate: getState().adsManager.endDate },
                        (draft) => {
                            draft.campaigns.push(data.campaign);
                            draft.ad_sets.push(data.ad_set);
                        }
                    )
                );
            }
        }),
        campaignEditWithDraftModeByUser: builder.mutation({
            query: (data) => ({
                url: urlApis.API_CAMPAIGN_EDIT_WITH_DRAFT_MODE_BY_USER,
                method: 'PATCH',
                body: data
            })
        }),
        campaignGetAllByUser: builder.query({
            query: ({ startDate, endDate, _amSearchValue }) =>
                urlApis.API_CAMPAIGN_GET_ALL_BY_USER + startDate + '/' + endDate + '/?search_value=' + _amSearchValue
        }),
        campaignGetAllByUser1: builder.query({
            query: ({ startDate, endDate }) => urlApis.API_CAMPAIGN_GET_ALL_BY_USER_1 + startDate + '/' + endDate,
            providesTags: ['campaignGetAllByUser1']
        }),
        campaignUnGroupGetAllByUser: builder.query({
            query: ({ startDate, endDate, _amSearchValue }) =>
                urlApis.API_CAMPAIGN_UNGROUP_GET_ALL_BY_USER + startDate + '/' + endDate + '/?search_value=' + _amSearchValue
        }),
        campaignsDeleteByUser: builder.mutation({
            query: (ids) => ({ url: urlApis.API_CAMPAIGN_DELETE_BY_USER, method: 'DELETE', body: { campaign_ids: ids } }),
            async onQueryStarted(ids, { dispatch, getState, queryFulfilled }) {
                await queryFulfilled;

                dispatch(
                    adsManagerApiSlice.util.updateQueryData(
                        'adsManagerIndex',
                        { startDate: getState().adsManager.startDate, endDate: getState().adsManager.endDate },
                        (draft) => {
                            draft.campaigns = draft.campaigns.filter((c) => !ids.includes(c.id));

                            const ad_sets_ids = draft.ad_sets.filter((as) => ids.includes(as.campaign)).map((as) => as.id);

                            draft.ad_sets = draft.ad_sets.filter((as) => !ad_sets_ids.includes(as.id));
                            draft.ads = draft.ads.filter((a) => !ids.includes(a.campaign));

                            draft.campaigns_platforms = draft.campaigns_platforms.filter((cp) => !ids.includes(cp.campaign));
                            draft.ad_sets_platforms = draft.ad_sets_platforms.filter((asp) => !ad_sets_ids.includes(asp.ad_set));
                            draft.ads_platforms = draft.ads_platforms.filter((ap) => !ids.includes(ap.campaign_id));
                            draft.ads_performance = draft.ads_performance.filter((ap) => !ids.includes(ap.campaign_id));
                        }
                    )
                );
            }
        }),
        campaignChangeStatusRunAndPauseByUser: builder.mutation({
            query: (data) => ({
                url: urlApis.API_CAMPAIGN_CHANGE_STATUS_RUN_AND_PAUSE_BY_USER,
                method: 'PATCH',
                body: data
            }),
            async onQueryStarted(_, { dispatch, getState, queryFulfilled }) {
                const { data } = await queryFulfilled;

                dispatch(
                    adsManagerApiSlice.util.updateQueryData(
                        'adsManagerIndex',
                        { startDate: getState().adsManager.startDate, endDate: getState().adsManager.endDate },
                        (draft) => {
                            data.forEach((d) => {
                                draft.campaigns = draft.campaigns.map((c) => (c.id === d.id ? d : c));

                                draft.campaigns_platforms = draft.campaigns_platforms.map(
                                    (cp) => d.campaigns_platform.find((dcp) => dcp.id === cp.id) || cp
                                );
                            });
                        }
                    )
                );
            }
        }),
        campaignUpdateByUser: builder.mutation({
            query: (data) => ({
                url: urlApis.API_CAMPAIGN_UPDATE_BY_USER,
                method: 'PATCH',
                body: data
            }),
            async onQueryStarted(_, { dispatch, getState, queryFulfilled }) {
                const { data } = await queryFulfilled;

                dispatch(
                    adsManagerApiSlice.util.updateQueryData(
                        'adsManagerIndex',
                        { startDate: getState().adsManager.startDate, endDate: getState().adsManager.endDate },
                        (draft) => {
                            draft.campaigns = draft.campaigns.map((c) => (c.id === data.id ? data : c));

                            draft.campaigns_platforms = draft.campaigns_platforms.map(
                                (cp) => data.campaigns_platform.find((dcp) => dcp.id === cp.id) || cp
                            );
                        }
                    )
                );
            }
        }),
        campaignChangeStatusToPauseByUser: builder.mutation({
            query: (data) => ({
                url: urlApis.API_CAMPAIGN_CHANGE_STATUS_TO_PAUSE_BY_USER,
                method: 'PATCH',
                body: data
            })
        }),
        campaignChangeStatusToRunByUser: builder.mutation({
            query: (data) => ({
                url: urlApis.API_CAMPAIGN_CHANGE_STATUS_TO_RUN_BY_USER,
                method: 'PATCH',
                body: data
            })
        }),

        // CampaignPerformance
        campaignPerformanceUnGroupGetAllByUser: builder.query({
            query: ({ startDate, endDate, _amSearchValue }) =>
                urlApis.API_CAMPAIGN_PERFORMANCE_UNGROUP_GET_ALL_BY_USER + startDate + '/' + endDate + '/?search_value=' + _amSearchValue
        }),
        campaignPerformanceChangeStatusRunAndPauseByUser: builder.mutation({
            query: (data) => ({
                url: urlApis.API_CAMPAIGN_PERFORMANCE_CHANGE_STATUS_RUN_AND_PAUSE_BY_USER,
                method: 'PATCH',
                body: data
            })
        }),

        // CampaignsPlatforms
        campaignsPlatformsChangeStatusRunAndPauseByUser: builder.mutation({
            query: (data) => ({
                url: urlApis.API_CAMPAIGNS_PLATFORMS_CHANGE_STATUS_RUN_AND_PAUSE_BY_USER,
                method: 'PATCH',
                body: data
            })
        }),
        campaignsPlatformsUnGroupGetAllByUser: builder.query({
            query: ({ startDate, endDate }) => urlApis.API_CAMPAIGNS_PLATFORMS_UNGROUP_GET_ALL_BY_USER + startDate + '/' + endDate,
            providesTags: ['campaignsPlatformsUnGroupGetAllByUser']
        }),

        //  ADSET
        adSetGetAllByUser: builder.query({
            query: ({ startDate, endDate, _amSearchValue }) =>
                urlApis.API_AD_SET_GET_ALL_BY_USER + startDate + '/' + endDate + '/?search_value=' + _amSearchValue
        }),
        adSetGetAllByUser1: builder.query({
            query: ({ startDate, endDate }) => urlApis.API_AD_SET_GET_ALL_BY_USER_1 + startDate + '/' + endDate,
            providesTags: ['adSetGetAllByUser1']
        }),
        adSetUnGroupGetAllByUser: builder.query({
            query: ({ startDate, endDate, _amSearchValue }) =>
                urlApis.API_AD_SET_UNGROUP_GET_ALL_BY_USER + startDate + '/' + endDate + '/?search_value=' + _amSearchValue
        }),
        adSetAddWithCampaignByUser: builder.mutation({
            query: (data) => ({
                url: urlApis.API_AD_SET_ADD_WITH_CAMPAIGN_BY_USER,
                method: 'POST',
                body: data
            }),
            async onQueryStarted(_, { dispatch, getState, queryFulfilled }) {
                const { data } = await queryFulfilled;

                dispatch(
                    adsManagerApiSlice.util.updateQueryData(
                        'adsManagerIndex',
                        { startDate: getState().adsManager.startDate, endDate: getState().adsManager.endDate },
                        (draft) => {
                            draft.ad_sets.push(data.ad_set);
                        }
                    )
                );
            }
        }),
        adSetChangeStatusRunAndPauseByUser: builder.mutation({
            query: (data) => ({
                url: urlApis.API_AD_SET_CHANGE_STATUS_RUN_AND_PAUSE_BY_USER,
                method: 'PATCH',
                body: data
            }),
            async onQueryStarted({ ad_set_ids, status, disabled }, { dispatch, getState, queryFulfilled }) {
                const { data } = await queryFulfilled;

                dispatch(
                    adsManagerApiSlice.util.updateQueryData(
                        'adsManagerIndex',
                        { startDate: getState().adsManager.startDate, endDate: getState().adsManager.endDate },
                        (draft) => {
                            data.forEach((d) => {
                                draft.ad_sets = draft.ad_sets.map((as) => (as.id === d.id ? d : as));
                                draft.ad_sets_platforms = draft.ad_sets_platforms.map(
                                    (asp) => d.ad_sets_platforms.find((dasp) => dasp.id === asp.id) || asp
                                );
                            });
                        }
                    )
                );
            }
        }),
        adSetUpdateByUser: builder.mutation({
            query: (data) => ({
                url: urlApis.API_AD_SET_UPDATE_BY_USER,
                method: 'PATCH',
                body: data
            }),
            async onQueryStarted(_, { dispatch, getState, queryFulfilled }) {
                const { data } = await queryFulfilled;

                dispatch(
                    adsManagerApiSlice.util.updateQueryData(
                        'adsManagerIndex',
                        { startDate: getState().adsManager.startDate, endDate: getState().adsManager.endDate },
                        (draft) => {
                            draft.ad_sets = draft.ad_sets.map((as) => (as.id === data.id ? data : as));
                        }
                    )
                );
            }
        }),
        adSetsDeleteByUser: builder.mutation({
            query: (ids) => ({
                url: urlApis.API_AD_SET_DELETE_BY_USER,
                method: 'DELETE',
                body: { ad_set_ids: ids }
            }),
            async onQueryStarted(ids, { dispatch, getState, queryFulfilled }) {
                await queryFulfilled;

                dispatch(
                    adsManagerApiSlice.util.updateQueryData(
                        'adsManagerIndex',
                        { startDate: getState().adsManager.startDate, endDate: getState().adsManager.endDate },
                        (draft) => {
                            draft.ad_sets = draft.ad_sets.filter((as) => !ids.includes(as.id));
                            draft.ads = draft.ads.filter((a) => !ids.includes(a.ad_set));

                            draft.ad_sets_platforms = draft.ad_sets_platforms.filter((asp) => !ids.includes(asp.ad_set));
                            draft.ads_platforms = draft.ads_platforms.filter((ap) => !ids.includes(ap.ad_set_id));
                            draft.ads_performance = draft.ads_performance.filter((ap) => !ids.includes(ap.ad_set_id));
                        }
                    )
                );
            }
        }),
        adSetUpdateExistingByUser: builder.mutation({
            query: (data) => ({
                url: urlApis.API_AD_SET_UPDATE_EXISTING_BY_USER,
                method: 'PATCH',
                body: data
            })
        }),

        // AdSetsPerformance
        adSetPerformanceUnGroupGetAllByUser: builder.query({
            query: ({ startDate, endDate, _amSearchValue }) =>
                urlApis.API_AD_SETS_PERFORMANCE_UNGROUP_GET_ALL_BY_USER + startDate + '/' + endDate + '/?search_value=' + _amSearchValue
        }),

        // AdSetsPlatforms
        adSetsPlatformsChangeStatusRunAndPauseByUser: builder.mutation({
            query: (data) => ({
                url: urlApis.API_AD_SETS_PLATFORMs_CHANGE_STATUS_RUN_AND_PAUSE_BY_USER,
                method: 'PATCH',
                body: data
            }),
            async onQueryStarted(_, { dispatch, getState, queryFulfilled }) {
                const { data } = await queryFulfilled;

                dispatch(
                    adsManagerApiSlice.util.updateQueryData(
                        'adsManagerIndex',
                        { startDate: getState().adsManager.startDate, endDate: getState().adsManager.endDate },
                        (draft) => {
                            data.forEach((d) => {
                                draft.ad_sets_platforms = draft.ad_sets_platforms.map(
                                    (asp) => d.ad_sets_platforms.find((dasp) => dasp.id === asp.id) || asp
                                );

                                draft.ad_sets = draft.ad_sets.map((as) => (as.id === d.id ? d : as));
                            });
                        }
                    )
                );
            }
        }),
        adSetsPlatformsUnGroupGetAllByUser: builder.query({
            query: ({ startDate, endDate }) => urlApis.API_AD_SETS_PLATFORMS_UNGROUP_GET_ALL_BY_USER + startDate + '/' + endDate,
            providesTags: ['adSetsPlatformsUnGroupGetAllByUser']
        }),

        //  ADS
        adsGetAllByUser: builder.query({
            query: ({ startDate, endDate, _amSearchValue }) =>
                urlApis.API_ADS_GET_ALL_BY_USER + startDate + '/' + endDate + '/?search_value=' + _amSearchValue
        }),
        adsGetAllByUser1: builder.query({
            query: ({ startDate, endDate }) => urlApis.API_ADS_GET_ALL_BY_USER_1 + startDate + '/' + endDate,
            providesTags: ['adsGetAllByUser1']
        }),
        adsUnGroupGetAllByUser: builder.query({
            query: ({ startDate, endDate, _amSearchValue }) =>
                urlApis.API_ADS_UNGROUP_GET_ALL_BY_USER + startDate + '/' + endDate + '/?search_value=' + _amSearchValue
        }),
        adsChangeStatusRunAndPauseByUser: builder.mutation({
            query: (data) => ({
                url: urlApis.API_ADS_CHANGE_STATUS_RUN_AND_PAUSE_BY_USER,
                method: 'PATCH',
                body: data
            }),
            async onQueryStarted(_, { dispatch, getState, queryFulfilled }) {
                const { data } = await queryFulfilled;

                dispatch(
                    adsManagerApiSlice.util.updateQueryData(
                        'adsManagerIndex',
                        { startDate: getState().adsManager.startDate, endDate: getState().adsManager.endDate },
                        (draft) => {
                            data.forEach((d) => {
                                draft.ads = draft.ads.map((a) => (a.id === d.id ? d : a));
                                draft.ads_platforms = draft.ads_platforms.map(
                                    (ap) => d.ads_platforms.find((dap) => dap.id === ap.id) || ap
                                );
                            });
                        }
                    )
                );
            }
        }),
        adsUpdateByUser: builder.mutation({
            query: (data) => ({
                url: urlApis.API_ADS_UPDATE_BY_USER,
                method: 'PATCH',
                body: data
            })
        }),
        adsDeleteByUser: builder.mutation({
            query: (ids) => ({
                url: urlApis.API_ADS_DELETE_BY_USER,
                method: 'DELETE',
                body: { ads_ids: ids }
            }),
            async onQueryStarted(ids, { dispatch, getState, queryFulfilled }) {
                await queryFulfilled;

                dispatch(
                    adsManagerApiSlice.util.updateQueryData(
                        'adsManagerIndex',
                        { startDate: getState().adsManager.startDate, endDate: getState().adsManager.endDate },
                        (draft) => {
                            draft.ads = draft.ads.filter((a) => !ids.includes(a.id));
                            draft.ads_platforms = draft.ads_platforms.filter((adp) => !ids.includes(adp.ad_id));
                            draft.ads_performance = draft.ads_performance.filter((ap) => !ids.includes(ap.ad_id));
                        }
                    )
                );
            }
        }),
        adsAddCommonByUser: builder.mutation({
            query: (data) => ({
                url: urlApis.API_ADS_ADD_COMMON_BY_USER,
                method: 'POST',
                body: data
            }),
            async onQueryStarted(_, { dispatch, getState, queryFulfilled }) {
                const { data } = await queryFulfilled;

                dispatch(
                    adsManagerApiSlice.util.updateQueryData(
                        'adsManagerIndex',
                        { startDate: getState().adsManager.startDate, endDate: getState().adsManager.endDate },
                        (draft) => {
                            draft.ads = draft.ads.concat(data.ads);
                            draft.ads_platforms = draft.ads_platforms.concat(data.ads_platforms);

                            data.ad_sets_platforms.forEach((dasp) => {
                                const currentIndex = draft.ad_sets_platforms.findIndex((asp) => asp.id === dasp.id);

                                if (currentIndex !== -1) {
                                    draft.ad_sets_platforms[currentIndex] = dasp;
                                } else {
                                    draft.ad_sets_platforms.push(dasp);
                                }
                            });

                            data.campaigns_platforms.forEach((dcp) => {
                                const currentIndex = draft.campaigns_platforms.findIndex((cp) => cp.id === dcp.id);

                                if (currentIndex !== -1) {
                                    draft.campaigns_platforms[currentIndex] = dcp;
                                } else {
                                    draft.campaigns_platforms.push(dcp);
                                }
                            });

                            draft.campaigns = draft.campaigns.map((c) => (c.id === data.campaign.id ? data.campaign : c));
                            draft.ad_sets = draft.ad_sets.map((as) => (as.id === data.ad_set.id ? data.ad_set : as));
                        }
                    )
                );
            }
        }),
        adsAddGoogleOnlyByUser: builder.mutation({
            query: (data) => ({
                url: urlApis.API_ADS_ADD_GOOGLE_ONLY_BY_USER,
                method: 'POST',
                body: data
            })
        }),
        adsAddPinterestOnlyByUser: builder.mutation({
            query: (data) => ({
                url: urlApis.API_ADS_ADD_PINTEREST_ONLY_BY_USER,
                method: 'POST',
                body: data
            })
        }),
        adsAddMin1080x1080ImageByUser: builder.mutation({
            query: (data) => ({
                url: urlApis.API_ADS_ADD_MIN1080X1080_IMAGE_BY_USER,
                method: 'POST',
                body: data
            })
        }),
        adsAdd1296x1080ImageByUser: builder.mutation({
            query: (data) => ({
                url: urlApis.API_ADS_ADD_1296X1080_IMAGE_BY_USER,
                method: 'POST',
                body: data
            })
        }),
        adsAdd1080x1080ImageByUser: builder.mutation({
            query: (data) => ({
                url: urlApis.API_ADS_ADD_1080X1080_IMAGE_BY_USER,
                method: 'POST',
                body: data
            })
        }),
        adsAdd1080x1920ImageByUser: builder.mutation({
            query: (data) => ({
                url: urlApis.API_ADS_ADD_1080X1920_IMAGE_BY_USER,
                method: 'POST',
                body: data
            })
        }),
        adsAddMin1080x1080VideoByUser: builder.mutation({
            query: (data) => ({
                url: urlApis.API_ADS_ADD_MIN1080X1080_VIDEO_BY_USER,
                method: 'POST',
                body: data
            })
        }),
        adsUpdateBy: builder.mutation({
            query: (data) => ({
                url: urlApis.API_ADS_UPDATE_BY_USER,
                method: 'PATCH',
                body: data
            }),
            async onQueryStarted(_, { dispatch, getState, queryFulfilled }) {
                const { data } = await queryFulfilled;

                dispatch(
                    adsManagerApiSlice.util.updateQueryData(
                        'adsManagerIndex',
                        { startDate: getState().adsManager.startDate, endDate: getState().adsManager.endDate },
                        (draft) => {
                            draft.ads = draft.ads.map((a) => (a.id === data.id ? data : a));
                        }
                    )
                );
            }
        }),
        adsUpdateRunOnStatusByUser: builder.mutation({
            query: (data) => ({
                url: urlApis.API_ADS_UPDATE_STATUS_RUN_ON_BY_USER,
                method: 'PATCH',
                body: data
            })
        }),

        // AdsPerformance
        adsPerformanceChangeStatusRunAndPauseByUser: builder.mutation({
            query: (data) => ({
                url: urlApis.API_ADS_PERFORMANCE_CHANGE_STATUS_RUN_AND_PAUSE_BY_USER,
                method: 'PATCH',
                body: data
            }),
            async onQueryStarted({ id, status, disabled }, { dispatch, getState, queryFulfilled }) {
                const { data } = await queryFulfilled;

                dispatch(
                    adsManagerApiSlice.util.updateQueryData(
                        'adsManagerIndex',
                        { startDate: getState().adsManager.startDate, endDate: getState().adsManager.endDate },
                        (draft) => {
                            draft.ads_platforms = draft.ads_platforms.map((ap) => data.ads_platforms.find((dap) => dap.id === ap.id) || ap);
                            draft.ads = draft.ads.map((a) => (a.id === data.id ? data : a));
                        }
                    )
                );
            }
        }),
        adsPerformanceUnGroupGetAllByUser: builder.query({
            query: ({ startDate, endDate, _amSearchValue }) =>
                urlApis.API_ADS_PERFORMANCE_UNGROUP_GET_ALL_BY_USER + startDate + '/' + endDate + '/?search_value=' + _amSearchValue
        }),

        // AdsPlatforms
        adsPlatformsChangeStatusRunAndPauseByUser: builder.mutation({
            query: (data) => ({
                url: urlApis.API_ADS_PLATFORMs_CHANGE_STATUS_RUN_AND_PAUSE_BY_USER,
                method: 'PATCH',
                body: data
            }),
            async onQueryStarted({ ad_platform_ids, status, disabled }, { dispatch, getState, queryFulfilled }) {
                await queryFulfilled;

                dispatch(
                    adsManagerApiSlice.util.updateQueryData(
                        'adsManagerIndex',
                        { startDate: getState().adsManager.startDate, endDate: getState().adsManager.endDate },
                        (draft) => {
                            draft.ads_platforms = draft.ads_platforms.map((ap) =>
                                ad_platform_ids.includes(ap.id) ? { ...ap, status, disabled } : ap
                            );

                            const ad_ids = draft.ads_platforms.filter((ap) => ad_platform_ids.includes(ap.id)).map((ap) => ap.ad);

                            draft.ads = draft.ads.map((ad) => (ad_ids.includes(ad.id) ? { ...ad, disabled: false } : ad));
                        }
                    )
                );
            }
        }),
        adsPlatformsUnGroupGetAllByUser: builder.query({
            query: ({ startDate, endDate }) => urlApis.API_ADS_PLATFORMS_UNGROUP_GET_ALL_BY_USER + startDate + '/' + endDate,
            providesTags: ['adsPlatformsUnGroupGetAllByUser']
        }),

        // API THIRD SIDE
        pinterestBoardsGetByUser: builder.query({ query: () => urlApis.API_PINTEREST_GET_BOARDS }),
        metaPagesGetByUserd: builder.query({ query: () => urlApis.API_META_GET_PAGES }),
        metaAccountsGetByUser: builder.query({ query: () => urlApis.API_META_GET_ACCOUNTS }),
        adsManagerIndex: builder.query({
            query: ({ startDate, endDate }) => urlApis.API_ADS_MANAGER_INDEX + startDate + '/' + endDate
        })
    })
});

export const {
    useCampaignGetByIdAndUserQuery,
    useCampaignBasicGetAllByUserQuery,
    useCampaignAddWithDraftModeByUserMutation,
    useCampaignEditWithDraftModeByUserMutation,
    useCampaignGetAllByUserQuery,
    useCampaignGetAllByUser1Query,
    useCampaignUnGroupGetAllByUserQuery,
    useCampaignsDeleteByUserMutation,
    useCampaignChangeStatusRunAndPauseByUserMutation,
    useCampaignUpdateByUserMutation,
    useCampaignChangeStatusToPauseByUserMutation,
    useCampaignChangeStatusToRunByUserMutation,
    useCampaignPerformanceUnGroupGetAllByUserQuery,
    useCampaignPerformanceChangeStatusRunAndPauseByUserMutation,
    useCampaignsPlatformsChangeStatusRunAndPauseByUserMutation,
    useCampaignsPlatformsUnGroupGetAllByUserQuery,
    useAdSetGetAllByUserQuery,
    useAdSetGetAllByUser1Query,
    useAdSetUnGroupGetAllByUserQuery,
    useAdSetAddWithCampaignByUserMutation,
    useAdSetChangeStatusRunAndPauseByUserMutation,
    useAdSetUpdateByUserMutation,
    useAdSetsDeleteByUserMutation,
    useAdSetUpdateExistingByUserMutation,
    useAdSetPerformanceUnGroupGetAllByUserQuery,
    useAdSetsPlatformsChangeStatusRunAndPauseByUserMutation,
    useAdSetsPlatformsUnGroupGetAllByUserQuery,
    useAdsGetAllByUserQuery,
    useAdsGetAllByUser1Query,
    useAdsUnGroupGetAllByUserQuery,
    useAdsChangeStatusRunAndPauseByUserMutation,
    useAdsUpdateByUserMutation,
    useAdsDeleteByUserMutation,
    useAdsAddCommonByUserMutation,
    useAdsAddGoogleOnlyByUserMutation,
    useAdsAddPinterestOnlyByUserMutation,
    useAdsAddMin1080x1080ImageByUserMutation,
    useAdsAdd1296x1080ImageByUserMutation,
    useAdsAdd1080x1080ImageByUserMutation,
    useAdsAdd1080x1920ImageByUserMutation,
    useAdsAddMin1080x1080VideoByUserMutation,
    useAdsUpdateByMutation,
    useAdsUpdateRunOnStatusByUserMutation,
    useAdsPerformanceChangeStatusRunAndPauseByUserMutation,
    useAdsPerformanceUnGroupGetAllByUserQuery,
    useAdsPlatformsChangeStatusRunAndPauseByUserMutation,
    useAdsPlatformsUnGroupGetAllByUserQuery,
    usePinterestBoardsGetByUserQuery,
    useMetaPagesGetByUserdQuery,
    useMetaAccountsGetByUserQuery,
    useAdsManagerIndexQuery
} = adsManagerApiSlice;
