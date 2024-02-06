import React, { useState, useEffect, lazy, useRef, useMemo } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Form, Badge, Col } from 'react-bootstrap';

import { useAdsManagerLibraryConsumer } from '../../common/AdsManagerLibraryContext';
import * as actions_AdsManagerLAT from '../../common/AdsManagerLibraryActionType';
import './Campaign.scss';
import { AlertSuccess, AlertError } from '../../../../utils/alertUtils';

import { useExtraLibraryConsumer } from '../../../../contexts/extra/ExtraLibraryContext';
import * as actions_ExtraLAT from '../../../../contexts/extra/ExtraLibraryActionType';

import { useSelector } from 'react-redux';
import { selectAdAccounts } from '../../../../store/slices/ad-accounts';
import { useCampaignChangeStatusRunAndPauseByUserMutation } from '../../../../apis/ads-manager-api-slice';
import { selectIsGroupPlatforms, selectIsHideEmptyRows, selectSearchQuery } from '../../../../store/slices/ads-manager';
import useGetAdsManagerData from '../../../../hooks/useGetAdsManagerData';
import pickStatusColor from '../../../../utils/pickStatusColor';
import * as statusTypes from '../../../../constants/statusTypes';

const CampaignEditModal = lazy(() => import('./CampaignEditModal'));
const AlertEnableAdAccountAllModel = lazy(() => import('./AlertEnableAdAccountAllModel'));

const CampaignList = () => {
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
    const { extra_amViewBy, extra_amCampaignColumnNameSort, extra_amCampaignColumnOrderSort, extra_amSelectedCampaignList } = state_ExtraLC;

    const isGroupPlatforms = useSelector(selectIsGroupPlatforms);
    const isHideEmptyRows = useSelector(selectIsHideEmptyRows);
    const searchQuery = useSelector(selectSearchQuery);

    const [campaignChangeStatusRunAndPauseByUser] = useCampaignChangeStatusRunAndPauseByUserMutation();

    const { data: adsManagerData, isLoading } = useGetAdsManagerData();

    const dataResult = useMemo(
        () =>
            adsManagerData?.campaigns.map((c) => {
                const is_Ad_Sets_Stopped = !adsManagerData.ad_sets.some((as) => as.campaign === c.id && as.status !== statusTypes.PAUSED);
                const is_Ads_Paused = !adsManagerData.ads.some((a) => a.campaign === c.id && a.status !== statusTypes.PAUSED);

                const campaigns_platform = adsManagerData.campaigns_platforms
                    .filter((cp) => cp.campaign === c.id)
                    .map((cp) => {
                        const adSetsIds = adsManagerData.ad_sets.filter((as) => as.campaign === cp.campaign).map((as) => as.id);
                        const is_Adsets_Paused = !adsManagerData.ad_sets_platforms
                            .filter((asp) => adSetsIds.includes(asp.ad_set) && asp.publisher_platform === cp.publisher_platform)
                            .some((asp) => asp.status !== statusTypes.PAUSED);

                        return {
                            ...cp,
                            campaigns_performance: adsManagerData.ads_performance.filter(
                                (ap) =>
                                    ap.campaign_id === cp.campaign &&
                                    ap.publisher_platform === cp.publisher_platform &&
                                    ap.ad_platform === cp.ad_platform
                            ),
                            run_on: adsManagerData.ads_platforms.some(
                                (adp) => adp.campaign_id === cp.campaign && adp.run_on && adp.publisher_platform === cp.publisher_platform
                            ),
                            campaign_disabled: c.disabled,
                            is_Adsets_Paused,
                            is_Ads_Paused: !adsManagerData.ads_platforms
                                .filter((adp) => adp.campaign_id === c.id && adp.publisher_platform === cp.publisher_platform)
                                .some((adp) => adp.status !== statusTypes.PAUSED)
                        };
                    });

                return {
                    ...c,
                    campaigns_platform,
                    campaigns_platform_strings: campaigns_platform
                        .map((cp) => cp.publisher_platform.charAt(0).toUpperCase() + cp.publisher_platform.slice(1))
                        .join(','),
                    is_All_Paused: !campaigns_platform.filter((cp) => cp.run_on).some((cp) => cp.status !== statusTypes.PAUSED),
                    is_Ad_Sets_Stopped,
                    is_Ads_Paused
                };
            }),
        [adsManagerData]
    );

    const [isShow_CampaignEditModal, setIsShow_CampaignEditModal] = useState(false);
    const [campaignUpdating, setCampaignUpdating] = useState(null);

    const [campaigns, setCampaigns] = useState(null);
    const dtRef = useRef(null);

    const [isShowClicks, setIsShowClicks] = useState(false);
    const [isShowImpressions, setIsShowImpressions] = useState(false);
    const [isShowCPM, setIsShowCPM] = useState(false);
    const [isShowCTR, setIsShowCTR] = useState(false);
    const [isShowCPC, setIsShowCPC] = useState(false);
    const [isShowSpent, setIsShowSpent] = useState(false);
    // const [isShowCPA, setIsShowCPA] = useState(false);
    // const [isShowROAS, setIsShowROAS] = useState(false);
    //
    const [expandedRows, setExpandedRows] = useState(null);
    const [isShow_AlertEnableAdAccountAllModel, setIsShow_AlertEnableAdAccountAllModel] = useState(false);

    useEffect(() => {
        let filteredDataResult = dataResult;

        if (filteredDataResult?.length) {
            if (searchQuery.trim()) {
                filteredDataResult = filteredDataResult.filter((item) => item.name.toLowerCase().includes(searchQuery.toLowerCase()));
            }

            if (isHideEmptyRows) {
                filteredDataResult = filteredDataResult.filter((item) =>
                    item.campaigns_platform.some((c) => c.campaigns_performance.length > 0)
                );
            }
        }

        setCampaigns(filteredDataResult);
        dispatch_ExtraLC({
            type: actions_ExtraLAT.AT_SET_EXTRA_ADS_MANAGER_CAMPAIGN_LIST,
            payload: filteredDataResult
        });
    }, [dataResult, searchQuery, isHideEmptyRows, dispatch_ExtraLC]);

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

    useEffect(() => {
        if (
            !isAuthencatedGoogle &&
            !isAuthencatedFacebook &&
            !isAuthencatedInstagram &&
            !isAuthencatedLinkedin &&
            !isAuthencatedPinterest &&
            !isAuthencatedSnapchat &&
            !isAuthencatedTiktok &&
            !isAuthencatedMeta &&
            !isAuthencatedMessenger &&
            !isAuthencatedYoutube
        ) {
            setIsShow_AlertEnableAdAccountAllModel(true);
        }
    }, [
        isAuthencatedGoogle,
        isAuthencatedFacebook,
        isAuthencatedInstagram,
        isAuthencatedLinkedin,
        isAuthencatedPinterest,
        isAuthencatedSnapchat,
        isAuthencatedTiktok,
        isAuthencatedMeta,
        isAuthencatedMessenger,
        isAuthencatedYoutube
    ]);

    useEffect(() => {
        dispatch_AdsManagerLC({
            type: actions_AdsManagerLAT.AT_SET_ADS_MANAGER_IS_SHOW_TAB_USE_EXISTING_CAMPAIGN,
            payload: !!campaigns?.length
        });
    }, [campaigns, dispatch_AdsManagerLC]);

    const formatCurrency = (value) => {
        return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    };

    const toggleHandler = async (campaign_id, status) => {
        const data = {
            status: status ? statusTypes.PAUSED : statusTypes.ACTIVE,
            campaign_ids: [campaign_id],
            disabled: status
        };

        try {
            await campaignChangeStatusRunAndPauseByUser(data).unwrap();
            AlertSuccess('Changed status!');
        } catch (error) {
            AlertError('Error from server!');
        }
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
        return (
            <div className="Name_parentBodyTemplate">
                <div className="Name_field">{rowData.name}</div>
                <Form.Group className="mb-1 Name_edit">
                    <div className="switch switch-success d-inline m-r-10">
                        <Form.Control
                            style={{ width: 'auto' }}
                            type="checkbox"
                            id={'checkRunPauseParent_Campaign_' + String(rowData.id)}
                            checked={rowData.disabled === false ? true : false}
                            onChange={() => toggleHandler(rowData.id, !rowData.disabled)}
                            disabled={isLoading}
                        />
                        <Form.Label
                            title={rowData.disabled === false ? 'Pause' : 'Run'}
                            htmlFor={'checkRunPauseParent_Campaign_' + String(rowData.id)}
                            className="cr"
                        />
                    </div>
                    <div
                        onClick={() => callCampaignEditModal(rowData)}
                        style={{ cursor: 'pointer', display: 'flex', flexDirection: 'row', alignItems: 'center' }}
                    >
                        <i className="fab fas fa-pencil-alt" style={{ marginRight: '0.5rem' }}></i>
                        <span>Edit</span>
                    </div>
                </Form.Group>
            </div>
        );
    };

    const Is_Platform_RunOn = (rowData, publisher_platform) => {
        let campaigns_platform = rowData.campaigns_platform;
        for (let item of campaigns_platform) {
            if (item.run_on === true && item.publisher_platform === publisher_platform) {
                return true;
            }
        }
        return false;
    };

    const Status_parentBodyTemplate = (rowData, props_column) => {
        let status = rowData.status;

        if (status === statusTypes.ACTIVE) {
            if (rowData.is_Ads_Paused) status = `ADS ${statusTypes.PAUSED}`;
            if (rowData.is_Ad_Sets_Stopped) status = `AD SETS ${statusTypes.PAUSED}`;
        }

        if (rowData.is_All_Paused) status = `ALL ${statusTypes.PAUSED}`;

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
        let platforms = rowData.campaigns_platform_strings;
        // console.log("let platforms: ", platforms)
        if (platforms && platforms.includes('Google') && isAuthencatedGoogle && Is_Platform_RunOn(rowData, 'google'))
            _isShowGoogleIcon = true;
        if (platforms && platforms.includes('Facebook') && isAuthencatedFacebook && Is_Platform_RunOn(rowData, 'facebook'))
            _isShowFacebookIcon = true;
        if (platforms && platforms.includes('Instagram') && isAuthencatedInstagram && Is_Platform_RunOn(rowData, 'instagram'))
            _isShowInstagramIcon = true;
        if (platforms && platforms.includes('Linkedin') && isAuthencatedLinkedin && Is_Platform_RunOn(rowData, 'linkedin'))
            _isShowLinkedinIcon = true;
        if (platforms && platforms.includes('Pinterest') && isAuthencatedPinterest && Is_Platform_RunOn(rowData, 'pinterest'))
            _isShowPinterestIcon = true;
        if (platforms && platforms.includes('Snapchat') && isAuthencatedSnapchat && Is_Platform_RunOn(rowData, 'snapchat'))
            _isShowSnapchatIcon = true;
        if (platforms && platforms.includes('Tiktok') && isAuthencatedTiktok && Is_Platform_RunOn(rowData, 'tiktok'))
            _isShowTiktokIcon = true;
        //
        if (platforms && platforms.includes('Audience_network') && isAuthencatedMeta && Is_Platform_RunOn(rowData, 'audience_network'))
            _isShowMetaIcon = true;
        if (platforms && platforms.includes('Messenger') && isAuthencatedMessenger && Is_Platform_RunOn(rowData, 'messenger'))
            _isShowMessengerIcon = true;
        if (platforms && platforms.includes('Youtube') && isAuthencatedYoutube && Is_Platform_RunOn(rowData, 'youtube'))
            _isShowYoutubeIcon = true;
        return (
            <div className="Status_parentBodyTemplate" onClick={(e) => handleClickExpandRow(e, rowData, props_column)}>
                <div className="Status_delivery">
                    <div className="media_item__status">
                        <Badge pill variant={statusColor} className="mr-1 badge_font_size">
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
        var result = 0;
        // let campaigns_platform = rowData.campaigns_platform;
        let campaigns_platform = rowData.campaigns_platform.filter(
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
        if (campaigns_platform) {
            campaigns_platform.forEach((item) => {
                if (item.campaigns_performance.length > 0) result += item.campaigns_performance[0].clicks;
                else result += 0;
            });
        }
        return result;
    };

    const Impressions_parentBodyTemplate = (rowData) => {
        var result = 0;
        // let campaigns_platform = rowData.campaigns_platform;
        let campaigns_platform = rowData.campaigns_platform.filter(
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
        if (campaigns_platform) {
            campaigns_platform.forEach((item) => {
                if (item.campaigns_performance.length > 0) result += item.campaigns_performance[0].impressions;
                else result += 0;
            });
        }
        return result;
    };

    const Spent_parentBodyTemplate = (rowData) => {
        var result = 0.0;
        // let campaigns_platform = rowData.campaigns_platform;
        let campaigns_platform = rowData.campaigns_platform.filter(
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
        if (campaigns_platform) {
            campaigns_platform.forEach((item) => {
                if (item.campaigns_performance.length > 0) result += parseFloat(item.campaigns_performance[0].spend);
                else result += 0;
            });
        }
        return formatCurrency(result);
    };

    const Clicks_childBodyTemplate = (rowData) => {
        return rowData.campaigns_performance.length > 0 ? rowData.campaigns_performance[0].clicks : 0;
    };

    const Impr_childBodyTemplate = (rowData) => {
        return rowData.campaigns_performance.length > 0 ? rowData.campaigns_performance[0].impressions : 0;
    };

    const Spent_childBodyTemplate = (rowData) => {
        return formatCurrency(parseFloat(rowData.campaigns_performance.length > 0 ? rowData.campaigns_performance[0].spend : 0));
    };

    // ================

    const CPM_childBodyTemplate = (rowData) => {
        let spend = parseFloat(rowData.campaigns_performance.length > 0 ? rowData.campaigns_performance[0].spend : 0);
        let impre = parseInt(rowData.campaigns_performance.length > 0 ? rowData.campaigns_performance[0].impressions : 0);
        let result = impre === 0 ? 0 : 1000 * (spend / impre);
        return formatCurrency(result);
    };

    const CPM_parentBodyTemplate = (rowData) => {
        var result = 0.0;
        // let campaigns_platform = rowData.campaigns_platform;
        let campaigns_platform = rowData.campaigns_platform.filter(
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
        if (campaigns_platform) {
            campaigns_platform.forEach((item) => {
                let spend = parseFloat(item.campaigns_performance.length > 0 ? item.campaigns_performance[0].spend : 0);
                let impre = parseInt(item.campaigns_performance.length > 0 ? item.campaigns_performance[0].impressions : 0);
                let tempResult = impre === 0 ? 0 : 1000 * (spend / impre);
                result += tempResult;
            });
        }
        return formatCurrency(result);
    };

    const CTR_childBodyTemplate = (rowData) => {
        let clicks = parseFloat(rowData.campaigns_performance.length > 0 ? rowData.campaigns_performance[0].clicks : 0);
        let impre = parseInt(rowData.campaigns_performance.length > 0 ? rowData.campaigns_performance[0].impressions : 0);
        let result = impre === 0 ? 0 : 100 * (clicks / impre);
        return String(result.toFixed(2)) + '%';
        // return formatCurrency(result);
    };

    const CTR_parentBodyTemplate = (rowData) => {
        var result = 0.0;
        // let campaigns_platform = rowData.campaigns_platform;
        let campaigns_platform = rowData.campaigns_platform.filter(
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
        if (campaigns_platform) {
            campaigns_platform.forEach((item) => {
                let clicks = parseFloat(item.campaigns_performance.length > 0 ? item.campaigns_performance[0].clicks : 0);
                let impre = parseInt(item.campaigns_performance.length > 0 ? item.campaigns_performance[0].impressions : 0);
                let tempResult = impre === 0 ? 0 : 100 * (clicks / impre);
                result += tempResult;
            });
        }
        // console.log("campaigns_performance: ", result)
        return String(result.toFixed(2)) + '%';
        // return formatCurrency(result);
    };

    const CPC_childBodyTemplate = (rowData) => {
        let clicks = parseFloat(rowData.campaigns_performance.length > 0 ? rowData.campaigns_performance[0].clicks : 0);
        let spend = parseFloat(rowData.campaigns_performance.length > 0 ? rowData.campaigns_performance[0].spend : 0);
        let result = clicks === 0 ? 0 : spend / clicks;
        return formatCurrency(result);
    };

    const CPC_parentBodyTemplate = (rowData) => {
        var result = 0.0;
        // let campaigns_platform = rowData.campaigns_platform;
        let campaigns_platform = rowData.campaigns_platform.filter(
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
        if (campaigns_platform) {
            campaigns_platform.forEach((item) => {
                let clicks = parseFloat(item.campaigns_performance.length > 0 ? item.campaigns_performance[0].clicks : 0);
                let spend = parseFloat(item.campaigns_performance.length > 0 ? item.campaigns_performance[0].spend : 0);
                let tempResult = clicks === 0 ? 0 : spend / clicks;
                result += tempResult;
            });
        }
        return formatCurrency(result);
    };

    // const CPA_childBodyTemplate = (rowData) => {
    //     let actions = parseFloat(rowData.campaigns_performance.length > 0 ? rowData.campaigns_performance[0].actions : 0);
    //     let spend = parseFloat(rowData.campaigns_performance.length > 0 ? rowData.campaigns_performance[0].spend : 0);
    //     let result = actions === 0 ? 0 : spend / actions;
    //     return formatCurrency(result);
    // };

    const CPA_parentBodyTemplate = (rowData) => {
        var result = 0.0;
        // let campaigns_platform = rowData.campaigns_platform;
        let campaigns_platform = rowData.campaigns_platform.filter(
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
        if (campaigns_platform) {
            campaigns_platform.forEach((item) => {
                let actions = parseFloat(item.campaigns_performance.length > 0 ? item.campaigns_performance[0].actions : 0);
                let spend = parseFloat(item.campaigns_performance.length > 0 ? item.campaigns_performance[0].spend : 0);
                let tempResult = actions === 0 ? 0 : spend / actions;
                result += tempResult;
            });
        }
        return formatCurrency(result);
    };

    // const ROAS_childBodyTemplate = (rowData) => {
    //     let earned = parseFloat(rowData.campaigns_performance.length > 0 ? rowData.campaigns_performance[0].earned : 0);
    //     let spend = parseFloat(rowData.campaigns_performance.length > 0 ? rowData.campaigns_performance[0].spend : 0);
    //     let result = spend === 0 ? 0 : earned / spend;
    //     return formatCurrency(result);
    // };

    const ROAS_parentBodyTemplate = (rowData) => {
        var result = 0.0;
        // let campaigns_platform = rowData.campaigns_platform;
        let campaigns_platform = rowData.campaigns_platform.filter(
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
        if (campaigns_platform) {
            campaigns_platform.forEach((item) => {
                let earned = parseFloat(item.campaigns_performance.length > 0 ? item.campaigns_performance[0].earned : 0);
                let spend = parseFloat(item.campaigns_performance.length > 0 ? item.campaigns_performance[0].spend : 0);
                let tempResult = spend === 0 ? 0 : earned / spend;
                result += tempResult;
            });
        }
        return formatCurrency(result);
    };

    const toggleHandlerChild = async (event, campaign_platform_id) => {
        const isChecked = event.target.checked;

        const data = {
            campaign_platform_ids: [campaign_platform_id],
            status: !isChecked ? statusTypes.PAUSED : statusTypes.ACTIVE,
            disabled: !isChecked ? true : false
        };

        try {
            await campaignChangeStatusRunAndPauseByUser(data).unwrap();
            AlertSuccess('Changed status!');
        } catch (error) {
            AlertError('Error from server!');
        }
    };

    const Setting_childBodyTemplate = (rowData, props_column) => {
        let performance_id = String(rowData.campaigns_performance.length > 0 ? rowData.campaigns_performance[0].id : 0);
        let platform_id = rowData.id;
        let campaign_id = String(rowData.campaign);

        let status = rowData.status;

        if (status === statusTypes.ACTIVE) {
            if (rowData.is_Ads_Paused) status = `ADS ${statusTypes.PAUSED}`;
            if (rowData.is_Adsets_Paused) status = `AD SETS ${statusTypes.PAUSED}`;
        }

        const statusColor = pickStatusColor(status);

        return (
            <div className="Setting_childBodyTemplate_campaign">
                <div className="Name_field"></div>
                <Form.Group className="mb-1 Name_edit mr-3">
                    <div
                        className={`switch ${
                            rowData.status === statusTypes.ACTIVE && (rowData.is_Ads_Paused || rowData.is_Adsets_Paused)
                                ? 'switch-warning'
                                : 'switch-success'
                        } d-inline m-r-10`}
                    >
                        <Form.Control
                            type="checkbox"
                            style={{ width: 'auto' }}
                            id={'checkRunPauseChild_Campaign_' + performance_id + '_' + platform_id + '_' + campaign_id}
                            checked={rowData.campaign_disabled ? !rowData.previously_disabled : !rowData.disabled}
                            onChange={(e) => toggleHandlerChild(e, platform_id)}
                            disabled={isLoading || rowData.campaign_disabled}
                        />
                        <Form.Label
                            title="Run|Pause"
                            htmlFor={'checkRunPauseChild_Campaign_' + performance_id + '_' + platform_id + '_' + campaign_id}
                            className="cr"
                        />
                    </div>
                </Form.Group>
                <div className="Status_field" style={{ display: 'flex', flexDirection: 'column' }}>
                    <div id={`campaignStatusRunPauseChildActive_${performance_id}_${platform_id}`}>
                        <Badge pill variant={statusColor} className="mr-1 badge_font_size">
                            {status}
                        </Badge>
                    </div>
                    <div className="media_item__social_logo">
                        {rowData.publisher_platform === 'google' && <i className="fab fa-google"></i>}
                        {rowData.publisher_platform === 'facebook' && <i className="fab fa-facebook-f"></i>}
                        {rowData.publisher_platform === 'snapchat' && <i className="fab fa-snapchat-ghost"></i>}
                        {rowData.publisher_platform === 'linkedin' && <i className="fab fa-linkedin-in"></i>}
                        {rowData.publisher_platform === 'instagram' && <i className="fab fa-instagram"></i>}
                        {rowData.publisher_platform === 'pinterest' && <i className="fab fa-pinterest"></i>}
                        {rowData.publisher_platform === 'tiktok' && <i className="fab fa-tiktok"></i>}
                        {rowData.publisher_platform === 'audience_network' && <i className="fab fa-meta"></i>}
                        {rowData.publisher_platform === 'messenger' && <i className="fab fa-facebook-messenger"></i>}
                        {rowData.publisher_platform === 'youtube' && <i className="fab fa-youtube"></i>}
                    </div>
                </div>
            </div>
        );
    };

    const rowExpansionTemplate = (data) => {
        // let filteredArray = data.campaigns_platform;
        // console.log("rowExpansionTemplate: ", data)
        // let filteredArray = data.campaigns_platform.filter(item => item.campaigns_performance.length > 0);
        let filteredArray = null;
        if (isHideEmptyRows) {
            filteredArray = data.campaigns_platform.filter(
                (item) =>
                    ((isAuthencatedGoogle && item.publisher_platform === 'google' && item.run_on === true) ||
                        (isAuthencatedFacebook && item.publisher_platform === 'facebook' && item.run_on === true) ||
                        (isAuthencatedInstagram && item.publisher_platform === 'instagram' && item.run_on === true) ||
                        (isAuthencatedLinkedin && item.publisher_platform === 'linkedin' && item.run_on === true) ||
                        (isAuthencatedPinterest && item.publisher_platform === 'pinterest' && item.run_on === true) ||
                        (isAuthencatedSnapchat && item.publisher_platform === 'snapchat' && item.run_on === true) ||
                        (isAuthencatedTiktok && item.publisher_platform === 'tiktok' && item.run_on === true) ||
                        (isAuthencatedMeta && item.publisher_platform === 'audience_network' && item.run_on === true) ||
                        (isAuthencatedMessenger && item.publisher_platform === 'messenger' && item.run_on === true) ||
                        (isAuthencatedYoutube && item.publisher_platform === 'youtube' && item.run_on === true)) &&
                    item.campaigns_performance.length > 0
            );
        } else {
            filteredArray = data.campaigns_platform.filter(
                (item) =>
                    (isAuthencatedGoogle && item.publisher_platform === 'google' && item.run_on === true) ||
                    (isAuthencatedFacebook && item.publisher_platform === 'facebook' && item.run_on === true) ||
                    (isAuthencatedInstagram && item.publisher_platform === 'instagram' && item.run_on === true) ||
                    (isAuthencatedLinkedin && item.publisher_platform === 'linkedin' && item.run_on === true) ||
                    (isAuthencatedPinterest && item.publisher_platform === 'pinterest' && item.run_on === true) ||
                    (isAuthencatedSnapchat && item.publisher_platform === 'snapchat' && item.run_on === true) ||
                    (isAuthencatedTiktok && item.publisher_platform === 'tiktok' && item.run_on === true) ||
                    (isAuthencatedMeta && item.publisher_platform === 'audience_network' && item.run_on === true) ||
                    (isAuthencatedMessenger && item.publisher_platform === 'messenger' && item.run_on === true) ||
                    (isAuthencatedYoutube && item.publisher_platform === 'youtube' && item.run_on === true)
            );
        }

        return (
            <div className="campaign_children_table">
                <DataTable style={{ fontSize: '14px' }} className="headerChildren" value={filteredArray} scrollable={false}>
                    <Column headerStyle={{ width: '520px', flex: 'unset' }} body={Setting_childBodyTemplate}></Column>
                    {isShowClicks && (
                        <Column
                            field="clicks"
                            header="Clicks"
                            body={Clicks_childBodyTemplate}
                            style={{ flexGrow: 1, flexBasis: '90px', justifyContent: 'right' }}
                            // style={{ justifyContent: 'right', width: '9%' }}
                        ></Column>
                    )}
                    {isShowImpressions && (
                        <Column
                            field="impressions"
                            header="Impr"
                            body={Impr_childBodyTemplate}
                            style={{ flexGrow: 1, flexBasis: '90px', justifyContent: 'right' }}
                            // style={{ justifyContent: 'right', width: '9%' }}
                        ></Column>
                    )}
                    {isShowSpent && (
                        <Column
                            field="spend"
                            header="Spent"
                            body={Spent_childBodyTemplate}
                            style={{ flexGrow: 1, flexBasis: '90px', justifyContent: 'right', paddingRight: '10px' }}
                            // style={{ justifyContent: 'right', width: '9%' }}
                        ></Column>
                    )}
                    {isShowCPM && (
                        <Column
                            field="cpm"
                            header="CPM"
                            body={CPM_childBodyTemplate}
                            style={{ flexGrow: 1, flexBasis: '90px', justifyContent: 'right', paddingRight: '0' }}
                            // style={{ justifyContent: 'right', width: '9%' }}
                        ></Column>
                    )}
                    {isShowCTR && (
                        <Column
                            field="cta"
                            header="CTR"
                            body={CTR_childBodyTemplate}
                            style={{ flexGrow: 1, flexBasis: '90px', justifyContent: 'right', paddingRight: '0' }}
                            // style={{ justifyContent: 'right', width: '9%' }}
                        ></Column>
                    )}
                    {isShowCPC && (
                        <Column
                            field="cpc"
                            header="CPC"
                            body={CPC_childBodyTemplate}
                            style={{ flexGrow: 1, flexBasis: '90px', justifyContent: 'right', paddingRight: '0' }}
                            // style={{ justifyContent: 'right', width: '9%' }}
                        ></Column>
                    )}
                    {/* {isShowCPA && (
                        <Column
                            field="cpa"
                            header="CPA"
                            body={CPA_childBodyTemplate}
                            style={{ flexGrow: 1, flexBasis: '90px', justifyContent: 'right' }}
                            // style={{ justifyContent: 'right', width: '9%' }}
                        ></Column>
                    )}
                    {isShowROAS && (
                        <Column
                            field="roads"
                            header="ROAS"
                            body={ROAS_childBodyTemplate}
                            style={{ flexGrow: 1, flexBasis: '90px', justifyContent: 'right' }}
                            // style={{ justifyContent: 'right', width: '9%' }}
                        ></Column>
                    )} */}
                </DataTable>
            </div>
        );
    };

    const allowExpansion = (rowData) => {
        return rowData.campaigns_platform && rowData.campaigns_platform.length > 0;
    };

    const Status_sort = (data) => {
        if (data.status === statusTypes.ACTIVE) return statusTypes.ACTIVE;
        return data.status;
    };

    const Name_sort = (data) => {
        return data.name;
    };

    const dataTableSortFunction = (value) => (event) => {
        // console.log("dataTableSortFunction: ", value);
        // console.log("dataTableSortFunction_event: ", event)
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
                // console.log("value1: ", value1);
                // console.log("value2: ", value2)
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
    const myCampaignSort = dataTableSortFunction(campaigns);
    const preSortedCampaigns = myCampaignSort({ field: 'name', order: 1 });

    const calculateTotal = (field) => {
        var total = 0.0;
        var fieldName = 'NONAME';
        if (field === 'clicks') {
            fieldName = 'CLICKS';
        } else if (field === 'impre') {
            fieldName = 'IMPR';
        } else if (field === 'spent') {
            fieldName = 'SPENT';
        }
        if (campaigns && campaigns.length > 0) {
            for (let rowData of campaigns) {
                var result = 0.0;
                // let campaigns_platform = rowData.campaigns_platform;
                let campaigns_platform = rowData.campaigns_platform.filter(
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
                if (campaigns_platform) {
                    // eslint-disable-next-line no-loop-func
                    campaigns_platform.forEach((item) => {
                        if (field === 'roas') {
                            let earned = parseFloat(item.campaigns_performance.length > 0 ? item.campaigns_performance[0].earned : 0);
                            let spend = parseFloat(item.campaigns_performance.length > 0 ? item.campaigns_performance[0].spend : 0);
                            let tempResult = spend === 0 ? 0 : earned / spend;
                            result += tempResult;
                            fieldName = 'ROAS';
                        } else if (field === 'cpa') {
                            let actions = parseFloat(item.campaigns_performance.length > 0 ? item.campaigns_performance[0].actions : 0);
                            let spend = parseFloat(item.campaigns_performance.length > 0 ? item.campaigns_performance[0].spend : 0);
                            let tempResult = actions === 0 ? 0 : spend / actions;
                            result += tempResult;
                            fieldName = 'CPA';
                        } else if (field === 'cpc') {
                            let clicks = parseFloat(item.campaigns_performance.length > 0 ? item.campaigns_performance[0].clicks : 0);
                            let spend = parseFloat(item.campaigns_performance.length > 0 ? item.campaigns_performance[0].spend : 0);
                            let tempResult = clicks === 0 ? 0 : spend / clicks;
                            result += tempResult;
                            fieldName = 'CPC';
                        } else if (field === 'ctr') {
                            let clicks = parseFloat(item.campaigns_performance.length > 0 ? item.campaigns_performance[0].clicks : 0);
                            let impre = parseInt(item.campaigns_performance.length > 0 ? item.campaigns_performance[0].impressions : 0);
                            let tempResult = impre === 0 ? 0 : 100 * (clicks / impre);
                            result += tempResult;
                            fieldName = 'CTR';
                        } else if (field === 'cpm') {
                            let spend = parseFloat(item.campaigns_performance.length > 0 ? item.campaigns_performance[0].spend : 0);
                            let impre = parseInt(item.campaigns_performance.length > 0 ? item.campaigns_performance[0].impressions : 0);
                            let tempResult = impre === 0 ? 0 : 1000 * (spend / impre);
                            result += tempResult;
                            fieldName = 'CPM';
                        } else if (field === 'spent') {
                            result += parseFloat(item.campaigns_performance.length > 0 ? item.campaigns_performance[0].spend : 0);
                            fieldName = 'SPENT';
                        } else if (field === 'impre') {
                            result += item.campaigns_performance.length > 0 ? item.campaigns_performance[0].impressions : 0;
                            fieldName = 'IMPR';
                        } else if (field === 'clicks') {
                            result += item.campaigns_performance.length > 0 ? item.campaigns_performance[0].clicks : 0;
                            fieldName = 'CLICKS';
                        }
                    });
                    total += result;
                }
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

    const calculateTotalOthers = (field) => {
        var total = 0.0;
        var total_Clicks = 0.0;
        var total_Impre = 0.0;
        var total_Spent = 0.0;
        var fieldName = 'NONAME';
        if (campaigns && campaigns.length > 0) {
            for (let rowData of campaigns) {
                // let campaigns_platform = rowData.campaigns_platform;
                let campaigns_platform = rowData.campaigns_platform.filter(
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
                if (campaigns_platform) {
                    // eslint-disable-next-line no-loop-func
                    campaigns_platform.forEach((item) => {
                        total_Clicks += item.campaigns_performance.length > 0 ? item.campaigns_performance[0].clicks : 0;
                        total_Impre += item.campaigns_performance.length > 0 ? item.campaigns_performance[0].impressions : 0;
                        total_Spent += parseFloat(item.campaigns_performance.length > 0 ? item.campaigns_performance[0].spend : 0);
                    });
                }
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

    const handleClickExpandRow = (e, rowData, props_column) => {
        let rowIndex = props_column.rowIndex;
        if (isGroupPlatforms) {
            const myEle = Array.from(document.querySelectorAll('td.clsCampaignExpand')).filter((ele) =>
                ele.innerHTML.includes('_content_' + String(rowIndex) + '_expanded')
            );
            // console.log('myEle: ', myEle[0].childNodes[1]);
            try {
                const btnExpand = myEle[0].childNodes[1];
                if (btnExpand) {
                    btnExpand.click();
                    let idString = e.target.id;
                    let id = parseInt(idString.split('_')[1]);
                    let btnCurrent = document.getElementById('btnExpandChildTableCampaign_' + String(id) + '_' + String(rowIndex));
                    if (btnCurrent) {
                        if (id === rowData.id) {
                            alert(btnCurrent.textContent);
                            if (btnCurrent.textContent === 'Expand') btnCurrent.innerHTML = 'Contract';
                            else btnCurrent.textContent = 'Expand';
                        } else {
                            btnCurrent.textContent = 'Expand';
                        }
                    }
                }
            } catch (err) {
                console.log('handleClickExpandRow: ', err.message);
            }
            // console.log("btnExpend: ", btnExpend);
            // var expandRowButton_Collapse = document.querySelector('[aria-label="Collapse ' + String(rowData.id) + '"]');
            // var expandRowButton_Expand = document.querySelector('[aria-label="Expand ' + String(rowData.id) + '"]');
        }
    };

    const footer = () => {
        if (campaigns && campaigns.length === 0) return null;
        return (
            <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
                <div style={{ width: '720px', fontWeight: 'bolder' }}>{`Totals for ${campaigns && campaigns.length} Campaigns`}</div>
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
                            <div style={{ textAlign: 'right', fontWeight: 'bolder' }}>
                                {/* {calculateTotal('cpm')} */}
                                {calculateTotalOthers('cpm')}
                            </div>
                        </Col>
                    )}
                    {isShowCTR && (
                        <Col>
                            <div style={{ textAlign: 'right', fontWeight: 'bolder' }}>
                                {/* {calculateTotal('ctr')} */}
                                {calculateTotalOthers('ctr')}
                            </div>
                        </Col>
                    )}
                    {isShowCPC && (
                        <Col>
                            <div style={{ textAlign: 'right', fontWeight: 'bolder' }}>
                                {/* {calculateTotal('cpc')} */}
                                {calculateTotalOthers('cpc')}
                            </div>
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
            type: actions_ExtraLAT.AT_SET_EXTRA_ADS_MANAGER_CAMPAIGN_COLUMN_NAME_SORT,
            payload: event.sortField
        });
        dispatch_ExtraLC({
            type: actions_ExtraLAT.AT_SET_EXTRA_ADS_MANAGER_CAMPAIGN_COLUMN_ORDER_SORT,
            payload: event.sortOrder
        });
    };

    // ===

    const handleCheckboxColumnToggle = (e, rowData) => {
        if (e.target.checked) {
            dispatch_ExtraLC({
                type: actions_ExtraLAT.AT_SET_EXTRA_ADS_MANAGER_CAMPAIGN_SELECTED_LIST,
                payload: [...extra_amSelectedCampaignList, rowData]
            });
        } else {
            dispatch_ExtraLC({
                type: actions_ExtraLAT.AT_SET_EXTRA_ADS_MANAGER_CAMPAIGN_SELECTED_LIST,
                payload: extra_amSelectedCampaignList.filter((col) => col.id !== rowData.id)
            });
        }
    };

    const headerCheckbox = (columnProps) => {
        return (
            <div className="p-checkbox p-component" style={{ marginBottom: '15px' }}>
                <Form.Control
                    type="checkbox"
                    checked={extra_amSelectedCampaignList?.length === columnProps.props.value?.length}
                    onChange={(e) => {
                        dispatch_ExtraLC({
                            type: actions_ExtraLAT.AT_SET_EXTRA_ADS_MANAGER_CAMPAIGN_SELECTED_LIST,
                            payload: e.target.checked ? columnProps.props.value.map((col) => col) : []
                        });
                    }}
                />
            </div>
        );
    };

    const bodyCheckbox = (rowData, propsColumn) => {
        return (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <div className="p-checkbox p-component">
                    <Form.Control
                        type="checkbox"
                        checked={extra_amSelectedCampaignList?.some((c) => c.id === rowData.id)}
                        onChange={(e) => handleCheckboxColumnToggle(e, rowData)}
                    />
                </div>
                <div onClick={(e) => handleClickExpandRow(e, rowData, propsColumn)} style={{ cursor: 'pointer', marginTop: '15px' }}>
                    <i className="fas fa-maximize" title="Expand"></i>
                </div>
            </div>
        );
    };

    return (
        <div>
            <DataTable
                //selectionMode="none"
                value={preSortedCampaigns}
                // selection={extra_amSelectedCampaignList}
                // onSelectionChange={(e) => handleSelectionChange(e.value)}
                dataKey="id"
                style={{ fontSize: '14px' }}
                footer={footer}
                rowExpansionTemplate={rowExpansionTemplate}
                expandedRows={expandedRows}
                onRowToggle={(e) => (isGroupPlatforms ? setExpandedRows(e.data) : null)}
                scrollable
                scrollDirection="horizontal"
                scrollHeight="calc(100vh - 200px)"
                ref={dtRef}
                sortField={extra_amCampaignColumnNameSort}
                sortOrder={extra_amCampaignColumnOrderSort}
                onSort={handleSortChange}
            >
                {/* <Column frozen selectionMode="multiple" style={{ flexGrow: 0, flexBasis: '40px', paddingLeft: '10px' }}></Column> */}
                <Column
                    frozen
                    body={bodyCheckbox}
                    header={headerCheckbox}
                    style={{ flexGrow: 0, flexBasis: '40px', paddingLeft: '10px', paddingRight: '10px' }}
                ></Column>
                <Column
                    frozen
                    header="Campaign"
                    field="name"
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
                    sortFunction={myCampaignSort}
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
                        minWidth: '120px',
                        textAlign: 'center'
                    }}
                    sortField="status"
                    sortFunction={myCampaignSort}
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
                        sortFunction={myCampaignSort}
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
                        sortFunction={myCampaignSort}
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
                        sortFunction={myCampaignSort}
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
                        sortFunction={myCampaignSort}
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
                        sortFunction={myCampaignSort}
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
                        sortFunction={myCampaignSort}
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
                        sortFunction={myCampaignSort}
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
                        sortFunction={myCampaignSort}
                    ></Column>
                )} */}
                <Column
                    className="clsCampaignExpand"
                    expander={allowExpansion}
                    style={{ width: '1rem', visibility: 'collapse', display: 'none' }}
                />
            </DataTable>
            {!!isShow_CampaignEditModal && (
                <CampaignEditModal
                    campaignUpdating={campaignUpdating}
                    show={isShow_CampaignEditModal}
                    hideModal={() => setIsShow_CampaignEditModal(false)}
                />
            )}
            {!!isShow_AlertEnableAdAccountAllModel && (
                <AlertEnableAdAccountAllModel
                    show={isShow_AlertEnableAdAccountAllModel}
                    hideModal={() => setIsShow_AlertEnableAdAccountAllModel(false)}
                    isKeyboard={false}
                />
            )}
        </div>
    );
};

export default CampaignList;
