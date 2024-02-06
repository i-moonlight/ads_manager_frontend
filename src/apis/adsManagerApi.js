import * as urlApis from './constantsApi';
import axiosService from '../utils/axiosServiceUtils';

// ADS_MANAGER
// campaign
export const campaignGetByIdAndUserApi = (campaign_id) => {
    return axiosService.getWithToken(urlApis.API_CAMPAIGN_GET_BY_ID_AND_USER + campaign_id + '/');
};
export const campaignBasicGetAllByUserApi = () => {
    return axiosService.getWithToken(urlApis.API_CAMPAIGN_BASIC_GET_ALL_BY_USER);
};
export const campaignAddWithDraftModeByUserApi = (data) => {
    return axiosService.postWithToken(urlApis.API_CAMPAIGN_ADD_WITH_DRAFT_MODE_BY_USER, data);
};
export const campaignEditWithDraftModeByUserApi = (data) => {
    return axiosService.patchWithToken(urlApis.API_CAMPAIGN_EDIT_WITH_DRAFT_MODE_BY_USER, data);
};
// export const campaignGetAllByUserApi = (paramString, _amFilterByStartDate, _amFilterByEndDate) => {
//     return axiosService.getWithToken(
//         urlApis.API_CAMPAIGN_GET_ALL_BY_USER + _amFilterByStartDate + '/' + _amFilterByEndDate + '/?' + paramString
//     );
// };
export const campaignGetAllByUserApi = (_amFilterByStartDate, _amFilterByEndDate, _amSearchValue) => {
    return axiosService.getWithToken(
        urlApis.API_CAMPAIGN_GET_ALL_BY_USER + _amFilterByStartDate + '/' + _amFilterByEndDate + '/?search_value=' + _amSearchValue
    );
};
export const campaignGetAllByUser1Api = (_amFilterByStartDate, _amFilterByEndDate, _amSearchValue) => {
    return axiosService.getWithToken(
        urlApis.API_CAMPAIGN_GET_ALL_BY_USER_1 + _amFilterByStartDate + '/' + _amFilterByEndDate + '/?search_value=' + _amSearchValue
    );
};
export const campaignUnGroupGetAllByUserApi = (_amFilterByStartDate, _amFilterByEndDate, _amSearchValue) => {
    return axiosService.getWithToken(
        urlApis.API_CAMPAIGN_UNGROUP_GET_ALL_BY_USER + _amFilterByStartDate + '/' + _amFilterByEndDate + '/?search_value=' + _amSearchValue
    );
};
//
export const campaignsDeleteByUserApi = (data) => {
    return axiosService.deleteWithToken(urlApis.API_CAMPAIGN_DELETE_BY_USER, data);
};
export const campaignChangeStatusRunAndPauseByUserApi = (data) => {
    return axiosService.patchWithToken(urlApis.API_CAMPAIGN_CHANGE_STATUS_RUN_AND_PAUSE_BY_USER, data);
};
export const campaignUpdateByUserApi = (data) => {
    return axiosService.patchWithToken(urlApis.API_CAMPAIGN_UPDATE_BY_USER, data);
};
export const campaignChangeStatusToPauseByUserApi = (data) => {
    return axiosService.patchWithToken(urlApis.API_CAMPAIGN_CHANGE_STATUS_TO_PAUSE_BY_USER, data);
};
export const campaignChangeStatusToRunByUserApi = (data) => {
    return axiosService.patchWithToken(urlApis.API_CAMPAIGN_CHANGE_STATUS_TO_RUN_BY_USER, data);
};
// CampaignPerformance
export const campaignPerformanceUnGroupGetAllByUserApi = (_amFilterByStartDate, _amFilterByEndDate, _amSearchValue) => {
    return axiosService.getWithToken(
        urlApis.API_CAMPAIGN_PERFORMANCE_UNGROUP_GET_ALL_BY_USER +
            _amFilterByStartDate +
            '/' +
            _amFilterByEndDate +
            '/?search_value=' +
            _amSearchValue
    );
};
//
export const campaignPerformanceChangeStatusRunAndPauseByUserApi = (data) => {
    return axiosService.patchWithToken(urlApis.API_CAMPAIGN_PERFORMANCE_CHANGE_STATUS_RUN_AND_PAUSE_BY_USER, data);
};
// CampaignsPlatforms
export const campaignsPlatformsChangeStatusRunAndPauseByUserApi = (data) => {
    return axiosService.patchWithToken(urlApis.API_CAMPAIGNS_PLATFORMS_CHANGE_STATUS_RUN_AND_PAUSE_BY_USER, data);
};
export const campaignsPlatformsUnGroupGetAllByUserApi = (_amFilterByStartDate, _amFilterByEndDate, _amSearchValue) => {
    return axiosService.getWithToken(
        urlApis.API_CAMPAIGNS_PLATFORMS_UNGROUP_GET_ALL_BY_USER +
            _amFilterByStartDate +
            '/' +
            _amFilterByEndDate +
            '/?search_value=' +
            _amSearchValue
    );
};

//  ADSET
export const adSetGetAllByUserApi = (_amFilterByStartDate, _amFilterByEndDate, _amSearchValue) => {
    return axiosService.getWithToken(
        urlApis.API_AD_SET_GET_ALL_BY_USER + _amFilterByStartDate + '/' + _amFilterByEndDate + '/?search_value=' + _amSearchValue
    );
};
export const adSetGetAllByUser1Api = (_amFilterByStartDate, _amFilterByEndDate, _amSearchValue, _extra_amSelectedCampaignListString) => {
    return axiosService.getWithToken(
        urlApis.API_AD_SET_GET_ALL_BY_USER_1 +
            _amFilterByStartDate +
            '/' +
            _amFilterByEndDate +
            '/?search_value=' +
            _amSearchValue +
            '&campaign_ids=' +
            _extra_amSelectedCampaignListString
    );
};
export const adSetUnGroupGetAllByUserApi = (_amFilterByStartDate, _amFilterByEndDate, _amSearchValue) => {
    return axiosService.getWithToken(
        urlApis.API_AD_SET_UNGROUP_GET_ALL_BY_USER + _amFilterByStartDate + '/' + _amFilterByEndDate + '/?search_value=' + _amSearchValue
    );
};
// export const adSetGetAllByUserApi = (paramString, _amFilterByStartDate, _amFilterByEndDate) => {
//     return axiosService.getWithToken(
//         urlApis.API_AD_SET_GET_ALL_BY_USER + _amFilterByStartDate + '/' + _amFilterByEndDate + '/?' + paramString
//     );
// };
//
export const adSetAddWithCampaignByUserApi = (data) => {
    return axiosService.postWithToken(urlApis.API_AD_SET_ADD_WITH_CAMPAIGN_BY_USER, data);
};
export const adSetChangeStatusRunAndPauseByUserApi = (data) => {
    return axiosService.patchWithToken(urlApis.API_AD_SET_CHANGE_STATUS_RUN_AND_PAUSE_BY_USER, data);
};
export const adSetUpdateByUserApi = (data) => {
    return axiosService.patchWithToken(urlApis.API_AD_SET_UPDATE_BY_USER, data);
};
export const adSetsDeleteByUserApi = (data) => {
    return axiosService.deleteWithToken(urlApis.API_AD_SET_DELETE_BY_USER, data);
};
export const adSetUpdateExistingByUserApi = (data) => {
    return axiosService.patchWithToken(urlApis.API_AD_SET_UPDATE_EXISTING_BY_USER, data);
};

// AdSetsPerformance
export const adSetPerformanceUnGroupGetAllByUserApi = (_amFilterByStartDate, _amFilterByEndDate, _amSearchValue) => {
    return axiosService.getWithToken(
        urlApis.API_AD_SETS_PERFORMANCE_UNGROUP_GET_ALL_BY_USER +
            _amFilterByStartDate +
            '/' +
            _amFilterByEndDate +
            '/?search_value=' +
            _amSearchValue
    );
};
// export const adSetPerformanceChangeStatusRunAndPauseByUserApi = (data) => {
//     return axiosService.patchWithToken(urlApis.API_AD_SETS_PERFORMANCE_CHANGE_STATUS_RUN_AND_PAUSE_BY_USER, data);
// };
// AdSetsPlatforms
export const adSetsPlatformsChangeStatusRunAndPauseByUserApi = (data) => {
    return axiosService.patchWithToken(urlApis.API_AD_SETS_PLATFORMs_CHANGE_STATUS_RUN_AND_PAUSE_BY_USER, data);
};
export const adSetsPlatformsUnGroupGetAllByUserApi = (
    _amFilterByStartDate,
    _amFilterByEndDate,
    _amSearchValue,
    _extra_amSelectedCampaignPlatformListString
) => {
    return axiosService.getWithToken(
        urlApis.API_AD_SETS_PLATFORMS_UNGROUP_GET_ALL_BY_USER +
            _amFilterByStartDate +
            '/' +
            _amFilterByEndDate +
            '/?search_value=' +
            _amSearchValue +
            '&campaign_ids=' +
            _extra_amSelectedCampaignPlatformListString
    );
};

//  ADS
export const adsGetAllByUserApi = (_amFilterByStartDate, _amFilterByEndDate, _amSearchValue) => {
    return axiosService.getWithToken(
        urlApis.API_ADS_GET_ALL_BY_USER + _amFilterByStartDate + '/' + _amFilterByEndDate + '/?search_value=' + _amSearchValue
    );
};
export const adsGetAllByUser1Api = (
    _amFilterByStartDate,
    _amFilterByEndDate,
    _amSearchValue,
    _extra_amSelectedAdSetListString,
    _extra_amSelectedCampaignListString
) => {
    return axiosService.getWithToken(
        urlApis.API_ADS_GET_ALL_BY_USER_1 +
            _amFilterByStartDate +
            '/' +
            _amFilterByEndDate +
            '/?search_value=' +
            _amSearchValue +
            '&ad_set_ids=' +
            _extra_amSelectedAdSetListString +
            '&campaign_ids=' +
            _extra_amSelectedCampaignListString
    );
};
export const adsUnGroupGetAllByUserApi = (_amFilterByStartDate, _amFilterByEndDate, _amSearchValue) => {
    return axiosService.getWithToken(
        urlApis.API_ADS_UNGROUP_GET_ALL_BY_USER + _amFilterByStartDate + '/' + _amFilterByEndDate + '/?search_value=' + _amSearchValue
    );
};
// export const adsGetAllByUserApi = (paramString, _amFilterByStartDate, _amFilterByEndDate) => {
//     return axiosService.getWithToken(
//         urlApis.API_ADS_GET_ALL_BY_USER + _amFilterByStartDate + '/' + _amFilterByEndDate + '/?' + paramString
//     );
// };
//
export const adsChangeStatusRunAndPauseByUserApi = (data) => {
    return axiosService.patchWithToken(urlApis.API_ADS_CHANGE_STATUS_RUN_AND_PAUSE_BY_USER, data);
};
export const adsUpdateByUserApi = (data) => {
    return axiosService.patchWithToken(urlApis.API_ADS_UPDATE_BY_USER, data);
};
export const adsDeleteByUserApi = (data) => {
    return axiosService.deleteWithToken(urlApis.API_ADS_DELETE_BY_USER, data);
};
//
export const adsAddCommonByUserApi = (data) => {
    return axiosService.postWithToken(urlApis.API_ADS_ADD_COMMON_BY_USER, data);
};
//
export const adsAddGoogleOnlyByUserApi = (data) => {
    return axiosService.postWithToken(urlApis.API_ADS_ADD_GOOGLE_ONLY_BY_USER, data);
};
export const adsAddPinterestOnlyByUserApi = (data) => {
    return axiosService.postWithToken(urlApis.API_ADS_ADD_PINTEREST_ONLY_BY_USER, data);
};
export const adsAddMin1080x1080ImageByUserApi = (data) => {
    return axiosService.postWithToken(urlApis.API_ADS_ADD_MIN1080X1080_IMAGE_BY_USER, data);
};
export const adsAdd1296x1080ImageByUserApi = (data) => {
    return axiosService.postWithToken(urlApis.API_ADS_ADD_1296X1080_IMAGE_BY_USER, data);
};
export const adsAdd1080x1080ImageByUserApi = (data) => {
    return axiosService.postWithToken(urlApis.API_ADS_ADD_1080X1080_IMAGE_BY_USER, data);
};
export const adsAdd1080x1920ImageByUserApi = (data) => {
    return axiosService.postWithToken(urlApis.API_ADS_ADD_1080X1920_IMAGE_BY_USER, data);
};
export const adsAddMin1080x1080VideoByUserApi = (data) => {
    return axiosService.postWithToken(urlApis.API_ADS_ADD_MIN1080X1080_VIDEO_BY_USER, data);
};
export const adsUpdateByApi = (data) => {
    return axiosService.patchWithToken(urlApis.API_ADS_UPDATE_BY_USER, data);
};
export const adsUpdateRunOnStatusByUserApi = (data) => {
    return axiosService.patchWithToken(urlApis.API_ADS_UPDATE_STATUS_RUN_ON_BY_USER, data);
};

// AdsPerformance
export const adsPerformanceChangeStatusRunAndPauseByUserApi = (data) => {
    return axiosService.patchWithToken(urlApis.API_ADS_PERFORMANCE_CHANGE_STATUS_RUN_AND_PAUSE_BY_USER, data);
};
export const adsPerformanceUnGroupGetAllByUserApi = (_amFilterByStartDate, _amFilterByEndDate, _amSearchValue) => {
    return axiosService.getWithToken(
        urlApis.API_ADS_PERFORMANCE_UNGROUP_GET_ALL_BY_USER +
            _amFilterByStartDate +
            '/' +
            _amFilterByEndDate +
            '/?search_value=' +
            _amSearchValue
    );
};
// AdsPlatforms
export const adsPlatformsChangeStatusRunAndPauseByUserApi = (data) => {
    return axiosService.patchWithToken(urlApis.API_ADS_PLATFORMs_CHANGE_STATUS_RUN_AND_PAUSE_BY_USER, data);
};
export const adsPlatformsUnGroupGetAllByUserApi = (
    _amFilterByStartDate,
    _amFilterByEndDate,
    _amSearchValue,
    _extra_amSelectedAdSetPlatformListString
) => {
    return axiosService.getWithToken(
        urlApis.API_ADS_PLATFORMS_UNGROUP_GET_ALL_BY_USER +
            _amFilterByStartDate +
            '/' +
            _amFilterByEndDate +
            '/?search_value=' +
            _amSearchValue +
            '&ad_set_ids=' +
            _extra_amSelectedAdSetPlatformListString
    );
};

// API THIRD SIDE

export const pinterestBoardsGetByUserApi = () => {
    return axiosService.getWithToken(urlApis.API_PINTEREST_GET_BOARDS);
};
export const metaPagesGetByUserdApi = () => {
    return axiosService.getWithToken(urlApis.API_META_GET_PAGES);
};
export const metaAccountsGetByUserApi = () => {
    return axiosService.getWithToken(urlApis.API_META_GET_ACCOUNTS);
};
