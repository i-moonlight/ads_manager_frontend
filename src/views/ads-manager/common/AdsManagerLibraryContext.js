import React from 'react';

import * as actions from './AdsManagerLibraryActionType';

const AdsManagerLibraryContext = React.createContext();

const initState = {
    hello: 'AdsManagerLibraryProvider',
    //
    mediaSortBy: '',
    mediaViewBy: ['...,'],
    mediaSearchValue: '',
    mediaSortByList: [],
    mediaSelectedList: [],
    isRefreshAfterUpdate: false,
    isActionLoading: false,
    //
    amKeyTabList: 'campaign',
    amIsGroupPlatforms: true,
    amViewBy: ['Impressions,', 'Clicks,', 'CTR,', 'CPC,', 'CPM,', 'Spent,'],
    amFilterByStartDate: null,
    amFilterByEndDate: null,
    amSelectedCampaignList: null,
    amSelectedAdSetList: null,
    amSelectedAdsList: null,
    amCampaignIdCurrent: 0,
    amCampaignItemCurrent: null,
    amAdSetItemCurrent: null,
    amAdSetIdCurrent: 0,
    amAdsUrlCurrent: '',
    amDisplayUrlCurrent: '',
    //
    amIsVisibilityCampaignCreateModal: 'visible',
    amIsVisibilityCampaignCreateAndEditModal: 'visible',
    amIsVisibilityCampaignFinalizeModal: 'visible',
    amIsVisibilityMediaLibraryModal: 'visible',
    //
    amIsShowCampaignCreateModal: false,
    amIsShowCampaignCreateAndEditModal: false,
    amIsShowCampaignFinalizeModal: false,
    amIsShowMediaLibraryModal: false,
    amIsFromCampaignCreateAndEditModalToMediaLibraryModal: false,
    //
    amIsCreateAdSets: true,
    //
    amSearchValue: '',
    //
    amIsCreateCampaign: true,
    //
    amSelectedCampaignPlatformList: null,
    amSelectedAdSetPlatformList: null,
    amSelectedAdsPlatformList: null,
    //
    amIsHideEmptyRows: false,
    //
    amIsShowTabUseExistingCampaign: true,
    //
    amEditAdsData: null,
    isRefreshByUser: false
};

const setMediaSortBy = (mediaSortBy, state) => {
    return { ...state, mediaSortBy: mediaSortBy };
};
const setMediaViewBy = (mediaViewBy, state) => {
    return { ...state, mediaViewBy: mediaViewBy };
};
const setMediaSearchValue = (mediaSearchValue, state) => {
    return { ...state, mediaSearchValue: mediaSearchValue };
};
const setMediaSortByList = (mediaSortByList, state) => {
    return { ...state, mediaSortByList: mediaSortByList };
};
const setMediaSelectedList = (mediaSelectedList, state) => {
    return { ...state, mediaSelectedList: mediaSelectedList };
};
const setIsRefreshAfterUpdate = (isRefreshAfterUpdate, state) => {
    return { ...state, isRefreshAfterUpdate: isRefreshAfterUpdate };
};
const setIsActionLoading = (isActionLoading, state) => {
    return { ...state, isActionLoading: isActionLoading };
};

//
const setAmKeyTabList = (amKeyTabList, state) => {
    return { ...state, amKeyTabList: amKeyTabList };
};
const setAmIsGroupPlatforms = (amIsGroupPlatforms, state) => {
    return { ...state, amIsGroupPlatforms: amIsGroupPlatforms };
};
const setAmViewBy = (amViewBy, state) => {
    return { ...state, amViewBy: amViewBy };
};
const setAmFilterByStartDate = (amFilterByStartDate, state) => {
    return { ...state, amFilterByStartDate: amFilterByStartDate };
};
const setAmFilterByEndDate = (amFilterByEndDate, state) => {
    return { ...state, amFilterByEndDate: amFilterByEndDate };
};
const setAmSelectedCampaignList = (amSelectedCampaignList, state) => {
    return { ...state, amSelectedCampaignList: amSelectedCampaignList };
};
const setAmSelectedAdSetList = (amSelectedAdSetList, state) => {
    return { ...state, amSelectedAdSetList: amSelectedAdSetList };
};
const setAmSelectedAdsList = (amSelectedAdsList, state) => {
    return { ...state, amSelectedAdsList: amSelectedAdsList };
};
const setAmCampaignIdCurrent = (amCampaignIdCurrent, state) => {
    return { ...state, amCampaignIdCurrent: amCampaignIdCurrent };
};
const setAmCampaignItemCurrent = (amCampaignItemCurrent, state) => {
    return { ...state, amCampaignItemCurrent: amCampaignItemCurrent };
};
const setAmAdSetItemCurrent = (amAdSetItemCurrent, state) => {
    return { ...state, amAdSetItemCurrent: amAdSetItemCurrent };
};
const setAmAdSetIdCurrent = (amAdSetIdCurrent, state) => {
    return { ...state, amAdSetIdCurrent: amAdSetIdCurrent };
};
const setAmAdsUrlCurrent = (amAdsUrlCurrent, state) => {
    return { ...state, amAdsUrlCurrent: amAdsUrlCurrent };
};
const setAmDisplayUrlCurrent = (amDisplayUrlCurrent, state) => {
    return { ...state, amDisplayUrlCurrent: amDisplayUrlCurrent };
};
//
const setAmIsVisibilityCampaignCreateModal = (amIsVisibilityCampaignCreateModal, state) => {
    return { ...state, amIsVisibilityCampaignCreateModal: amIsVisibilityCampaignCreateModal };
};
const setAmIsVisibilityCampaignCreateAndEditModal = (amIsVisibilityCampaignCreateAndEditModal, state) => {
    return { ...state, amIsVisibilityCampaignCreateAndEditModal: amIsVisibilityCampaignCreateAndEditModal };
};
const setAmIsVisibilityCampaignFinalizeModal = (amIsVisibilityCampaignFinalizeModal, state) => {
    return { ...state, amIsVisibilityCampaignFinalizeModal: amIsVisibilityCampaignFinalizeModal };
};
const setAmIsVisibilityMediaLibraryModal = (amIsVisibilityMediaLibraryModal, state) => {
    return { ...state, amIsVisibilityMediaLibraryModal: amIsVisibilityMediaLibraryModal };
};
//
const setAmIsShowCampaignCreateModal = (amIsShowCampaignCreateModal, state) => {
    return { ...state, amIsShowCampaignCreateModal: amIsShowCampaignCreateModal };
};
const setAmIsShowCampaignCreateAndEditModal = (amIsShowCampaignCreateAndEditModal, state) => {
    return { ...state, amIsShowCampaignCreateAndEditModal: amIsShowCampaignCreateAndEditModal };
};
const setAmIsShowCampaignFinalizeModal = (amIsShowCampaignFinalizeModal, state) => {
    return { ...state, amIsShowCampaignFinalizeModal: amIsShowCampaignFinalizeModal };
};
const setAmIsShowMediaLibraryModal = (amIsShowMediaLibraryModal, state) => {
    return { ...state, amIsShowMediaLibraryModal: amIsShowMediaLibraryModal };
};
const setAmIsFromCampaignCreateAndEditModalToMediaLibraryModal = (amIsFromCampaignCreateAndEditModalToMediaLibraryModal, state) => {
    return { ...state, amIsFromCampaignCreateAndEditModalToMediaLibraryModal: amIsFromCampaignCreateAndEditModalToMediaLibraryModal };
};
//
const setAmIsCreateAdSets = (amIsCreateAdSets, state) => {
    return { ...state, amIsCreateAdSets: amIsCreateAdSets };
};
const setAmIsCreateCampaign = (amIsCreateCampaign, state) => {
    return { ...state, amIsCreateCampaign: amIsCreateCampaign };
};
//
const setAmSearchValue = (amSearchValue, state) => {
    return { ...state, amSearchValue: amSearchValue };
};
//
const setAmSelectedCampaignPlatformList = (amSelectedCampaignPlatformList, state) => {
    return { ...state, amSelectedCampaignPlatformList: amSelectedCampaignPlatformList };
};
const setAmSelectedAdSetPlatformList = (amSelectedAdSetPlatformList, state) => {
    return { ...state, amSelectedAdSetPlatformList: amSelectedAdSetPlatformList };
};
const setAmSelectedAdsPlatformList = (amSelectedAdsPlatformList, state) => {
    return { ...state, amSelectedAdsPlatformList: amSelectedAdsPlatformList };
};
//
const setAmIsHideEmptyRows = (amIsHideEmptyRows, state) => {
    return { ...state, amIsHideEmptyRows: amIsHideEmptyRows };
};
//
const setAmIsShowTabUseExistingCampaign = (amIsShowTabUseExistingCampaign, state) => {
    return { ...state, amIsShowTabUseExistingCampaign: amIsShowTabUseExistingCampaign };
};
//
const setAmEditAdsData = (amEditAdsData, state) => {
    return { ...state, amEditAdsData: amEditAdsData };
};
//
const setIsRefreshByUser = (isRefreshByUser, state) => {
    return { ...state, isRefreshByUser: isRefreshByUser };
};

const adsManagerLibraryReducer = (state = initState, action) => {
    switch (action.type) {
        case actions.AT_SET_MEDIA_SORT_BY:
            return setMediaSortBy(action.payload, state);
        case actions.AT_SET_MEDIA_VIEW_BY:
            return setMediaViewBy(action.payload, state);
        case actions.AT_SET_MEDIA_SEARCH_VALUE:
            return setMediaSearchValue(action.payload, state);
        case actions.AT_SET_MEDIA_LIST_BY_SORT_BY:
            return setMediaSortByList(action.payload, state);
        case actions.AT_SET_MEDIA_SELECTED_LIST:
            return setMediaSelectedList(action.payload, state);
        case actions.AT_SET_IS_REFRESH_AFTER_UPDATE:
            return setIsRefreshAfterUpdate(action.payload, state);
        case actions.AT_SET_IS_ACTION_LOADING:
            return setIsActionLoading(action.payload, state);
        //
        case actions.AT_SET_ADS_MANAGER_KEY_TAB_LIST:
            return setAmKeyTabList(action.payload, state);
        case actions.AT_SET_ADS_MANAGER_IS_GROUP_PLATFORMS:
            return setAmIsGroupPlatforms(action.payload, state);
        case actions.AT_SET_ADS_MANAGER_VIEW_BY:
            return setAmViewBy(action.payload, state);
        case actions.AT_SET_ADS_MANAGER_FILTER_BY_START_DATE:
            return setAmFilterByStartDate(action.payload, state);
        case actions.AT_SET_ADS_MANAGER_FILTER_BY_END_DATE:
            return setAmFilterByEndDate(action.payload, state);
        case actions.AT_SET_ADS_MANAGER_CAMPAIGN_SELECTED_LIST:
            return setAmSelectedCampaignList(action.payload, state);
        case actions.AT_SET_ADS_MANAGER_AD_SET_SELECTED_LIST:
            return setAmSelectedAdSetList(action.payload, state);
        case actions.AT_SET_ADS_MANAGER_ADS_SELECTED_LIST:
            return setAmSelectedAdsList(action.payload, state);
        case actions.AT_SET_ADS_MANAGER_ADS_CAMPAIGN_ID_CURRENT:
            return setAmCampaignIdCurrent(action.payload, state);
        case actions.AT_SET_ADS_MANAGER_ADS_CAMPAIGN_ITEM_CURRENT:
            return setAmCampaignItemCurrent(action.payload, state);
        case actions.AT_SET_ADS_MANAGER_AD_SET_ITEM_CURRENT:
            return setAmAdSetItemCurrent(action.payload, state);
        case actions.AT_SET_ADS_MANAGER_ADS_AD_SET_ID_CURRENT:
            return setAmAdSetIdCurrent(action.payload, state);
        case actions.AT_SET_ADS_MANAGER_ADS_URL_CURRENT:
            return setAmAdsUrlCurrent(action.payload, state);
        case actions.AT_SET_ADS_MANAGER_DISPLAY_URL_CURRENT:
            return setAmDisplayUrlCurrent(action.payload, state);
        //
        case actions.AT_SET_ADS_MANAGER_IS_VISIBILITY_CAMPAIGN_CREATE_MODAL:
            return setAmIsVisibilityCampaignCreateModal(action.payload, state);
        case actions.AT_SET_ADS_MANAGER_IS_VISIBILITY_CAMPAIGN_CREATE_AND_EDIT_MODAL:
            return setAmIsVisibilityCampaignCreateAndEditModal(action.payload, state);
        case actions.AT_SET_ADS_MANAGER_IS_VISIBILITY_CAMPAIGN_FINALIZE_MODAL:
            return setAmIsVisibilityCampaignFinalizeModal(action.payload, state);
        case actions.AT_SET_ADS_MANAGER_IS_VISIBILITY_MEDIA_LIBRARY_MODAL:
            return setAmIsVisibilityMediaLibraryModal(action.payload, state);
        //
        case actions.AT_SET_ADS_MANAGER_IS_SHOW_CAMPAIGN_CREATE_MODAL:
            return setAmIsShowCampaignCreateModal(action.payload, state);
        case actions.AT_SET_ADS_MANAGER_IS_SHOW_CAMPAIGN_CREATE_AND_EDIT_MODAL:
            return setAmIsShowCampaignCreateAndEditModal(action.payload, state);
        case actions.AT_SET_ADS_MANAGER_IS_SHOW_CAMPAIGN_FINALIZE_MODAL:
            return setAmIsShowCampaignFinalizeModal(action.payload, state);
        case actions.AT_SET_ADS_MANAGER_IS_SHOW_MEDIA_LIBRARY_MODAL:
            return setAmIsShowMediaLibraryModal(action.payload, state);
        case actions.AT_SET_ADS_MANAGER_IS_FROM_CAMPAIGN_CREATE_AND_EDIT_MODAL_TO_MEDIA_LIBRARY_MODAL:
            return setAmIsFromCampaignCreateAndEditModalToMediaLibraryModal(action.payload, state);
        //
        case actions.AT_SET_ADS_MANAGER_IS_CREATE_AD_SETS:
            return setAmIsCreateAdSets(action.payload, state);
        case actions.AT_SET_ADS_MANAGER_IS_CREATE_CAMPAIGN:
            return setAmIsCreateCampaign(action.payload, state);
        //
        case actions.AT_SET_ADS_MANAGER_SEARCH_VALUE:
            return setAmSearchValue(action.payload, state);
        //
        case actions.AT_SET_ADS_MANAGER_CAMPAIGN_PLATFORM_SELECTED_LIST:
            return setAmSelectedCampaignPlatformList(action.payload, state);
        case actions.AT_SET_ADS_MANAGER_AD_SET_PLATFORM_SELECTED_LIST:
            return setAmSelectedAdSetPlatformList(action.payload, state);
        case actions.AT_SET_ADS_MANAGER_ADS_PLATFORM_SELECTED_LIST:
            return setAmSelectedAdsPlatformList(action.payload, state);
        //
        case actions.AT_SET_ADS_MANAGER_IS_HIDE_EMPTY_ROWS:
            return setAmIsHideEmptyRows(action.payload, state);
        //
        case actions.AT_SET_ADS_MANAGER_IS_SHOW_TAB_USE_EXISTING_CAMPAIGN:
            return setAmIsShowTabUseExistingCampaign(action.payload, state);
        //
        case actions.AT_SET_ADS_DATA_EDIT_FROM_MODAL:
            return setAmEditAdsData(action.payload, state);
        //
        case actions.AT_SET_IS_REFRESH_BY_USER:
            return setIsRefreshByUser(action.payload, state);
        default:
            return state;
    }
};

const AdsManagerLibraryProvider = ({ children }) => {
    const [state_AdsManagerLC, dispatch_AdsManagerLC] = React.useReducer(adsManagerLibraryReducer, initState);
    const value = { state_AdsManagerLC, dispatch_AdsManagerLC };
    return (
        <AdsManagerLibraryContext.Provider value={value} displayName="AdsManagerLibraryProvider">
            {children}
        </AdsManagerLibraryContext.Provider>
    );
};

const useAdsManagerLibraryConsumer = () => {
    const context = React.useContext(AdsManagerLibraryContext);
    if (context === undefined) {
        throw new Error('useAdsManagerLibrary must be used within a AdsManagerLibraryProvider');
    }
    return context;
};

export { AdsManagerLibraryProvider, useAdsManagerLibraryConsumer };
