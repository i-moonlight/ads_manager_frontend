import React, { useState, useEffect, lazy } from 'react';
import { Button, Modal, Row, Col, Form } from 'react-bootstrap';
import { Accordion, AccordionTab } from 'primereact/accordion';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Masonry from 'react-masonry-css';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import { useAdsManagerLibraryConsumer } from '../../common/AdsManagerLibraryContext';
import * as actions_AdsManagerLAT from '../../common/AdsManagerLibraryActionType';
import { campaignChangeStatusToPauseByUserApi } from '../../../../apis/adsManagerApi';
import { STATUS_CODE } from '../../../../utils/statusCodeApi';
import { AlertSuccess, AlertError } from '../../../../utils/alertUtils';
//
import { useSelector } from 'react-redux';
import { selectAdAccounts } from '../../../../store/slices/ad-accounts';
import ImagePlacholder from '../../../../assets/images/image_lazy_loading.gif';
//
import { useExtraLibraryConsumer } from '../../../../contexts/extra/ExtraLibraryContext';
import * as actions_ExtraLAT from '../../../../contexts/extra/ExtraLibraryActionType';
import {
    useAdsAddCommonByUserMutation,
    useMetaAccountsGetByUserQuery,
    useMetaPagesGetByUserdQuery,
    usePinterestBoardsGetByUserQuery
} from '../../../../apis/ads-manager-api-slice';
import * as statusTypes from '../../../../constants/statusTypes';

const AlertEnableAdAccountAllModel = lazy(() => import('./AlertEnableAdAccountAllModel'));
const AlertEnableAdAccountOneModel = lazy(() => import('./AlertEnableAdAccountOneModel'));

const CampaignFinalizeModal = (props) => {
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

    const [isUnAuthencatedAll, setIsUnAuthencatedAll] = useState(true);
    const [currentCheckedPlatform, setCurrentCheckedPlatform] = useState([]);

    const [isShow_AlertEnableAdAccountAllModel, setIsShow_AlertEnableAdAccountAllModel] = useState(false);
    const [isShow_AlertEnableAdAccountOneModel, setIsShow_AlertEnableAdAccountOneModel] = useState(false);
    const [publisherPlatformForAlert, setPublisherPlatformForAlert] = useState('');

    const { state_AdsManagerLC, dispatch_AdsManagerLC } = useAdsManagerLibraryConsumer();
    const {
        amCampaignIdCurrent,
        amAdSetIdCurrent,
        amIsVisibilityCampaignFinalizeModal,
        amIsShowCampaignFinalizeModal,
        amCampaignItemCurrent,
        amAdSetItemCurrent,
        amAdsUrlCurrent,
        amDisplayUrlCurrent,
        amIsCreateCampaign
    } = state_AdsManagerLC;

    const { state_ExtraLC, dispatch_ExtraLC } = useExtraLibraryConsumer();
    const { extra_mediaSelectedList1 } = state_ExtraLC;

    const { data: data_MetaAccount, isLoading: isLoading_MetaAccount } = useMetaAccountsGetByUserQuery(undefined, {
        skip: !isAuthencatedFacebook
    });
    const { data: data_FacbookPage, isLoading: isLoading_FacbookPage } = useMetaPagesGetByUserdQuery(undefined, {
        skip: !isAuthencatedFacebook
    });
    const { data: data_PinterestBoard, isLoading: isLoading_PinterestBoard } = usePinterestBoardsGetByUserQuery(undefined, {
        skip: !isAuthencatedPinterest
    });

    const [isLoadingAction, setIsLoadingAction] = useState(false);
    const [languagesString, setLanguagesString] = useState('');
    const [locationsString, setLocationsString] = useState('');
    const [keywordsString, setKeywordsString] = useState('');

    const [metaInstagramAccounts, setMetaInstagramAccounts] = useState([]);
    const [facebookPages, setFacebookPages] = useState([]);
    const [pinterestBoards, setPinterestBoards] = useState([]);

    const [adsAddCommonByUser] = useAdsAddCommonByUserMutation();

    useEffect(() => {
        if (!isLoading_MetaAccount && data_MetaAccount?.accounts.length > 0) {
            setMetaInstagramAccounts(data_MetaAccount.accounts);
        }
        if (!isLoading_FacbookPage && data_FacbookPage?.pages.length > 0) {
            setFacebookPages(data_FacbookPage.pages);
        }
        if (!isLoading_PinterestBoard && data_PinterestBoard?.boards.length > 0) {
            setPinterestBoards(data_PinterestBoard.boards);
        }
        if (amAdSetItemCurrent) {
            var tempString = '';
            amAdSetItemCurrent.languages_w_ad_set.forEach((element) => {
                tempString += element.language + ',';
            });
            tempString = tempString.slice(0, -1);
            setLanguagesString(tempString);

            tempString = '';
            amAdSetItemCurrent.keywords_w_ad_set.forEach((element) => {
                tempString += element.keyword + ',';
            });
            tempString = tempString.slice(0, -1);
            setKeywordsString(tempString);

            tempString = '';
            amAdSetItemCurrent.locations_w_ad_set.forEach((element) => {
                tempString += element.location + ',';
            });
            tempString = tempString.slice(0, -1);
            setLocationsString(tempString);
        }
    }, [
        data_MetaAccount?.accounts,
        isLoading_MetaAccount,
        setMetaInstagramAccounts,
        data_FacbookPage?.pages,
        isLoading_FacbookPage,
        setFacebookPages,
        amAdSetItemCurrent,
        data_PinterestBoard?.boards,
        isLoading_PinterestBoard,
        setPinterestBoards
    ]);

    const facebookCTAOptions = [
        { value: 'No button', label: 'No button' },
        { value: 'Apply now', label: 'Apply now' },
        { value: 'Book now', label: 'Book now' },
        { value: 'Contact us', label: 'Contact us' },
        { value: 'Download', label: 'Download' },
        { value: 'Get access', label: 'Get access' },
        { value: 'Get offer', label: 'Get offer' },
        { value: 'Get quote', label: 'Get quote' },
        { value: 'Get showtimes', label: 'Get showtimes' },
        { value: 'Learn more', label: 'Learn more' },
        { value: 'Listen now', label: 'Listen now' },
        { value: 'Order now', label: 'Order now' },
        { value: 'Request time', label: 'Request time' },
        { value: 'See menu', label: 'See menu' },
        { value: 'Shop now', label: 'Shop now' },
        { value: 'Sign up', label: 'Sign up' },
        { value: 'Subscribe', label: 'Subscribe' },
        { value: 'Watch more', label: 'Watch more' }
    ];

    const metaCTAOptions = [
        { value: 'No button', label: 'No button' },
        { value: 'Apply now', label: 'Apply now' },
        { value: 'Book now', label: 'Book now' },
        { value: 'Contact us', label: 'Contact us' },
        { value: 'Download', label: 'Download' },
        { value: 'Get access', label: 'Get access' },
        { value: 'Get offer', label: 'Get offer' },
        { value: 'Get quote', label: 'Get quote' },
        { value: 'Get showtimes', label: 'Get showtimes' },
        { value: 'Learn more', label: 'Learn more' },
        { value: 'Listen now', label: 'Listen now' },
        { value: 'Order now', label: 'Order now' },
        { value: 'Request time', label: 'Request time' },
        { value: 'See menu', label: 'See menu' },
        { value: 'Shop now', label: 'Shop now' },
        { value: 'Sign up', label: 'Sign up' },
        { value: 'Subscribe', label: 'Subscribe' },
        { value: 'Watch more', label: 'Watch more' }
    ];

    // const facebookPageOptions = [
    //     { value: 'My fb page', label: 'My fb page' },
    //     { value: 'My other fb page', label: 'My other fb page' }
    // ];

    const instagramCTAOptions = [
        { value: 'None', label: 'None' },
        { value: 'Apply now', label: 'Apply now' },
        { value: 'Book now', label: 'Book now' },
        { value: 'Contact us', label: 'Contact us' },
        { value: 'Download', label: 'Download' },
        { value: 'Get access', label: 'Get access' },
        { value: 'Get offer', label: 'Get offer' },
        { value: 'Get quote', label: 'Get quote' },
        { value: 'Get showtimes', label: 'Get showtimes' },
        { value: 'Learn more', label: 'Learn more' },
        { value: 'Listen now', label: 'Listen now' },
        { value: 'Order now', label: 'Order now' },
        { value: 'Request time', label: 'Request time' },
        { value: 'See menu', label: 'See menu' },
        { value: 'Shop now', label: 'Shop now' },
        { value: 'Sign up', label: 'Sign up' },
        { value: 'Subscribe', label: 'Subscribe' },
        { value: 'Watch more', label: 'Watch more' }
    ];

    // const instagramAccountOptions = [
    //     { value: 'My instagram account', label: 'My instagram account' },
    //     { value: 'My other instagram account', label: 'My other instagram account' }
    // ];

    const linkedInCTAOptions = [
        { value: 'Apply', label: 'Apply' },
        { value: 'Subscribe', label: 'Subscribe' },
        { value: 'Join', label: 'Join' },
        { value: 'Download', label: 'Download' },
        { value: 'View quote', label: 'View quote' },
        { value: 'Learn more', label: 'Learn more' },
        { value: 'Register', label: 'Register' },
        { value: 'Signup', label: 'Signup' },
        { value: 'Attend', label: 'Attend' },
        { value: 'Request Demo', label: 'Request Demo' }
    ];

    const snapchatCTAOptions = [
        { value: 'Apply now', label: 'Apply now' },
        { value: 'Book now', label: 'Book now' },
        { value: 'Buy Tickets', label: 'Buy Tickets' },
        { value: 'Donate', label: 'Donate' },
        { value: 'Get Now', label: 'Get Now' },
        { value: 'Listen', label: 'Listen' },
        { value: 'Shop now', label: 'Shop now' },
        { value: 'Sign up', label: 'Sign up' },
        { value: 'More', label: 'More' },
        { value: 'Order now', label: 'Order now' },
        { value: 'Play', label: 'Play' },
        { value: 'Play Game', label: 'Play Game' },
        { value: 'Pre-Register', label: 'Pre-Register' },
        { value: 'Read', label: 'Read' },
        { value: 'Show', label: 'Show' },
        { value: 'Showtimes', label: 'Showtimes' },
        { value: 'View', label: 'View' },
        { value: 'View Menu', label: 'View Menu' },
        { value: 'Vote', label: 'Vote' },
        { value: 'Watch', label: 'Watch' }
    ];

    const tiktokCTAOptions = [
        { value: 'Apply now', label: 'Apply now' },
        { value: 'Book now', label: 'Book now' },
        { value: 'Contact us', label: 'Contact us' },
        { value: 'Download', label: 'Download' },
        { value: 'Get quote', label: 'Get quote' },
        { value: 'Learn more', label: 'Learn more' },
        { value: 'Shop now', label: 'Shop now' },
        { value: 'Sign up', label: 'Sign up' },
        { value: 'Play game', label: 'Play game' },
        { value: 'Read more', label: 'Read more' },
        { value: 'View now', label: 'View now' },
        { value: 'Order now', label: 'Order now' },
        { value: 'Install now', label: 'Install now' },
        { value: 'Get showtimes', label: 'Get showtimes' },
        { value: 'Listen now', label: 'Listen now' },
        { value: 'Subscribe', label: 'Subscribe' },
        { value: 'Get tickets now', label: 'Get tickets now' },
        { value: 'Experience now', label: 'Experience now' },
        { value: 'Pre-order now', label: 'Pre-order now' },
        { value: 'Visit store', label: 'Visit store' },
        { value: 'Watch now', label: 'Watch now' },
        { value: 'Interested', label: 'Interested' }
    ];

    //
    const re =
        /^((ftp|http|https):\/\/)?(www.)?(?!.*(ftp|http|https|www.))[a-zA-Z0-9_-]+(\.[a-zA-Z]+)+((\/)[\w#]+)*(\/\w+\?[a-zA-Z0-9_]+=\w+(&[a-zA-Z0-9_]+=\w+)*)?$/gm;

    const handlePauseBtnFromCampaignFinalizeModal = () => {
        // console.log('handlePauseBtnFromCampaignFinalizeModal');
        // return;
        let data = {
            status: statusTypes.PAUSED,
            campaign_id: amCampaignIdCurrent,
            ad_set_id: amAdSetIdCurrent
        };
        // console.log('data: ', data);
        setIsLoadingAction(true);
        campaignChangeStatusToPauseByUserApi(data).then((resp) => {
            if (resp && resp.status === STATUS_CODE.HTTP_200_OK) {
                launchAllAfterAddAds();
            } else {
                AlertError('Error from server!');
            }
            setIsLoadingAction(false);
        });
    };

    const formatCurrency = (value) => {
        return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    };

    // =========================================================================

    const launchAllAfterAddAds = () => {
        AlertSuccess('Changed status!');

        dispatch_AdsManagerLC({
            type: actions_AdsManagerLAT.AT_SET_ADS_MANAGER_IS_VISIBILITY_CAMPAIGN_CREATE_MODAL,
            payload: 'visible'
        });
        dispatch_AdsManagerLC({
            type: actions_AdsManagerLAT.AT_SET_ADS_MANAGER_IS_VISIBILITY_CAMPAIGN_CREATE_AND_EDIT_MODAL,
            payload: 'visible'
        });
        dispatch_AdsManagerLC({
            type: actions_AdsManagerLAT.AT_SET_ADS_MANAGER_IS_VISIBILITY_CAMPAIGN_FINALIZE_MODAL,
            payload: 'visible'
        });
        dispatch_AdsManagerLC({
            type: actions_AdsManagerLAT.AT_SET_ADS_MANAGER_IS_VISIBILITY_MEDIA_LIBRARY_MODAL,
            payload: 'visible'
        });
        //
        dispatch_AdsManagerLC({
            type: actions_AdsManagerLAT.AT_SET_ADS_MANAGER_IS_SHOW_CAMPAIGN_CREATE_MODAL,
            payload: false
        });
        dispatch_AdsManagerLC({
            type: actions_AdsManagerLAT.AT_SET_ADS_MANAGER_IS_SHOW_CAMPAIGN_CREATE_AND_EDIT_MODAL,
            payload: false
        });
        dispatch_AdsManagerLC({
            type: actions_AdsManagerLAT.AT_SET_ADS_MANAGER_IS_SHOW_CAMPAIGN_FINALIZE_MODAL,
            payload: false
        });
        dispatch_AdsManagerLC({
            type: actions_AdsManagerLAT.AT_SET_ADS_MANAGER_IS_SHOW_MEDIA_LIBRARY_MODAL,
            payload: false
        });
        //
        dispatch_AdsManagerLC({
            type: actions_AdsManagerLAT.AT_SET_ADS_MANAGER_IS_CREATE_CAMPAIGN,
            payload: true
        });
        dispatch_AdsManagerLC({
            type: actions_AdsManagerLAT.AT_SET_ADS_MANAGER_IS_CREATE_AD_SETS,
            payload: true
        });
        //
        dispatch_ExtraLC({
            type: actions_ExtraLAT.AT_SET_EXTRA_MEDIA_SELECTED_LIST,
            payload: []
        });
    };

    // HANDLE SUBMIT ======================================================================

    const findNameOfInstagramAccount = (idInstagramAccount) =>
        metaInstagramAccounts.find((item) => {
            return item.id === idInstagramAccount;
        });
    const findNameOfFacebookPage = (idFacebookPage) =>
        facebookPages.find((item) => {
            return item.id === idFacebookPage;
        });
    const findNameOfPinterestBoard = (idPinterestBoard) =>
        pinterestBoards.find((item) => {
            return item.id === idPinterestBoard;
        });

    // HANDLE SUBMIT END =========================================================================

    // NEW UI
    const [isChkFacebookCommon, setIsChkFacebookCommon] = useState(isAuthencatedFacebook);
    const [isChkInstagramCommon, setIsChkInstagramCommon] = useState(isAuthencatedInstagram);
    const [isChkLinkedInCommon, setIsChkLinkedInCommon] = useState(isAuthencatedLinkedin);
    const [isChkPinterestCommon, setIsChkPinterestCommon] = useState(isAuthencatedPinterest);
    const [isChkSnapchatCommon, setIsChkSnapchatCommon] = useState(isAuthencatedSnapchat);
    const [isChkTiktokCommon, setIsChkTiktokCommon] = useState(isAuthencatedTiktok);
    const [isChkGoogleCommon, setIsChkGoogleCommon] = useState(isAuthencatedGoogle);
    const [isUnCheckedAll, setIsUnCheckedAll] = useState(false);
    //
    const [isChkMetaCommon, setIsChkMetaCommon] = useState(isAuthencatedMeta);
    const [isChkMessengerCommon, setIsChkMessengerCommon] = useState(isAuthencatedMessenger);
    const [isChkYoutubeCommon, setIsChkYoutubeCommon] = useState(isAuthencatedYoutube);

    const [isHasFacebook, setIsHasFacebook] = useState(false);
    const [isHasInstagram, setIsHasInstagram] = useState(false);
    const [isHasGoogle, setIsHasGoogle] = useState(false);
    const [isHasLinkedIn, setIsHasLinkedIn] = useState(false);
    const [isHasPinterest, setIsHasPinterest] = useState(false);
    const [isHasSnapchat, setIsHasSnapchat] = useState(false);
    const [isHasTiktok, setIsHasTiktok] = useState(false);
    //
    const [isHasMeta, setIsHasMeta] = useState(false);
    const [isHasMessenger, setIsHasMessenger] = useState(false);
    const [isHasYoutube, setIsHasYoutube] = useState(false);
    //
    const [platforms, setPlatforms] = useState([]);

    useEffect(() => {
        // if (extra_mediaSelectedList1 && extra_mediaSelectedList1.length > 0) {
        var _platforms = [];
        let _platforms_string = '';
        extra_mediaSelectedList1.forEach((item) => {
            // console.log("useEffect_extra_mediaSelectedList1:")
            let media_display_file_name = item.display_file_name;
            media_display_file_name = media_display_file_name.substring(0, media_display_file_name.length - 4);
            let width = item.width;
            let height = item.height;
            let is_video = item.is_video;
            let compareRatio = width / height;
            let isFacebook =
                (height >= 1080 &&
                    width >= 1080 &&
                    compareRatio <= 1.91 &&
                    compareRatio > 1 &&
                    compareRatio !== 6 / 5 &&
                    is_video === false) ||
                (height >= 1080 && width >= 1080 && width / height === 1 && is_video === false) ||
                (width === 1080 && height === 1920 && is_video === false) ||
                (width === 1296 && height === 1080) ||
                (height >= 1080 &&
                    width >= 1080 &&
                    compareRatio <= 1.91 &&
                    width !== 1080 &&
                    height !== 1920 &&
                    width / height !== 16 / 9 &&
                    is_video === true) ||
                (width === 1080 && height === 1920 && is_video === true);
            let isLinkedIn =
                (height >= 1080 &&
                    width >= 1080 &&
                    compareRatio <= 1.91 &&
                    compareRatio > 1 &&
                    compareRatio !== 6 / 5 &&
                    is_video === false) ||
                (height >= 1080 && width >= 1080 && width / height === 1 && is_video === false) ||
                (width === 1080 && height === 1920 && is_video === false) ||
                (width === 1296 && height === 1080);
            let isInstagram =
                (height >= 1080 && width >= 1080 && width / height === 1 && is_video === false) ||
                (width === 1080 && height === 1920 && is_video === false) ||
                (height >= 1080 &&
                    width >= 1080 &&
                    compareRatio <= 1.91 &&
                    width !== 1080 &&
                    height !== 1920 &&
                    width / height !== 16 / 9 &&
                    is_video === true) ||
                (width === 1080 && height === 1920 && is_video === true);
            let isPinterest =
                (height >= 1080 && width >= 1080 && width / height === 1 && is_video === false) ||
                (width === 1080 && height === 1920 && is_video === false) ||
                (width === 1000 && height === 1500 && is_video === false) ||
                (height >= 1080 &&
                    width >= 1080 &&
                    compareRatio <= 1.91 &&
                    width !== 1080 &&
                    height !== 1920 &&
                    width / height !== 16 / 9 &&
                    is_video === true) ||
                (width === 1080 && height === 1920 && is_video === true);
            let isSnapchat =
                (width === 1080 && height === 1920 && is_video === false) || (width === 1080 && height === 1920 && is_video === true);
            let isTiktok = width === 1080 && height === 1920 && is_video === true;
            let isGoogle =
                (height >= 1080 && width >= 1080 && width / height === 1 && is_video === false) ||
                (width >= 120 && height >= 600 && compareRatio === 1 / 5) ||
                (width >= 160 && height >= 600 && compareRatio === 4 / 15) ||
                (width >= 300 && height >= 600 && compareRatio === 1 / 2) ||
                (width === 468 && height === 60) ||
                (width === 728 && height === 90) ||
                (width === 930 && height === 180) ||
                (width === 970 && height === 90) ||
                (width === 970 && height === 250) ||
                (width === 980 && height === 120) ||
                (width === 300 && height === 1050);
            let isMeta =
                (height >= 1080 &&
                    width >= 1080 &&
                    compareRatio <= 1.91 &&
                    compareRatio > 1 &&
                    compareRatio !== 6 / 5 &&
                    is_video === false) ||
                (height >= 1080 && width >= 1080 && width / height === 1 && is_video === false) ||
                (width === 1080 && height === 1920 && is_video === false) ||
                (height >= 1920 && width >= 1080 && compareRatio === 9 / 16 && is_video === true);
            let isMessenger =
                (height >= 1080 && width >= 1080 && width / height === 1 && is_video === false) ||
                (width === 1080 && height === 1920 && is_video === false) ||
                (height >= 1920 && width >= 1080 && width / height === 9 / 16 && is_video === true) ||
                (width === 1080 && height === 1920 && is_video === true);
            let isYoutube = height >= 1080 && width >= 1920 && width / height === 16 / 9 && is_video === true;
            //
            // if (isFacebook) setIsHasFacebook(true);
            // if (isInstagram) setIsHasInstagram(true);
            // if (isLinkedIn) setIsHasLinkedIn(true);
            // if (isPinterest) setIsHasPinterest(true);
            // if (isSnapchat) setIsHasSnapchat(true);
            // if (isTiktok) setIsHasTiktok(true);
            // if (isGoogle) setIsHasGoogle(true);
            // //
            // if (isMeta) setIsHasMeta(true);
            // if (isMessenger) setIsHasMessenger(true);
            // if (isYoutube) setIsHasYoutube(true);

            // Facebook,LinkedIn,Meta
            if (
                height >= 1080 &&
                width >= 1080 &&
                compareRatio <= 1.91 &&
                compareRatio > 1 &&
                compareRatio !== 6 / 5 &&
                is_video === false
            ) {
                _platforms.push({
                    media_id: item.id,
                    name: 'Facebook,LinkedIn,Meta',
                    statuses:
                        String(isFacebook && isAuthencatedFacebook) +
                        ':::' +
                        String(isLinkedIn && isAuthencatedLinkedin) +
                        ':::' +
                        String(isMeta && isAuthencatedMeta),
                    media_display_file_name: media_display_file_name
                    // status: {
                    //     facebook: String(isFacebook && isAuthencatedFacebook),
                    //     linkedin: String(isLinkedIn && isAuthencatedLinkedin)
                    // }
                });
                _platforms_string += 'Facebook,LinkedIn,MetaAudienceNetwork;';
            }
            // Facebook, Instagram, Google, LinkedIn, Pinterest, Meta, Messenger
            if (width >= 1080 && height >= 1080 && compareRatio === 1 && is_video === false) {
                _platforms.push({
                    media_id: item.id,
                    name: 'Google,Facebook,Instagram,LinkedIn,Pinterest,Meta,Messenger',
                    statuses:
                        String(isGoogle && isAuthencatedGoogle) +
                        ':::' +
                        String(isFacebook && isAuthencatedFacebook) +
                        ':::' +
                        String(isInstagram && isAuthencatedInstagram) +
                        ':::' +
                        String(isLinkedIn && isAuthencatedLinkedin) +
                        ':::' +
                        String(isPinterest && isAuthencatedPinterest) +
                        ':::' +
                        String(isMeta && isAuthencatedMeta) +
                        ':::' +
                        String(isMessenger && isAuthencatedMessenger),
                    media_display_file_name: media_display_file_name
                });
                _platforms_string += 'Google,Facebook,Instagram,LinkedIn,Pinterest,MetaAudienceNetwork,Messenger;';
            }
            // Facebook, Instagram, Snapchat, LinkedIn, Pinterest, Meta, Messenger
            if (width === 1080 && height === 1920 && is_video === false) {
                _platforms.push({
                    media_id: item.id,
                    name: 'Facebook,Instagram,LinkedIn,Snapchat,Pinterest,Meta,Messenger',
                    statuses:
                        String(isFacebook && isAuthencatedFacebook) +
                        ':::' +
                        String(isInstagram && isAuthencatedInstagram) +
                        ':::' +
                        String(isLinkedIn && isAuthencatedLinkedin) +
                        ':::' +
                        String(isSnapchat && isAuthencatedSnapchat) +
                        ':::' +
                        String(isPinterest && isAuthencatedPinterest) +
                        ':::' +
                        String(isMeta && isAuthencatedMeta) +
                        ':::' +
                        String(isMessenger && isAuthencatedMessenger),
                    media_display_file_name: media_display_file_name
                });
                _platforms_string += 'Facebook,Instagram,LinkedIn,Snapchat,Pinterest,MetaAudienceNetwork,Messenger;';
            }
            // Pinterest
            if (width === 1000 && height === 1500) {
                _platforms.push({
                    media_id: item.id,
                    name: 'Pinterest',
                    statuses: String(isPinterest && isAuthencatedPinterest),
                    media_display_file_name: media_display_file_name
                });
                _platforms_string += 'Pinterest;';
            }
            // Facebook,  Google, LinkedIn
            if (width === 1296 && height === 1080) {
                _platforms.push({
                    media_id: item.id,
                    name: 'Google,Facebook,LinkedIn',
                    statuses:
                        String(isGoogle && isAuthencatedGoogle) +
                        ':::' +
                        String(isFacebook && isAuthencatedFacebook) +
                        ':::' +
                        String(isLinkedIn && isAuthencatedLinkedin),
                    media_display_file_name: media_display_file_name
                });
                _platforms_string += 'Google,Facebook,LinkedIn;';
            }
            if (width >= 120 && height >= 600 && compareRatio === 1 / 5) {
                _platforms.push({
                    media_id: item.id,
                    name: 'Google',
                    statuses: String(isGoogle && isAuthencatedGoogle),
                    media_display_file_name: media_display_file_name
                });
                _platforms_string += 'Google;';
            }
            if (width >= 160 && height >= 600 && compareRatio === 4 / 15) {
                _platforms.push({
                    media_id: item.id,
                    name: 'Google',
                    statuses: String(isGoogle && isAuthencatedGoogle),
                    media_display_file_name: media_display_file_name
                });
                _platforms_string += 'Google;';
            }
            if (width >= 300 && height >= 600 && compareRatio === 1 / 2) {
                _platforms.push({
                    media_id: item.id,
                    name: 'Google',
                    statuses: String(isGoogle && isAuthencatedGoogle),
                    media_display_file_name: media_display_file_name
                });
                _platforms_string += 'Google;';
            }
            if (width === 468 && height === 60) {
                _platforms.push({
                    media_id: item.id,
                    name: 'Google',
                    statuses: String(isGoogle && isAuthencatedGoogle),
                    media_display_file_name: media_display_file_name
                });
                _platforms_string += 'Google;';
            }
            if (width === 728 && height === 90) {
                _platforms.push({
                    media_id: item.id,
                    name: 'Google',
                    statuses: String(isGoogle && isAuthencatedGoogle),
                    media_display_file_name: media_display_file_name
                });
                _platforms_string += 'Google;';
            }
            if (width === 930 && height === 180) {
                _platforms.push({
                    media_id: item.id,
                    name: 'Google',
                    statuses: String(isGoogle && isAuthencatedGoogle),
                    media_display_file_name: media_display_file_name
                });
                _platforms_string += 'Google;';
            }
            if (width === 970 && height === 90) {
                _platforms.push({
                    media_id: item.id,
                    name: 'Google',
                    statuses: String(isGoogle && isAuthencatedGoogle),
                    media_display_file_name: media_display_file_name
                });
                _platforms_string += 'Google;';
            }
            if (width === 970 && height === 250) {
                _platforms.push({
                    media_id: item.id,
                    name: 'Google',
                    statuses: String(isGoogle && isAuthencatedGoogle),
                    media_display_file_name: media_display_file_name
                });
                _platforms_string += 'Google;';
            }
            if (width === 980 && height === 120) {
                _platforms.push({
                    media_id: item.id,
                    name: 'Google',
                    statuses: String(isGoogle && isAuthencatedGoogle),
                    media_display_file_name: media_display_file_name
                });
                _platforms_string += 'Google;';
            }
            if (width === 300 && height === 1050) {
                _platforms.push({
                    media_id: item.id,
                    name: 'Google',
                    statuses: String(isGoogle && isAuthencatedGoogle),
                    media_display_file_name: media_display_file_name
                });
                _platforms_string += 'Google;';
            }

            // Video: Facebook, Instagram, Snapchat, Tiktok, Pinterest, Meta, Messenger
            if (width === 1080 && height === 1920 && compareRatio === 9 / 16 && is_video === true) {
                _platforms.push({
                    media_id: item.id,
                    name: 'Facebook,Instagram,Snapchat,Pinterest,Tiktok,Meta,Messenger',
                    statuses:
                        String(isFacebook && isAuthencatedFacebook) +
                        ':::' +
                        String(isInstagram && isAuthencatedInstagram) +
                        ':::' +
                        String(isSnapchat && isAuthencatedSnapchat) +
                        ':::' +
                        String(isPinterest && isAuthencatedPinterest) +
                        ':::' +
                        String(isTiktok && isAuthencatedTiktok) +
                        ':::' +
                        String(isMeta && isAuthencatedMeta) +
                        ':::' +
                        String(isMessenger && isAuthencatedMessenger),
                    media_display_file_name: media_display_file_name
                });
                _platforms_string += 'Facebook,Instagram,Snapchat,Pinterest,Tiktok,MetaAudienceNetwork,Messenger;';
            }
            // Video: Facebook, Instagram, Pinterest
            // if (height >= 1080 && width >= 1080 && compareRatio <= 1.91 && width !== 1080 && height !== 1920 && is_video === true){
            if (
                height >= 1080 &&
                width >= 1080 &&
                compareRatio <= 1.91 &&
                width / height !== 9 / 16 &&
                width / height !== 16 / 9 &&
                is_video === true
            ) {
                // alert("")
                _platforms.push({
                    media_id: item.id,
                    name: 'Facebook,Instagram,Pinterest',
                    statuses:
                        String(isFacebook && isAuthencatedFacebook) +
                        ':::' +
                        String(isInstagram && isAuthencatedInstagram) +
                        ':::' +
                        String(isPinterest && isAuthencatedPinterest),
                    media_display_file_name: media_display_file_name
                });
                _platforms_string += 'Facebook,Instagram,Pinterest;';
            }
            // Video: Youtube
            if (width >= 1920 && height >= 1080 && width / height === 16 / 9 && is_video === true) {
                _platforms.push({
                    media_id: item.id,
                    name: 'Youtube',
                    statuses: String(isYoutube && isAuthencatedYoutube),
                    media_display_file_name: media_display_file_name
                });
                _platforms_string += 'Youtube;';
            }
        });
        setPlatforms(_platforms);
        //
        // console.log("_platforms_string: ", _platforms_string);
        if (_platforms_string.includes('Facebook')) setIsHasFacebook(true);
        else setIsHasFacebook(false);
        if (_platforms_string.includes('Instagram')) setIsHasInstagram(true);
        else setIsHasInstagram(false);
        if (_platforms_string.includes('MetaAudienceNetwork')) setIsHasMeta(true);
        else setIsHasMeta(false);
        if (_platforms_string.includes('Messenger')) setIsHasMessenger(true);
        else setIsHasMessenger(false);
        if (_platforms_string.includes('LinkedIn')) setIsHasLinkedIn(true);
        else setIsHasLinkedIn(false);
        if (_platforms_string.includes('Pinterest')) setIsHasPinterest(true);
        else setIsHasPinterest(false);
        if (_platforms_string.includes('Snapchat')) setIsHasSnapchat(true);
        else setIsHasSnapchat(false);
        if (_platforms_string.includes('Tiktok')) setIsHasTiktok(true);
        else setIsHasTiktok(false);
        if (_platforms_string.includes('Google')) setIsHasGoogle(true);
        else setIsHasGoogle(false);
        if (_platforms_string.includes('Youtube')) setIsHasYoutube(true);
        else setIsHasYoutube(false);
        // }
    }, [
        extra_mediaSelectedList1,
        // setPlatforms,
        isAuthencatedGoogle,
        isAuthencatedFacebook,
        isAuthencatedInstagram,
        isAuthencatedLinkedin,
        isAuthencatedPinterest,
        isAuthencatedSnapchat,
        isAuthencatedTiktok,
        isAuthencatedMeta,
        isAuthencatedMessenger,
        isAuthencatedYoutube,
        isHasFacebook,
        isHasInstagram,
        isHasMeta,
        isHasMessenger,
        isHasGoogle,
        isHasYoutube,
        isHasLinkedIn,
        isHasPinterest,
        isHasSnapchat,
        isHasTiktok
    ]);

    useEffect(() => {
        //
        var _currentPublisherPlatform = [];
        if (isHasGoogle) _currentPublisherPlatform.push('Google');
        if (isHasFacebook) _currentPublisherPlatform.push('Facebook');
        if (isHasInstagram) _currentPublisherPlatform.push('Instagram');
        if (isHasLinkedIn) _currentPublisherPlatform.push('Linkedin');
        if (isHasPinterest) _currentPublisherPlatform.push('Pinterest');
        if (isHasSnapchat) _currentPublisherPlatform.push('Snapchat');
        if (isHasTiktok) _currentPublisherPlatform.push('Tiktok');
        //
        if (isAuthencatedMeta) _currentPublisherPlatform.push('MetaAudienceNetwork');
        if (isAuthencatedMessenger) _currentPublisherPlatform.push('Messenger');
        if (isAuthencatedYoutube) _currentPublisherPlatform.push('Youtube');
        // console.log("_currentPublisherPlatform: ", _currentPublisherPlatform);
        //
        let checkUnAuthencatedAll = _currentPublisherPlatform.find((item) => {
            // console.log("item: ", item);
            return (
                (item === 'Google' && isAuthencatedGoogle) ||
                (item === 'Facebook' && isAuthencatedFacebook) ||
                (item === 'Instagram' && isAuthencatedInstagram) ||
                (item === 'Linkedin' && isAuthencatedLinkedin) ||
                (item === 'Pinterest' && isAuthencatedPinterest) ||
                (item === 'Snapchat' && isAuthencatedSnapchat) ||
                (item === 'Tiktok' && isAuthencatedTiktok) ||
                (item === 'MetaAudienceNetwork' && isAuthencatedMeta) ||
                (item === 'Messenger' && isAuthencatedMessenger) ||
                (item === 'Youtube' && isAuthencatedYoutube)
            );
        });
        if (checkUnAuthencatedAll) {
            setIsUnAuthencatedAll(false);
            // console.log("checkUnAuthencatedAll: ", checkUnAuthencatedAll);
        }
    }, [
        setIsUnAuthencatedAll,
        isHasGoogle,
        isHasFacebook,
        isHasInstagram,
        isHasLinkedIn,
        isHasPinterest,
        isHasSnapchat,
        isHasTiktok,
        isHasYoutube,
        isHasMeta,
        isHasMessenger,
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
        //
        var _currentChecked = [];
        if (isChkGoogleCommon && isHasGoogle) _currentChecked.push('Google');
        if (isChkFacebookCommon && isHasFacebook) _currentChecked.push('Facebook');
        if (isChkInstagramCommon && isHasInstagram) _currentChecked.push('Instagram');
        if (isChkLinkedInCommon && isHasLinkedIn) _currentChecked.push('Linkedin');
        if (isChkPinterestCommon && isHasPinterest) _currentChecked.push('Pinterest');
        if (isChkSnapchatCommon && isHasSnapchat) _currentChecked.push('Snapchat');
        if (isChkTiktokCommon && isHasTiktok) _currentChecked.push('Tiktok');
        //
        if (isChkMetaCommon && isHasMeta) _currentChecked.push('MetaAudienceNetwork');
        if (isChkMessengerCommon && isHasMessenger) _currentChecked.push('Messenger');
        if (isChkYoutubeCommon && isHasYoutube) _currentChecked.push('Youtube');
        setCurrentCheckedPlatform(_currentChecked);
        // console.log('_currentChecked: ', _currentChecked);
        if (_currentChecked.length === 0) {
            setIsUnCheckedAll(true);
            // console.log('checkUnCheckedAll_: ', _currentChecked);
        } else {
            setIsUnCheckedAll(false);
        }
    }, [
        setIsUnCheckedAll,
        setCurrentCheckedPlatform,
        isChkGoogleCommon,
        isChkFacebookCommon,
        isChkInstagramCommon,
        isChkLinkedInCommon,
        isChkPinterestCommon,
        isChkSnapchatCommon,
        isChkTiktokCommon,
        isChkMetaCommon,
        isChkMessengerCommon,
        isChkYoutubeCommon,
        isHasGoogle,
        isHasFacebook,
        isHasInstagram,
        isHasLinkedIn,
        isHasPinterest,
        isHasSnapchat,
        isHasTiktok,
        isHasYoutube,
        isHasMeta,
        isHasMessenger
    ]);

    const formikValidate = (touched_field_name, errors_field_name) => {
        return touched_field_name && errors_field_name && <span className="text-danger">{errors_field_name}</span>;
    };

    function checkArrayMatch(array, string) {
        for (var i = 0; i < array.length; i++) {
            if (array[i] !== string) {
                return false;
            }
        }
        return true;
    }

    function checkArrayMatchAllGoogle(array) {
        let noGoogle = array.filter((item) => !(item === 'Google' || item === 'Youtube'));
        // console.log("noGoogle: ", noGoogle)
        if (noGoogle.length === 0) return true;
        return false;
    }

    const isOnlyGoogle = currentCheckedPlatform.length >= 1 && checkArrayMatch(currentCheckedPlatform, 'Google');
    const isOnlyYoutube = currentCheckedPlatform.length >= 1 && checkArrayMatch(currentCheckedPlatform, 'Youtube');
    const isAllGoogle = currentCheckedPlatform.length >= 2 && checkArrayMatchAllGoogle(currentCheckedPlatform);

    const schemaCommon = Yup.object().shape({
        destination_url: Yup.string().label('Destination URL').required('*Required').matches(re, 'URL invalid!'),
        display_url: Yup.string().label('Display  URL').matches(re, 'URL invalid!'),
        headline: !(isOnlyGoogle || isOnlyYoutube || isAllGoogle)
            ? Yup.string().label('Headline').required('*Required').max(24, 'Must be <=24 characters!')
            : Yup.string().label('Headline'),
        primary_text: !(isOnlyGoogle || isOnlyYoutube || isAllGoogle)
            ? Yup.string().label('Primary text').required('*Required').max(125, 'Must be <=125 characters!')
            : Yup.string().label('Primary text'),
        description: !(isOnlyGoogle || isOnlyYoutube || isAllGoogle)
            ? Yup.string().label('Description').max(27, 'Must be <=27 characters!')
            : Yup.string().label('Description'),
        brand_name:
            isHasSnapchat && isAuthencatedSnapchat && isChkSnapchatCommon
                ? Yup.string().label('Brand name').required('*Required')
                : Yup.string().label('Brand name')
    });

    const formikCommon = useFormik({
        initialValues: {
            destination_url: amAdsUrlCurrent,
            display_url: amDisplayUrlCurrent,
            name: 'New ads',
            headline: '',
            primary_text: '',
            description: '',
            brand_name: '',
            //
            call_to_action_fb: isChkFacebookCommon && isAuthencatedFacebook ? facebookCTAOptions[0].value : '',
            facebook_page: '',
            facebook_page_id: '',
            call_to_action_instagram: isChkInstagramCommon && isAuthencatedInstagram ? instagramCTAOptions[0].value : '',
            instagram_account: '',
            instagram_account_id: '',
            call_to_action_snapchat: isChkSnapchatCommon && isAuthencatedSnapchat ? snapchatCTAOptions[0].value : '',
            call_to_action_tiktok: isChkTiktokCommon && isAuthencatedTiktok ? tiktokCTAOptions[0].value : '',
            pinterest_board: '',
            pinterest_board_id: '',
            call_to_action_linkedin: isChkLinkedInCommon && isAuthencatedLinkedin ? linkedInCTAOptions[0].value : '',
            //
            call_to_action_meta: isChkFacebookCommon && isAuthencatedFacebook ? metaCTAOptions[0].value : ''
        },
        onSubmit: (values) => {
            handleCommon_SubmitForm(values);
        },
        validationSchema: schemaCommon
        // enableReinitialize: true
    });

    const [isLaunch, setIsLaunch] = useState(true);
    const handleSubmitCommon = (buttonName) => {
        if (buttonName === 'LAUNCH') {
            setIsLaunch(true);
            console.log('LAUNCH');
            // console.log('Launch: ', isAllGoogle);
            // console.log('Launch: ', currentCheckedPlatform);
        } else {
            setIsLaunch(false);
            console.log('PAUSE');
            // handlePauseBtnFromCampaignFinalizeModal();
        }
        formikCommon.handleSubmit();
    };

    const handleCommon_SubmitForm = async (values) => {
        var instagramAccount = findNameOfInstagramAccount(values.instagram_account_id);
        if (values.instagram_account_id === '') {
            instagramAccount = { name: 'Select Account', id: 'null' };
        }
        var facebookPage = findNameOfFacebookPage(values.facebook_page_id);
        if (values.facebook_page_id === '') {
            facebookPage = { name: 'Select Page', id: 'null' };
        }
        var pinterestBoard = findNameOfPinterestBoard(values.pinterest_board_id);
        if (values.pinterest_board_id === '') {
            pinterestBoard = { name: 'Select Board', id: 'null' };
        }

        //
        var elem = document.getElementById('idFacebookPageSelect');
        // console.log('facebookPage: ', facebookPage);
        if (
            ((facebookPage && facebookPage.id === 'null') || facebookPage === undefined) &&
            facebookPages.length > 0 &&
            isChkFacebookCommon &&
            isAuthencatedFacebook &&
            elem
        ) {
            elem.classList.add('me_input_invalidate');
            return;
        } else if (elem) elem.classList.remove('me_input_invalidate');
        //
        elem = document.getElementById('idInstagramSelect');
        // console.log('instagramAccount: ', instagramAccount);
        if (
            ((instagramAccount && instagramAccount.id === 'null') || instagramAccount === undefined) &&
            metaInstagramAccounts.length > 0 &&
            isChkInstagramCommon &&
            isAuthencatedInstagram &&
            elem
        ) {
            elem.classList.add('me_input_invalidate');
            return;
        } else if (elem) elem.classList.remove('me_input_invalidate');
        //
        elem = document.getElementById('idPinterestBoardSelect');
        // console.log('pinterestBoard: ', pinterestBoard);
        if (
            ((pinterestBoard && pinterestBoard.id === 'null') || pinterestBoard === undefined) &&
            pinterestBoards.length > 0 &&
            isChkPinterestCommon &&
            isAuthencatedPinterest &&
            elem
        ) {
            elem.classList.add('me_input_invalidate');
            return;
        } else if (elem) elem.classList.remove('me_input_invalidate');
        //
        var platformNotRunOn = '';
        if (!isChkFacebookCommon) platformNotRunOn += 'facebook;';
        if (!isChkInstagramCommon) platformNotRunOn += 'instagram;';
        if (!isChkMessengerCommon) platformNotRunOn += 'messenger;';
        if (!isChkMetaCommon) platformNotRunOn += 'audience_network;';
        if (!isChkGoogleCommon) platformNotRunOn += 'google;';
        if (!isChkLinkedInCommon) platformNotRunOn += 'linkedin;';
        if (!isChkSnapchatCommon) platformNotRunOn += 'snapchat;';
        if (!isChkPinterestCommon) platformNotRunOn += 'pinterest;';
        if (!isChkTiktokCommon) platformNotRunOn += 'tiktok;';
        if (!isChkYoutubeCommon) platformNotRunOn += 'youtube;';
        //
        let data = {
            ...values,
            call_to_action_fb: isChkFacebookCommon && isAuthencatedFacebook ? values.call_to_action_fb : '',
            facebook_page: isChkFacebookCommon && isAuthencatedFacebook ? (facebookPage ? facebookPage.name : '') : '',
            facebook_page_id: isChkFacebookCommon && isAuthencatedFacebook ? (facebookPage ? facebookPage.id : '') : '',
            call_to_action_instagram: isChkInstagramCommon && isAuthencatedInstagram ? values.call_to_action_instagram : '',
            instagram_account: isChkInstagramCommon && isAuthencatedInstagram ? (instagramAccount ? instagramAccount.name : '') : '',
            instagram_account_id: isChkInstagramCommon && isAuthencatedInstagram ? (instagramAccount ? instagramAccount.id : '') : '',
            call_to_action_snapchat: isChkSnapchatCommon && isAuthencatedSnapchat ? values.call_to_action_snapchat : '',
            call_to_action_tiktok: isChkTiktokCommon && isAuthencatedTiktok ? values.call_to_action_tiktok : '',
            pinterest_board: isChkPinterestCommon && isAuthencatedPinterest ? (pinterestBoard ? pinterestBoard.name : '') : '',
            pinterest_board_id: isChkPinterestCommon && isAuthencatedPinterest ? (pinterestBoard ? pinterestBoard.id : '') : '',
            call_to_action_linkedin: isChkLinkedInCommon && isAuthencatedLinkedin ? values.call_to_action_linkedin : '',
            //
            call_to_action_meta:
                (isChkFacebookCommon && isAuthencatedFacebook) ||
                (isChkInstagramCommon && isAuthencatedInstagram) ||
                (isChkMetaCommon && isAuthencatedMeta) ||
                (isChkMessengerCommon && isAuthencatedMessenger)
                    ? values.call_to_action_meta
                    : '',
            //
            headline: values.headline,
            primary_text: values.primary_text,
            description: values.description,
            brand_name: isChkSnapchatCommon ? values.brand_name : '',
            //
            campaign_id: amCampaignIdCurrent,
            ad_set_id: amAdSetIdCurrent,
            platforms: platforms,
            platform_not_run_on: platformNotRunOn
        };

        try {
            await adsAddCommonByUser(data).unwrap();

            if (isLaunch) {
                AlertSuccess('Add new ads successfully!');
                launchAllAfterAddAds();
            } else {
                handlePauseBtnFromCampaignFinalizeModal();
            }
        } catch (error) {
            AlertError('Error from server!');
        }
    };

    const handleAlertEnableAdAccount = (event, publisher_platform_name) => {
        if (isUnAuthencatedAll) {
            setIsShow_AlertEnableAdAccountAllModel(true);
        } else {
            if (
                (publisher_platform_name === 'Google' && !isAuthencatedGoogle) ||
                (publisher_platform_name === 'Facebook' && !isAuthencatedFacebook) ||
                (publisher_platform_name === 'Instagram' && !isAuthencatedInstagram) ||
                (publisher_platform_name === 'LinkedIn' && !isAuthencatedLinkedin) ||
                (publisher_platform_name === 'Pinterest' && !isAuthencatedPinterest) ||
                (publisher_platform_name === 'Snapchat' && !isAuthencatedSnapchat) ||
                (publisher_platform_name === 'Tiktok' && !isAuthencatedTiktok) ||
                (publisher_platform_name === 'MetaAudienceNetwork' && !isAuthencatedMeta) ||
                (publisher_platform_name === 'Messenger' && !isAuthencatedMessenger) ||
                (publisher_platform_name === 'Youtube' && !isAuthencatedYoutube)
            ) {
                setPublisherPlatformForAlert(publisher_platform_name);
                setIsShow_AlertEnableAdAccountOneModel(true);
            }
        }
    };

    const handleAlertEnableAdAccountAll = () => {
        setIsShow_AlertEnableAdAccountAllModel(true);
    };

    const showCTAColumn = () => {
        let isHasOneOfMeta =
            (isChkFacebookCommon && isHasFacebook) ||
            (isChkInstagramCommon && isHasInstagram) ||
            (isChkMetaCommon && isHasMeta) ||
            (isChkMessengerCommon && isHasMessenger);
        return (
            <Col md="2">
                {isUnAuthencatedAll && (
                    <Button variant="danger" onClick={() => handleAlertEnableAdAccountAll()}>
                        Enable Ad Account
                    </Button>
                )}
                {isHasOneOfMeta && (
                    <Form.Group>
                        <Form.Label>Meta CTA</Form.Label>
                        <Form.Control
                            value={formikCommon.values.call_to_action_meta}
                            onChange={formikCommon.handleChange('call_to_action_meta')}
                            as="select"
                        >
                            {metaCTAOptions.map(({ value, label }, index) => (
                                <option key={index} value={value}>
                                    {label}
                                </option>
                            ))}
                        </Form.Control>
                    </Form.Group>
                )}
                {isHasFacebook && isChkFacebookCommon && (
                    <Form.Group>
                        <Form.Label>Facebook Page</Form.Label>
                        <Form.Control
                            value={formikCommon.values.facebook_page_id}
                            onChange={formikCommon.handleChange('facebook_page_id')}
                            as="select"
                            id="idFacebookPageSelect"
                        >
                            <option value={'null'}>Select Page</option>
                            {facebookPages.map((item, index) => (
                                <option key={index} value={item.id}>
                                    {item.name}
                                </option>
                            ))}
                        </Form.Control>
                    </Form.Group>
                )}
                {isHasInstagram && isChkInstagramCommon && (
                    <Form.Group>
                        <Form.Label style={{ whiteSpace: 'nowrap' }}>Instagram account</Form.Label>
                        <Form.Control
                            value={formikCommon.values.instagram_account_id}
                            onChange={formikCommon.handleChange('instagram_account_id')}
                            as="select"
                            id="idInstagramSelect"
                        >
                            <option value={'null'}>Select Account</option>
                            {metaInstagramAccounts.map((item, index) => (
                                <option key={index} value={item.id}>
                                    {item.name}
                                </option>
                            ))}
                        </Form.Control>
                    </Form.Group>
                )}
                {isHasLinkedIn && isChkLinkedInCommon && (
                    <Form.Group>
                        <Form.Label>LinkedIn CTA</Form.Label>
                        <Form.Control
                            value={formikCommon.values.call_to_action_linkedin}
                            onChange={formikCommon.handleChange('call_to_action_linkedin')}
                            as="select"
                        >
                            {linkedInCTAOptions.map(({ value, label }, index) => (
                                <option key={index} value={value}>
                                    {label}
                                </option>
                            ))}
                        </Form.Control>
                    </Form.Group>
                )}
                {isHasPinterest && isChkPinterestCommon && (
                    <>
                        <Form.Group>
                            <Form.Label>Pinterest board</Form.Label>
                            <Form.Control
                                value={formikCommon.values.pinterest_board_id}
                                onChange={formikCommon.handleChange('pinterest_board_id')}
                                as="select"
                                id="idPinterestBoardSelect"
                            >
                                <option value={'null'}>Select Board</option>
                                {pinterestBoards.map((item, index) => (
                                    <option key={index} value={item.id}>
                                        {item.name}
                                    </option>
                                ))}
                            </Form.Control>
                        </Form.Group>
                    </>
                )}
                {isHasSnapchat && isChkSnapchatCommon && (
                    <Form.Group>
                        <Form.Label>Snapchat CTA</Form.Label>
                        <Form.Control
                            value={formikCommon.values.call_to_action_snapchat}
                            onChange={formikCommon.handleChange('call_to_action_snapchat')}
                            as="select"
                        >
                            {snapchatCTAOptions.map(({ value, label }, index) => (
                                <option key={index} value={value}>
                                    {label}
                                </option>
                            ))}
                        </Form.Control>
                    </Form.Group>
                )}
                {isHasTiktok && isChkTiktokCommon && (
                    <Form.Group>
                        <Form.Label>Tiktok CTA</Form.Label>
                        <Form.Control
                            value={formikCommon.values.call_to_action_tiktok}
                            onChange={formikCommon.handleChange('call_to_action_tiktok')}
                            as="select"
                        >
                            {tiktokCTAOptions.map(({ value, label }, index) => (
                                <option key={index} value={value}>
                                    {label}
                                </option>
                            ))}
                        </Form.Control>
                    </Form.Group>
                )}
            </Col>
        );
    };

    const showMedia = () => {
        const isSpecialGoogle = currentCheckedPlatform.length === 1 && currentCheckedPlatform[0] === 'Google';
        const isSpecialYoutube = currentCheckedPlatform.length === 1 && currentCheckedPlatform[0] === 'Youtube';
        const isSpecialAllGoogle =
            currentCheckedPlatform.length === 2 && currentCheckedPlatform.includes('Google') && currentCheckedPlatform.includes('Youtube');
        const isAllFromGoogle = isSpecialGoogle || isSpecialYoutube || isSpecialAllGoogle;
        const isOnlyMessenger = currentCheckedPlatform.length === 1 && currentCheckedPlatform[0] === 'Messenger';
        const isOnlyInstagram = currentCheckedPlatform.length === 1 && currentCheckedPlatform[0] === 'Instagram';
        const isBothMessengerAndInstagram =
            currentCheckedPlatform.length === 2 &&
            currentCheckedPlatform.includes('Messenger') &&
            currentCheckedPlatform.includes('Instagram');
        // const isMostOfMessengerAndInstagram = isOnlyMessenger || isOnlyInstagram;
        // console.log("showMedia: ", isOnlyMessenger + " - " + isOnlyInstagram + " - " + isBothMessengerAndInstagram)
        return (
            <>
                <Row className="campaign_finalize_item">
                    <Col md="2" className={isUnCheckedAll ? 'run_on_error' : 'run_on'}>
                        {/* {String(isUnCheckedAll)} */}
                        {isHasFacebook && (
                            <Form.Group onClick={(e) => handleAlertEnableAdAccount(e, 'Facebook')} className="d-inline">
                                <div className="checkbox checkbox-fill checkbox-primary">
                                    <Form.Control
                                        onChange={(e) => setIsChkFacebookCommon(e.target.checked)}
                                        type="checkbox"
                                        id="isChkFacebookCommon"
                                        defaultChecked={isChkFacebookCommon}
                                        disabled={!isAuthencatedFacebook}
                                    />
                                    <Form.Label htmlFor="isChkFacebookCommon" className="cr">
                                        Facebook
                                    </Form.Label>
                                </div>
                            </Form.Group>
                        )}
                        {isHasInstagram && (
                            <Form.Group onClick={(e) => handleAlertEnableAdAccount(e, 'Instagram')} className="d-inline">
                                <div className="checkbox checkbox-fill checkbox-primary">
                                    <Form.Control
                                        onChange={(e) => setIsChkInstagramCommon(e.target.checked)}
                                        type="checkbox"
                                        id="isChkInstagramCommon"
                                        defaultChecked={isChkInstagramCommon}
                                        disabled={!isAuthencatedInstagram}
                                    />
                                    <Form.Label htmlFor="isChkInstagramCommon" className="cr">
                                        Instagram
                                    </Form.Label>
                                </div>
                            </Form.Group>
                        )}
                        {isHasMeta && (
                            <Form.Group onClick={(e) => handleAlertEnableAdAccount(e, 'MetaAudienceNetwork')} className="d-inline">
                                <div className="checkbox checkbox-fill checkbox-primary">
                                    <Form.Control
                                        onChange={(e) => setIsChkMetaCommon(e.target.checked)}
                                        type="checkbox"
                                        id="isChkMetaCommon"
                                        defaultChecked={isChkMetaCommon}
                                        disabled={!isAuthencatedMeta}
                                    />
                                    <Form.Label htmlFor="isChkMetaCommon" className="cr">
                                        Meta Network
                                    </Form.Label>
                                </div>
                            </Form.Group>
                        )}
                        {isHasMessenger && (
                            <Form.Group onClick={(e) => handleAlertEnableAdAccount(e, 'Messenger')} className="d-inline">
                                <div className="checkbox checkbox-fill checkbox-primary">
                                    <Form.Control
                                        onChange={(e) => setIsChkMessengerCommon(e.target.checked)}
                                        type="checkbox"
                                        id="isChkMessengerCommon"
                                        defaultChecked={isChkMessengerCommon}
                                        disabled={!isAuthencatedMessenger}
                                    />
                                    <Form.Label htmlFor="isChkMessengerCommon" className="cr">
                                        Messenger
                                    </Form.Label>
                                </div>
                            </Form.Group>
                        )}
                        {isHasLinkedIn && (
                            <Form.Group onClick={(e) => handleAlertEnableAdAccount(e, 'LinkedIn')} className="d-inline">
                                <div className="checkbox checkbox-fill checkbox-primary">
                                    <Form.Control
                                        onChange={(e) => setIsChkLinkedInCommon(e.target.checked)}
                                        type="checkbox"
                                        id="isChkLinkedInCommon"
                                        defaultChecked={isChkLinkedInCommon}
                                        disabled={!isAuthencatedLinkedin}
                                    />
                                    <Form.Label htmlFor="isChkLinkedInCommon" className="cr">
                                        LinkedIn
                                    </Form.Label>
                                </div>
                            </Form.Group>
                        )}
                        {isHasPinterest && (
                            <Form.Group onClick={(e) => handleAlertEnableAdAccount(e, 'Pinterest')} className="d-inline">
                                <div className="checkbox checkbox-fill checkbox-primary">
                                    <Form.Control
                                        onChange={(e) => setIsChkPinterestCommon(e.target.checked)}
                                        type="checkbox"
                                        id="isChkPinterestCommon"
                                        defaultChecked={isChkPinterestCommon}
                                        disabled={!isAuthencatedPinterest}
                                    />
                                    <Form.Label htmlFor="isChkPinterestCommon" className="cr">
                                        Pinterest
                                    </Form.Label>
                                </div>
                            </Form.Group>
                        )}
                        {isHasSnapchat && (
                            <Form.Group onClick={(e) => handleAlertEnableAdAccount(e, 'Snapchat')} className="d-inline">
                                <div className="checkbox checkbox-fill checkbox-primary">
                                    <Form.Control
                                        onChange={(e) => setIsChkSnapchatCommon(e.target.checked)}
                                        type="checkbox"
                                        id="isChkSnapchatCommon"
                                        defaultChecked={isChkSnapchatCommon}
                                        disabled={!isAuthencatedSnapchat}
                                    />
                                    <Form.Label htmlFor="isChkSnapchatCommon" className="cr">
                                        Snapchat
                                    </Form.Label>
                                </div>
                            </Form.Group>
                        )}
                        {isHasTiktok && (
                            <Form.Group onClick={(e) => handleAlertEnableAdAccount(e, 'Tiktok')} className="d-inline">
                                <div className="checkbox checkbox-fill checkbox-primary">
                                    <Form.Control
                                        onChange={(e) => setIsChkTiktokCommon(e.target.checked)}
                                        type="checkbox"
                                        id="isChkTiktokCommon"
                                        defaultChecked={isChkTiktokCommon}
                                        disabled={!isAuthencatedTiktok}
                                    />
                                    <Form.Label htmlFor="isChkTiktokCommon" className="cr">
                                        Tiktok
                                    </Form.Label>
                                </div>
                            </Form.Group>
                        )}
                        {isHasGoogle && (
                            <Form.Group onClick={(e) => handleAlertEnableAdAccount(e, 'Google')} className="d-inline">
                                <div className="checkbox checkbox-fill checkbox-primary">
                                    <Form.Control
                                        onChange={(e) => setIsChkGoogleCommon(e.target.checked)}
                                        type="checkbox"
                                        id="isChkGoogleCommon"
                                        defaultChecked={isChkGoogleCommon}
                                        disabled={!isAuthencatedGoogle}
                                    />
                                    <Form.Label htmlFor="isChkGoogleCommon" className="cr">
                                        Google
                                    </Form.Label>
                                </div>
                            </Form.Group>
                        )}
                        {isHasYoutube && (
                            <Form.Group onClick={(e) => handleAlertEnableAdAccount(e, 'Youtube')} className="d-inline">
                                <div className="checkbox checkbox-fill checkbox-primary">
                                    <Form.Control
                                        onChange={(e) => setIsChkYoutubeCommon(e.target.checked)}
                                        type="checkbox"
                                        id="isChkYoutubeCommon"
                                        defaultChecked={isChkYoutubeCommon}
                                        disabled={!isAuthencatedYoutube}
                                    />
                                    <Form.Label htmlFor="isChkYoutubeCommon" className="cr">
                                        Youtube
                                    </Form.Label>
                                </div>
                            </Form.Group>
                        )}
                    </Col>
                    {(isChkFacebookCommon ||
                        isChkInstagramCommon ||
                        isChkMetaCommon ||
                        isChkMessengerCommon ||
                        isChkLinkedInCommon ||
                        isChkPinterestCommon ||
                        isChkSnapchatCommon ||
                        isChkTiktokCommon) &&
                        !isAllFromGoogle &&
                        !isUnCheckedAll &&
                        showCTAColumn()}
                    <Col md={isUnCheckedAll || isAllFromGoogle ? '10' : '8'}>
                        <Form.Group>
                            <Form.Label>Destination URL</Form.Label>
                            <Form.Control
                                value={formikCommon.values.destination_url}
                                onChange={formikCommon.handleChange('destination_url')}
                                onBlur={formikCommon.handleBlur('destination_url')}
                                isInvalid={formikCommon.touched.destination_url && formikCommon.errors.destination_url ? true : false}
                                type="text"
                                placeholder=""
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Display URL</Form.Label>
                            <Form.Control
                                value={formikCommon.values.display_url}
                                onChange={formikCommon.handleChange('display_url')}
                                onBlur={formikCommon.handleBlur('display_url')}
                                isInvalid={formikCommon.touched.display_url && formikCommon.errors.display_url ? true : false}
                                type="text"
                                placeholder=""
                            />
                        </Form.Group>
                        {!isAllFromGoogle && (
                            <>
                                <Form.Group>
                                    <Form.Label>
                                        Headline {formikValidate(formikCommon.touched.headline, formikCommon.errors.headline)}
                                    </Form.Label>
                                    <Form.Control
                                        value={formikCommon.values.headline}
                                        onChange={formikCommon.handleChange('headline')}
                                        onBlur={formikCommon.handleBlur('headline')}
                                        isInvalid={formikCommon.touched.headline && formikCommon.errors.headline ? true : false}
                                        type="text"
                                        placeholder=""
                                    />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>
                                        Primary text {formikValidate(formikCommon.touched.primary_text, formikCommon.errors.primary_text)}
                                    </Form.Label>
                                    <Form.Control
                                        value={formikCommon.values.primary_text}
                                        onChange={formikCommon.handleChange('primary_text')}
                                        onBlur={formikCommon.handleBlur('primary_text')}
                                        isInvalid={formikCommon.touched.primary_text && formikCommon.errors.primary_text ? true : false}
                                        type="text"
                                        placeholder=""
                                    />
                                </Form.Group>
                                {!(isOnlyInstagram || isOnlyMessenger || isBothMessengerAndInstagram) && (
                                    <Form.Group>
                                        <Form.Label>
                                            Description {formikValidate(formikCommon.touched.description, formikCommon.errors.description)}
                                        </Form.Label>
                                        <Form.Control
                                            value={formikCommon.values.description}
                                            onChange={formikCommon.handleChange('description')}
                                            onBlur={formikCommon.handleBlur('description')}
                                            isInvalid={formikCommon.touched.description && formikCommon.errors.description ? true : false}
                                            type="text"
                                            placeholder=""
                                        />
                                    </Form.Group>
                                )}
                                {isHasSnapchat && isChkSnapchatCommon && (
                                    <Form.Group>
                                        <Form.Label>Brand name Snapchat (required)</Form.Label>
                                        <Form.Control
                                            value={formikCommon.values.brand_name}
                                            onChange={formikCommon.handleChange('brand_name')}
                                            onBlur={formikCommon.handleBlur('brand_name')}
                                            isInvalid={formikCommon.touched.brand_name && formikCommon.errors.brand_name ? true : false}
                                            type="text"
                                            placeholder=""
                                        />
                                    </Form.Group>
                                )}
                            </>
                        )}
                    </Col>
                </Row>
                <Masonry breakpointCols={6} className="my-masonry-grid" columnClassName="my-masonry-grid_column">
                    {extra_mediaSelectedList1.length > 0 &&
                        extra_mediaSelectedList1.map((item, index) => {
                            let width = item.width;
                            let height = item.height;
                            let is_video = item.is_video;
                            let compareRatio = width / height;
                            // console.log("file_type: ", item)
                            var platFormIcons = 'No Icon';
                            // Facebook, LinkedIn, Meta Audience Network
                            if (
                                height >= 1080 &&
                                width >= 1080 &&
                                compareRatio <= 1.91 &&
                                compareRatio > 1 &&
                                compareRatio !== 6 / 5 &&
                                is_video === false
                            ) {
                                platFormIcons = (
                                    <>
                                        {isAuthencatedFacebook && <i className="fab fa-facebook-f"></i>}
                                        {isAuthencatedLinkedin && <i className="fab fa-linkedin-in"></i>}
                                        {isAuthencatedMeta && <i className="fab fa-meta"></i>}
                                    </>
                                );
                            }
                            // Facebook, Instagram, Google, LinkedIn, Pinterest, MetaAudienceNetwork, Messenger
                            if (width >= 1080 && height >= 1080 && compareRatio === 1 && is_video === false) {
                                platFormIcons = (
                                    <>
                                        {isAuthencatedGoogle && <i className="fab fa-google"></i>}
                                        {isAuthencatedFacebook && <i className="fab fa-facebook-f"></i>}
                                        {isAuthencatedInstagram && <i className="fab fa-instagram"></i>}
                                        {isAuthencatedLinkedin && <i className="fab fa-linkedin-in"></i>}
                                        {isAuthencatedPinterest && <i className="fab fa-pinterest"></i>}
                                        {isAuthencatedMeta && <i className="fab fa-meta"></i>}
                                        {isAuthencatedMessenger && <i className="fab fa-facebook-messenger"></i>}
                                    </>
                                );
                            }
                            // Facebook, Instagram, Snapchat, LinkedIn, Pinterest, MetaAudienceNetwork, Messenger
                            if (width === 1080 && height === 1920 && is_video === false) {
                                platFormIcons = (
                                    <>
                                        {isAuthencatedFacebook && <i className="fab fa-facebook-f"></i>}
                                        {isAuthencatedInstagram && <i className="fab fa-instagram"></i>}
                                        {isAuthencatedLinkedin && <i className="fab fa-linkedin-in"></i>}
                                        {isAuthencatedSnapchat && <i className="fab fa-snapchat-ghost"></i>}
                                        {isAuthencatedPinterest && <i className="fab fa-pinterest"></i>}
                                        {isAuthencatedMeta && <i className="fab fa-meta"></i>}
                                        {isAuthencatedMessenger && <i className="fab fa-facebook-messenger"></i>}
                                    </>
                                );
                            }
                            // Pinterest
                            if (isAuthencatedPinterest && width === 1000 && height === 1500) {
                                platFormIcons = <i className="fab fa-pinterest"></i>;
                            }
                            // Facebook,  Google, LinkedIn
                            if (width === 1296 && height === 1080) {
                                platFormIcons = (
                                    <>
                                        {isAuthencatedGoogle && <i className="fab fa-google"></i>}
                                        {isAuthencatedFacebook && <i className="fab fa-facebook-f"></i>}
                                        {isAuthencatedLinkedin && <i className="fab fa-linkedin-in"></i>}
                                    </>
                                );
                            }
                            if (isAuthencatedGoogle && width >= 120 && height >= 600 && compareRatio === 1 / 5) {
                                platFormIcons = <i className="fab fa-google"></i>;
                            }
                            if (isAuthencatedGoogle && width >= 160 && height >= 600 && compareRatio === 4 / 15) {
                                platFormIcons = <i className="fab fa-google"></i>;
                            }
                            if (isAuthencatedGoogle && width >= 300 && height >= 600 && compareRatio === 1 / 2) {
                                platFormIcons = <i className="fab fa-google"></i>;
                            }
                            if (isAuthencatedGoogle && width === 468 && height === 60) {
                                platFormIcons = <i className="fab fa-google"></i>;
                            }
                            if (isAuthencatedGoogle && width === 728 && height === 90) {
                                platFormIcons = <i className="fab fa-google"></i>;
                            }
                            if (isAuthencatedGoogle && width === 930 && height === 180) {
                                platFormIcons = <i className="fab fa-google"></i>;
                            }
                            if (isAuthencatedGoogle && width === 970 && height === 90) {
                                platFormIcons = <i className="fab fa-google"></i>;
                            }
                            if (isAuthencatedGoogle && width === 970 && height === 250) {
                                platFormIcons = <i className="fab fa-google"></i>;
                            }
                            if (isAuthencatedGoogle && width === 980 && height === 120) {
                                platFormIcons = <i className="fab fa-google"></i>;
                            }
                            if (isAuthencatedGoogle && width === 300 && height === 1050) {
                                platFormIcons = <i className="fab fa-google"></i>;
                            }

                            // Video: Facebook, Instagram, Snapchat, Tiktok, Pinterest, MetaAudienceNetwork, Messenger
                            // if (width === 1080 && height === 1920 && is_video === true)
                            if (width >= 1080 && height >= 1920 && compareRatio === 9 / 16 && is_video === true) {
                                platFormIcons = (
                                    <>
                                        {isAuthencatedPinterest && <i className="fab fa-pinterest"></i>}
                                        {isAuthencatedFacebook && <i className="fab fa-facebook-f"></i>}
                                        {isAuthencatedInstagram && <i className="fab fa-instagram"></i>}
                                        {isAuthencatedTiktok && <i className="fab fa-tiktok"></i>}
                                        {isAuthencatedSnapchat && <i className="fab fa-snapchat-ghost"></i>}
                                        {isAuthencatedMeta && <i className="fab fa-meta"></i>}
                                        {isAuthencatedMessenger && <i className="fab fa-facebook-messenger"></i>}
                                    </>
                                );
                            }
                            // Video: Facebook, Instagram, Pinterest
                            if (
                                height >= 1080 &&
                                width >= 1080 &&
                                compareRatio <= 1.91 &&
                                // width !== 1080 &&
                                // height !== 1920 &&
                                compareRatio !== 9 / 16 &&
                                is_video === true
                            ) {
                                platFormIcons = (
                                    <>
                                        {isAuthencatedFacebook && <i className="fab fa-facebook-f"></i>}
                                        {isAuthencatedInstagram && <i className="fab fa-instagram"></i>}
                                        {isAuthencatedPinterest && <i className="fab fa-pinterest"></i>}
                                    </>
                                );
                            }
                            // Video: Youtube
                            if (width >= 1920 && height >= 1080 && width / height === 16 / 9 && is_video === true) {
                                platFormIcons = <>{isAuthencatedYoutube && <i className="fab fa-youtube"></i>}</>;
                            }
                            return (
                                <div key={index} className="campaign_finalize_item">
                                    <div style={{ marginBottom: '5px' }}>
                                        {/* {item.is_video === false && <img width="100%" src={item.file} alt={item.display_file_name} />} */}
                                        {item.is_video === false && (
                                            <LazyLoadImage
                                                // style={{ maxHeight: '100px', maxWidth: '100px' }}
                                                width="100%"
                                                src={item.file}
                                                alt={item.display_file_name}
                                                className="product-image"
                                                placeholderSrc={ImagePlacholder}
                                            />
                                        )}
                                        {item.is_video === true && (
                                            <LazyLoadImage
                                                // style={{ maxHeight: '100px', maxWidth: '100px' }}
                                                width="100%"
                                                src={item.thumb_video}
                                                alt={item.display_file_name}
                                                className="product-image"
                                                placeholderSrc={ImagePlacholder}
                                            />
                                            // <video width="100%" controls poster={ImagePlacholder} muted autoPlay={false}>
                                            //     <source src={item.file} type={item.type} />
                                            //     Your browser does not support HTML video.
                                            // </video>
                                        )}
                                    </div>
                                    <div className="media_item__social_logo">{platFormIcons}</div>
                                    <div>
                                        {item.file_type} {item.width}x{item.height}
                                    </div>
                                </div>
                            );
                        })}
                </Masonry>
            </>
        );
    };
    // NEW UI END

    const handleCancel = () => {
        dispatch_AdsManagerLC({
            type: actions_AdsManagerLAT.AT_SET_ADS_MANAGER_IS_VISIBILITY_CAMPAIGN_CREATE_MODAL,
            payload: 'visible'
        });
        dispatch_AdsManagerLC({
            type: actions_AdsManagerLAT.AT_SET_ADS_MANAGER_IS_VISIBILITY_CAMPAIGN_CREATE_AND_EDIT_MODAL,
            payload: 'visible'
        });
        dispatch_AdsManagerLC({
            type: actions_AdsManagerLAT.AT_SET_ADS_MANAGER_IS_VISIBILITY_CAMPAIGN_FINALIZE_MODAL,
            payload: 'visible'
        });
        dispatch_AdsManagerLC({
            type: actions_AdsManagerLAT.AT_SET_ADS_MANAGER_IS_VISIBILITY_MEDIA_LIBRARY_MODAL,
            payload: 'visible'
        });
        dispatch_AdsManagerLC({
            type: actions_AdsManagerLAT.AT_SET_ADS_MANAGER_IS_SHOW_MEDIA_LIBRARY_MODAL,
            payload: false
        });
        dispatch_AdsManagerLC({
            type: actions_AdsManagerLAT.AT_SET_ADS_MANAGER_IS_SHOW_CAMPAIGN_CREATE_MODAL,
            payload: false
        });
        dispatch_AdsManagerLC({
            type: actions_AdsManagerLAT.AT_SET_ADS_MANAGER_IS_SHOW_CAMPAIGN_CREATE_AND_EDIT_MODAL,
            payload: false
        });
        dispatch_AdsManagerLC({
            type: actions_AdsManagerLAT.AT_SET_ADS_MANAGER_IS_SHOW_CAMPAIGN_FINALIZE_MODAL,
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
            type: actions_AdsManagerLAT.AT_SET_ADS_MANAGER_ADS_CAMPAIGN_ITEM_CURRENT,
            payload: null
        });
        dispatch_AdsManagerLC({
            type: actions_AdsManagerLAT.AT_SET_ADS_MANAGER_AD_SET_ITEM_CURRENT,
            payload: null
        });
    };

    const handleEdit = () => {
        dispatch_AdsManagerLC({
            type: actions_AdsManagerLAT.AT_SET_ADS_MANAGER_IS_VISIBILITY_CAMPAIGN_FINALIZE_MODAL,
            payload: 'hidden'
        });
        if (amIsCreateCampaign) {
            dispatch_AdsManagerLC({
                type: actions_AdsManagerLAT.AT_SET_ADS_MANAGER_IS_VISIBILITY_MEDIA_LIBRARY_MODAL,
                payload: 'hidden'
            });
            // dispatch_AdsManagerLC({
            //     type: actions_AdsManagerLAT.AT_SET_ADS_MANAGER_IS_SHOW_MEDIA_LIBRARY_MODAL,
            //     payload: false
            // });
            dispatch_AdsManagerLC({
                type: actions_AdsManagerLAT.AT_SET_ADS_MANAGER_IS_VISIBILITY_CAMPAIGN_CREATE_MODAL,
                payload: 'visible'
            });
        } else {
            dispatch_AdsManagerLC({
                type: actions_AdsManagerLAT.AT_SET_ADS_MANAGER_IS_VISIBILITY_MEDIA_LIBRARY_MODAL,
                payload: 'hidden'
            });
            // dispatch_AdsManagerLC({
            //     type: actions_AdsManagerLAT.AT_SET_ADS_MANAGER_IS_SHOW_MEDIA_LIBRARY_MODAL,
            //     payload: false
            // });
            dispatch_AdsManagerLC({
                type: actions_AdsManagerLAT.AT_SET_ADS_MANAGER_IS_VISIBILITY_CAMPAIGN_CREATE_MODAL,
                payload: 'visible'
            });
            // if(!amIsCreateAdSets){
            //     dispatch_AdsManagerLC({
            //         type: actions_AdsManagerLAT.AT_SET_ADS_MANAGER_IS_VISIBILITY_CAMPAIGN_CREATE_MODAL,
            //         payload: 'visible'
            //     });
            // }else{
            //     dispatch_AdsManagerLC({
            //         type: actions_AdsManagerLAT.AT_SET_ADS_MANAGER_IS_VISIBILITY_CAMPAIGN_CREATE_AND_EDIT_MODAL,
            //         payload: 'visible'
            //     });
            //     dispatch_AdsManagerLC({
            //         type: actions_AdsManagerLAT.AT_SET_ADS_MANAGER_IS_SHOW_CAMPAIGN_CREATE_AND_EDIT_MODAL,
            //         payload: true
            //     });
            //     dispatch_AdsManagerLC({
            //         type: actions_AdsManagerLAT.AT_SET_ADS_MANAGER_IS_FROM_CAMPAIGN_CREATE_AND_EDIT_MODAL_TO_MEDIA_LIBRARY_MODAL,
            //         payload: true
            //     });
            // }
        }
    };

    const handleBack = () => {
        dispatch_AdsManagerLC({
            type: actions_AdsManagerLAT.AT_SET_ADS_MANAGER_IS_VISIBILITY_MEDIA_LIBRARY_MODAL,
            payload: 'visible'
        });
        // dispatch_AdsManagerLC({
        //     type: actions_AdsManagerLAT.AT_SET_ADS_MANAGER_IS_SHOW_CAMPAIGN_FINALIZE_MODAL,
        //     payload: false
        // });
        dispatch_AdsManagerLC({
            type: actions_AdsManagerLAT.AT_SET_ADS_MANAGER_IS_VISIBILITY_CAMPAIGN_FINALIZE_MODAL,
            payload: 'hidden'
        });
    };

    return (
        <>
            <Modal
                style={{ visibility: amIsVisibilityCampaignFinalizeModal }}
                id="modalCampaignFinalizeModal"
                show={amIsShowCampaignFinalizeModal}
                onHide={props.hideModal}
                scrollable={true}
                size="xl"
                backdrop="static"
            >
                <Modal.Header>
                    <Modal.Title as="h5">Finalize Campaign</Modal.Title>
                    <Button size="sm" variant="light" onClick={() => handleCancel()}>
                        X
                    </Button>
                </Modal.Header>
                <Modal.Body>{showMedia()}</Modal.Body>
                <Modal.Footer className="flex justify-content-between align-items-center">
                    <div style={{ width: '60%' }}>
                        <Accordion>
                            <AccordionTab header="Budget, Schedule, & Targetting">
                                <Row>
                                    <Col md="7">
                                        <div>
                                            Budget:{' '}
                                            {amCampaignItemCurrent && amCampaignItemCurrent.budget
                                                ? formatCurrency(amCampaignItemCurrent.budget)
                                                : '0'}
                                        </div>
                                        <div>
                                            Start:{' '}
                                            {amCampaignItemCurrent && amCampaignItemCurrent.start_date
                                                ? amCampaignItemCurrent.start_date
                                                : 'None'}
                                        </div>
                                        <div>
                                            Ages: {amAdSetItemCurrent && amAdSetItemCurrent.age_min ? amAdSetItemCurrent.age_min : '0'}-
                                            {amAdSetItemCurrent && amAdSetItemCurrent.age_max ? amAdSetItemCurrent.age_max : '0'}
                                        </div>
                                        <div>Languages: {languagesString.length === 0 ? 'No language' : languagesString}</div>
                                        <div>Locations: {locationsString.length === 0 ? 'No location' : locationsString}</div>
                                        <div>Keywords: {keywordsString.length === 0 ? 'No keyword' : keywordsString}</div>
                                    </Col>
                                    <Col md="5">
                                        <div>
                                            Daily Budget:{' '}
                                            {amCampaignItemCurrent && amCampaignItemCurrent.daily_budget
                                                ? formatCurrency(amCampaignItemCurrent.daily_budget)
                                                : '0'}
                                        </div>
                                        <div>
                                            End:{' '}
                                            {amCampaignItemCurrent && amCampaignItemCurrent.end_date
                                                ? amCampaignItemCurrent.end_date
                                                : 'NoName'}
                                        </div>
                                        <div>
                                            Genders:{' '}
                                            {amAdSetItemCurrent && amAdSetItemCurrent.gender ? amAdSetItemCurrent.gender : 'All Genders'}
                                        </div>
                                        <div>
                                            Campaign name:{' '}
                                            {amCampaignItemCurrent && amCampaignItemCurrent.name ? amCampaignItemCurrent.name : 'NoName'}
                                        </div>
                                        <div>
                                            Campaign status:{' '}
                                            {amCampaignItemCurrent && amCampaignItemCurrent.status
                                                ? amCampaignItemCurrent.status
                                                : 'No status'}
                                        </div>
                                        <div>
                                            Ad set name:{' '}
                                            {amAdSetItemCurrent && amAdSetItemCurrent.name ? amAdSetItemCurrent.name : 'NoName'}
                                        </div>
                                        <div>
                                            Ad set status:{' '}
                                            {amAdSetItemCurrent && amAdSetItemCurrent.status ? amAdSetItemCurrent.status : 'No status'}
                                        </div>
                                    </Col>
                                </Row>
                            </AccordionTab>
                        </Accordion>
                    </div>
                    <div>
                        <Button onClick={() => handleBack()} variant="secondary">
                            Back
                        </Button>
                        <Button onClick={() => handleEdit()} variant="secondary">
                            Edit
                        </Button>
                        <Button
                            disabled={isLoadingAction || isUnAuthencatedAll || isUnCheckedAll}
                            variant="warning"
                            id="idPauseCampaign"
                            // onClick={() => formikCommon.handleSubmit()}
                            onClick={() => {
                                handleSubmitCommon('PAUSE');
                            }}
                        >
                            Pause
                        </Button>
                        <Button
                            disabled={isLoadingAction || isUnAuthencatedAll || isUnCheckedAll}
                            variant="success"
                            id="idLaunchCampaign"
                            // onClick={() => formikCommon.handleSubmit()}
                            onClick={() => {
                                handleSubmitCommon('LAUNCH');
                            }}
                        >
                            Launch
                        </Button>
                    </div>
                </Modal.Footer>
            </Modal>
            {!!isShow_AlertEnableAdAccountAllModel && (
                <AlertEnableAdAccountAllModel
                    show={isShow_AlertEnableAdAccountAllModel}
                    hideModal={() => setIsShow_AlertEnableAdAccountAllModel(false)}
                    isKeyboard={true}
                />
            )}
            {!!isShow_AlertEnableAdAccountOneModel && (
                <AlertEnableAdAccountOneModel
                    show={isShow_AlertEnableAdAccountOneModel}
                    hideModal={() => setIsShow_AlertEnableAdAccountOneModel(false)}
                    publisherPlatform={publisherPlatformForAlert}
                />
            )}
        </>
    );
};

export default CampaignFinalizeModal;
