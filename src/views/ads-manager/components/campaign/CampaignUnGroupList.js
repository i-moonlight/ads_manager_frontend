import React, { useState, useEffect, lazy, useMemo } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Form, Badge, Col } from 'react-bootstrap';

import { useSelector } from 'react-redux';

import { useAdsManagerLibraryConsumer } from '../../common/AdsManagerLibraryContext';
import * as actions_AdsManagerLAT from '../../common/AdsManagerLibraryActionType';
import './Campaign.scss';
import { AlertSuccess, AlertError } from '../../../../utils/alertUtils';

import { useExtraLibraryConsumer } from '../../../../contexts/extra/ExtraLibraryContext';
import * as actions_ExtraLAT from '../../../../contexts/extra/ExtraLibraryActionType';

import { selectAdAccounts } from '../../../../store/slices/ad-accounts';
import { selectIsHideEmptyRows, selectSearchQuery } from '../../../../store/slices/ads-manager';
import useGetAdsManagerData from '../../../../hooks/useGetAdsManagerData';
import { useCampaignChangeStatusRunAndPauseByUserMutation } from '../../../../apis/ads-manager-api-slice';
import pickStatusColor from '../../../../utils/pickStatusColor';
import * as statusTypes from '../../../../constants/statusTypes';

const CampaignEditModal = lazy(() => import('./CampaignEditModal'));

const CampaignUnGroupList = () => {
    const ad_accounts = useSelector(selectAdAccounts);
    const isAuthencatedGoogle = ad_accounts && ad_accounts.google_ads;
    const isAuthencatedFacebook = ad_accounts && ad_accounts.meta_ads;
    const isAuthencatedInstagram = ad_accounts && ad_accounts.meta_ads;
    const isAuthencatedLinkedin = ad_accounts && ad_accounts.linkedin;
    const isAuthencatedSnapchat = ad_accounts && ad_accounts.snapchat;
    const isAuthencatedPinterest = ad_accounts && ad_accounts.pinterest;
    const isAuthencatedTiktok = ad_accounts && ad_accounts.tiktok;
    const isAuthencatedMeta = ad_accounts && ad_accounts.meta_ads;
    const isAuthencatedMessenger = ad_accounts && ad_accounts.meta_ads;
    const isAuthencatedYoutube = ad_accounts && ad_accounts.google_ads;

    const { dispatch_AdsManagerLC } = useAdsManagerLibraryConsumer();

    const { state_ExtraLC, dispatch_ExtraLC } = useExtraLibraryConsumer();
    const {
        extra_amViewBy,
        extra_amCampaignUnGroupColumnNameSort,
        extra_amCampaignUnGroupColumnOrderSort,
        extra_amSelectedCampaignPlatformList
    } = state_ExtraLC;

    const isHideEmptyRows = useSelector(selectIsHideEmptyRows);
    const searchQuery = useSelector(selectSearchQuery);

    const [isShow_CampaignEditModal, setIsShow_CampaignEditModal] = useState(false);
    const [campaignUpdating, setCampaignUpdating] = useState(null);

    const [products, setProducts] = useState(null);

    const [isShowClicks, setIsShowClicks] = useState(false);
    const [isShowImpressions, setIsShowImpressions] = useState(false);
    const [isShowCPM, setIsShowCPM] = useState(false);
    const [isShowCTR, setIsShowCTR] = useState(false);
    const [isShowCPC, setIsShowCPC] = useState(false);
    const [isShowSpent, setIsShowSpent] = useState(false);

    const { data: adsManagerData, isLoading } = useGetAdsManagerData();

    const [campaignChangeStatusRunAndPauseByUser] = useCampaignChangeStatusRunAndPauseByUserMutation();

    const dataResult = useMemo(
        () =>
            adsManagerData?.campaigns_platforms.map((cp) => {
                const campaign_current = adsManagerData.campaigns.filter((c) => c.id === cp.campaign);

                const ad_sets_ids = adsManagerData.ad_sets.filter((as) => as.campaign === campaign_current[0].id).map((as) => as.id);

                return {
                    ...cp,
                    campaign_current,
                    campaigns_performance: adsManagerData.ads_performance.filter(
                        (ap) =>
                            ap.campaign_id === cp.campaign &&
                            ap.publisher_platform === cp.publisher_platform &&
                            ap.ad_platform === cp.ad_platform
                    ),
                    run_on: adsManagerData.ads_platforms.some(
                        (adp) => adp.campaign_id === cp.campaign && adp.run_on && adp.publisher_platform === cp.publisher_platform
                    ),
                    is_Adset_Paused: !adsManagerData.ad_sets_platforms
                        .filter((asp) => ad_sets_ids.includes(asp.ad_set) && asp.publisher_platform === cp.publisher_platform)
                        .some((asp) => asp.status !== statusTypes.PAUSED),
                    is_Ads_Paused: !adsManagerData.ads_platforms
                        .filter((ap) => ap.campaign_id === cp.campaign && ap.publisher_platform === cp.publisher_platform)
                        .some((ap) => ap.status !== statusTypes.PAUSED)
                };
            }),
        [adsManagerData]
    );

    useEffect(() => {
        let filteredDataResult = dataResult;

        if (filteredDataResult?.length) {
            filteredDataResult = filteredDataResult.filter(
                (item) =>
                    (isAuthencatedGoogle && item.run_on === true && item.publisher_platform === 'google') ||
                    (isAuthencatedFacebook && item.run_on === true && item.publisher_platform === 'facebook') ||
                    (isAuthencatedInstagram && item.run_on === true && item.publisher_platform === 'instagram') ||
                    (isAuthencatedLinkedin && item.run_on === true && item.publisher_platform === 'linkedin') ||
                    (isAuthencatedPinterest && item.run_on === true && item.publisher_platform === 'pinterest') ||
                    (isAuthencatedSnapchat && item.run_on === true && item.publisher_platform === 'snapchat') ||
                    (isAuthencatedTiktok && item.run_on === true && item.publisher_platform === 'tiktok') ||
                    (isAuthencatedMeta && item.run_on === true && item.publisher_platform === 'audience_network') ||
                    (isAuthencatedMessenger && item.run_on === true && item.publisher_platform === 'messenger') ||
                    (isAuthencatedYoutube && item.run_on === true && item.publisher_platform === 'youtube')
            );

            if (searchQuery.trim()) {
                filteredDataResult = filteredDataResult.filter((item) =>
                    item.campaign_current[0].name.toLowerCase().includes(searchQuery.toLowerCase())
                );
            }

            if (isHideEmptyRows) {
                filteredDataResult = filteredDataResult.filter((item) => item.campaigns_performance.length > 0);
            }
        }

        setProducts(filteredDataResult);
        dispatch_ExtraLC({
            type: actions_ExtraLAT.AT_SET_EXTRA_ADS_MANAGER_CAMPAIGN_UN_GROUP_LIST,
            payload: filteredDataResult
        });
    }, [dataResult, searchQuery, isHideEmptyRows, dispatch_ExtraLC, isAuthencatedFacebook, isAuthencatedGoogle, isAuthencatedInstagram, isAuthencatedLinkedin, isAuthencatedMessenger, isAuthencatedMeta, isAuthencatedPinterest, isAuthencatedSnapchat, isAuthencatedTiktok, isAuthencatedYoutube]);

    useEffect(() => {
        if (extra_amViewBy) {
            const amViewByString = extra_amViewBy.toString();
            if (amViewByString.includes('Clicks')) {
                setIsShowClicks(true);
            } else {
                setIsShowClicks(false);
            }
            if (amViewByString.includes('Impressions')) {
                setIsShowImpressions(true);
            } else {
                setIsShowImpressions(false);
            }
            if (amViewByString.includes('CPM')) {
                setIsShowCPM(true);
            } else {
                setIsShowCPM(false);
            }
            if (amViewByString.includes('CTR')) {
                setIsShowCTR(true);
            } else {
                setIsShowCTR(false);
            }
            if (amViewByString.includes('CPC')) {
                setIsShowCPC(true);
            } else {
                setIsShowCPC(false);
            }
            if (amViewByString.includes('Spent')) {
                setIsShowSpent(true);
            } else {
                setIsShowSpent(false);
            }
            // if (amViewByString.includes('CPA')) {
            //     setIsShowCPA(true);
            // } else {
            //     setIsShowCPA(false);
            // }
            // if (amViewByString.includes('ROAS')) {
            //     setIsShowROAS(true);
            // } else {
            //     setIsShowROAS(false);
            // }
        }
    }, [extra_amViewBy]);

    const formatCurrency = (value) => {
        return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    };

    const handleSelectionChange = (value) => {
        dispatch_AdsManagerLC({
            type: actions_AdsManagerLAT.AT_SET_ADS_MANAGER_CAMPAIGN_PLATFORM_SELECTED_LIST,
            payload: value
        });
        dispatch_ExtraLC({
            type: actions_ExtraLAT.AT_SET_EXTRA_ADS_MANAGER_CAMPAIGN_SELECTED_PLATFORM_LIST,
            payload: value
        });
    };

    const callCampaignEditModal = (rowData) => {
        setCampaignUpdating(rowData);
        setIsShow_CampaignEditModal(true);
    };

    // CPM = 1000 * Spent/Impressions
    // CTR = 100 * Clicks / Impressions
    // CPC = Spent / Clicks
    // CPA = Spent / Actions
    // ROAS = Earned / Spent
    // If a user is in the Ad Sets tab, then this "Use Existing Campaign" tab should be open when the New button is clicked rather than "Create New Campaign" tab
    // Draft
    // Paused
    // Running
    // Pending
    // Ended

    const Name_parentBodyTemplate = (rowData, props_column) => {
        let _disabled = rowData.disabled;
        // let performance_id = String(rowData.id);
        let platform_id = rowData.id;
        return (
            <div className="Name_parentBodyTemplate">
                <div className="Name_field">{rowData.campaign_current[0].name}</div>
                <Form.Group className="mb-1 Name_edit">
                    <div
                        className={`switch ${
                            rowData.status === statusTypes.ACTIVE && (rowData.is_Adset_Paused || rowData.is_Ads_Paused)
                                ? 'switch-warning'
                                : 'switch-success'
                        } d-inline m-r-10`}
                    >
                        <Form.Control
                            type="checkbox"
                            style={{ width: 'auto' }}
                            id={'checkRunPauseParent_Campaign_' + platform_id}
                            checked={_disabled === false ? true : false}
                            // onChange={(e) => toggleHandler(rowData.id, _disabled === false ? true : false)}
                            onChange={(e) => toggleHandlePlatform(e, platform_id)}
                            disabled={isLoading}
                        />
                        <Form.Label
                            title={_disabled === false ? 'Pause' : 'Run'}
                            htmlFor={'checkRunPauseParent_Campaign_' + platform_id}
                            className="cr"
                        />
                    </div>
                    <div onClick={() => callCampaignEditModal(rowData.campaign_current[0])} style={{ cursor: 'pointer' }}>
                        <i className="fab fas fa-pencil-alt"></i> Edit
                    </div>
                </Form.Group>
            </div>
        );
    };

    const Status_parentBodyTemplate = (rowData, props_column) => {
        let status = rowData.status;

        if (status === statusTypes.ACTIVE) {
            if (rowData.is_Adset_Paused) status = `AD SET ${statusTypes.PAUSED}`;
            if (rowData.is_Ads_Paused) status = `ADS ${statusTypes.PAUSED}`;
        }

        const statusColor = pickStatusColor(status);

        let _isShowGoogleIcon = false;
        let _isShowFacebookIcon = false;
        let _isShowLinkedinIcon = false;
        let _isShowInstagramIcon = false;
        let _isShowPinterestIcon = false;
        let _isShowSnapchatIcon = false;
        let _isShowTiktokIcon = false;
        //
        let _isShowMetaIcon = false;
        let _isShowMessengerIcon = false;
        let _isShowYoutubeIcon = false;
        //

        let publisher_platform = rowData.publisher_platform;
        if (publisher_platform === 'google') _isShowGoogleIcon = true;
        else if (publisher_platform === 'facebook') _isShowFacebookIcon = true;
        else if (publisher_platform === 'instagram') _isShowInstagramIcon = true;
        else if (publisher_platform === 'linkedin') _isShowLinkedinIcon = true;
        else if (publisher_platform === 'pinterest') _isShowPinterestIcon = true;
        else if (publisher_platform === 'snapchat') _isShowSnapchatIcon = true;
        else if (publisher_platform === 'tiktok') _isShowTiktokIcon = true;
        //
        else if (publisher_platform === 'audience_network') _isShowMetaIcon = true;
        else if (publisher_platform === 'messenger') _isShowMessengerIcon = true;
        else if (publisher_platform === 'youtube') _isShowYoutubeIcon = true;

        return (
            <div className="Status_parentBodyTemplate_ungroup">
                <div className="Status_delivery">
                    <div className="media_item__status">
                        <Badge pill variant={statusColor} className="mr-1">
                            {status}
                        </Badge>
                    </div>
                    <div className="media_item__social_logo">
                        {_isShowGoogleIcon && <i className="fab fa-google"></i>}
                        {_isShowFacebookIcon && <i className="fab fa-facebook-f"></i>}
                        {_isShowInstagramIcon && <i className="fab fa-instagram"></i>}
                        {_isShowLinkedinIcon && <i className="fab fa-linkedin-in"></i>}
                        {_isShowSnapchatIcon && <i className="fab fa-snapchat-ghost"></i>}
                        {_isShowPinterestIcon && <i className="fab fa-pinterest"></i>}
                        {_isShowTiktokIcon && <i className="fab fa-tiktok"></i>}
                        {_isShowMetaIcon && <i className="fab fa-meta"></i>}
                        {_isShowMessengerIcon && <i className="fab fa-facebook-messenger"></i>}
                        {_isShowYoutubeIcon && <i className="fab fa-youtube"></i>}
                    </div>
                </div>
            </div>
        );
    };

    const Clicks_parentBodyTemplate = (rowData) => {
        if (rowData.campaigns_performance.length === 0) return 0;
        return rowData.campaigns_performance[0].clicks;
    };

    const Impressions_parentBodyTemplate = (rowData) => {
        if (rowData.campaigns_performance.length === 0) return 0;
        return rowData.campaigns_performance[0].impressions;
    };

    const Spent_parentBodyTemplate = (rowData) => {
        if (rowData.campaigns_performance.length === 0) return '$0';
        return formatCurrency(rowData.campaigns_performance[0].spend);
    };

    const CPM_parentBodyTemplate = (rowData) => {
        if (rowData.campaigns_performance.length === 0) return '$0';
        let spend = parseFloat(rowData.campaigns_performance[0].spend);
        let impre = parseInt(rowData.campaigns_performance[0].impressions);
        let tempResult = impre === 0 ? 0 : 1000 * (spend / impre);
        return formatCurrency(tempResult);
    };

    const CTR_parentBodyTemplate = (rowData) => {
        if (rowData.campaigns_performance.length === 0) return '0%';
        let clicks = parseFloat(rowData.campaigns_performance[0].clicks);
        let impre = parseInt(rowData.campaigns_performance[0].impressions);
        let tempResult = impre === 0 ? 0 : 100 * (clicks / impre);
        return String(tempResult.toFixed(2)) + '%';
        // return formatCurrency(tempResult);
    };

    const CPC_parentBodyTemplate = (rowData) => {
        if (rowData.campaigns_performance.length === 0) return '$0';
        let clicks = parseFloat(rowData.campaigns_performance[0].clicks);
        let spend = parseFloat(rowData.campaigns_performance[0].spend);
        let tempResult = clicks === 0 ? 0 : spend / clicks;
        return formatCurrency(tempResult);
    };

    const CPA_parentBodyTemplate = (rowData) => {
        if (rowData.campaigns_performance.length === 0) return '$0';
        let actions = parseFloat(rowData.campaigns_performance[0].actions);
        let spend = parseFloat(rowData.campaigns_performance[0].spend);
        let tempResult = actions === 0 ? 0 : spend / actions;
        return formatCurrency(tempResult);
    };

    const ROAS_parentBodyTemplate = (rowData) => {
        if (rowData.campaigns_performance.length === 0) return '$0';
        let earned = parseFloat(rowData.campaigns_performance[0].earned);
        let spend = parseFloat(rowData.campaigns_performance[0].spend);
        let tempResult = spend === 0 ? 0 : earned / spend;
        return formatCurrency(tempResult);
    };

    //
    const toggleHandlePlatform = async (event, campaign_platform_id) => {
        const isChecked = event.target.checked;

        const data = {
            status: !isChecked ? statusTypes.PAUSED : statusTypes.ACTIVE,
            campaign_platform_ids: [campaign_platform_id],
            disabled: !isChecked ? true : false
        };

        try {
            await campaignChangeStatusRunAndPauseByUser(data).unwrap();
            AlertSuccess('Changed status!');
        } catch (error) {
            AlertError('Error from server!');
        }
    };

    const Status_sort = (data) => {
        if (data.status === statusTypes.ACTIVE) return statusTypes.ACTIVE;
        return data.status;
    };

    const Name_sort = (data) => {
        return data.campaign_current[0].name;
    };

    const dataTableSortFunction = (value) => (event) => {
        if (value) {
            return [...value].sort((data1, data2) => {
                var clickData1 = data1[event.field];
                var clickData2 = data2[event.field];
                if (event.field === 'clicks') {
                    clickData1 = Clicks_parentBodyTemplate(data1);
                    clickData2 = Clicks_parentBodyTemplate(data2);
                } else if (event.field === 'impressions') {
                    clickData1 = Impressions_parentBodyTemplate(data1);
                    clickData2 = Impressions_parentBodyTemplate(data2);
                } else if (event.field === 'spent') {
                    clickData1 = Spent_parentBodyTemplate(data1);
                    clickData2 = Spent_parentBodyTemplate(data2);
                } else if (event.field === 'cpm') {
                    clickData1 = CPM_parentBodyTemplate(data1);
                    clickData2 = CPM_parentBodyTemplate(data2);
                } else if (event.field === 'cta') {
                    clickData1 = CTR_parentBodyTemplate(data1);
                    clickData2 = CTR_parentBodyTemplate(data2);
                } else if (event.field === 'cpc') {
                    clickData1 = CPC_parentBodyTemplate(data1);
                    clickData2 = CPC_parentBodyTemplate(data2);
                } else if (event.field === 'cpa') {
                    clickData1 = CPA_parentBodyTemplate(data1);
                    clickData2 = CPA_parentBodyTemplate(data2);
                } else if (event.field === 'roas') {
                    clickData1 = ROAS_parentBodyTemplate(data1);
                    clickData2 = ROAS_parentBodyTemplate(data2);
                } else if (event.field === 'status') {
                    // console.log('data1: ', data1);
                    // console.log('data2: ', data2);
                    clickData1 = Status_sort(data1);
                    clickData2 = Status_sort(data2);
                } else if (event.field === 'name') {
                    // console.log('data1: ', data1);
                    // console.log('data2: ', data2);
                    clickData1 = Name_sort(data1);
                    clickData2 = Name_sort(data2);
                }
                var value1 = clickData1;
                var value2 = clickData2;
                if (value1 == null && value2 == null) return 0;
                if (value2 == null) return -1;
                if (value1 == null) return 1;
                if (typeof value1 === 'string' && typeof value2 === 'string') return value1.localeCompare(value2) * event.order;
                if (value1 < value2) return -1 * event.order;
                if (value1 > value2) return 1 * event.order;
                return 0;
            });
        }
    };
    const myProductSort = dataTableSortFunction(products);
    const preSortedProducts = myProductSort({ field: 'clicks', order: 0 });

    const calculateTotal = (field) => {
        var total = 0.0;
        var fieldName = 'NONAME';
        if (products && products.length > 0) {
            let filteredArray = products.filter(
                (item) =>
                    (isAuthencatedGoogle && item.publisher_platform === 'google') ||
                    (isAuthencatedFacebook && item.publisher_platform === 'facebook') ||
                    (isAuthencatedInstagram && item.publisher_platform === 'instagram') ||
                    (isAuthencatedLinkedin && item.publisher_platform === 'linkedin') ||
                    (isAuthencatedPinterest && item.publisher_platform === 'pinterest') ||
                    (isAuthencatedSnapchat && item.publisher_platform === 'snapchat') ||
                    (isAuthencatedTiktok && item.publisher_platform === 'tiktok') ||
                    (isAuthencatedMeta && item.publisher_platform === 'audience_network') ||
                    (isAuthencatedMessenger && item.publisher_platform === 'messenger') ||
                    (isAuthencatedYoutube && item.publisher_platform === 'youtube')
            );
            for (let rowData of filteredArray) {
                var result = 0.0;
                if (field === 'roas') {
                    let earned = parseFloat(rowData.campaigns_performance.length > 0 ? rowData.campaigns_performance[0].earned : 0);
                    let spend = parseFloat(rowData.campaigns_performance.length > 0 ? rowData.campaigns_performance[0].spend : 0);
                    let tempResult = spend === 0 ? 0 : earned / spend;
                    result += tempResult;
                    fieldName = 'ROAS';
                } else if (field === 'cpa') {
                    let actions = parseFloat(rowData.campaigns_performance.length > 0 ? rowData.campaigns_performance[0].actions : 0);
                    let spend = parseFloat(rowData.campaigns_performance.length > 0 ? rowData.campaigns_performance[0].spend : 0);
                    let tempResult = actions === 0 ? 0 : spend / actions;
                    result += tempResult;
                    fieldName = 'CPA';
                } else if (field === 'cpc') {
                    let clicks = parseFloat(rowData.campaigns_performance.length > 0 ? rowData.campaigns_performance[0].clicks : 0);
                    let spend = parseFloat(rowData.campaigns_performance.length > 0 ? rowData.campaigns_performance[0].spend : 0);
                    let tempResult = clicks === 0 ? 0 : spend / clicks;
                    result += tempResult;
                    fieldName = 'CPC';
                } else if (field === 'ctr') {
                    let clicks = parseFloat(rowData.campaigns_performance.length > 0 ? rowData.campaigns_performance[0].clicks : 0);
                    let impre = parseInt(rowData.campaigns_performance.length > 0 ? rowData.campaigns_performance[0].impressions : 0);
                    let tempResult = impre === 0 ? 0 : 100 * (clicks / impre);
                    result += tempResult;
                    fieldName = 'CTR';
                } else if (field === 'cpm') {
                    let spend = parseFloat(rowData.campaigns_performance.length > 0 ? rowData.campaigns_performance[0].spend : 0);
                    let impre = parseInt(rowData.campaigns_performance.length > 0 ? rowData.campaigns_performance[0].impressions : 0);
                    let tempResult = impre === 0 ? 0 : 1000 * (spend / impre);
                    result += tempResult;
                    fieldName = 'CPM';
                } else if (field === 'spent') {
                    result += parseFloat(rowData.campaigns_performance.length > 0 ? rowData.campaigns_performance[0].spend : 0);
                    fieldName = 'SPENT';
                } else if (field === 'impre') {
                    result += rowData.campaigns_performance.length > 0 ? rowData.campaigns_performance[0].impressions : 0;
                    fieldName = 'IMPR';
                } else if (field === 'clicks') {
                    result += rowData.campaigns_performance.length > 0 ? rowData.campaigns_performance[0].clicks : 0;
                    fieldName = 'CLICKS';
                }
                total += result;
            }
            if (field === 'roas' || field === 'cpa' || field === 'cpc' || field === 'ctr' || field === 'cpm' || field === 'spent') {
                total = formatCurrency(total);
            }
        }

        return (
            <div>
                <div>{fieldName}</div>
                <div>{total}</div>
            </div>
        );
    };

    const calculateTotalOthers = (field) => {
        var total = 0.0;
        var total_Clicks = 0.0;
        var total_Impre = 0.0;
        var total_Spent = 0.0;
        var fieldName = 'NONAME';
        if (products && products.length > 0) {
            let filteredArray = products.filter(
                (item) =>
                    (isAuthencatedGoogle && item.publisher_platform === 'google') ||
                    (isAuthencatedFacebook && item.publisher_platform === 'facebook') ||
                    (isAuthencatedInstagram && item.publisher_platform === 'instagram') ||
                    (isAuthencatedLinkedin && item.publisher_platform === 'linkedin') ||
                    (isAuthencatedPinterest && item.publisher_platform === 'pinterest') ||
                    (isAuthencatedSnapchat && item.publisher_platform === 'snapchat') ||
                    (isAuthencatedTiktok && item.publisher_platform === 'tiktok') ||
                    (isAuthencatedMeta && item.publisher_platform === 'audience_network') ||
                    (isAuthencatedMessenger && item.publisher_platform === 'messenger') ||
                    (isAuthencatedYoutube && item.publisher_platform === 'youtube')
            );
            for (let rowData of filteredArray) {
                total_Clicks += rowData.campaigns_performance.length > 0 ? rowData.campaigns_performance[0].clicks : 0;
                total_Impre += rowData.campaigns_performance.length > 0 ? rowData.campaigns_performance[0].impressions : 0;
                total_Spent += parseFloat(rowData.campaigns_performance.length > 0 ? rowData.campaigns_performance[0].spend : 0);
            }
            // console.log('total_Spent: ', total_Spent);
            if (field === 'cpm') {
                total = total_Impre === 0 ? 0 : 1000 * (total_Spent / total_Impre);
                fieldName = 'CPM';
            } else if (field === 'ctr') {
                total = total_Impre === 0 ? 0 : 100 * (total_Clicks / total_Impre);
                fieldName = 'CTR';
            } else if (field === 'cpc') {
                total = total_Clicks === 0 ? 0 : total_Spent / total_Clicks;
                fieldName = 'CPC';
            }
            if (field === 'roas' || field === 'cpa' || field === 'cpc' || field === 'cpm' || field === 'spent') {
                total = formatCurrency(total);
            }
            if (field === 'ctr') {
                total = String(total.toFixed(2)) + '%';
            }
        }

        return (
            <div>
                <div>{fieldName}</div>
                <div>{total}</div>
            </div>
        );
    };

    const footer = () => {
        if (products && products.length === 0) return null;
        return (
            <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
                <div style={{ width: '720px', fontWeight: 'bolder' }}>{`Totals for ${products && products.length} Campaigns`}</div>
                <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                    {isShowClicks && (
                        <Col>
                            <div style={{ textAlign: 'right', fontWeight: 'bolder' }}>{calculateTotal('clicks')}</div>
                        </Col>
                    )}
                    {isShowImpressions && (
                        <Col>
                            <div style={{ textAlign: 'right', fontWeight: 'bolder' }}>{calculateTotal('impre')}</div>
                        </Col>
                    )}
                    {isShowSpent && (
                        <Col>
                            <div style={{ textAlign: 'right', fontWeight: 'bolder' }}>{calculateTotal('spent')}</div>
                        </Col>
                    )}
                    {isShowCPM && (
                        <Col>
                            <div style={{ textAlign: 'right', fontWeight: 'bolder' }}>{calculateTotalOthers('cpm')}</div>
                        </Col>
                    )}
                    {isShowCTR && (
                        <Col>
                            <div style={{ textAlign: 'right', fontWeight: 'bolder' }}>{calculateTotalOthers('ctr')}</div>
                        </Col>
                    )}
                    {isShowCPC && (
                        <Col>
                            <div style={{ textAlign: 'right', fontWeight: 'bolder' }}>{calculateTotalOthers('cpc')}</div>
                        </Col>
                    )}
                    {/* {isShowCPA && (
                        <Col>
                            <div style={{ textAlign: 'right', fontWeight: 'bolder' }}>{calculateTotal('cpa')}</div>
                        </Col>
                    )}
                    {isShowROAS && (
                        <Col>
                            <div style={{ textAlign: 'right', fontWeight: 'bolder' }}>{calculateTotal('roas')}</div>
                        </Col>
                    )} */}
                </div>
            </div>
        );
    };

    const handleSortChange = (event) => {
        // console.log("handleSortChange: ", event);
        dispatch_ExtraLC({
            type: actions_ExtraLAT.AT_SET_EXTRA_ADS_MANAGER_CAMPAIGN_UN_GROUP_COLUMN_NAME_SORT,
            payload: event.sortField
        });
        dispatch_ExtraLC({
            type: actions_ExtraLAT.AT_SET_EXTRA_ADS_MANAGER_CAMPAIGN_UN_GROUP_COLUMN_ORDER_SORT,
            payload: event.sortOrder
        });
    };

    return (
        <div>
            <DataTable
                selectionMode="checkbox"
                value={preSortedProducts}
                selection={extra_amSelectedCampaignPlatformList}
                onSelectionChange={(e) => handleSelectionChange(e.value)}
                dataKey="id"
                style={{ fontSize: '14px' }}
                footer={footer}
                scrollable
                scrollDirection="horizontal"
                scrollHeight="800px"
                sortField={extra_amCampaignUnGroupColumnNameSort}
                sortOrder={extra_amCampaignUnGroupColumnOrderSort}
                onSort={handleSortChange}
            >
                <Column frozen selectionMode="multiple" style={{ flexGrow: 0, flexBasis: '40px', paddingLeft: '10px' }}></Column>
                <Column
                    frozen
                    header="Campaign"
                    field="campaign_name"
                    sortable
                    headerStyle={{ width: '320px', flex: 'unset', borderRight: 'unset', backgroundColor: '#f8f9fa' }}
                    style={{
                        width: '320px',
                        maxWidth: '320px',
                        zIndex: '999',
                        fontWeight: 'bolder',
                        paddingLeft: '10px',
                        paddingRight: '5px',
                        borderRight: '0px solid #dee2e6',
                        backgroundColor: '#f4f7fa'
                    }}
                    sortField="name"
                    sortFunction={myProductSort}
                    body={Name_parentBodyTemplate}
                ></Column>
                <Column
                    header="Status"
                    field="status"
                    sortable
                    headerStyle={{ width: '115px', flex: 'unset', borderRight: 'unset', backgroundColor: 'unset' }}
                    style={{
                        width: '120px',
                        fontWeight: 'bolder',
                        paddingLeft: '20px',
                        paddingRight: '5px',
                        borderRight: '1px solid #dee2e6',
                        backgroundColor: '#f4f7fa',
                        maxWidth: '120px',
                        textAlign: 'center'
                    }}
                    // style={{ justifyContent: 'right', width: '120px' }}
                    sortField="status"
                    sortFunction={myProductSort}
                    body={Status_parentBodyTemplate}
                ></Column>
                {isShowClicks && (
                    <Column
                        field="clicks"
                        header="Clicks"
                        body={Clicks_parentBodyTemplate}
                        sortable
                        style={{ justifyContent: 'right', width: '9%' }}
                        sortField="clicks"
                        sortFunction={myProductSort}
                    ></Column>
                )}
                {isShowImpressions && (
                    <Column
                        field="impressions"
                        header="Impr"
                        body={Impressions_parentBodyTemplate}
                        sortable
                        style={{ justifyContent: 'right', width: '9%' }}
                        sortField="impressions"
                        sortFunction={myProductSort}
                    ></Column>
                )}
                {isShowSpent && (
                    <Column
                        field="spent"
                        header="Spent"
                        body={Spent_parentBodyTemplate}
                        sortable
                        style={{ justifyContent: 'right', width: '9%' }}
                        sortField="spent"
                        sortFunction={myProductSort}
                    ></Column>
                )}
                {isShowCPM && (
                    <Column
                        field="cpm"
                        header="CPM"
                        body={CPM_parentBodyTemplate}
                        sortable
                        style={{ justifyContent: 'right', width: '9%' }}
                        sortField="cpm"
                        sortFunction={myProductSort}
                    ></Column>
                )}
                {isShowCTR && (
                    <Column
                        field="cta"
                        header="CTR"
                        body={CTR_parentBodyTemplate}
                        sortable
                        style={{ justifyContent: 'right', width: '9%' }}
                        sortField="cta"
                        sortFunction={myProductSort}
                    ></Column>
                )}
                {isShowCPC && (
                    <Column
                        field="cpc"
                        header="CPC"
                        body={CPC_parentBodyTemplate}
                        sortable
                        style={{ justifyContent: 'right', width: '9%' }}
                        sortField="cpc"
                        sortFunction={myProductSort}
                    ></Column>
                )}
                {/* {isShowCPA && (
                    <Column
                        field="cpa"
                        header="CPA"
                        body={CPA_parentBodyTemplate}
                        sortable
                        style={{ justifyContent: 'right', width: '9%' }}
                        sortField="cpa"
                        sortFunction={myProductSort}
                    ></Column>
                )}
                {isShowROAS && (
                    <Column
                        field="roas"
                        header="ROAS"
                        body={ROAS_parentBodyTemplate}
                        sortable
                        style={{ justifyContent: 'right', width: '9%' }}
                        sortField="roas"
                        sortFunction={myProductSort}
                    ></Column>
                )} */}
            </DataTable>
            {!!isShow_CampaignEditModal && (
                <CampaignEditModal
                    campaignUpdating={campaignUpdating}
                    show={isShow_CampaignEditModal}
                    hideModal={() => setIsShow_CampaignEditModal(false)}
                />
            )}
        </div>
    );
};

export default CampaignUnGroupList;
