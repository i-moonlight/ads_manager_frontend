import React, { useState, lazy, useEffect, useRef } from 'react';
import { Button, Dropdown, DropdownButton, Form, InputGroup, OverlayTrigger, Tooltip } from 'react-bootstrap';
import 'primereact/resources/themes/lara-light-blue/theme.css'; //theme
import 'primereact/resources/primereact.min.css'; //core css
import 'primeicons/primeicons.css';
import '@blueprintjs/datetime/lib/css/blueprint-datetime.css';
import '@blueprintjs/core/lib/css/blueprint.css';
import { DateRangeInput } from '@blueprintjs/datetime';
import moment from 'moment';
import { useAdsManagerLibraryConsumer } from '../common/AdsManagerLibraryContext';
import * as actions_AdsManagerLAT from '../common/AdsManagerLibraryActionType';
import { AlertSuccess, AlertError } from '../../../utils/alertUtils';

import { useExtraLibraryConsumer } from '../../../contexts/extra/ExtraLibraryContext';

import { useDispatch, useSelector } from 'react-redux';
import {
    adjustEndDate,
    adjustStartDate,
    clearEndDate,
    clearStartDate,
    selectCurrentRefreshTime,
    selectCurrentTab,
    selectEndDate,
    selectIsGroupPlatforms,
    selectSearchQuery,
    selectStartDate,
    updateSearchQuery
} from '../../../store/slices/ads-manager';
import {
    useAdSetChangeStatusRunAndPauseByUserMutation,
    useAdSetsPlatformsChangeStatusRunAndPauseByUserMutation,
    useAdsChangeStatusRunAndPauseByUserMutation,
    useAdsPlatformsChangeStatusRunAndPauseByUserMutation,
    useCampaignChangeStatusRunAndPauseByUserMutation
} from '../../../apis/ads-manager-api-slice';
import { adsManagerTabs } from '../../../config/constant';
import useMounted from '../../../hooks/useMounted';
import useGetAdsManagerData from '../../../hooks/useGetAdsManagerData';
import * as statusTypes from '../../../constants/statusTypes';

const MediaLibraryModal = lazy(() => import('./media/MediaSelectModal'));
const CampaignFinalizeModal = lazy(() => import('./campaign/CampaignFinalizeModal'));
const CampaignCreateAndEditModal = lazy(() => import('./campaign/CampaignCreateAndEditModal'));

const CampaignCreateModal = lazy(() => import('../components/campaign/CampaignCreateModal'));
const CampaignDeleteModal = lazy(() => import('../components/campaign/CampaignDeleteModal'));
const AdSetDeleteModal = lazy(() => import('../components/adset/AdSetDeleteModal'));
const AdsDeleteModal = lazy(() => import('../components/ads/AdsDeleteModal'));

const InputControls = () => {
    const { state_AdsManagerLC, dispatch_AdsManagerLC } = useAdsManagerLibraryConsumer();
    const {
        amIsShowCampaignCreateModal,
        amIsShowCampaignCreateAndEditModal,
        amIsShowCampaignFinalizeModal,
        amIsShowMediaLibraryModal,
        isRefreshAfterUpdate
    } = state_AdsManagerLC;

    const { state_ExtraLC } = useExtraLibraryConsumer();
    const {
        extra_amSelectedCampaignList,
        extra_amSelectedAdSetList,
        extra_amSelectedAdsList,
        extra_amSelectedCampaignPlatformList,
        extra_amSelectedAdSetPlatformList,
        extra_amSelectedAdsPlatformList
        // extra_amRefreshTimeCampaign,
        // extra_amRefreshTimeAdSet,
        // extra_amRefreshTimeAds
    } = state_ExtraLC;

    const isGroupPlatforms = useSelector(selectIsGroupPlatforms);
    const currentTab = useSelector(selectCurrentTab);
    const searchQuery = useSelector(selectSearchQuery);

    const [isShow_CampaignDeleteModal, setIsShow_CampaignDeleteModal] = useState(false);
    const [isShow_AdSetDeleteModal, setIsShow_AdSetDeleteModal] = useState(false);
    const [isShow_AdsDeleteModal, setIsShow_AdsDeleteModal] = useState(false);
    const [isShowClearBtn, setIsShowClearBtn] = useState(false);
    const [searchValue, setSearchValue] = useState(searchQuery);
    const typingTimeoutRef = useRef(null);
    // const [currentRefreshTime, setCurrentRefreshTime] = useState('');

    const dispatch = useDispatch();

    const [campaignChangeStatusRunAndPauseByUser] = useCampaignChangeStatusRunAndPauseByUserMutation();
    const [adSetChangeStatusRunAndPauseByUser] = useAdSetChangeStatusRunAndPauseByUserMutation();
    const [adSetsPlatformsChangeStatusRunAndPauseByUser] = useAdSetsPlatformsChangeStatusRunAndPauseByUserMutation();
    const [adsChangeStatusRunAndPauseByUser] = useAdsChangeStatusRunAndPauseByUserMutation();
    const [adsPlatformsChangeStatusRunAndPauseByUser] = useAdsPlatformsChangeStatusRunAndPauseByUserMutation();

    const startDate = useSelector(selectStartDate);
    const endDate = useSelector(selectEndDate);

    const mounted = useMounted();

    const currentRefreshTime = useSelector(selectCurrentRefreshTime);

    const { isRefreshByUser } = state_AdsManagerLC;
    const { isFetching, refetch } = useGetAdsManagerData();

    useEffect(() => {
        if (isRefreshByUser) refetch();
    }, [isRefreshByUser, refetch]);

    useEffect(() => {
        if (!isFetching) {
            dispatch_AdsManagerLC({ type: actions_AdsManagerLAT.AT_SET_IS_REFRESH_BY_USER, payload: false });
        }
    }, [isFetching, dispatch_AdsManagerLC]);

    // useEffect(() => {
    //     if (extra_amRefreshTimeCampaign) {
    //         setCurrentRefreshTime(timeElapsedString(extra_amRefreshTimeCampaign));
    //     } else if (extra_amRefreshTimeAdSet) {
    //         setCurrentRefreshTime(timeElapsedString(extra_amRefreshTimeAdSet));
    //     } else if (extra_amRefreshTimeAds) {
    //         setCurrentRefreshTime(timeElapsedString(extra_amRefreshTimeAds));
    //     }
    // }, [extra_amRefreshTimeCampaign, extra_amRefreshTimeAdSet, extra_amRefreshTimeAds]);

    useEffect(() => {
        const currentDate = new Date();
        const pastMonthDate = new Date();
        pastMonthDate.setMonth(currentDate.getMonth() - 1);
        if (!startDate) dispatch(adjustStartDate(moment(pastMonthDate).format('YYYY-MM-DD')));
        if (!endDate) dispatch(adjustEndDate(moment(currentDate).format('YYYY-MM-DD')));
    }, [dispatch, startDate, endDate]);

    useEffect(() => {
        setIsShowClearBtn(!!searchValue.length);

        if (mounted) {
            clearTimeout(typingTimeoutRef.current);
            typingTimeoutRef.current = setTimeout(() => dispatch(updateSearchQuery(searchValue)), 300);
        }
    }, [searchValue, dispatch, mounted]);

    const handleRangeChange = (range) => {
        if (range && range[0] && range[1]) {
            dispatch(adjustStartDate(moment(range[0]).format('YYYY-MM-DD')));
            dispatch(adjustEndDate(moment(range[1]).format('YYYY-MM-DD')));
        } else if (range[0] === null && range[1] === null) {
            dispatch(clearStartDate());
            dispatch(clearEndDate());
        }
    };

    const runOrPauseCampaign = async (status) => {
        const data = {
            status,
            campaign_ids: extra_amSelectedCampaignList.map((i) => i.id),
            disabled: status === statusTypes.PAUSED ? true : false
        };

        try {
            await campaignChangeStatusRunAndPauseByUser(data).unwrap();
            AlertSuccess('Changed status!');
        } catch (error) {
            AlertError('Error from server!');
        }
    };

    const runOrPauseAdSet = async (status) => {
        const data = {
            status,
            ad_set_ids: extra_amSelectedAdSetList.map((i) => i.id),
            disabled: status === statusTypes.PAUSED ? true : false
        };

        try {
            await adSetChangeStatusRunAndPauseByUser(data).unwrap();
            AlertSuccess('Changed status!');
        } catch (error) {
            AlertError('Error from server!');
        }
    };

    const runOrPauseAds = async (status) => {
        const data = {
            status,
            ads_ids: extra_amSelectedAdsList.map((i) => i.id),
            disabled: status === statusTypes.PAUSED ? true : false
        };

        try {
            await adsChangeStatusRunAndPauseByUser(data).unwrap();
            AlertSuccess('Changed status!');
        } catch (error) {
            AlertError('Error from server!');
        }
    };

    const handleNew = () => {
        dispatch_AdsManagerLC({
            type: actions_AdsManagerLAT.AT_SET_ADS_MANAGER_IS_SHOW_CAMPAIGN_CREATE_MODAL,
            payload: true
        });
        dispatch_AdsManagerLC({
            type: actions_AdsManagerLAT.AT_SET_ADS_MANAGER_IS_FROM_CAMPAIGN_CREATE_AND_EDIT_MODAL_TO_MEDIA_LIBRARY_MODAL,
            payload: false
        });
        //
        dispatch_AdsManagerLC({
            type: actions_AdsManagerLAT.AT_SET_ADS_MANAGER_ADS_CAMPAIGN_ID_CURRENT,
            payload: 0
        });
        dispatch_AdsManagerLC({
            type: actions_AdsManagerLAT.AT_SET_ADS_MANAGER_ADS_AD_SET_ID_CURRENT,
            payload: 0
        });
        dispatch_AdsManagerLC({
            type: actions_AdsManagerLAT.AT_SET_ADS_MANAGER_ADS_URL_CURRENT,
            payload: ''
        });
        dispatch_AdsManagerLC({
            type: actions_AdsManagerLAT.AT_SET_ADS_MANAGER_DISPLAY_URL_CURRENT,
            payload: ''
        });
        dispatch_AdsManagerLC({
            type: actions_AdsManagerLAT.AT_SET_IS_REFRESH_AFTER_UPDATE,
            payload: !isRefreshAfterUpdate
        });
        dispatch_AdsManagerLC({
            type: actions_AdsManagerLAT.AT_SET_ADS_MANAGER_ADS_CAMPAIGN_ITEM_CURRENT,
            payload: null
        });
        dispatch_AdsManagerLC({
            type: actions_AdsManagerLAT.AT_SET_ADS_MANAGER_AD_SET_ITEM_CURRENT,
            payload: null
        });
    };

    const runOrPauseCampaignPlatform = async (status) => {
        const data = {
            status,
            campaign_platform_ids: extra_amSelectedCampaignPlatformList.map((i) => i.id),
            disabled: status === statusTypes.PAUSED ? true : false
        };

        try {
            await campaignChangeStatusRunAndPauseByUser(data).unwrap();
            AlertSuccess('Changed status!');
        } catch (error) {
            AlertError('Error from server!');
        }
    };

    const runOrPauseAdSetPlatform = async (status) => {
        const data = {
            status: status,
            ad_set_platform_ids: extra_amSelectedAdSetPlatformList.map((i) => i.id),
            disabled: status === statusTypes.PAUSED ? true : false
        };

        try {
            await adSetsPlatformsChangeStatusRunAndPauseByUser(data).unwrap();
            AlertSuccess('Changed status!');
        } catch (error) {
            AlertError('Error from server!');
        }
    };

    const runOrPauseAdsPlatform = async (status) => {
        const data = {
            status,
            ad_platform_ids: extra_amSelectedAdsPlatformList.map((i) => i.id),
            disabled: status === statusTypes.PAUSED ? true : false
        };

        try {
            await adsPlatformsChangeStatusRunAndPauseByUser(data).unwrap();
            AlertSuccess('Changed status!');
        } catch (error) {
            AlertError('Error from server!');
        }
    };

    // function timeElapsedString0(dtDateTime, full = false) {
    //     const now = new Date();
    //     const ago = new Date(dtDateTime);
    //     const diff = {
    //         y: now.getFullYear() - ago.getFullYear(),
    //         m: now.getMonth() - ago.getMonth(),
    //         w: 0,
    //         d: now.getDate() - ago.getDate(),
    //         h: now.getHours() - ago.getHours(),
    //         i: now.getMinutes() - ago.getMinutes(),
    //         s: now.getSeconds() - ago.getSeconds()
    //     };

    //     if (diff.d < 0) {
    //         diff.m -= 1;
    //         const prevMonthDays = new Date(now.getFullYear(), now.getMonth(), 0).getDate();
    //         diff.d = prevMonthDays - ago.getDate() + now.getDate();
    //     }

    //     diff.w = Math.floor(diff.d / 7);
    //     diff.d -= diff.w * 7;

    //     const string = {
    //         y: 'year',
    //         m: 'month',
    //         w: 'week',
    //         d: 'day',
    //         h: 'hour',
    //         i: 'minute',
    //         s: 'second'
    //     };

    //     for (let key in string) {
    //         if (diff[key]) {
    //             const plural = diff[key] > 1 ? 's' : '';
    //             string[key] = diff[key] + ' ' + string[key] + plural;
    //         } else {
    //             delete string[key];
    //         }
    //     }

    //     let result = Object.values(string).slice(0, full ? undefined : 1);
    //     result = result.length ? result.join(', ') + ' ago' : 'just now';
    //     result = result.toString().replace(/-/g, ' ');
    //     return result;
    // }

    // function timeElapsedString(datetime) {
    //     const now = new Date();
    //     const elapsedMillis = now - datetime;
    //     const elapsedSeconds = Math.floor(elapsedMillis / 1000);
    //     const elapsedMinutes = Math.floor(elapsedSeconds / 60);
    //     const elapsedHours = Math.floor(elapsedMinutes / 60);
    //     const elapsedDays = Math.floor(elapsedHours / 24);
    //     const elapsedMonths = Math.floor(elapsedDays / 30);
    //     const elapsedYears = Math.floor(elapsedMonths / 12);

    //     if (elapsedYears > 0) {
    //         return elapsedYears === 1 ? '1 year ago' : elapsedYears + ' years ago';
    //     } else if (elapsedMonths > 0) {
    //         return elapsedMonths === 1 ? '1 month ago' : elapsedMonths + ' months ago';
    //     } else if (elapsedDays > 0) {
    //         return elapsedDays === 1 ? '1 day ago' : elapsedDays + ' days ago';
    //     } else if (elapsedHours > 0) {
    //         return elapsedHours === 1 ? '1 hour ago' : elapsedHours + ' hours ago';
    //     } else if (elapsedMinutes > 0) {
    //         return elapsedMinutes === 1 ? '1 minute ago' : elapsedMinutes + ' minutes ago';
    //     } else {
    //         return elapsedSeconds <= 1 ? 'just now' : elapsedSeconds + ' seconds ago';
    //     }
    // }

    const handleRefreshData = () => {
        // dispatch_AdsManagerLC({
        //     type: actions_AdsManagerLAT.AT_SET_IS_REFRESH_AFTER_UPDATE,
        //     payload: !isRefreshAfterUpdate
        // });
        // let currentTime = Date.now();
        // if (extra_amRefreshTimeCampaign === null) {
        //     dispatch_ExtraLC({
        //         type: actions_ExtraLAT.AT_SET_EXTRA_ADS_MANAGER_REFRESH_TIME_CAMPAIGN,
        //         payload: currentTime
        //     });
        //     setCurrentRefreshTime(timeElapsedString(currentTime));
        // } else {
        //     setCurrentRefreshTime(timeElapsedString(extra_amRefreshTimeCampaign, true));
        // }
        dispatch_AdsManagerLC({
            type: actions_AdsManagerLAT.AT_SET_IS_REFRESH_BY_USER,
            payload: true
        });
    };

    return (
        <>
            <div className="input_controls_container_ads_manager">
                <div className="left_buttons">
                    <div className="left_buttons_control">
                        <Button onClick={() => handleNew()} variant="primary" size="sm" className="text-capitalize new_button">
                            <i className="fas fa-plus" />
                            New
                        </Button>
                        {currentTab === adsManagerTabs.campaign && (
                            <>
                                <DropdownButton
                                    variant="secondary"
                                    size="sm"
                                    title={
                                        <span>
                                            <i className="fas fa-pencil-alt" style={{ marginRight: '5px' }}></i> Edit
                                        </span>
                                    }
                                    id="bg-nested-dropdown"
                                    disabled={
                                        (isGroupPlatforms &&
                                            ((extra_amSelectedCampaignList && extra_amSelectedCampaignList.length === 0) ||
                                                extra_amSelectedCampaignList === null)) ||
                                        (!isGroupPlatforms &&
                                            ((extra_amSelectedCampaignPlatformList && extra_amSelectedCampaignPlatformList.length === 0) ||
                                                extra_amSelectedCampaignPlatformList === null))
                                    }
                                >
                                    <Dropdown.Item
                                        onClick={() =>
                                            isGroupPlatforms
                                                ? runOrPauseCampaign(statusTypes.ACTIVE)
                                                : runOrPauseCampaignPlatform(statusTypes.ACTIVE)
                                        }
                                        eventKey="1"
                                    >
                                        Run
                                    </Dropdown.Item>
                                    <Dropdown.Item
                                        onClick={() =>
                                            isGroupPlatforms
                                                ? runOrPauseCampaign(statusTypes.PAUSED)
                                                : runOrPauseCampaignPlatform(statusTypes.PAUSED)
                                        }
                                        eventKey="2"
                                    >
                                        Pause
                                    </Dropdown.Item>
                                </DropdownButton>
                                <Button
                                    size="sm"
                                    onClick={() => setIsShow_CampaignDeleteModal(true)}
                                    disabled={
                                        (extra_amSelectedCampaignList && extra_amSelectedCampaignList.length === 0) ||
                                        extra_amSelectedCampaignList === null ||
                                        !isGroupPlatforms
                                    }
                                    variant="danger"
                                    className="text-capitalize"
                                >
                                    Delete
                                </Button>
                            </>
                        )}
                        {currentTab === adsManagerTabs.adSet && (
                            <>
                                <DropdownButton
                                    size="sm"
                                    variant="secondary"
                                    title={
                                        <span>
                                            <i className="fas fa-pencil-alt" style={{ marginRight: '5px' }}></i> Edit
                                        </span>
                                    }
                                    id="bg-nested-dropdown"
                                    disabled={
                                        (isGroupPlatforms &&
                                            ((extra_amSelectedAdSetList && extra_amSelectedAdSetList.length === 0) ||
                                                extra_amSelectedAdSetList === null)) ||
                                        (!isGroupPlatforms &&
                                            ((extra_amSelectedAdSetPlatformList && extra_amSelectedAdSetPlatformList.length === 0) ||
                                                extra_amSelectedAdSetPlatformList === null))
                                    }
                                >
                                    <Dropdown.Item
                                        onClick={() =>
                                            isGroupPlatforms
                                                ? runOrPauseAdSet(statusTypes.ACTIVE)
                                                : runOrPauseAdSetPlatform(statusTypes.ACTIVE)
                                        }
                                        eventKey="1"
                                    >
                                        Run
                                    </Dropdown.Item>
                                    <Dropdown.Item
                                        onClick={() =>
                                            isGroupPlatforms
                                                ? runOrPauseAdSet(statusTypes.PAUSED)
                                                : runOrPauseAdSetPlatform(statusTypes.PAUSED)
                                        }
                                        eventKey="2"
                                    >
                                        Pause
                                    </Dropdown.Item>
                                </DropdownButton>
                                <Button
                                    size="sm"
                                    onClick={() => setIsShow_AdSetDeleteModal(true)}
                                    disabled={
                                        (extra_amSelectedAdSetList && extra_amSelectedAdSetList.length === 0) ||
                                        extra_amSelectedAdSetList === null
                                    }
                                    variant="danger"
                                    className="text-capitalize"
                                >
                                    Delete
                                </Button>
                            </>
                        )}
                        {currentTab === adsManagerTabs.ad && (
                            <>
                                <DropdownButton
                                    size="sm"
                                    variant="secondary"
                                    title={
                                        <span>
                                            <i className="fas fa-pencil-alt" style={{ marginRight: '5px' }}></i> Edit
                                        </span>
                                    }
                                    id="bg-nested-dropdown"
                                    disabled={
                                        (isGroupPlatforms &&
                                            ((extra_amSelectedAdsList && extra_amSelectedAdsList.length === 0) ||
                                                extra_amSelectedAdsList === null)) ||
                                        (!isGroupPlatforms &&
                                            ((extra_amSelectedAdsPlatformList && extra_amSelectedAdsPlatformList.length === 0) ||
                                                extra_amSelectedAdsPlatformList === null))
                                    }
                                >
                                    <Dropdown.Item
                                        onClick={() =>
                                            isGroupPlatforms ? runOrPauseAds(statusTypes.ACTIVE) : runOrPauseAdsPlatform(statusTypes.ACTIVE)
                                        }
                                        eventKey="1"
                                    >
                                        Run
                                    </Dropdown.Item>
                                    <Dropdown.Item
                                        onClick={() =>
                                            isGroupPlatforms ? runOrPauseAds(statusTypes.PAUSED) : runOrPauseAdsPlatform(statusTypes.PAUSED)
                                        }
                                        eventKey="2"
                                    >
                                        Pause
                                    </Dropdown.Item>
                                </DropdownButton>
                                <Button
                                    size="sm"
                                    onClick={() => setIsShow_AdsDeleteModal(true)}
                                    disabled={
                                        (extra_amSelectedAdsList && extra_amSelectedAdsList.length === 0) ||
                                        extra_amSelectedAdsList === null ||
                                        !isGroupPlatforms
                                    }
                                    variant="danger"
                                    className="text-capitalize"
                                >
                                    Delete
                                </Button>
                            </>
                        )}
                    </div>
                </div>
                <div className="right_buttons">
                    <div className="update-text">{currentRefreshTime && moment(currentRefreshTime).fromNow()}</div>
                    <OverlayTrigger placement="left" overlay={<Tooltip id={`tooltip-budget`}>Refresh</Tooltip>}>
                        <Button
                            onClick={() => handleRefreshData()}
                            variant="secondary"
                            size="sm"
                            style={{ paddingRight: 4, marginBottom: '0px' }}
                        >
                            <i className="fas fa-sync-alt" />
                        </Button>
                    </OverlayTrigger>
                    <div className="date_filter" style={{ paddingRight: '10px' }}>
                        <DateRangeInput
                            onChange={handleRangeChange}
                            formatDate={(date) => moment(date).format('MM/DD/YYYY')}
                            parseDate={(str) => new Date(str)}
                            allowSingleDayRange={true}
                            selectAllOnFocus={true}
                            defaultValue={[new Date(startDate), new Date(endDate)]}
                            value={[new Date(startDate), new Date(endDate)]}
                            outOfRangeMessage=""
                            // onError={handleRangeError}
                            // minDate={new Date("1960-01-01")}
                            // maxDate={new Date("2300-12-31")}
                            // footerElement={footerElement}
                        />
                    </div>

                    <div className="input_controls_search">
                        <InputGroup>
                            <Form.Control
                                onChange={(e) => setSearchValue(e.target.value)}
                                value={searchValue}
                                type="text"
                                placeholder="Search..."
                                className="input_controls_search__text"
                                style={{ height: '34px' }}
                            />
                            <InputGroup.Append>
                                <Button
                                    onClick={() => setSearchValue('')}
                                    disabled={!isShowClearBtn}
                                    className="input_controls_search__btn_clear"
                                    style={{ height: '34px', minWidth: '30px', padding: '0px' }}
                                >
                                    {isShowClearBtn ? (
                                        <i className="fas fa-times" style={{ color: 'grey' }}></i>
                                    ) : (
                                        <i className="fas fa-search" style={{ color: 'grey' }}></i>
                                    )}
                                </Button>
                            </InputGroup.Append>
                        </InputGroup>
                    </div>
                </div>
            </div>
            {!!amIsShowCampaignCreateModal && <CampaignCreateModal show={amIsShowCampaignCreateModal} />}
            {!!isShow_CampaignDeleteModal && (
                <CampaignDeleteModal show={isShow_CampaignDeleteModal} hideModal={() => setIsShow_CampaignDeleteModal(false)} />
            )}
            {!!isShow_AdSetDeleteModal && (
                <AdSetDeleteModal show={isShow_AdSetDeleteModal} hideModal={() => setIsShow_AdSetDeleteModal(false)} />
            )}
            {!!isShow_AdsDeleteModal && <AdsDeleteModal show={isShow_AdsDeleteModal} hideModal={() => setIsShow_AdsDeleteModal(false)} />}
            {!!amIsShowMediaLibraryModal && <MediaLibraryModal show={amIsShowMediaLibraryModal} />}
            {!!amIsShowCampaignFinalizeModal && <CampaignFinalizeModal show={amIsShowCampaignFinalizeModal} />}
            {!!amIsShowCampaignCreateAndEditModal && <CampaignCreateAndEditModal show={amIsShowCampaignCreateAndEditModal} />}
        </>
    );
};

export default InputControls;
