import React from 'react';

import * as actions from './ExtraLibraryActionType';

const ExtraLibraryContext = React.createContext();
const initState = {
    hello: 'ExtraLibraryProvider',
    //
    extra_mediaViewBy: ['Name,'],
    extra_mediaSortBy: '',
    extra_mediaSearchValue: '',
    extra_mediaSelectedList: [],
    extra_mediaSelectedList1: [],
    extra_mediaSelectedListTemp: [],
    extra_mediaAllList: [],
    extra_mediaIsFocusSearchValue: false,
    extra_mediaIsFocusSortBy: false,
    extra_mediaIsActivated: false,
    //
    extra_amViewBy: JSON.parse(localStorage.getItem(actions.LOCAL_STORAGE_ADS_MANAGER_VIEW_BY)) || [
        'Impressions,',
        'Clicks,',
        'CTR,',
        'CPC,',
        'CPM,',
        'Spent,'
    ],
    extra_amCampaignColumnNameSort: 'name',
    extra_amCampaignColumnOrderSort: 1,
    extra_amCampaignUnGroupColumnNameSort: 'name',
    extra_amCampaignUnGroupColumnOrderSort: 1,
    //
    extra_amAdSetColumnNameSort: 'name',
    extra_amAdSetColumnOrderSort: 1,
    extra_amAdSetUnGroupColumnNameSort: 'name',
    extra_amAdSetUnGroupColumnOrderSort: 1,
    //
    extra_amAdsColumnNameSort: 'name',
    extra_amAdsColumnOrderSort: 1,
    extra_amAdsUnGroupColumnNameSort: 'name',
    extra_amAdsUnGroupColumnOrderSort: 1,
    //
    extra_amSelectedCampaignList: [],
    extra_amSelectedAdSetList: [],
    extra_amSelectedAdsList: [],
    //
    extra_amSelectedCampaignPlatformList: [],
    extra_amSelectedAdSetPlatformList: [],
    extra_amSelectedAdsPlatformList: null,
    //
    extra_amSelectedAdSetListString: '',
    extra_amSelectedAdSetPlatformListString: '',
    //
    extra_amSelectedAdSetLocationsList: [],
    extra_amSelectedAdSetCurrentLocation: null,
    extra_amSelectedAdSetLocationsTempList: [],
    //
    extra_amRefreshTimeCampaign: null,
    extra_amRefreshTimeAdSet: null,
    extra_amRefreshTimeAds: null,
    //
    extra_amCampaignList: [],
    extra_amAdSetList: [],
    extra_amAdsList: [],
    //
    extra_amCampaignUnGroupList: [],
    extra_amAdSetUnGroupList: [],
    extra_amAdsUnGroupList: []
};
// Media
const setExtra_mediaViewBy = (mediaViewBy, state) => {
    return { ...state, extra_mediaViewBy: mediaViewBy };
};
const setExtra_mediaSortBy = (mediaSortBy, state) => {
    return { ...state, extra_mediaSortBy: mediaSortBy };
};
const setExtra_mediaSearchValue = (mediaSearchValue, state) => {
    return { ...state, extra_mediaSearchValue: mediaSearchValue };
};
const setExtra_mediaSelectedList = (mediaSelectedList, state) => {
    return { ...state, extra_mediaSelectedList: mediaSelectedList };
};
const setExtra_mediaSelectedList1 = (mediaSelectedList1, state) => {
    return { ...state, extra_mediaSelectedList1: mediaSelectedList1 };
};
const setExtra_mediaSelectedListTemp = (mediaSelectedListTemp, state) => {
    return { ...state, extra_mediaSelectedListTemp: mediaSelectedListTemp };
};
const setExtra_mediaAllList = (mediaAll, state) => {
    return { ...state, extra_mediaAllList: mediaAll };
};
const setExtra_mediaIsFocusSearchValue = (mediaIsFocusSearchValue, state) => {
    return { ...state, extra_mediaIsFocusSearchValue: mediaIsFocusSearchValue };
};
const setExtra_mediaIsFocusSortBy = (mediaIsFocusSortBy, state) => {
    return { ...state, extra_mediaIsFocusSortBy: mediaIsFocusSortBy };
};
const setExtra_mediaIsActivated = (mediaIsActivated, state) => {
    return { ...state, extra_mediaIsActivated: mediaIsActivated };
};

// Ads Manager
const setExtra_AmViewBy = (amViewBy, state) => {
    return { ...state, extra_amViewBy: amViewBy };
};
const setExtra_amCampaignColumnNameSort = (extra_amCampaignColumnNameSort, state) => {
    return { ...state, extra_amCampaignColumnNameSort: extra_amCampaignColumnNameSort };
};
const setExtra_amCampaignColumnOrderSort = (extra_amCampaignColumnOrderSort, state) => {
    return { ...state, extra_amCampaignColumnOrderSort: extra_amCampaignColumnOrderSort };
};
const setExtra_amCampaignUnGroupColumnNameSort = (extra_amCampaignUnGroupColumnNameSort, state) => {
    return { ...state, extra_amCampaignUnGroupColumnNameSort: extra_amCampaignUnGroupColumnNameSort };
};
const setExtra_amCampaignUnGroupColumnOrderSort = (extra_amCampaignUnGroupColumnOrderSort, state) => {
    return { ...state, extra_amCampaignUnGroupColumnOrderSort: extra_amCampaignUnGroupColumnOrderSort };
};
//
const setExtra_amAdSetColumnNameSort = (extra_amAdSetColumnNameSort, state) => {
    return { ...state, extra_amAdSetColumnNameSort: extra_amAdSetColumnNameSort };
};
const setExtra_amAdSetColumnOrderSort = (extra_amAdSetColumnOrderSort, state) => {
    return { ...state, extra_amAdSetColumnOrderSort: extra_amAdSetColumnOrderSort };
};
const setExtra_amAdSetUnGroupColumnNameSort = (extra_amAdSetUnGroupColumnNameSort, state) => {
    return { ...state, extra_amAdSetUnGroupColumnNameSort: extra_amAdSetUnGroupColumnNameSort };
};
const setExtra_amAdSetUnGroupColumnOrderSort = (extra_amAdSetUnGroupColumnOrderSort, state) => {
    return { ...state, extra_amAdSetUnGroupColumnOrderSort: extra_amAdSetUnGroupColumnOrderSort };
};
//
const setExtra_amAdsColumnNameSort = (extra_amAdsColumnNameSort, state) => {
    return { ...state, extra_amAdsColumnNameSort: extra_amAdsColumnNameSort };
};
const setExtra_amAdsColumnOrderSort = (extra_amAdsColumnOrderSort, state) => {
    return { ...state, extra_amAdsColumnOrderSort: extra_amAdsColumnOrderSort };
};
const setExtra_amAdsUnGroupColumnNameSort = (extra_amAdsUnGroupColumnNameSort, state) => {
    return { ...state, extra_amAdsUnGroupColumnNameSort: extra_amAdsUnGroupColumnNameSort };
};
const setExtra_amAdsUnGroupColumnOrderSort = (extra_amAdsUnGroupColumnOrderSort, state) => {
    return { ...state, extra_amAdsUnGroupColumnOrderSort: extra_amAdsUnGroupColumnOrderSort };
};
//
const setExtra_amSelectedCampaignList = (extra_amSelectedCampaignList, state) => {
    return { ...state, extra_amSelectedCampaignList: extra_amSelectedCampaignList };
};
const setExtra_amSelectedAdSetList = (extra_amSelectedAdSetList, state) => {
    return { ...state, extra_amSelectedAdSetList: extra_amSelectedAdSetList };
};
const setExtra_amSelectedAdsList = (extra_amSelectedAdsList, state) => {
    return { ...state, extra_amSelectedAdsList: extra_amSelectedAdsList };
};
//
const setExtra_amSelectedCampaignPlatformList = (extra_amSelectedCampaignPlatformList, state) => {
    return { ...state, extra_amSelectedCampaignPlatformList: extra_amSelectedCampaignPlatformList };
};
const setExtra_amSelectedAdSetPlatformList = (extra_amSelectedAdSetPlatformList, state) => {
    return { ...state, extra_amSelectedAdSetPlatformList: extra_amSelectedAdSetPlatformList };
};
const setExtra_amSelectedAdsPlatformList = (extra_amSelectedAdsPlatformList, state) => {
    return { ...state, extra_amSelectedAdsPlatformList: extra_amSelectedAdsPlatformList };
};
//
const setExtra_amSelectedAdSetListString = (extra_amSelectedAdSetListString, state) => {
    return { ...state, extra_amSelectedAdSetListString: extra_amSelectedAdSetListString };
};
const setExtra_amSelectedAdSetPlatformListString = (extra_amSelectedAdSetPlatformListString, state) => {
    return { ...state, extra_amSelectedAdSetPlatformListString: extra_amSelectedAdSetPlatformListString };
};
//
const setExtra_amSelectedAdSetLocationsList = (extra_amSelectedAdSetLocationsList, state) => {
    return { ...state, extra_amSelectedAdSetLocationsList: extra_amSelectedAdSetLocationsList };
};
const setExtra_amSelectedAdSetCurrentLocation = (extra_amSelectedAdSetCurrentLocation, state) => {
    return { ...state, extra_amSelectedAdSetCurrentLocation: extra_amSelectedAdSetCurrentLocation };
};
const setExtra_amSelectedAdSetLocationsTempList = (extra_amSelectedAdSetLocationsTempList, state) => {
    return { ...state, extra_amSelectedAdSetLocationsTempList: extra_amSelectedAdSetLocationsTempList };
};
//
const setExtra_AmRefreshTimeCampaign = (amRefreshTimeCampaign, state) => {
    return { ...state, extra_amRefreshTimeCampaign: amRefreshTimeCampaign };
};
const setExtra_AmRefreshTimeAdSet = (amRefreshTimeAdSet, state) => {
    return { ...state, extra_amRefreshTimeAdSet: amRefreshTimeAdSet };
};
const setExtra_AmRefreshTimeAds = (amRefreshTimeAds, state) => {
    return { ...state, extra_amRefreshTimeAds: amRefreshTimeAds };
};
//
const setExtra_amCampaignList = (extra_amCampaignList, state) => {
    return { ...state, extra_amCampaignList: extra_amCampaignList };
};
const setExtra_amAdSetList = (extra_amAdSetList, state) => {
    return { ...state, extra_amAdSetList: extra_amAdSetList };
};
const setExtra_amAdsList = (extra_amAdsList, state) => {
    return { ...state, extra_amAdsList: extra_amAdsList };
};
//
const setExtra_amCampaignUnGroupList = (extra_amCampaignUnGroupList, state) => {
    return { ...state, extra_amCampaignUnGroupList: extra_amCampaignUnGroupList };
};
const setExtra_amAdSetUnGroupList = (extra_amAdSetUnGroupList, state) => {
    return { ...state, extra_amAdSetUnGroupList: extra_amAdSetUnGroupList };
};
const setExtra_amAdsUnGroupList = (extra_amAdsUnGroupList, state) => {
    return { ...state, extra_amAdsUnGroupList: extra_amAdsUnGroupList };
};

const ExtraLibraryReducer = (state = initState, action) => {
    switch (action.type) {
        case actions.AT_SET_EXTRA_MEDIA_VIEW_BY:
            return setExtra_mediaViewBy(action.payload, state);
        case actions.AT_SET_EXTRA_MEDIA_SOFT_BY:
            return setExtra_mediaSortBy(action.payload, state);
        case actions.AT_SET_EXTRA_MEDIA_SEARCH_VALUE:
            return setExtra_mediaSearchValue(action.payload, state);
        case actions.AT_SET_EXTRA_MEDIA_SELECTED_LIST:
            return setExtra_mediaSelectedList(action.payload, state);
        case actions.AT_SET_EXTRA_MEDIA_SELECTED_LIST_1:
            return setExtra_mediaSelectedList1(action.payload, state);
        case actions.AT_SET_EXTRA_MEDIA_SELECTED_LIST_TEMP:
            return setExtra_mediaSelectedListTemp(action.payload, state);
        case actions.AT_SET_EXTRA_MEDIA_ALL_LIST:
            return setExtra_mediaAllList(action.payload, state);
        case actions.AT_SET_EXTRA_MEDIA_IS_FOCUS_SEARCH_VALUE:
            return setExtra_mediaIsFocusSearchValue(action.payload, state);
        case actions.AT_SET_EXTRA_MEDIA_IS_FOCUS_SOFT_BY:
            return setExtra_mediaIsFocusSortBy(action.payload, state);
        case actions.AT_SET_EXTRA_MEDIA_IS_ACTIVATED_ACTIONS:
            return setExtra_mediaIsActivated(action.payload, state);
        //
        case actions.AT_SET_EXTRA_ADS_MANAGER_VIEW_BY:
            return setExtra_AmViewBy(action.payload, state);
        case actions.AT_SET_EXTRA_ADS_MANAGER_CAMPAIGN_COLUMN_NAME_SORT:
            return setExtra_amCampaignColumnNameSort(action.payload, state);
        case actions.AT_SET_EXTRA_ADS_MANAGER_CAMPAIGN_COLUMN_ORDER_SORT:
            return setExtra_amCampaignColumnOrderSort(action.payload, state);
        case actions.AT_SET_EXTRA_ADS_MANAGER_CAMPAIGN_UN_GROUP_COLUMN_NAME_SORT:
            return setExtra_amCampaignUnGroupColumnNameSort(action.payload, state);
        case actions.AT_SET_EXTRA_ADS_MANAGER_CAMPAIGN_UN_GROUP_COLUMN_ORDER_SORT:
            return setExtra_amCampaignUnGroupColumnOrderSort(action.payload, state);
        //
        case actions.AT_SET_EXTRA_ADS_MANAGER_AD_SET_COLUMN_NAME_SORT:
            return setExtra_amAdSetColumnNameSort(action.payload, state);
        case actions.AT_SET_EXTRA_ADS_MANAGER_AD_SET_COLUMN_ORDER_SORT:
            return setExtra_amAdSetColumnOrderSort(action.payload, state);
        case actions.AT_SET_EXTRA_ADS_MANAGER_AD_SET_UN_GROUP_COLUMN_NAME_SORT:
            return setExtra_amAdSetUnGroupColumnNameSort(action.payload, state);
        case actions.AT_SET_EXTRA_ADS_MANAGER_AD_SET_UN_GROUP_COLUMN_ORDER_SORT:
            return setExtra_amAdSetUnGroupColumnOrderSort(action.payload, state);
        //
        case actions.AT_SET_EXTRA_ADS_MANAGER_ADS_COLUMN_NAME_SORT:
            return setExtra_amAdsColumnNameSort(action.payload, state);
        case actions.AT_SET_EXTRA_ADS_MANAGER_ADS_COLUMN_ORDER_SORT:
            return setExtra_amAdsColumnOrderSort(action.payload, state);
        case actions.AT_SET_EXTRA_ADS_MANAGER_ADS_UN_GROUP_COLUMN_NAME_SORT:
            return setExtra_amAdsUnGroupColumnNameSort(action.payload, state);
        case actions.AT_SET_EXTRA_ADS_MANAGER_ADS_UN_GROUP_COLUMN_ORDER_SORT:
            return setExtra_amAdsUnGroupColumnOrderSort(action.payload, state);
        //
        case actions.AT_SET_EXTRA_ADS_MANAGER_CAMPAIGN_SELECTED_LIST:
            return setExtra_amSelectedCampaignList(action.payload, state);
        case actions.AT_SET_EXTRA_ADS_MANAGER_AD_SET_SELECTED_LIST:
            return setExtra_amSelectedAdSetList(action.payload, state);
        case actions.AT_SET_EXTRA_ADS_MANAGER_ADS_SELECTED_LIST:
            return setExtra_amSelectedAdsList(action.payload, state);
        //
        case actions.AT_SET_EXTRA_ADS_MANAGER_CAMPAIGN_SELECTED_PLATFORM_LIST:
            return setExtra_amSelectedCampaignPlatformList(action.payload, state);
        case actions.AT_SET_EXTRA_ADS_MANAGER_AD_SET_SELECTED_PLATFORM_LIST:
            return setExtra_amSelectedAdSetPlatformList(action.payload, state);
        case actions.AT_SET_EXTRA_ADS_MANAGER_ADS_SELECTED_PLATFORM_LIST:
            return setExtra_amSelectedAdsPlatformList(action.payload, state);
        case actions.AT_SET_EXTRA_ADS_MANAGER_AD_SET_SELECTED_LIST_STRING:
            return setExtra_amSelectedAdSetListString(action.payload, state);
        case actions.AT_SET_EXTRA_ADS_MANAGER_AD_SET_SELECTED_PLATFORM_LIST_STRING:
            return setExtra_amSelectedAdSetPlatformListString(action.payload, state);
        //
        case actions.AT_SET_EXTRA_ADS_MANAGER_AD_SET_SELECTED_LOCATIONS_LIST:
            return setExtra_amSelectedAdSetLocationsList(action.payload, state);
        case actions.AT_SET_EXTRA_ADS_MANAGER_AD_SET_SELECTED_CURRENT_LOCATION:
            return setExtra_amSelectedAdSetCurrentLocation(action.payload, state);
        case actions.AT_SET_EXTRA_ADS_MANAGER_AD_SET_SELECTED_LOCATIONS_TEMP_LIST:
            return setExtra_amSelectedAdSetLocationsTempList(action.payload, state);
        //
        case actions.AT_SET_EXTRA_ADS_MANAGER_REFRESH_TIME_CAMPAIGN:
            return setExtra_AmRefreshTimeCampaign(action.payload, state);
        case actions.AT_SET_EXTRA_ADS_MANAGER_REFRESH_TIME_AD_SET:
            return setExtra_AmRefreshTimeAdSet(action.payload, state);
        case actions.AT_SET_EXTRA_ADS_MANAGER_REFRESH_TIME_ADS:
            return setExtra_AmRefreshTimeAds(action.payload, state);
        //
        case actions.AT_SET_EXTRA_ADS_MANAGER_CAMPAIGN_LIST:
            return setExtra_amCampaignList(action.payload, state);
        case actions.AT_SET_EXTRA_ADS_MANAGER_AD_SET_LIST:
            return setExtra_amAdSetList(action.payload, state);
        case actions.AT_SET_EXTRA_ADS_MANAGER_ADS_LIST:
            return setExtra_amAdsList(action.payload, state);
        //
        case actions.AT_SET_EXTRA_ADS_MANAGER_CAMPAIGN_UN_GROUP_LIST:
            return setExtra_amCampaignUnGroupList(action.payload, state);
        case actions.AT_SET_EXTRA_ADS_MANAGER_AD_SET_UN_GROUP_LIST:
            return setExtra_amAdSetUnGroupList(action.payload, state);
        case actions.AT_SET_EXTRA_ADS_MANAGER_ADS_UN_GROUP_LIST:
            return setExtra_amAdsUnGroupList(action.payload, state);
        //
        default:
            return state;
    }
};

const ExtraLibraryProvider = ({ children }) => {
    const [state_ExtraLC, dispatch_ExtraLC] = React.useReducer(ExtraLibraryReducer, initState);
    const value = { state_ExtraLC, dispatch_ExtraLC };
    return (
        <ExtraLibraryContext.Provider value={value} displayName="ExtraLibraryProvider">
            {children}
        </ExtraLibraryContext.Provider>
    );
};

const useExtraLibraryConsumer = () => {
    const context = React.useContext(ExtraLibraryContext);
    if (context === undefined) {
        throw new Error('useExtraLibrary must be used within a ExtraLibraryProvider');
    }
    return context;
};

export { ExtraLibraryProvider, useExtraLibraryConsumer };
