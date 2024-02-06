import React, { useState, useEffect, lazy, useMemo } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Form, Badge, Col } from 'react-bootstrap';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import './Ads.scss';
import { AlertSuccess, AlertError } from '../../../../utils/alertUtils';

import { useExtraLibraryConsumer } from '../../../../contexts/extra/ExtraLibraryContext';
import * as actions_ExtraLAT from '../../../../contexts/extra/ExtraLibraryActionType';

import ImagePlaceholder from '../../../../assets/images/image_lazy_loading.gif';

import { useSelector } from 'react-redux';
import { selectAdAccounts } from '../../../../store/slices/ad-accounts';
import { selectIsGroupPlatforms, selectIsHideEmptyRows, selectSearchQuery } from '../../../../store/slices/ads-manager';
import {
    useAdsChangeStatusRunAndPauseByUserMutation,
    useAdsPerformanceChangeStatusRunAndPauseByUserMutation
} from '../../../../apis/ads-manager-api-slice';
import useGetAdsManagerData from '../../../../hooks/useGetAdsManagerData';
import pickStatusColor from '../../../../utils/pickStatusColor';
import * as statusTypes from '../../../../constants/statusTypes';

const AdsEditModal = lazy(() => import('./AdsEditModal'));

const AdsList = () => {
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
        extra_amAdsColumnNameSort,
        extra_amAdsColumnOrderSort,
        extra_amSelectedAdsList,
        extra_amSelectedAdSetList,
        extra_amSelectedCampaignList
    } = state_ExtraLC;

    const isGroupPlatforms = useSelector(selectIsGroupPlatforms);
    const isHideEmptyRows = useSelector(selectIsHideEmptyRows);
    const searchQuery = useSelector(selectSearchQuery);

    const [isShow_AdsEditModal, setIsShow_AdsEditModal] = useState(false);
    const [adsUpdating, setAdsUpdating] = useState(null);

    const [ads, setAds] = useState(null);

    const [isShowClicks, setIsShowClicks] = useState(false);
    const [isShowImpressions, setIsShowImpressions] = useState(false);
    const [isShowCPM, setIsShowCPM] = useState(false);
    const [isShowCTR, setIsShowCTR] = useState(false);
    const [isShowCPC, setIsShowCPC] = useState(false);
    const [isShowSpent, setIsShowSpent] = useState(false);

    const [expandedRows, setExpandedRows] = useState(null);

    const [adsChangeStatusRunAndPauseByUser] = useAdsChangeStatusRunAndPauseByUserMutation();
    const [adsPerformanceChangeStatusRunAndPauseByUser] = useAdsPerformanceChangeStatusRunAndPauseByUserMutation();

    const { data: adsManagerData, isLoading } = useGetAdsManagerData();

    const dataResult = useMemo(
        () =>
            adsManagerData?.ads.map((ad) => {
                const ad_set = adsManagerData.ad_sets.find((as) => as.id === ad.ad_set);
                const campaign = adsManagerData.campaigns.find((c) => c.id === ad.campaign);

                const campaignStatus = campaign.status;
                const adSetStatus = ad_set.status;

                const ads_platform = adsManagerData.ads_platforms
                    .filter((adp) => adp.ad_id === ad.id)
                    .map((adp) => ({
                        ...adp,
                        ads_performance: adsManagerData.ads_performance.filter(
                            (ap) =>
                                ap.ad_id === adp.ad_id &&
                                ap.publisher_platform === adp.publisher_platform &&
                                ap.ad_platform === adp.ad_platform
                        ),
                        ad_disabled: ad.disabled,
                        campaignStatus,
                        adSetStatus,
                        is_Adsets_Paused: !adsManagerData.ad_sets_platforms
                            .filter((asp) => asp.ad_set === adp.ad_set_id && asp.publisher_platform === adp.publisher_platform)
                            .some((asp) => asp.status !== statusTypes.PAUSED),
                        is_Campaign_Paused: !adsManagerData.campaigns_platforms
                            .filter((cp) => cp.campaign === campaign.id && cp.publisher_platform === adp.publisher_platform)
                            .some((cp) => cp.status !== statusTypes.PAUSED)
                    }));

                return {
                    ...ad,
                    ads_platform,
                    is_All_Paused: !ads_platform.filter((adp) => adp.run_on).some((adp) => adp.status !== statusTypes.PAUSED),
                    campaignStatus,
                    adSetStatus,
                    ads_platform_strings: ads_platform
                        .map((adp) => adp.publisher_platform.charAt(0).toUpperCase() + adp.publisher_platform.slice(1))
                        .join(',')
                };
            }),
        [adsManagerData]
    );

    useEffect(() => {
        let filteredDataResult = dataResult;

        if (filteredDataResult?.length) {
            if (searchQuery.trim()) {
                filteredDataResult = filteredDataResult.filter((item) => item.name.toLowerCase().includes(searchQuery.toLowerCase()));
            }

            if (isHideEmptyRows) {
                filteredDataResult = filteredDataResult.filter((item) => item.ads_platform.some((a) => a.ads_performance.length > 0));
            }

            if (extra_amSelectedAdSetList.length) {
                filteredDataResult = filteredDataResult.filter((item) => extra_amSelectedAdSetList.some((i) => i.id === item.ad_set));
            }

            if (extra_amSelectedCampaignList.length) {
                filteredDataResult = filteredDataResult.filter((item) => extra_amSelectedCampaignList.some((i) => i.id === item.campaign));
            }
        }

        setAds(filteredDataResult);
        dispatch_ExtraLC({
            type: actions_ExtraLAT.AT_SET_EXTRA_ADS_MANAGER_ADS_LIST,
            payload: filteredDataResult
        });
    }, [dataResult, searchQuery, isHideEmptyRows, extra_amSelectedAdSetList, extra_amSelectedCampaignList, dispatch_ExtraLC]);

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

    // const handleSelectionChange = (value) => {
    //     dispatch_AdsManagerLC({
    //         type: actions_AdsManagerLAT.AT_SET_ADS_MANAGER_ADS_SELECTED_LIST,
    //         payload: value
    //     });
    //     dispatch_ExtraLC({
    //         type: actions_ExtraLAT.AT_SET_EXTRA_ADS_MANAGER_ADS_SELECTED_LIST,
    //         payload: value
    //     });
    // };

    //
    const toggleHandler = async (ad_id, status) => {
        const data = {
            status: status ? statusTypes.PAUSED : statusTypes.ACTIVE,
            ads_ids: [ad_id],
            disabled: status
        };

        try {
            await adsChangeStatusRunAndPauseByUser(data).unwrap();
            AlertSuccess('Changed status!');
        } catch (error) {
            AlertError('Error from server!');
        }
    };

    const handleClickExpandRow = (e, rowData, props_column) => {
        let rowIndex = props_column.rowIndex;
        if (isGroupPlatforms) {
            const myEle = Array.from(document.querySelectorAll('td.clsAdsExpand')).filter((ele) =>
                ele.innerHTML.includes('_content_' + String(rowIndex) + '_expanded')
            );
            try {
                const btnExpand = myEle[0].childNodes[1];
                if (btnExpand) {
                    btnExpand.click();
                    let idString = e.target.id;
                    let id = parseInt(idString.split('_')[1]);
                    let btnCurrent = document.getElementById('btnExpandChildTableAds_' + String(id) + '_' + String(rowIndex));
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

    const callAdsEditModal = (rowData) => {
        setAdsUpdating(rowData);
        setIsShow_AdsEditModal(true);
    };

    // CPM = 1000 * Spent/Impressions
    // CTR = 100 * Clicks / Impressions
    // CPC = Spent / Clicks
    // CAC = Spent / Actions
    // ROAS = Earned / Spent
    // If a user is in the Ad Sets tab, then this "Use Existing Campaign" tab should be open when the New button is clicked rather than "Create New Campaign" tab

    const Name_parentBodyTemplate = (rowData, props_column) => {
        let _headline = rowData.name;
        return (
            <div className="Name_parentBodyTemplate">
                <div className="Name_field mr-3">{_headline}</div>
                <div className="mr-3">
                    {rowData.media && rowData.media.is_video === true ? (
                        <LazyLoadImage
                            style={{ maxHeight: '100px', maxWidth: '100px', paddingRight: '5px' }}
                            width={50}
                            src={rowData.media.thumb_video}
                            //alt={rowData.media.file}
                            className="ad-image"
                            placeholderSrc={ImagePlaceholder}
                        />
                    ) : (
                        // <div>Video</div>
                        <LazyLoadImage
                            style={{ maxHeight: '100px', maxWidth: '100px', paddingRight: '5px' }}
                            width={50}
                            src={
                                rowData.thumbnail
                                    ? rowData.thumbnail
                                    : rowData.media && rowData.media.file
                                    ? rowData.media.file
                                    : ImagePlaceholder
                            }
                            alt={rowData.media && rowData.media.file ? rowData.media.file : 'placeholder'}
                            className="ad-image"
                            placeholderSrc={ImagePlaceholder}
                        />
                    )}
                </div>
                <Form.Group className="mb-1 Name_edit">
                    <div className="switch switch-success d-inline m-r-10">
                        <Form.Control
                            style={{ width: 'auto' }}
                            type="checkbox"
                            id={'checkRunPauseParent_Ads_' + String(rowData.id)}
                            checked={rowData.disabled === false ? true : false}
                            onChange={(e) => toggleHandler(rowData.id, !rowData.disabled)}
                            disabled={isLoading}
                        />
                        <Form.Label
                            title={rowData.disabled === false ? 'Pause' : 'Run'}
                            htmlFor={'checkRunPauseParent_Ads_' + String(rowData.id)}
                            className="cr"
                        />
                    </div>
                    <div onClick={() => callAdsEditModal(rowData)} style={{ cursor: 'pointer' }}>
                        <i className="fab fas fa-pencil-alt"></i> Edit
                    </div>
                </Form.Group>
            </div>
        );
    };

    const Icon_parentBodyTemplate = (rowData, more_info) => {
        let ads_platform = rowData.ads_platform;

        let resultSet = new Set();

        for (let item of ads_platform) {
            if (
                item.run_on === true &&
                item.publisher_platform === 'google' &&
                rowData.ads_platform_strings.includes('Google') &&
                isAuthencatedGoogle
            ) {
                resultSet.add('fab fa-google');
            }
            if (
                item.run_on === true &&
                item.publisher_platform === 'youtube' &&
                rowData.ads_platform_strings.includes('Youtube') &&
                isAuthencatedGoogle
            ) {
                resultSet.add('fab fa-youtube');
            }
            if (
                item.run_on === true &&
                item.publisher_platform === 'linkedin' &&
                rowData.ads_platform_strings.includes('Linkedin') &&
                isAuthencatedLinkedin
            ) {
                resultSet.add('fab fa-linkedin-in');
            }
            if (
                item.run_on === true &&
                item.publisher_platform === 'audience_network' &&
                rowData.ads_platform_strings.includes('Audience_network') &&
                isAuthencatedMeta
            ) {
                resultSet.add('fab fa-meta');
            }
            if (
                item.run_on === true &&
                item.publisher_platform === 'facebook' &&
                rowData.ads_platform_strings.includes('Facebook') &&
                isAuthencatedMeta
            ) {
                resultSet.add('fab fa-facebook');
            }
            if (
                item.run_on === true &&
                item.publisher_platform === 'instagram' &&
                rowData.ads_platform_strings.includes('Instagram') &&
                isAuthencatedMeta
            ) {
                resultSet.add('fab fa-instagram');
            }
            if (
                item.run_on === true &&
                item.publisher_platform === 'messenger' &&
                rowData.ads_platform_strings.includes('Messenger') &&
                isAuthencatedMeta
            ) {
                resultSet.add('fab fa-facebook-messenger');
            }
            if (
                item.run_on === true &&
                item.publisher_platform === 'pinterest' &&
                rowData.ads_platform_strings.includes('Pinterest') &&
                isAuthencatedPinterest
            ) {
                resultSet.add('fab fa-pinterest');
            }
            if (
                item.run_on === true &&
                item.publisher_platform === 'snapchat' &&
                rowData.ads_platform_strings.includes('Snapchat') &&
                isAuthencatedSnapchat
            ) {
                resultSet.add('fab fa-snapchat');
            }
            if (
                item.run_on === true &&
                item.publisher_platform === 'tiktok' &&
                rowData.ads_platform_strings.includes('Tiktok') &&
                isAuthencatedTiktok
            ) {
                resultSet.add('fab fa-tiktok');
            }
        }

        // Convert the Set back to an array for rendering.
        let result = Array.from(resultSet);

        return (
            <>
                {result.map((item) => {
                    return <i className={item}></i>;
                })}
            </>
        );
    };

    const Status_parentBodyTemplate = (rowData, props_column) => {
        let status = rowData.status;

        if (rowData.campaignStatus !== statusTypes.ACTIVE) status = `CAMPAIGN ${rowData.campaignStatus}`;
        if (rowData.adSetStatus !== statusTypes.ACTIVE) status = `AD SET ${rowData.adSetStatus}`;

        if (rowData.is_All_Paused) status = `ALL ${statusTypes.PAUSED}`;

        const statusColor = pickStatusColor(status);
        //
        let isPinterestNotNull = rowData.pinterest_board !== null;
        return (
            <div className="Status_parentBodyTemplate" onClick={(e) => handleClickExpandRow(e, rowData, props_column)}>
                <div className="Status_delivery">
                    <div className="media_item__status">
                        <Badge pill variant={statusColor} className="mr-1 badge_font_size">
                            {status}
                        </Badge>
                    </div>
                    <div className="media_item__social_logo">{Icon_parentBodyTemplate(rowData, isPinterestNotNull)}</div>
                </div>
            </div>
        );
    };

    const Clicks_parentBodyTemplate = (rowData) => {
        var result = 0;
        // let ads_platform = rowData.ads_platform;
        let ads_platform = rowData.ads_platform.filter(
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
        if (ads_platform) {
            ads_platform.forEach((item) => {
                if (item.ads_performance.length > 0) result += item.ads_performance[0].clicks;
                else result += 0;
            });
        }
        return result;
    };

    const Impressions_parentBodyTemplate = (rowData) => {
        var result = 0;
        // let ads_platform = rowData.ads_platform;
        let ads_platform = rowData.ads_platform.filter(
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
        if (ads_platform) {
            ads_platform.forEach((item) => {
                if (item.ads_performance.length > 0) result += item.ads_performance[0].impressions;
                else result += 0;
            });
        }
        return result;
    };

    const Spent_parentBodyTemplate = (rowData) => {
        var result = 0;
        // let ads_platform = rowData.ads_platform;
        let ads_platform = rowData.ads_platform.filter(
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
        if (ads_platform) {
            ads_platform.forEach((item) => {
                if (item.ads_performance.length > 0) result += parseFloat(item.ads_performance[0].spend);
                else result += 0;
            });
        }
        return formatCurrency(result);
    };

    const Clicks_childBodyTemplate = (rowData) => {
        return rowData.ads_performance.length > 0 ? rowData.ads_performance[0].clicks : 0;
    };

    const Impr_childBodyTemplate = (rowData) => {
        return rowData.ads_performance.length > 0 ? rowData.ads_performance[0].impressions : 0;
    };

    const Spent_childBodyTemplate = (rowData) => {
        return formatCurrency(parseFloat(rowData.ads_performance.length > 0 ? rowData.ads_performance[0].spend : 0));
    };

    // ================

    const CPM_childBodyTemplate = (rowData) => {
        let spend = parseFloat(rowData.ads_performance.length > 0 ? rowData.ads_performance[0].spend : 0);
        let impre = parseInt(rowData.ads_performance.length > 0 ? rowData.ads_performance[0].impressions : 0);
        let result = impre === 0 ? 0 : 1000 * (spend / impre);
        return formatCurrency(result);
    };

    const CPM_parentBodyTemplate = (rowData) => {
        var result = 0.0;
        // let ads_platform = rowData.ads_platform;
        let ads_platform = rowData.ads_platform.filter(
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
        if (ads_platform) {
            ads_platform.forEach((item) => {
                let spend = parseFloat(item.ads_performance.length > 0 ? item.ads_performance[0].spend : 0);
                let impre = parseInt(item.ads_performance.length > 0 ? item.ads_performance[0].impressions : 0);
                let tempResult = impre === 0 ? 0 : 1000 * (spend / impre);
                result += tempResult;
            });
        }
        return formatCurrency(result);
    };

    const CTR_childBodyTemplate = (rowData) => {
        let clicks = parseFloat(rowData.ads_performance.length > 0 ? rowData.ads_performance[0].clicks : 0);
        let impre = parseInt(rowData.ads_performance.length > 0 ? rowData.ads_performance[0].impressions : 0);
        let result = impre === 0 ? 0 : 100 * (clicks / impre);
        return String(result.toFixed(2)) + '%';
        // return formatCurrency(result);
    };

    const CTR_parentBodyTemplate = (rowData) => {
        var result = 0.0;
        // let ads_platform = rowData.ads_platform;
        let ads_platform = rowData.ads_platform.filter(
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
        if (ads_platform) {
            ads_platform.forEach((item) => {
                let clicks = parseFloat(item.ads_performance.length > 0 ? item.ads_performance[0].clicks : 0);
                let impre = parseInt(item.ads_performance.length > 0 ? item.ads_performance[0].impressions : 0);
                let tempResult = impre === 0 ? 0 : 100 * (clicks / impre);
                result += tempResult;
            });
        }
        return String(result.toFixed(2)) + '%';
        // return formatCurrency(result);
    };

    const CPC_childBodyTemplate = (rowData) => {
        let clicks = parseFloat(rowData.ads_performance.length > 0 ? rowData.ads_performance[0].clicks : 0);
        let spend = parseFloat(rowData.ads_performance.length > 0 ? rowData.ads_performance[0].spend : 0);
        let result = spend === 0 ? 0 : spend / clicks;
        return formatCurrency(result);
    };

    const CPC_parentBodyTemplate = (rowData) => {
        var result = 0.0;
        // let ads_platform = rowData.ads_platform;
        let ads_platform = rowData.ads_platform.filter(
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
        if (ads_platform) {
            ads_platform.forEach((item) => {
                let clicks = parseFloat(item.ads_performance.length > 0 ? item.ads_performance[0].clicks : 0);
                let spend = parseFloat(item.ads_performance.length > 0 ? item.ads_performance[0].spend : 0);
                let tempResult = clicks === 0 ? 0 : spend / clicks;
                result += tempResult;
            });
        }
        return formatCurrency(result);
    };

    // const CPA_childBodyTemplate = (rowData) => {
    //     let actions = parseFloat(rowData.ads_performance.length > 0 ? rowData.ads_performance[0].actions : 0);
    //     let spend = parseFloat(rowData.ads_performance.length > 0 ? rowData.ads_performance[0].spend : 0);
    //     let result = actions === 0 ? 0 : spend / actions;
    //     return formatCurrency(result);
    // };

    const CPA_parentBodyTemplate = (rowData) => {
        var result = 0.0;
        // let ads_platform = rowData.ads_platform;
        let ads_platform = rowData.ads_platform.filter(
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
        if (ads_platform) {
            ads_platform.forEach((item) => {
                let actions = parseFloat(item.ads_performance.length > 0 ? item.ads_performance[0].actions : 0);
                let spend = parseFloat(item.ads_performance.length > 0 ? item.ads_performance[0].spend : 0);
                let tempResult = actions === 0 ? 0 : spend / actions;
                result += tempResult;
            });
        }
        return formatCurrency(result);
    };

    // const ROAS_childBodyTemplate = (rowData) => {
    //     let earned = parseFloat(rowData.ads_performance.length > 0 ? rowData.ads_performance[0].earned : 0);
    //     let spend = parseFloat(rowData.ads_performance.length > 0 ? rowData.ads_performance[0].spend : 0);
    //     let result = spend === 0 ? 0 : earned / spend;
    //     return formatCurrency(result);
    // };

    const ROAS_parentBodyTemplate = (rowData) => {
        var result = 0.0;
        // let ads_platform = rowData.ads_platform;
        let ads_platform = rowData.ads_platform.filter(
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
        if (ads_platform) {
            ads_platform.forEach((item) => {
                let earned = parseFloat(item.ads_performance.length > 0 ? item.ads_performance[0].earned : 0);
                let spend = parseFloat(item.ads_performance.length > 0 ? item.ads_performance[0].spend : 0);
                let tempResult = spend === 0 ? 0 : earned / spend;
                result += tempResult;
            });
        }
        return formatCurrency(result);
    };

    const countAuthenticatedSocial = () => {
        var result = 0;
        if (isAuthencatedGoogle) result += 1;
        if (isAuthencatedFacebook) result += 1;
        if (isAuthencatedInstagram) result += 1;
        if (isAuthencatedLinkedin) result += 1;
        if (isAuthencatedPinterest) result += 1;
        if (isAuthencatedSnapchat) result += 1;
        if (isAuthencatedTiktok) result += 1;
        if (isAuthencatedMeta) result += 1;
        if (isAuthencatedMessenger) result += 1;
        if (isAuthencatedYoutube) result += 1;
        return result;
    };

    const toggleHandlerChild = async (event, ads_platform_id, ads_id) => {
        const isChecked = event.target.checked;

        const data = {
            status: !isChecked ? statusTypes.PAUSED : statusTypes.ACTIVE,
            id: parseInt(ads_platform_id),
            disabled: !isChecked,
            count_authenticated_social: countAuthenticatedSocial(),
            ads_id
        };

        try {
            await adsPerformanceChangeStatusRunAndPauseByUser(data).unwrap();
            AlertSuccess('Changed status!');
        } catch (error) {
            AlertError('Error from server!');
        }
    };

    const Setting_childBodyTemplate = (rowData, props_column) => {
        let performance_id = String(rowData.ads_performance.length > 0 ? rowData.ads_performance[0].id : 0);
        let platform_id = rowData.id;
        let ad_id = rowData.ad;
        let platforms_draft =
            rowData.publisher_platform === 'facebook' ||
            rowData.publisher_platform === 'instagram' ||
            rowData.publisher_platform === 'pinterest' ||
            rowData.publisher_platform === 'snapchat';
        let isCallEditAddFromChild = rowData.status === 'DRAFT' && platforms_draft;
        // console.log("Setting_childBodyTemplate: ", rowData)

        let status = rowData.status;

        if (status === statusTypes.ACTIVE) {
            if (rowData.is_Adsets_Paused) status = `AD SET ${statusTypes.PAUSED}`;
            if (rowData.is_Campaign_Paused) status = `CAMPAIGN ${statusTypes.PAUSED}`;
        }

        if (status !== statusTypes.PAUSED && rowData.campaignStatus !== statusTypes.ACTIVE) status = `CAMPAIGN ${rowData.campaignStatus}`;
        if (status !== statusTypes.PAUSED && rowData.adSetStatus !== statusTypes.ACTIVE) status = `AD SET ${rowData.adSetStatus}`;

        const statusColor = pickStatusColor(status);

        return (
            <div className="Setting_childBodyTemplate_ads">
                <div className="Name_field"></div>
                <Form.Group className="mb-1 Name_edit">
                    <div
                        onClick={() => (isCallEditAddFromChild ? callAdsEditModal(rowData.ad) : '')}
                        className={`switch ${
                            rowData.status === statusTypes.ACTIVE && (rowData.is_Adsets_Paused || rowData.is_Campaign_Paused)
                                ? 'switch-warning'
                                : 'switch-success'
                        } d-inline m-r-10`}
                    >
                        <Form.Control
                            type="checkbox"
                            style={{ width: 'auto' }}
                            id={'checkRunPauseChild_Ads_' + performance_id + '_' + platform_id + '_' + ad_id}
                            // defaultChecked={rowData.disabled === false ? true : false}
                            checked={rowData.ad_disabled ? !rowData.previously_disabled : !rowData.disabled}
                            onChange={(e) => toggleHandlerChild(e, platform_id, ad_id)}
                            disabled={isLoading || isCallEditAddFromChild || rowData.ad_disabled}
                            // disabled={true}
                        />
                        <Form.Label
                            title={'Run|Pause'}
                            htmlFor={'checkRunPauseChild_Ads_' + performance_id + '_' + platform_id + '_' + ad_id}
                            className="cr"
                        />
                        {/* title="Run|Pause" */}
                    </div>
                </Form.Group>
                <div className="Status_field" style={{ display: 'flex', flexDirection: 'column' }}>
                    <div id={`adsStatusRunPauseChildActive_${performance_id}_${platform_id}`}>
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
        // let filteredArray = data.ads_platform;
        // console.log("rowExpansionTemplate: ", data)
        let filteredArray = null;
        if (isHideEmptyRows) {
            filteredArray = data.ads_platform.filter(
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
                    item.ads_performance.length > 0
            );
        } else {
            filteredArray = data.ads_platform.filter(
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
            <div className="ads_children_table">
                <DataTable style={{ fontSize: '14px' }} className="headerChildren" value={filteredArray}>
                    <Column
                        style={{ marginLeft: '5px' }}
                        headerStyle={{ width: '500px', flex: 'unset' }}
                        body={Setting_childBodyTemplate}
                    ></Column>
                    {isShowClicks && (
                        <Column
                            field="clicks"
                            header="Clicks"
                            body={Clicks_childBodyTemplate}
                            style={{ flexGrow: 1, flexBasis: '50px', justifyContent: 'right', paddingRight: '10px' }}
                        ></Column>
                    )}
                    {isShowImpressions && (
                        <Column
                            field="impressions"
                            header="Impr"
                            body={Impr_childBodyTemplate}
                            style={{ flexGrow: 1, flexBasis: '50px', justifyContent: 'right', paddingRight: '10px' }}
                        ></Column>
                    )}
                    {isShowSpent && (
                        <Column
                            field="spent"
                            header="Spent"
                            body={Spent_childBodyTemplate}
                            style={{ flexGrow: 1, flexBasis: '50px', justifyContent: 'right', paddingRight: '10px' }}
                        ></Column>
                    )}
                    {isShowCPM && (
                        <Column
                            field="cpm"
                            header="CPM"
                            body={CPM_childBodyTemplate}
                            style={{ flexGrow: 1, flexBasis: '50px', justifyContent: 'right', paddingRight: '0' }}
                        ></Column>
                    )}
                    {isShowCTR && (
                        <Column
                            field="cta"
                            header="CTR"
                            body={CTR_childBodyTemplate}
                            style={{ flexGrow: 1, flexBasis: '50px', justifyContent: 'right', paddingRight: '0' }}
                        ></Column>
                    )}
                    {isShowCPC && (
                        <Column
                            field="cpc"
                            header="CPC"
                            body={CPC_childBodyTemplate}
                            style={{ flexGrow: 1, flexBasis: '50px', justifyContent: 'right', paddingRight: '0' }}
                        ></Column>
                    )}
                    {/* {isShowCPA && (
                        <Column
                            field="cpa"
                            header="CPA"
                            body={CPA_childBodyTemplate}
                            style={{ flexGrow: 1, flexBasis: '50px', justifyContent: 'right' }}
                        ></Column>
                    )}
                    {isShowROAS && (
                        <Column
                            field="roads"
                            header="ROAS"
                            body={ROAS_childBodyTemplate}
                            style={{ flexGrow: 1, flexBasis: '50px', justifyContent: 'right' }}
                        ></Column>
                    )} */}
                </DataTable>
            </div>
        );
    };

    const allowExpansion = (rowData) => {
        return rowData.ads_platform && rowData.ads_platform.length > 0;
    };

    const Status_sort = (data) => {
        if (data.status === statusTypes.ACTIVE) return statusTypes.ACTIVE;
        return data.status;
    };

    const Name_sort = (data) => {
        return data.headline;
    };

    const dataTableSortFunction = (value) => (event) => {
        // console.log('dataTableSortFunction: ', value);
        // console.log('dataTableSortFunction_event: ', event);
        if (value) {
            return [...value].sort((data1, data2) => {
                // console.log("dataTableSortFunction_data1: ", data1);
                // console.log("dataTableSortFunction_data2: ", data2);
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
                    // clickData1 = formatCurrency(ROAS_parentBodyTemplate(data1));
                    // clickData2 = formatCurrency(ROAS_parentBodyTemplate(data2));
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
    const myAdSort = dataTableSortFunction(ads);
    const preSortedAds = myAdSort({ field: 'clicks', order: 0 });

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
        if (ads && ads.length > 0) {
            for (let rowData of ads) {
                var result = 0.0;
                // let ads_platform = rowData.ads_platform;
                let ads_platform = rowData.ads_platform.filter(
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
                if (ads_platform) {
                    // eslint-disable-next-line no-loop-func
                    ads_platform.forEach((item) => {
                        if (field === 'roas') {
                            let earned = parseFloat(item.ads_performance.length > 0 ? item.ads_performance[0].earned : 0);
                            let spend = parseFloat(item.ads_performance.length > 0 ? item.ads_performance[0].spend : 0);
                            let tempResult = spend === 0 ? 0 : earned / spend;
                            result += tempResult;
                            fieldName = 'ROAS';
                        } else if (field === 'cpa') {
                            let actions = parseFloat(item.ads_performance.length > 0 ? item.ads_performance[0].actions : 0);
                            let spend = parseFloat(item.ads_performance.length > 0 ? item.ads_performance[0].spend : 0);
                            let tempResult = actions === 0 ? 0 : spend / actions;
                            result += tempResult;
                            fieldName = 'CPA';
                        } else if (field === 'cpc') {
                            let clicks = parseFloat(item.ads_performance.length > 0 ? item.ads_performance[0].clicks : 0);
                            let spend = parseFloat(item.ads_performance.length > 0 ? item.ads_performance[0].spend : 0);
                            let tempResult = clicks === 0 ? 0 : spend / clicks;
                            result += tempResult;
                            fieldName = 'CPC';
                        } else if (field === 'ctr') {
                            let clicks = parseFloat(item.ads_performance.length > 0 ? item.ads_performance[0].clicks : 0);
                            let impre = parseInt(item.ads_performance.length > 0 ? item.ads_performance[0].impressions : 0);
                            let tempResult = impre === 0 ? 0 : 100 * (clicks / impre);
                            result += tempResult;
                            fieldName = 'CTR';
                        } else if (field === 'cpm') {
                            let spend = parseFloat(item.ads_performance.length > 0 ? item.ads_performance[0].spend : 0);
                            let impre = parseInt(item.ads_performance.length > 0 ? item.ads_performance[0].impressions : 0);
                            let tempResult = impre === 0 ? 0 : 1000 * (spend / impre);
                            result += tempResult;
                            fieldName = 'CPM';
                        } else if (field === 'spent') {
                            result += parseFloat(item.ads_performance.length > 0 ? item.ads_performance[0].spend : 0);
                            fieldName = 'SPENT';
                        } else if (field === 'impre') {
                            result += item.ads_performance.length > 0 ? item.ads_performance[0].impressions : 0;
                            fieldName = 'IMPR';
                        } else if (field === 'clicks') {
                            result += item.ads_performance.length > 0 ? item.ads_performance[0].clicks : 0;
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
        if (ads && ads.length > 0) {
            for (let rowData of ads) {
                // var result = 0.0;
                // let ads_platform = rowData.ads_platform;
                let ads_platform = rowData.ads_platform.filter(
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
                if (ads_platform) {
                    // eslint-disable-next-line no-loop-func
                    ads_platform.forEach((item) => {
                        total_Clicks += item.ads_performance.length > 0 ? item.ads_performance[0].clicks : 0;
                        total_Impre += item.ads_performance.length > 0 ? item.ads_performance[0].impressions : 0;
                        total_Spent += parseFloat(item.ads_performance.length > 0 ? item.ads_performance[0].spend : 0);
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
        if (ads && ads.length === 0) return null;
        return (
            <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
                <div style={{ width: '900px', fontWeight: 'bolder' }}>{`Totals for ${ads && ads.length} Ads`}</div>
                <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                    {isShowClicks && (
                        <Col style={{ paddingRight: '0px' }}>
                            <div style={{ textAlign: 'right', fontWeight: 'bolder' }}>{calculateTotal('clicks')}</div>
                        </Col>
                    )}
                    {isShowImpressions && (
                        <Col style={{ paddingRight: '0px' }}>
                            <div style={{ textAlign: 'right', fontWeight: 'bolder' }}>{calculateTotal('impre')}</div>
                        </Col>
                    )}
                    {isShowSpent && (
                        <Col style={{ paddingRight: '0px' }}>
                            <div style={{ textAlign: 'right', fontWeight: 'bolder' }}>{calculateTotal('spent')}</div>
                        </Col>
                    )}
                    {isShowCPM && (
                        <Col style={{ paddingRight: '0px' }}>
                            <div style={{ textAlign: 'right', fontWeight: 'bolder' }}>{calculateTotalOthers('cpm')}</div>
                        </Col>
                    )}
                    {isShowCTR && (
                        <Col style={{ paddingRight: '0px' }}>
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
            type: actions_ExtraLAT.AT_SET_EXTRA_ADS_MANAGER_ADS_COLUMN_NAME_SORT,
            payload: event.sortField
        });
        dispatch_ExtraLC({
            type: actions_ExtraLAT.AT_SET_EXTRA_ADS_MANAGER_ADS_COLUMN_ORDER_SORT,
            payload: event.sortOrder
        });
    };

    // ===

    const handleCheckboxColumnToggle = (e, rowData) => {
        // console.log('handleCheckboxColumnToggle_rowData: ', rowData);
        if (e.target.checked) {
            dispatch_ExtraLC({
                type: actions_ExtraLAT.AT_SET_EXTRA_ADS_MANAGER_ADS_SELECTED_LIST,
                payload: [...extra_amSelectedAdsList, rowData]
            });
        } else {
            dispatch_ExtraLC({
                type: actions_ExtraLAT.AT_SET_EXTRA_ADS_MANAGER_ADS_SELECTED_LIST,
                payload: extra_amSelectedAdsList.filter((col) => col.id !== rowData.id)
            });
        }
    };

    const headerCheckbox = (columnProps) => {
        return (
            <div className="p-checkbox p-component" style={{ marginBottom: '15px' }}>
                <Form.Control
                    type="checkbox"
                    checked={extra_amSelectedAdsList?.length === columnProps.props.value?.length}
                    onChange={(e) => {
                        dispatch_ExtraLC({
                            type: actions_ExtraLAT.AT_SET_EXTRA_ADS_MANAGER_ADS_SELECTED_LIST,
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
                        checked={extra_amSelectedAdsList.some((i) => i.id === rowData.id)}
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

    return (
        <div>
            <DataTable
                id="adsDataTableID"
                //selectionMode="none"
                value={preSortedAds}
                // selection={extra_amSelectedAdsList}
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
                sortField={extra_amAdsColumnNameSort}
                sortOrder={extra_amAdsColumnOrderSort}
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
                    header="Ad"
                    field="name"
                    sortable
                    // headerStyle={{ width: '520px', flex: 'unset' }}
                    // style={{ zIndex: '99', fontWeight: 'bolder' }}
                    headerStyle={{ width: '400px', flex: 'unset', borderRight: 'unset', backgroundColor: '#f8f9fa' }}
                    style={{
                        width: '420px',
                        maxWidth: '420px',
                        zIndex: '999',
                        fontWeight: 'bolder',
                        paddingLeft: '10px',
                        paddingRight: '5px',
                        borderRight: '0px solid #dee2e6',
                        backgroundColor: '#f4f7fa'
                    }}
                    sortField="name"
                    sortFunction={myAdSort}
                    body={Name_parentBodyTemplate}
                ></Column>
                <Column
                    header="Status"
                    field="status"
                    sortable
                    headerStyle={{ width: '120px', flex: 'unset', borderRight: 'unset', backgroundColor: 'unset' }}
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
                    // style={{ justifyContent: 'right', width: '120px' }}
                    sortField="status"
                    sortFunction={myAdSort}
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
                        sortFunction={myAdSort}
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
                        sortFunction={myAdSort}
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
                        sortFunction={myAdSort}
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
                        sortFunction={myAdSort}
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
                        sortFunction={myAdSort}
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
                        sortFunction={myAdSort}
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
                        sortFunction={myAdSort}
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
                        sortFunction={myAdSort}
                    ></Column>
                )} */}
                <Column
                    className="clsAdsExpand"
                    expander={allowExpansion}
                    style={{ width: '3rem', visibility: 'collapse', display: 'none' }}
                />
            </DataTable>
            {!!isShow_AdsEditModal && (
                <AdsEditModal adsUpdating={adsUpdating} show={isShow_AdsEditModal} hideModal={() => setIsShow_AdsEditModal(false)} />
            )}
        </div>
    );
};

export default AdsList;
