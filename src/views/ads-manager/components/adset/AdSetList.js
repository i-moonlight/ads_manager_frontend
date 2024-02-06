import React, { useState, useEffect, lazy, useMemo } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Form, Badge, Col } from 'react-bootstrap';

import './AdSet.scss';
import { AlertSuccess, AlertError } from '../../../../utils/alertUtils';

import { useExtraLibraryConsumer } from '../../../../contexts/extra/ExtraLibraryContext';
import * as actions_ExtraLAT from '../../../../contexts/extra/ExtraLibraryActionType';

import { useSelector } from 'react-redux';
import { selectAdAccounts } from '../../../../store/slices/ad-accounts';
import { selectIsGroupPlatforms, selectIsHideEmptyRows, selectSearchQuery } from '../../../../store/slices/ads-manager';
import {
    useAdSetChangeStatusRunAndPauseByUserMutation,
    useAdSetsPlatformsChangeStatusRunAndPauseByUserMutation
} from '../../../../apis/ads-manager-api-slice';
import useGetAdsManagerData from '../../../../hooks/useGetAdsManagerData';
import pickStatusColor from '../../../../utils/pickStatusColor';
import * as statusTypes from '../../../../constants/statusTypes';

const AdSetEditModal = lazy(() => import('./AdSetEditModal'));

const AdSetList = () => {
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

    const { state_ExtraLC, dispatch_ExtraLC } = useExtraLibraryConsumer();

    const {
        extra_amViewBy,
        extra_amAdSetColumnNameSort,
        extra_amAdSetColumnOrderSort,
        extra_amSelectedAdSetList,
        extra_amSelectedCampaignList
    } = state_ExtraLC;

    const isGroupPlatforms = useSelector(selectIsGroupPlatforms);
    const isHideEmptyRows = useSelector(selectIsHideEmptyRows);
    const searchQuery = useSelector(selectSearchQuery);

    const { data: adsManagerData, isLoading } = useGetAdsManagerData();

    const dataResult = useMemo(
        () =>
            adsManagerData?.ad_sets.map((as) => {
                const campaign = adsManagerData.campaigns.find((c) => c.id === as.campaign);
                const campaignStatus = campaign.status;
                const is_Ads_Paused = !adsManagerData.ads.some((a) => a.ad_set === as.id && a.status !== statusTypes.PAUSED);

                const ad_sets_platform = adsManagerData.ad_sets_platforms
                    .filter((asp) => asp.ad_set === as.id)
                    .map((asp) => ({
                        ...asp,
                        ad_sets_performance: adsManagerData.ads_performance.filter(
                            (ap) =>
                                ap.ad_set_id === asp.ad_set &&
                                ap.publisher_platform === asp.publisher_platform &&
                                ap.ad_platform === asp.ad_platform
                        ),
                        run_on: adsManagerData.ads_platforms.some(
                            (ap) => ap.ad_set_id === asp.ad_set && ap.run_on && ap.publisher_platform === asp.publisher_platform
                        ),
                        campaignStatus,
                        is_Ads_Paused: !adsManagerData.ads_platforms
                            .filter((adp) => adp.ad_set_id === as.id && adp.publisher_platform === asp.publisher_platform)
                            .some((adp) => adp.status !== statusTypes.PAUSED),
                        is_Campaign_Paused: !adsManagerData.campaigns_platforms
                            .filter((cp) => cp.campaign === campaign.id && cp.publisher_platform === asp.publisher_platform)
                            .some((cp) => cp.status !== statusTypes.PAUSED)
                    }));

                return {
                    ...as,
                    ad_sets_platform: ad_sets_platform.map((asp) => ({ ...asp, ad_set_disabled: as.disabled })),
                    ad_sets_platform_strings: ad_sets_platform
                        .map((asp) => asp.publisher_platform.charAt(0).toUpperCase() + asp.publisher_platform.slice(1))
                        .join(','),
                    is_Ads_Paused,
                    campaignStatus,
                    is_All_Paused: !ad_sets_platform.filter((asp) => asp.run_on).some((asp) => asp.status !== statusTypes.PAUSED),
                    is_Budget_Reached: campaign.status === 'BUDGET MET'
                };
            }),
        [adsManagerData]
    );

    const [isShow_AdSetEditModal, setIsShow_AdSetEditModal] = useState(false);
    const [adSetUpdating, setAdSetUpdating] = useState(null);

    const [adSets, setAdSets] = useState(null);

    const [isShowClicks, setIsShowClicks] = useState(false);
    const [isShowImpressions, setIsShowImpressions] = useState(false);
    const [isShowCPM, setIsShowCPM] = useState(false);
    const [isShowCTR, setIsShowCTR] = useState(false);
    const [isShowCPC, setIsShowCPC] = useState(false);
    const [isShowSpent, setIsShowSpent] = useState(false);

    const [expandedRows, setExpandedRows] = useState(null);

    const [adSetChangeStatusRunAndPauseByUser] = useAdSetChangeStatusRunAndPauseByUserMutation();

    const [adSetsPlatformsChangeStatusRunAndPauseByUser] = useAdSetsPlatformsChangeStatusRunAndPauseByUserMutation();

    useEffect(() => {
        let filteredDataResult = dataResult;

        if (filteredDataResult?.length) {
            if (searchQuery.trim()) {
                filteredDataResult = filteredDataResult.filter((item) => item.name.toLowerCase().includes(searchQuery.toLowerCase()));
            }

            if (isHideEmptyRows) {
                filteredDataResult = filteredDataResult.filter((item) =>
                    item.ad_sets_platform.some((a) => a.ad_sets_performance.length > 0)
                );
            }

            if (extra_amSelectedCampaignList.length) {
                filteredDataResult = filteredDataResult.filter((item) => extra_amSelectedCampaignList.some((i) => i.id === item.campaign));
            }
        }

        setAdSets(filteredDataResult);
        dispatch_ExtraLC({
            type: actions_ExtraLAT.AT_SET_EXTRA_ADS_MANAGER_AD_SET_LIST,
            payload: filteredDataResult
        });
    }, [dataResult, searchQuery, isHideEmptyRows, extra_amSelectedCampaignList, dispatch_ExtraLC]);

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

    const toggleHandler = async (ad_set_id, status) => {
        const data = {
            status: status ? statusTypes.PAUSED : statusTypes.ACTIVE,
            ad_set_ids: [ad_set_id],
            disabled: status
        };

        try {
            await adSetChangeStatusRunAndPauseByUser(data).unwrap();
            AlertSuccess('Changed status!');
        } catch (error) {
            AlertError('Error from server!');
        }
    };

    const toggleHandlerChild = async (event, ad_set_platform_id) => {
        const isChecked = event.target.checked;

        const data = {
            status: !isChecked ? statusTypes.PAUSED : statusTypes.ACTIVE,
            ad_set_platform_ids: [parseInt(ad_set_platform_id)],
            disabled: !isChecked
        };

        try {
            await adSetsPlatformsChangeStatusRunAndPauseByUser(data).unwrap();
            AlertSuccess('Changed status!');
        } catch (error) {
            AlertError('Error from server!');
        }
    };

    const handleClickExpandRow = (e, rowData, props_column) => {
        let rowIndex = props_column.rowIndex;
        if (isGroupPlatforms) {
            const myEle = Array.from(document.querySelectorAll('td.clsAdSetExpand')).filter((ele) =>
                ele.innerHTML.includes('_content_' + String(rowIndex) + '_expanded')
            );
            // console.log('myEle: ', myEle[0].childNodes[1]);
            try {
                const btnExpand = myEle[0].childNodes[1];
                if (btnExpand) {
                    btnExpand.click();
                    let idString = e.target.id;
                    let id = parseInt(idString.split('_')[1]);
                    let btnCurrent = document.getElementById('btnExpandChildTableAdSet_' + String(id) + '_' + String(rowIndex));
                    if (btnCurrent) {
                        if (id === rowData.id) {
                            if (btnCurrent.textContent === 'Expand') btnCurrent.textContent = 'Contract';
                            else btnCurrent.textContent = 'Expand';
                        } else {
                            btnCurrent.textContent = 'Expand';
                        }
                    }
                }
            } catch (err) {
                console.log('handleClickExpandRow: ', err.message);
            }
        }
    };

    const callAdSetEditModal = (rowData) => {
        setAdSetUpdating(rowData);
        setIsShow_AdSetEditModal(true);
    };

    // CPM = 1000 * Spent/Impressions
    // CTR = 100 * Clicks / Impressions
    // CPC = Spent / Clicks
    // CAC = Spent / Actions
    // ROAS = Earned / Spent
    // If a user is in the Ad Sets tab, then this "Use Existing Campaign" tab should be open when the New button is clicked rather than "Create New Campaign" tab

    const Name_parentBodyTemplate = (rowData, props_column) => {
        return (
            <div className="Name_parentBodyTemplate">
                <div className="Name_field">{rowData.name}</div>
                <Form.Group className="mb-1 Name_edit">
                    <div className="switch switch-success d-inline m-r-10">
                        <Form.Control
                            style={{ width: 'auto' }}
                            type="checkbox"
                            id={'checkRunPauseParent_AdSet_' + String(rowData.id)}
                            checked={rowData.disabled === false ? true : false}
                            onChange={(e) => toggleHandler(rowData.id, rowData.disabled === false ? true : false)}
                            disabled={isLoading}
                        />
                        <Form.Label
                            title={rowData.disabled === false ? 'Pause' : 'Run'}
                            htmlFor={'checkRunPauseParent_AdSet_' + String(rowData.id)}
                            className="cr"
                        />
                    </div>
                    <div onClick={() => callAdSetEditModal(rowData)} style={{ cursor: 'pointer' }}>
                        <i className="fab fas fa-pencil-alt"></i> Edit
                    </div>
                </Form.Group>
            </div>
        );
    };

    const Is_Platform_RunOn = (rowData, publisher_platform) => {
        let ad_sets_platform = rowData.ad_sets_platform;
        for (let item of ad_sets_platform) {
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
        }

        if (rowData.campaignStatus !== statusTypes.ACTIVE) status = `CAMPAIGN ${rowData.campaignStatus}`;

        if (rowData.is_All_Paused) status = `ALL ${statusTypes.PAUSED}`;

        const statusColor = pickStatusColor(status);
        //
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
        let platforms = rowData.ad_sets_platform_strings;
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
        //
        if (platforms && platforms.includes('Audience_network') && isAuthencatedMeta && Is_Platform_RunOn(rowData, 'audience_network'))
            _isShowMetaIcon = true;
        if (platforms && platforms.includes('Messenger') && isAuthencatedMessenger && Is_Platform_RunOn(rowData, 'messenger'))
            _isShowMessengerIcon = true;
        if (platforms && platforms.includes('Youtube') && isAuthencatedYoutube && Is_Platform_RunOn(rowData, 'youtube'))
            _isShowYoutubeIcon = true;
        //

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
        // let ad_sets_platform = rowData.ad_sets_platform;
        let ad_sets_platform = rowData.ad_sets_platform.filter(
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
        if (ad_sets_platform) {
            ad_sets_platform.forEach((item) => {
                if (item.ad_sets_performance.length > 0) result += item.ad_sets_performance[0].clicks;
                else result += 0;
            });
        }
        return result;
    };

    const Impressions_parentBodyTemplate = (rowData) => {
        var result = 0;
        // let ad_sets_platform = rowData.ad_sets_platform;
        let ad_sets_platform = rowData.ad_sets_platform.filter(
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
        if (ad_sets_platform) {
            ad_sets_platform.forEach((item) => {
                if (item.ad_sets_performance.length > 0) result += item.ad_sets_performance[0].impressions;
                else result += 0;
            });
        }
        return result;
    };

    const Spent_parentBodyTemplate = (rowData) => {
        var result = 0.0;
        // let ad_sets_platform = rowData.ad_sets_platform;
        let ad_sets_platform = rowData.ad_sets_platform.filter(
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
        if (ad_sets_platform) {
            ad_sets_platform.forEach((item) => {
                if (item.ad_sets_performance.length > 0) result += parseFloat(item.ad_sets_performance[0].spend);
                else result += 0;
            });
        }
        return formatCurrency(result);
    };

    const Clicks_childBodyTemplate = (rowData) => {
        return rowData.ad_sets_performance.length > 0 ? rowData.ad_sets_performance[0].clicks : 0;
    };

    const Impr_childBodyTemplate = (rowData) => {
        return rowData.ad_sets_performance.length > 0 ? rowData.ad_sets_performance[0].impressions : 0;
    };

    const Spent_childBodyTemplate = (rowData) => {
        return formatCurrency(parseFloat(rowData.ad_sets_performance.length > 0 ? rowData.ad_sets_performance[0].spend : 0));
    };

    // ================

    const CPM_childBodyTemplate = (rowData) => {
        let spend = parseFloat(rowData.ad_sets_performance.length > 0 ? rowData.ad_sets_performance[0].spend : 0);
        let impre = parseInt(rowData.ad_sets_performance.length > 0 ? rowData.ad_sets_performance[0].impressions : 0);
        let result = impre === 0 ? 0 : 1000 * (spend / impre);
        return formatCurrency(result);
    };

    const CPM_parentBodyTemplate = (rowData) => {
        var result = 0.0;
        // let ad_sets_platform = rowData.ad_sets_platform;
        let ad_sets_platform = rowData.ad_sets_platform.filter(
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
        if (ad_sets_platform) {
            ad_sets_platform.forEach((item) => {
                let spend = parseFloat(item.ad_sets_performance.length > 0 ? item.ad_sets_performance[0].spend : 0);
                let impre = parseInt(item.ad_sets_performance.length > 0 ? item.ad_sets_performance[0].impressions : 0);
                let tempResult = impre === 0 ? 0 : 1000 * (spend / impre);
                result += tempResult;
            });
        }
        return formatCurrency(result);
    };

    const CTR_childBodyTemplate = (rowData) => {
        let clicks = parseFloat(rowData.ad_sets_performance.length > 0 ? rowData.ad_sets_performance[0].clicks : 0);
        let impre = parseInt(rowData.ad_sets_performance.length > 0 ? rowData.ad_sets_performance[0].impressions : 0);
        let result = impre === 0 ? 0 : 100 * (clicks / impre);
        return String(result.toFixed(2)) + '%';
        // return formatCurrency(result);
    };

    const CTR_parentBodyTemplate = (rowData) => {
        var result = 0.0;
        // let ad_sets_platform = rowData.ad_sets_platform;
        let ad_sets_platform = rowData.ad_sets_platform.filter(
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
        if (ad_sets_platform) {
            ad_sets_platform.forEach((item) => {
                let clicks = parseFloat(item.ad_sets_performance.length > 0 ? item.ad_sets_performance[0].clicks : 0);
                let impre = parseInt(item.ad_sets_performance.length > 0 ? item.ad_sets_performance[0].impressions : 0);
                let tempResult = impre === 0 ? 0 : 100 * (clicks / impre);
                result += tempResult;
            });
        }
        return String(result.toFixed(2)) + '%';
        // return formatCurrency(result);
    };

    const CPC_childBodyTemplate = (rowData) => {
        let clicks = parseFloat(rowData.ad_sets_performance.length > 0 ? rowData.ad_sets_performance[0].clicks : 0);
        let spend = parseFloat(rowData.ad_sets_performance.length > 0 ? rowData.ad_sets_performance[0].spend : 0);
        let result = spend === 0 ? 0 : spend / clicks;
        return formatCurrency(result);
    };

    const CPC_parentBodyTemplate = (rowData) => {
        var result = 0.0;
        // let ad_sets_platform = rowData.ad_sets_platform;
        let ad_sets_platform = rowData.ad_sets_platform.filter(
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
        if (ad_sets_platform) {
            ad_sets_platform.forEach((item) => {
                let clicks = parseFloat(item.ad_sets_performance.length > 0 ? item.ad_sets_performance[0].clicks : 0);
                let spend = parseFloat(item.ad_sets_performance.length > 0 ? item.ad_sets_performance[0].spend : 0);
                let tempResult = clicks === 0 ? 0 : spend / clicks;
                result += tempResult;
            });
        }
        return formatCurrency(result);
    };

    // const CPA_childBodyTemplate = (rowData) => {
    //     let actions = parseFloat(rowData.ad_sets_performance.length > 0 ? rowData.ad_sets_performance[0].actions : 0);
    //     let spend = parseFloat(rowData.ad_sets_performance.length > 0 ? rowData.ad_sets_performance[0].spend : 0);
    //     let result = actions === 0 ? 0 : spend / actions;
    //     return formatCurrency(result);
    // };

    const CPA_parentBodyTemplate = (rowData) => {
        var result = 0.0;
        // let ad_sets_platform = rowData.ad_sets_platform;
        let ad_sets_platform = rowData.ad_sets_platform.filter(
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
        if (ad_sets_platform) {
            ad_sets_platform.forEach((item) => {
                let actions = parseFloat(item.ad_sets_performance.length > 0 ? item.ad_sets_performance[0].actions : 0);
                let spend = parseFloat(item.ad_sets_performance.length > 0 ? item.ad_sets_performance[0].spend : 0);
                let tempResult = actions === 0 ? 0 : spend / actions;
                result += tempResult;
            });
        }
        return formatCurrency(result);
    };

    // const ROAS_childBodyTemplate = (rowData) => {
    //     let earned = parseFloat(rowData.ad_sets_performance.length > 0 ? rowData.ad_sets_performance[0].earned : 0);
    //     let spend = parseFloat(rowData.ad_sets_performance.length > 0 ? rowData.ad_sets_performance[0].spend : 0);
    //     let result = spend === 0 ? 0 : earned / spend;
    //     return formatCurrency(result);
    // };

    const ROAS_parentBodyTemplate = (rowData) => {
        var result = 0.0;
        let ad_sets_platform = rowData.ad_sets_platform.filter(
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
        if (ad_sets_platform) {
            ad_sets_platform.forEach((item) => {
                let earned = parseFloat(item.ad_sets_performance.length > 0 ? item.ad_sets_performance[0].earned : 0);
                let spend = parseFloat(item.ad_sets_performance.length > 0 ? item.ad_sets_performance[0].spend : 0);
                let tempResult = spend === 0 ? 0 : earned / spend;
                result += tempResult;
            });
        }
        return formatCurrency(result);
    };

    const Setting_childBodyTemplate = (rowData, props_column) => {
        let performance_id = String(rowData.ad_sets_performance.length > 0 ? rowData.ad_sets_performance[0].id : 0);
        let platform_id = String(rowData.id);
        let ad_set_id = String(rowData.ad_set);

        let status = rowData.status;

        if (status === statusTypes.ACTIVE) {
            if (rowData.is_Ads_Paused) status = `ADS ${statusTypes.PAUSED}`;
            if (rowData.is_Campaign_Paused) status = `CAMPAIGN ${statusTypes.PAUSED}`;
        }

        if (status !== statusTypes.PAUSED && rowData.campaignStatus !== statusTypes.ACTIVE) status = `CAMPAIGN ${rowData.campaignStatus}`;

        const statusColor = pickStatusColor(status);

        return (
            <div className="Setting_childBodyTemplate_ad_sets">
                <div className="Name_field"></div>
                <Form.Group className="mb-1 Name_edit mr-3">
                    <div
                        className={`switch ${
                            rowData.status === statusTypes.ACTIVE && (rowData.is_Ads_Paused || rowData.is_Campaign_Paused)
                                ? 'switch-warning'
                                : 'switch-success'
                        } d-inline m-r-10`}
                    >
                        <Form.Control
                            type="checkbox"
                            style={{ width: 'auto' }}
                            id={'checkRunPauseChild_AdSet_' + performance_id + '_' + platform_id + '_' + ad_set_id}
                            checked={rowData.ad_set_disabled ? !rowData.previously_disabled : !rowData.disabled}
                            onChange={(e) => toggleHandlerChild(e, platform_id)}
                            disabled={isLoading || rowData.ad_set_disabled}
                        />
                        <Form.Label
                            title="Run|Pause"
                            htmlFor={'checkRunPauseChild_AdSet_' + performance_id + '_' + platform_id + '_' + ad_set_id}
                            className="cr"
                        />
                    </div>
                </Form.Group>
                <div className="Status_field" style={{ display: 'flex', flexDirection: 'column' }}>
                    <div id={`adSetStatusRunPauseChildActive_${performance_id}_${platform_id}`}>
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
        // let filteredArray = data.ad_sets_platform;
        let filteredArray = null;
        if (isHideEmptyRows) {
            filteredArray = data.ad_sets_platform.filter(
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
                    item.ad_sets_performance.length > 0
            );
        } else {
            filteredArray = data.ad_sets_platform.filter(
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
            <div className="ad_set_children_table">
                <DataTable style={{ fontSize: '14px' }} className="headerChildren" value={filteredArray} scrollable={false}>
                    {/* <Column style={{ flexGrow: 1, flexBasis: '160px' }}></Column>
                    <Column body={actionRunPauseChildBodyTemplate}></Column>
                    <Column body={actionDeliveryChildBodyTemplate}></Column> */}
                    <Column
                        headerStyle={{ width: '520px', flex: 'unset' }}
                        style={{ zIndex: '0', fontWeight: 'bolder' }}
                        body={Setting_childBodyTemplate}
                    ></Column>
                    {isShowClicks && (
                        <Column
                            field="clicks"
                            header="Clicks"
                            body={Clicks_childBodyTemplate}
                            style={{ flexGrow: 1, flexBasis: '90px', justifyContent: 'right' }}
                        ></Column>
                    )}
                    {isShowImpressions && (
                        <Column
                            field="impressions"
                            header="Impr"
                            body={Impr_childBodyTemplate}
                            style={{ flexGrow: 1, flexBasis: '90px', justifyContent: 'right' }}
                        ></Column>
                    )}
                    {isShowSpent && (
                        <Column
                            field="spend"
                            header="Spent"
                            body={Spent_childBodyTemplate}
                            style={{ flexGrow: 1, flexBasis: '90px', justifyContent: 'right', paddingRight: '10px' }}
                        ></Column>
                    )}
                    {isShowCPM && (
                        <Column
                            field="cpm"
                            header="CPM"
                            body={CPM_childBodyTemplate}
                            style={{ flexGrow: 1, flexBasis: '90px', justifyContent: 'right', paddingRight: '0' }}
                        ></Column>
                    )}
                    {isShowCTR && (
                        <Column
                            field="cta"
                            header="CTR"
                            body={CTR_childBodyTemplate}
                            style={{ flexGrow: 1, flexBasis: '90px', justifyContent: 'right', paddingRight: '0' }}
                        ></Column>
                    )}
                    {isShowCPC && (
                        <Column
                            field="cpc"
                            header="CPC"
                            body={CPC_childBodyTemplate}
                            style={{ flexGrow: 1, flexBasis: '90px', justifyContent: 'right', paddingRight: '0' }}
                        ></Column>
                    )}
                    {/* {isShowCPA && (
                        <Column
                            field="cpa"
                            header="CPA"
                            body={CPA_childBodyTemplate}
                            style={{ flexGrow: 1, flexBasis: '90px', justifyContent: 'right' }}
                        ></Column>
                    )}
                    {isShowROAS && (
                        <Column
                            field="roads"
                            header="ROAS"
                            body={ROAS_childBodyTemplate}
                            style={{ flexGrow: 1, flexBasis: '90px', justifyContent: 'right' }}
                        ></Column>
                    )} */}
                </DataTable>
            </div>
        );
    };

    const allowExpansion = (rowData) => {
        return rowData.ad_sets_platform && rowData.ad_sets_platform.length > 0;
    };

    const Status_sort = (data) => {
        if (data.status === statusTypes.ACTIVE) return statusTypes.ACTIVE;
        return data.status;
    };

    const Name_sort = (data) => {
        return data.name;
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
    const myAdSetSort = dataTableSortFunction(adSets);
    const preSortedAdSets = myAdSetSort({ field: 'clicks', order: 0 });

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
        if (adSets && adSets.length > 0) {
            for (let rowData of adSets) {
                var result = 0.0;
                // let ad_sets_platform = rowData.ad_sets_platform;
                let ad_sets_platform = rowData.ad_sets_platform.filter(
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
                if (ad_sets_platform) {
                    // eslint-disable-next-line no-loop-func
                    ad_sets_platform.forEach((item) => {
                        if (field === 'roas') {
                            let earned = parseFloat(item.ad_sets_performance.length > 0 ? item.ad_sets_performance[0].earned : 0);
                            let spend = parseFloat(item.ad_sets_performance.length > 0 ? item.ad_sets_performance[0].spend : 0);
                            let tempResult = spend === 0 ? 0 : earned / spend;
                            result += tempResult;
                            fieldName = 'ROAS';
                        } else if (field === 'cpa') {
                            let actions = parseFloat(item.ad_sets_performance.length > 0 ? item.ad_sets_performance[0].actions : 0);
                            let spend = parseFloat(item.ad_sets_performance.length > 0 ? item.ad_sets_performance[0].spend : 0);
                            let tempResult = actions === 0 ? 0 : spend / actions;
                            result += tempResult;
                            fieldName = 'CPA';
                        } else if (field === 'cpc') {
                            let clicks = parseFloat(item.ad_sets_performance.length > 0 ? item.ad_sets_performance[0].clicks : 0);
                            let spend = parseFloat(item.ad_sets_performance.length > 0 ? item.ad_sets_performance[0].spend : 0);
                            let tempResult = clicks === 0 ? 0 : spend / clicks;
                            result += tempResult;
                            fieldName = 'CPC';
                        } else if (field === 'ctr') {
                            let clicks = parseFloat(item.ad_sets_performance.length > 0 ? item.ad_sets_performance[0].clicks : 0);
                            let impre = parseInt(item.ad_sets_performance.length > 0 ? item.ad_sets_performance[0].impressions : 0);
                            let tempResult = impre === 0 ? 0 : 100 * (clicks / impre);
                            result += tempResult;
                            fieldName = 'CTR';
                        } else if (field === 'cpm') {
                            let spend = parseFloat(item.ad_sets_performance.length > 0 ? item.ad_sets_performance[0].spend : 0);
                            let impre = parseInt(item.ad_sets_performance.length > 0 ? item.ad_sets_performance[0].impressions : 0);
                            let tempResult = impre === 0 ? 0 : 1000 * (spend / impre);
                            result += tempResult;
                            fieldName = 'CPM';
                        } else if (field === 'spent') {
                            result += parseFloat(item.ad_sets_performance.length > 0 ? item.ad_sets_performance[0].spend : 0);
                            fieldName = 'SPENT';
                        } else if (field === 'impre') {
                            result += item.ad_sets_performance.length > 0 ? item.ad_sets_performance[0].impressions : 0;
                            fieldName = 'IMPR';
                        } else if (field === 'clicks') {
                            result += item.ad_sets_performance.length > 0 ? item.ad_sets_performance[0].clicks : 0;
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
        if (adSets && adSets.length > 0) {
            for (let rowData of adSets) {
                // var result = 0.0;
                // let ad_sets_platform = rowData.ad_sets_platform;
                let ad_sets_platform = rowData.ad_sets_platform.filter(
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
                if (ad_sets_platform) {
                    // eslint-disable-next-line no-loop-func
                    ad_sets_platform.forEach((item) => {
                        total_Clicks += item.ad_sets_performance.length > 0 ? item.ad_sets_performance[0].clicks : 0;
                        total_Impre += item.ad_sets_performance.length > 0 ? item.ad_sets_performance[0].impressions : 0;
                        total_Spent += parseFloat(item.ad_sets_performance.length > 0 ? item.ad_sets_performance[0].spend : 0);
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

    const footer = () => {
        if (adSets && adSets.length === 0) return null;
        return (
            <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
                <div style={{ width: '720px', fontWeight: 'bolder' }}>{`Totals for ${adSets && adSets.length} Ad Sets`}</div>
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
            type: actions_ExtraLAT.AT_SET_EXTRA_ADS_MANAGER_AD_SET_COLUMN_NAME_SORT,
            payload: event.sortField
        });
        dispatch_ExtraLC({
            type: actions_ExtraLAT.AT_SET_EXTRA_ADS_MANAGER_AD_SET_COLUMN_ORDER_SORT,
            payload: event.sortOrder
        });
    };

    //

    const handleCheckboxColumnToggle = (e, rowData) => {
        // console.log('handleCheckboxColumnToggle_rowData: ', rowData);
        if (e.target.checked) {
            dispatch_ExtraLC({
                type: actions_ExtraLAT.AT_SET_EXTRA_ADS_MANAGER_AD_SET_SELECTED_LIST,
                payload: [...extra_amSelectedAdSetList, rowData]
            });
        } else {
            dispatch_ExtraLC({
                type: actions_ExtraLAT.AT_SET_EXTRA_ADS_MANAGER_AD_SET_SELECTED_LIST,
                payload: extra_amSelectedAdSetList.filter((col) => col.id !== rowData.id)
            });
        }
    };

    const headerCheckbox = (columnProps) => {
        return (
            <div className="p-checkbox p-component" style={{ marginBottom: '15px' }}>
                <Form.Control
                    type="checkbox"
                    checked={extra_amSelectedAdSetList?.length === columnProps.props.value?.length}
                    onChange={(e) => {
                        dispatch_ExtraLC({
                            type: actions_ExtraLAT.AT_SET_EXTRA_ADS_MANAGER_AD_SET_SELECTED_LIST,
                            payload: e.target.checked ? columnProps.props.value.map((col) => col) : []
                        });
                    }}
                />
            </div>
        );
    };

    const bodyCheckbox = (rowData, propsColumn) => {
        // console.log('propsColumn: ', propsColumn);
        return (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <div className="p-checkbox p-component">
                    <Form.Control
                        type="checkbox"
                        checked={extra_amSelectedAdSetList.some((i) => i.id === rowData.id)}
                        onChange={(e) => handleCheckboxColumnToggle(e, rowData)}
                    />
                </div>
                <div onClick={(e) => handleClickExpandRow(e, rowData, propsColumn)} style={{ cursor: 'pointer', marginTop: '15px' }}>
                    <i className="fas fa-maximize"></i>
                </div>
            </div>
        );
    };
    //

    useEffect(() => {
        // console.log('extra_amSelectedAdSetList: ', extra_amSelectedAdSetList);
        if (extra_amSelectedAdSetList && extra_amSelectedAdSetList.length > 0) {
            var ids = '';
            extra_amSelectedAdSetList.map((item, key) => {
                ids += String(item.id) + ',';
                return '';
            });
            if (ids.length > 0) {
                ids = ids.substring(0, ids.length - 1);
                dispatch_ExtraLC({
                    type: actions_ExtraLAT.AT_SET_EXTRA_ADS_MANAGER_AD_SET_SELECTED_LIST_STRING,
                    payload: ids
                });
                // console.log('handleSelectionChange: ', ids);
            }
        } else {
            dispatch_ExtraLC({
                type: actions_ExtraLAT.AT_SET_EXTRA_ADS_MANAGER_AD_SET_SELECTED_LIST_STRING,
                payload: ''
            });
        }
    }, [extra_amSelectedAdSetList, dispatch_ExtraLC]);

    //

    return (
        <div>
            {/* AdSetList - {String(isGroupPlatforms)} - {amViewBy} - {String(amFilterByDate)} */}
            <DataTable
                //selectionMode="none"
                value={preSortedAdSets}
                // selection={extra_amSelectedAdSetList}
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
                sortField={extra_amAdSetColumnNameSort}
                sortOrder={extra_amAdSetColumnOrderSort}
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
                    header="Ad set"
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
                    sortFunction={myAdSetSort}
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
                    sortFunction={myAdSetSort}
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
                        sortFunction={myAdSetSort}
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
                        sortFunction={myAdSetSort}
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
                        sortFunction={myAdSetSort}
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
                        sortFunction={myAdSetSort}
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
                        sortFunction={myAdSetSort}
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
                        sortFunction={myAdSetSort}
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
                        sortFunction={myAdSetSort}
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
                        sortFunction={myAdSetSort}
                    ></Column>
                )} */}
                <Column
                    className="clsAdSetExpand"
                    expander={allowExpansion}
                    style={{ width: '3rem', visibility: 'collapse', display: 'none' }}
                />
            </DataTable>
            {!!isShow_AdSetEditModal && (
                <AdSetEditModal
                    adSetUpdating={adSetUpdating}
                    show={isShow_AdSetEditModal}
                    hideModal={() => setIsShow_AdSetEditModal(false)}
                />
            )}
        </div>
    );
};

export default AdSetList;
