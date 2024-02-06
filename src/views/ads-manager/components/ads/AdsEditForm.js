import React, { useState, useEffect, Fragment, lazy } from 'react';
import { Button, Row, Col, Form, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import { useAdsManagerLibraryConsumer } from '../../common/AdsManagerLibraryContext';
import * as actions_AdsManagerLAT from '../../common/AdsManagerLibraryActionType';
import {
    pinterestBoardsGetByUserApi,
    metaAccountsGetByUserApi,
    metaPagesGetByUserdApi,
    adsUpdateRunOnStatusByUserApi
} from '../../../../apis/adsManagerApi';
import { STATUS_CODE } from '../../../../utils/statusCodeApi';
import { AlertSuccess, AlertError } from '../../../../utils/alertUtils';
import ImagePlacholder from '../../../../assets/images/image_lazy_loading.gif';

import { useSelector } from 'react-redux';
import { selectAdAccounts } from '../../../../store/slices/ad-accounts';
import { useAdsUpdateByMutation } from '../../../../apis/ads-manager-api-slice';

const AlertEnableAdAccountAllModel = lazy(() => import('../campaign/AlertEnableAdAccountAllModel'));
const AlertEnableAdAccountOneModel = lazy(() => import('../campaign/AlertEnableAdAccountOneModel'));

const useMetaPagesGetByUserdApi = () => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setIsError(false);
            setIsLoading(true);
            try {
                const result = await metaPagesGetByUserdApi();
                setData(result.data);
            } catch (error) {
                setIsError(true);
            }
            setIsLoading(false);
        };

        fetchData();
    }, []);

    return [{ data, isLoading, isError }];
};

const useMetaAccountsGetByUserApi = () => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setIsError(false);
            setIsLoading(true);
            try {
                const result = await metaAccountsGetByUserApi();
                setData(result.data);
            } catch (error) {
                setIsError(true);
            }
            setIsLoading(false);
        };

        fetchData();
    }, []);

    return [{ data, isLoading, isError }];
};

const usePinterestBoardsGetByUserApi = () => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setIsError(false);
            setIsLoading(true);
            try {
                const result = await pinterestBoardsGetByUserApi();
                setData(result.data);
            } catch (error) {
                setIsError(true);
            }
            setIsLoading(false);
        };

        fetchData();
    }, []);

    return [{ data, isLoading, isError }];
};

const AdsEditForm = (props) => {
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

    const [isShow_AlertEnableAdAccountAllModel, setIsShow_AlertEnableAdAccountAllModel] = useState(false);
    const [isShow_AlertEnableAdAccountOneModel, setIsShow_AlertEnableAdAccountOneModel] = useState(false);
    const [publisherPlatformForAlert, setPublisherPlatformForAlert] = useState('');
    const [isShow_AlertUnSelectAdAccountAll, setIsShow_AlertUnSelectAdAccountAll] = useState(false);
    const [isUnCheckedAll, setIsUnCheckedAll] = useState(false);

    const [isChkGoogle, setIsChkGoogle] = useState(true);
    const [isChkYoutube, setIsChkYoutube] = useState(true);
    const [isChkFacebook, setIsChkFacebook] = useState(true);
    const [isChkInstagram, setIsChkInstagram] = useState(true);
    const [isChkMessenger, setIsChkMessenger] = useState(true);
    const [isChkMetaAudNetwork, setIsChkMetaAudNetwork] = useState(true);
    const [isChkLinkedIn, setIsChkLinkedIn] = useState(true);
    const [isChkPinterest, setIsChkPinterest] = useState(true);
    const [isChkSnapchat, setIsChkSnapchat] = useState(true);
    const [isChkTiktok, setIsChkTiktok] = useState(true);

    const { state_AdsManagerLC, dispatch_AdsManagerLC } = useAdsManagerLibraryConsumer();
    const { isRefreshAfterUpdate } = state_AdsManagerLC;

    const { adsUpdating } = props;

    const [{ data: data_MetaAccount, isLoading: isLoading_MetaAccount }] = useMetaAccountsGetByUserApi();
    const [{ data: data_FacbookPage, isLoading: isLoading_FacbookPage }] = useMetaPagesGetByUserdApi();
    const [{ data: data_PinterestBoard, isLoading: isLoading_PinterestBoard }] = usePinterestBoardsGetByUserApi();
    const [metaInstagramAccounts, setMetaInstagramAccounts] = useState([]);
    const [facebookPages, setFacebookPages] = useState([]);
    const [pinterestBoards, setPinterestBoards] = useState([]);

    const [adsUpdateBy] = useAdsUpdateByMutation();

    useEffect(() => {
        if (!isLoading_MetaAccount && data_MetaAccount.accounts && data_MetaAccount.accounts.length > 0) {
            setMetaInstagramAccounts(data_MetaAccount.accounts);
        }
        if (!isLoading_FacbookPage && data_FacbookPage.pages && data_FacbookPage.pages.length > 0) {
            setFacebookPages(data_FacbookPage.pages);
        }
        if (!isLoading_PinterestBoard && data_PinterestBoard.boards && data_PinterestBoard.boards.length > 0) {
            setPinterestBoards(data_PinterestBoard.boards);
        }
        if (adsUpdating) {
            var _isFacebook = false;
            var _isInstagram = false;
            var _isMetaNetwork = false;
            var _isMessenger = false;
            var _isPinterest = false;
            var _isGoogle = false;
            var _isLinkedin = false;
            var _isSnapchat = false;
            var _isTiktok = false;
            var _isYoutube = false;

            adsUpdating.ads_platform.map((item1) => {
                if (item1.publisher_platform === 'google') _isGoogle = item1.run_on;
                if (item1.publisher_platform === 'facebook') _isFacebook = item1.run_on;
                if (item1.publisher_platform === 'instagram') _isInstagram = item1.run_on;
                if (item1.publisher_platform === 'audience_network') _isMetaNetwork = item1.run_on;
                if (item1.publisher_platform === 'messenger') _isMessenger = item1.run_on;
                if (item1.publisher_platform === 'linkedin') _isLinkedin = item1.run_on;
                if (item1.publisher_platform === 'pinterest') _isPinterest = item1.run_on;
                if (item1.publisher_platform === 'snapchat') _isSnapchat = item1.run_on;
                if (item1.publisher_platform === 'tiktok') _isTiktok = item1.run_on;
                if (item1.publisher_platform === 'youtube') _isYoutube = item1.run_on;
                return '';
            });

            setIsChkGoogle(_isGoogle);
            setIsChkFacebook(_isFacebook);
            setIsChkInstagram(_isInstagram);
            setIsChkMessenger(_isMessenger);
            setIsChkMetaAudNetwork(_isMetaNetwork);
            setIsChkLinkedIn(_isLinkedin);
            setIsChkPinterest(_isPinterest);
            setIsChkSnapchat(_isSnapchat);
            setIsChkTiktok(_isTiktok);
            setIsChkYoutube(_isYoutube);
        }
    }, [
        adsUpdating,
        data_MetaAccount.accounts,
        isLoading_MetaAccount,
        setMetaInstagramAccounts,
        data_FacbookPage.pages,
        isLoading_FacbookPage,
        setFacebookPages,
        data_PinterestBoard.boards,
        isLoading_PinterestBoard,
        setPinterestBoards,
        isAuthencatedFacebook,
        isAuthencatedGoogle,
        isAuthencatedInstagram,
        isAuthencatedLinkedin,
        isAuthencatedPinterest,
        isAuthencatedSnapchat,
        isAuthencatedTiktok,
        isAuthencatedMeta,
        isAuthencatedMessenger,
        isAuthencatedYoutube
    ]);

    //

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

    const facebookPageOptions = [
        { value: 'Select Page', label: 'Select Page' }
        // { value: 'My fb page', label: 'My fb page' },
        // { value: 'My other fb page', label: 'My other fb page' }
    ];

    const instagramAccountOptions = [
        { value: 'Select Page', label: 'Select Page' }
        // { value: 'My instagram account', label: 'My instagram account' },
        // { value: 'My other instagram account', label: 'My other instagram account' }
    ];

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

    const pinterestBoardOptions = [
        { value: 'Select Page', label: 'Select Page' }
        // { value: 'My pinterest board', label: 'My pinterest board' },
        // { value: 'My other pinterest board', label: 'My other pinterest board' }
    ];
    //

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

    //
    useEffect(() => {
        if (!isChkGoogle && !isChkFacebook && !isChkInstagram && !isChkLinkedIn && !isChkPinterest && !isChkSnapchat && !isChkTiktok) {
            setIsUnCheckedAll(true);
            setIsShow_AlertUnSelectAdAccountAll(true);
        } else {
            setIsShow_AlertUnSelectAdAccountAll(false);
        }
    }, [
        adsUpdating,
        setIsUnCheckedAll,
        isChkGoogle,
        isChkFacebook,
        isChkInstagram,
        isChkMessenger,
        isChkMetaAudNetwork,
        isChkLinkedIn,
        isChkPinterest,
        isChkSnapchat,
        isChkTiktok,
        isChkYoutube
    ]);
    //

    const formikValidate = (touched_field_name, errors_field_name) => {
        return (
            touched_field_name &&
            errors_field_name && (
                <span style={{ marginLeft: '5px' }} className="text-danger">
                    {errors_field_name}
                </span>
            )
        );
    };

    const re =
        /^((ftp|http|https):\/\/)?(www.)?(?!.*(ftp|http|https|www.))[a-zA-Z0-9_-]+(\.[a-zA-Z]+)+((\/)[\w#]+)*(\/\w+\?[a-zA-Z0-9_]+=\w+(&[a-zA-Z0-9_]+=\w+)*)?$/gm;

    // Image: Facebook,LinkedIn, Meta Network

    const schemaAll = Yup.object().shape({
        destination_url: Yup.string().label('Destination URL').required('*Required').matches(re, 'URL invalid!'),
        display_url: Yup.string().nullable().label('Display URL').matches(re, 'URL invalid!'),
        headline:
            isChkFacebook || isChkInstagram || isChkLinkedIn || isChkMessenger || isChkMetaAudNetwork || isChkPinterest
                ? Yup.string().label('Headline').required('*Required').max(24, '<= 24 characters !')
                : Yup.string().label('Headline').max(24, '<= 24 characters !'),
        primary_text:
            isChkFacebook || isChkInstagram || isChkLinkedIn || isChkMessenger || isChkMetaAudNetwork || isChkPinterest || isChkSnapchat
                ? Yup.string().label('Primary text').required('*Required').max(125, '<= 125 characters !')
                : Yup.string().label('Primary text').max(125, '<= 125 characters !'),
        description: Yup.string().label('Description').max(27, '<= 27 characters !'),
        brand_name: isChkSnapchat
            ? Yup.string().label('Brand name').required('*Required').max(30, '<= 30 characters !')
            : Yup.string().label('Brand name').nullable(),
        name: Yup.string().label('Ad Name').required('*Required')
    });

    const formikAll = useFormik({
        initialValues: {
            destination_url: adsUpdating ? adsUpdating.destination_url : '',
            display_url: adsUpdating ? adsUpdating.display_url : '',
            name: adsUpdating ? adsUpdating.name : '',
            headline: adsUpdating ? adsUpdating.headline : '',
            primary_text: adsUpdating ? adsUpdating.primary_text : '',
            description: adsUpdating ? adsUpdating.description : '',
            brand_name: adsUpdating ? adsUpdating.brand_name : '',
            //
            facebook_page: adsUpdating.facebook_page ? adsUpdating.facebook_page : facebookPageOptions[0].value,
            facebook_page_id: adsUpdating.facebook_page_id ? adsUpdating.facebook_page_id : 'null',
            call_to_action_linkedin: adsUpdating.call_to_action_linkedin
                ? adsUpdating.call_to_action_linkedin
                : linkedInCTAOptions[0].value,
            //
            call_to_action_instagram: adsUpdating.call_to_action_instagram
                ? adsUpdating.call_to_action_instagram
                : instagramAccountOptions[0].value,
            instagram_account: adsUpdating.instagram_account ? adsUpdating.instagram_account : instagramAccountOptions[0].value,
            instagram_account_id: adsUpdating.instagram_account_id ? adsUpdating.instagram_account_id : 'null',
            pinterest_board: adsUpdating.pinterest_board ? adsUpdating.pinterest_board : pinterestBoardOptions[0].value,
            pinterest_board_id: adsUpdating.pinterest_board_id ? adsUpdating.pinterest_board_id : 'null',
            //
            call_to_action_snapchat: adsUpdating.call_to_action_snapchat
                ? adsUpdating.call_to_action_snapchat
                : snapchatCTAOptions[0].value,
            //
            call_to_action_meta: adsUpdating.call_to_action_meta ? adsUpdating.call_to_action_meta : metaCTAOptions[0].value
        },
        onSubmit: (values) => {
            handleAll_SubmitForm(values);
        },
        validationSchema: schemaAll
    });
    //

    const updateRunOnStatusAdPlatform = (ad_id, publisher_platform, status_run_on) => {
        console.log(ad_id + ' - ' + publisher_platform + ' - ' + status_run_on);
        let data = {
            ad_id: ad_id,
            publisher_platform: publisher_platform,
            status_run_on: status_run_on
        };
        // console.log('updateRunOnStatusAdPlatform: ', data);
        adsUpdateRunOnStatusByUserApi(data).then((resp) => {
            if (resp && resp.status === STATUS_CODE.HTTP_200_OK) {
                dispatch_AdsManagerLC({
                    type: actions_AdsManagerLAT.AT_SET_IS_REFRESH_AFTER_UPDATE,
                    payload: !isRefreshAfterUpdate
                });
            } else {
                AlertError('Error from server!');
            }
        });
    };

    // All Platforms
    const platformIcons = {
        google: 'fab fa-google',
        audience_network: 'fab fa-meta',
        facebook: 'fab fa-facebook-f',
        instagram: 'fab fa-instagram',
        messenger: 'fab fa-facebook-messenger',
        linkedin: 'fab fa-linkedin-in',
        pinterest: 'fab fa-pinterest',
        snapchat: 'fab fa-snapchat',
        tiktok: 'fab fa-tiktok',
        youtube: 'fab fa-youtube'
        // Add any other platforms you need here
    };

    const showAdsAll = (index, item) => {
        // console.log('showAdsAll: ', item);
        let _isUnCheckedAll =
            !isChkGoogle &&
            !isChkYoutube &&
            !isChkFacebook &&
            !isChkInstagram &&
            !isChkMetaAudNetwork &&
            !isChkMessenger &&
            !isChkLinkedIn &&
            !isChkPinterest &&
            !isChkSnapchat &&
            !isChkTiktok;

        return (
            <Row key={index} className="campaign_finalize_item">
                <Col md="2">
                    {item?.media?.file && (
                        <>
                            <div style={{ marginBottom: '5px' }}>
                                <LazyLoadImage
                                    width="100%"
                                    src={item.media.file}
                                    alt={item?.media?.display_file_name || 'default alt text'}
                                    className="product-image"
                                    placeholderSrc={ImagePlacholder}
                                />
                            </div>
                            <div className="media_item__social_logo">
                                {item.ads_platform.map((platformObj) => {
                                    const iconClass = platformIcons[platformObj.publisher_platform];
                                    return iconClass && <i className={iconClass}></i>;
                                })}
                            </div>
                            <div style={{ marginBottom: '20px' }}>
                                {item.media.file_type} {item.media.width}x{item.media.height}
                            </div>
                        </>
                    )}
                    <div className={isShow_AlertUnSelectAdAccountAll ? 'run_on_error' : 'run_on'}>
                        <span className="run-on-spacing d-block">Run on:</span>
                        {item.ads_platform.some((platformObj) => platformObj.publisher_platform === 'google') && (
                            <Form.Group className="d-inline" onClick={(e) => handleAlertEnableAdAccount(e, 'Google')}>
                                <div className="checkbox d-inline checkbox-fill checkbox-primary">
                                    <Form.Control
                                        onChange={(e) => {
                                            updateRunOnStatusAdPlatform(item.id, 'google', e.target.checked);
                                            setIsChkGoogle(e.target.checked);
                                        }}
                                        type="checkbox"
                                        name="chkGoogle"
                                        id="chkGoogle"
                                        checked={isChkGoogle && isAuthencatedGoogle}
                                        disabled={!isAuthencatedGoogle}
                                    />
                                    <Form.Label htmlFor="chkGoogle" className="cr">
                                        Google
                                    </Form.Label>
                                </div>
                            </Form.Group>
                        )}
                        {item.ads_platform.some((platformObj) => platformObj.publisher_platform === 'facebook') && (
                            <Form.Group className="d-inline" onClick={(e) => handleAlertEnableAdAccount(e, 'Facebook')}>
                                <div className="checkbox d-inline checkbox-fill checkbox-primary">
                                    <Form.Control
                                        onChange={(e) => {
                                            updateRunOnStatusAdPlatform(item.id, 'facebook', e.target.checked);
                                            setIsChkFacebook(e.target.checked);
                                        }}
                                        type="checkbox"
                                        name="chkFacebook"
                                        id="chkFacebook"
                                        checked={isChkFacebook && isAuthencatedFacebook}
                                        disabled={!isAuthencatedFacebook}
                                    />
                                    <Form.Label htmlFor="chkFacebook" className="cr">
                                        Facebook
                                    </Form.Label>
                                </div>
                            </Form.Group>
                        )}
                        {item.ads_platform.some((platformObj) => platformObj.publisher_platform === 'instagram') && (
                            <Form.Group className="d-inline" onClick={(e) => handleAlertEnableAdAccount(e, 'Instagram')}>
                                <div className="checkbox d-inline checkbox-fill checkbox-primary">
                                    <Form.Control
                                        onChange={(e) => {
                                            updateRunOnStatusAdPlatform(item.id, 'instagram', e.target.checked);
                                            setIsChkInstagram(e.target.checked);
                                        }}
                                        type="checkbox"
                                        name="chkInstagram"
                                        id="chkInstagram"
                                        checked={isChkInstagram && isAuthencatedInstagram}
                                        disabled={!isAuthencatedInstagram}
                                    />
                                    <Form.Label htmlFor="chkInstagram" className="cr">
                                        Instagram
                                    </Form.Label>
                                </div>
                            </Form.Group>
                        )}
                        {item.ads_platform.some((platformObj) => platformObj.publisher_platform === 'linkedin') && (
                            <Form.Group className="d-inline" onClick={(e) => handleAlertEnableAdAccount(e, 'LinkedIn')}>
                                <div className="checkbox d-inline checkbox-fill checkbox-primary">
                                    <Form.Control
                                        onChange={(e) => {
                                            updateRunOnStatusAdPlatform(item.id, 'linkedin', e.target.checked);
                                            setIsChkLinkedIn(e.target.checked);
                                        }}
                                        type="checkbox"
                                        name="chkLinkedIn"
                                        id="chkLinkedIn"
                                        checked={isChkLinkedIn && isAuthencatedLinkedin}
                                        disabled={!isAuthencatedLinkedin}
                                    />
                                    <Form.Label htmlFor="chkLinkedIn" className="cr">
                                        LinkedIn
                                    </Form.Label>
                                </div>
                            </Form.Group>
                        )}
                        {item.ads_platform.some((platformObj) => platformObj.publisher_platform === 'messenger') && (
                            <Form.Group className="d-inline" onClick={(e) => handleAlertEnableAdAccount(e, 'Messenger')}>
                                <div className="checkbox d-inline checkbox-fill checkbox-primary">
                                    <Form.Control
                                        onChange={(e) => {
                                            updateRunOnStatusAdPlatform(item.id, 'messenger', e.target.checked);
                                            setIsChkMessenger(e.target.checked);
                                        }}
                                        type="checkbox"
                                        name="chkMessenger"
                                        id="chkMessenger"
                                        checked={isChkMessenger && isAuthencatedMessenger}
                                        disabled={!isAuthencatedMessenger}
                                    />
                                    <Form.Label htmlFor="chkMessenger" className="cr">
                                        Messenger
                                    </Form.Label>
                                </div>
                            </Form.Group>
                        )}
                        {item.ads_platform.some((platformObj) => platformObj.publisher_platform === 'audience_network') && (
                            <Form.Group className="d-inline" onClick={(e) => handleAlertEnableAdAccount(e, 'Audience_network')}>
                                <div className="checkbox d-inline checkbox-fill checkbox-primary">
                                    <Form.Control
                                        onChange={(e) => {
                                            updateRunOnStatusAdPlatform(item.id, 'audience_network', e.target.checked);
                                            setIsChkMetaAudNetwork(e.target.checked);
                                        }}
                                        type="checkbox"
                                        name="chkMetaAudNetwork"
                                        id="chkMetaAudNetwork"
                                        checked={isChkMetaAudNetwork && isAuthencatedMeta}
                                        disabled={!isAuthencatedMeta}
                                    />
                                    <Form.Label htmlFor="chkMetaAudNetwork" className="cr">
                                        Meta Network
                                    </Form.Label>
                                </div>
                            </Form.Group>
                        )}

                        {item.ads_platform.some((platformObj) => platformObj.publisher_platform === 'pinterest') && (
                            <Form.Group className="d-inline" onClick={(e) => handleAlertEnableAdAccount(e, 'Pinterest')}>
                                <div className="checkbox d-inline checkbox-fill checkbox-primary">
                                    <Form.Control
                                        onChange={(e) => {
                                            updateRunOnStatusAdPlatform(item.id, 'pinterest', e.target.checked);
                                            setIsChkPinterest(e.target.checked);
                                        }}
                                        type="checkbox"
                                        name="chkPinterest"
                                        id="chkPinterest"
                                        checked={isChkPinterest && isAuthencatedPinterest}
                                        disabled={!isAuthencatedPinterest}
                                    />
                                    <Form.Label htmlFor="chkPinterest" className="cr">
                                        Pinterest
                                    </Form.Label>
                                </div>
                            </Form.Group>
                        )}
                        {item.ads_platform.some((platformObj) => platformObj.publisher_platform === 'snapchat') && (
                            <Form.Group className="d-inline" onClick={(e) => handleAlertEnableAdAccount(e, 'Snapchat')}>
                                <div className="checkbox d-inline checkbox-fill checkbox-primary">
                                    <Form.Control
                                        onChange={(e) => {
                                            updateRunOnStatusAdPlatform(item.id, 'snapchat', e.target.checked);
                                            setIsChkSnapchat(e.target.checked);
                                        }}
                                        type="checkbox"
                                        name="chkSnapchat"
                                        id="chkSnapchat"
                                        checked={isChkSnapchat && isAuthencatedSnapchat}
                                        disabled={!isAuthencatedSnapchat}
                                    />
                                    <Form.Label htmlFor="chkSnapchat" className="cr">
                                        Snapchat
                                    </Form.Label>
                                </div>
                            </Form.Group>
                        )}
                        {item.ads_platform.some((platformObj) => platformObj.publisher_platform === 'tiktok') && (
                            <Form.Group className="d-inline" onClick={(e) => handleAlertEnableAdAccount(e, 'Tiktok')}>
                                <div className="checkbox d-inline checkbox-fill checkbox-primary">
                                    <Form.Control
                                        onChange={(e) => {
                                            updateRunOnStatusAdPlatform(item.id, 'tiktok', e.target.checked);
                                            setIsChkTiktok(e.target.checked);
                                        }}
                                        type="checkbox"
                                        name="chkTiktok"
                                        id="chkTiktok"
                                        checked={isChkTiktok && isAuthencatedTiktok}
                                        disabled={!isAuthencatedTiktok}
                                    />
                                    <Form.Label htmlFor="chkTiktok" className="cr">
                                        Tiktok
                                    </Form.Label>
                                </div>
                            </Form.Group>
                        )}
                        {item.ads_platform.some((platformObj) => platformObj.publisher_platform === 'youtube') && (
                            <Form.Group className="d-inline" onClick={(e) => handleAlertEnableAdAccount(e, 'YouTube')}>
                                <div className="checkbox d-inline checkbox-fill checkbox-primary">
                                    <Form.Control
                                        onChange={(e) => {
                                            updateRunOnStatusAdPlatform(item.id, 'youtube', e.target.checked);
                                            setIsChkYoutube(e.target.checked);
                                        }}
                                        type="checkbox"
                                        name="chkYoutube"
                                        id="chkYoutube"
                                        checked={isChkYoutube && isAuthencatedGoogle}
                                        disabled={!isAuthencatedGoogle}
                                    />
                                    <Form.Label htmlFor="chkYoutube" className="cr">
                                        YouTube
                                    </Form.Label>
                                </div>
                            </Form.Group>
                        )}
                    </div>
                </Col>
                <Col md="2">
                    {_isUnCheckedAll && (
                        <Button variant="danger" onClick={() => handleAlertEnableAdAccountAll()}>
                            Please select one ad account!
                        </Button>
                    )}
                    {(isChkFacebook || isChkInstagram || isChkMetaAudNetwork || isChkMessenger) && (
                        <Form.Group>
                            <Form.Label>Meta CTA</Form.Label>
                            <Form.Control
                                value={formikAll.values.call_to_action_meta}
                                onChange={formikAll.handleChange('call_to_action_meta')}
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
                    {isChkFacebook && (
                        <>
                            <Form.Group>
                                <Form.Label>Facebook Page</Form.Label>
                                <Form.Control
                                    value={formikAll.values.facebook_page_id}
                                    onChange={formikAll.handleChange('facebook_page_id')}
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
                        </>
                    )}
                    {isChkInstagram && (
                        <>
                            <Form.Group>
                                <Form.Label style={{ whiteSpace: 'nowrap' }}>Instagram account</Form.Label>
                                <Form.Control
                                    value={formikAll.values.instagram_account_id}
                                    onChange={formikAll.handleChange('instagram_account_id')}
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
                        </>
                    )}
                    {isChkLinkedIn && (
                        <Form.Group>
                            <Form.Label>LinkedIn CTA</Form.Label>
                            <Form.Control
                                value={formikAll.values.call_to_action_linkedin}
                                onChange={formikAll.handleChange('call_to_action_linkedin')}
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
                    {isChkSnapchat && (
                        <Form.Group>
                            <Form.Label>Snapchat CTA</Form.Label>
                            <Form.Control
                                value={formikAll.values.call_to_action_snapchat}
                                onChange={formikAll.handleChange('call_to_action_snapchat')}
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
                    {isChkPinterest && (
                        <>
                            <Form.Group>
                                <Form.Label>Pinterest board</Form.Label>
                                <Form.Control
                                    value={formikAll.values.pinterest_board_id}
                                    onChange={formikAll.handleChange('pinterest_board_id')}
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
                </Col>
                <Col md="8">
                    <Form.Group>
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            value={formikAll.values.name}
                            onChange={formikAll.handleChange('name')}
                            onBlur={formikAll.handleBlur('name')}
                            isInvalid={formikAll.touched.name && formikAll.errors.name ? true : false}
                            type="text"
                            placeholder=""
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>
                            Destination URL
                            <OverlayTrigger
                                placement="top"
                                overlay={<Tooltip id={`tooltip-url`}>This is where users go when they click your ad.</Tooltip>}
                            >
                                <span> ⓘ </span>
                            </OverlayTrigger>
                        </Form.Label>
                        <Form.Control
                            value={formikAll.values.destination_url}
                            onChange={formikAll.handleChange('destination_url')}
                            onBlur={formikAll.handleBlur('destination_url')}
                            isInvalid={formikAll.touched.destination_url && formikAll.errors.destination_url ? true : false}
                            type="text"
                            placeholder=""
                        />
                    </Form.Group>
                    {(isChkGoogle ||
                        isChkFacebook ||
                        isChkInstagram ||
                        isChkMessenger ||
                        isChkMetaAudNetwork ||
                        isChkPinterest ||
                        isChkSnapchat ||
                        isChkTiktok ||
                        isChkYoutube) && (
                        <Form.Group className="mb-2">
                            <Form.Label>
                                Display URL
                                <OverlayTrigger
                                    placement="top"
                                    overlay={<Tooltip id={`tooltip-display-url`}>This is shown with your ad. We recommend using your domain</Tooltip>}
                                >
                                    <span> ⓘ </span>
                                </OverlayTrigger>
                            </Form.Label>
                            <OverlayTrigger
                                placement="top"
                                overlay={<Tooltip id={`tooltip-display-url`}>This is the address people will see.</Tooltip>}
                            >
                                <Form.Control
                                    value={formikAll.values.display_url}
                                    onChange={formikAll.handleChange('display_url')}
                                    onBlur={formikAll.handleBlur('display_url')}
                                    isInvalid={formikAll.touched.display_url && formikAll.errors.display_url ? true : false}
                                    type="text"
                                    placeholder=""
                                />
                            </OverlayTrigger>
                        </Form.Group>
                    )}
                    {(isChkFacebook ||
                        isChkInstagram ||
                        isChkLinkedIn ||
                        isChkMessenger ||
                        isChkMetaAudNetwork ||
                        isChkPinterest ||
                        isChkSnapchat) && (
                        <Form.Group>
                            <Form.Label>
                                Headline 
                                <OverlayTrigger
                                    placement="top"
                                    overlay={<Tooltip id={`tooltip-headline`}>Headline tooltip</Tooltip>}
                                >
                                    <span> ⓘ </span>
                                </OverlayTrigger>
                                {formikValidate(formikAll.touched.headline, formikAll.errors.headline)}
                            </Form.Label>
                            <Form.Control
                                value={formikAll.values.headline}
                                onChange={formikAll.handleChange('headline')}
                                onBlur={formikAll.handleBlur('headline')}
                                isInvalid={formikAll.touched.headline && formikAll.errors.headline ? true : false}
                                type="text"
                                placeholder=""
                            />
                        </Form.Group>
                    )}
                    {(isChkFacebook || isChkInstagram || isChkLinkedIn || isChkMessenger || isChkMetaAudNetwork || isChkPinterest) && (
                        <Form.Group>
                            <Form.Label>
                                Primary text 
                                <OverlayTrigger
                                    placement="top"
                                    overlay={<Tooltip id={`tooltip-primary-text`}>Primary Text tooltip</Tooltip>}
                                >
                                    <span> ⓘ </span>
                                </OverlayTrigger>
                                {formikValidate(formikAll.touched.primary_text, formikAll.errors.primary_text)}

                            </Form.Label>
                            <Form.Control
                                value={formikAll.values.primary_text}
                                onChange={formikAll.handleChange('primary_text')}
                                onBlur={formikAll.handleBlur('primary_text')}
                                isInvalid={formikAll.touched.primary_text && formikAll.errors.primary_text ? true : false}
                                type="text"
                                placeholder=""
                            />
                        </Form.Group>
                    )}
                    {(isChkFacebook || isChkMetaAudNetwork || isChkLinkedIn) && (
                        <Form.Group>
                            <Form.Label>
                                Description
                                <OverlayTrigger
                                    placement="top"
                                    overlay={<Tooltip id={`tooltip-description`}>Description tooltip</Tooltip>}
                                >
                                    <span> ⓘ </span>
                                </OverlayTrigger>
                                {formikValidate(formikAll.touched.description, formikAll.errors.description)}
                            </Form.Label>
                            <Form.Control
                                value={formikAll.values.description}
                                onChange={formikAll.handleChange('description')}
                                onBlur={formikAll.handleBlur('description')}
                                isInvalid={formikAll.touched.description && formikAll.errors.description ? true : false}
                                type="text"
                                placeholder=""
                            />
                        </Form.Group>
                    )}
                    {isChkSnapchat && (
                        <Form.Group>
                            <Form.Label>
                                Brand name Snapchat
                                {formikValidate(formikAll.touched.brand_name, formikAll.errors.brand_name)}
                            </Form.Label>
                            <Form.Control
                                value={formikAll.values.brand_name}
                                onChange={formikAll.handleChange('brand_name')}
                                onBlur={formikAll.handleBlur('brand_name')}
                                isInvalid={formikAll.touched.brand_name && formikAll.errors.brand_name ? true : false}
                                type="text"
                                placeholder=""
                            />
                        </Form.Group>
                    )}
                </Col>
            </Row>
        );
    };

    // HANDLE SUBMIT ======================================================================

    // All
    const handleAll_SubmitForm = async (values) => {
        var facebookPage = findNameOfFacebookPage(values.facebook_page_id);
        if (values.facebook_page_id === '') {
            facebookPage = { name: 'Select Page', id: 'null' };
        }
        var elem = document.getElementById('idFacebookPageSelect');
        // console.log('facebookPage: ', facebookPage);
        if (
            ((facebookPage && facebookPage.id === 'null') || facebookPage === undefined) &&
            facebookPages.length > 0 &&
            isChkFacebook &&
            isAuthencatedFacebook &&
            elem
        ) {
            elem.classList.add('me_input_invalidate');
            return;
        } else if (elem) elem.classList.remove('me_input_invalidate');
        //
        var pinterestBoard = findNameOfPinterestBoard(values.pinterest_board_id);
        if (values.pinterest_board_id === '') {
            pinterestBoard = { name: 'Select Board', id: 'null' };
        }
        elem = document.getElementById('idPinterestBoardSelect');
        // console.log('pinterestBoard: ', pinterestBoard);
        if (
            ((pinterestBoard && pinterestBoard.id === 'null') || pinterestBoard === undefined) &&
            pinterestBoards.length > 0 &&
            isChkPinterest &&
            isAuthencatedPinterest &&
            elem
        ) {
            elem.classList.add('me_input_invalidate');
            return;
        } else if (elem) elem.classList.remove('me_input_invalidate');
        //
        var instagramAccount = findNameOfInstagramAccount(values.instagram_account_id);
        if (values.instagram_account_id === '') {
            instagramAccount = { name: 'Select Account', id: 'null' };
        }
        elem = document.getElementById('idInstagramSelect');
        console.log('instagramAccount: ', instagramAccount);
        if (
            ((instagramAccount && instagramAccount.id === 'null') || instagramAccount === undefined) &&
            metaInstagramAccounts.length > 0 &&
            isChkInstagram &&
            isAuthencatedInstagram &&
            elem
        ) {
            elem.classList.add('me_input_invalidate');
            return;
        } else if (elem) elem.classList.remove('me_input_invalidate');

        const data = {
            ...values,
            id: adsUpdating.id,
            facebook_page: isChkFacebook && isAuthencatedFacebook ? (facebookPage ? facebookPage.name : '') : facebookPageOptions[0].value,
            facebook_page_id: isChkFacebook && isAuthencatedFacebook ? (facebookPage ? facebookPage.id : '') : 'null',
            instagram_account: isChkInstagram && isAuthencatedInstagram ? (instagramAccount ? instagramAccount.name : '') : '',
            instagram_account_id: isChkInstagram && isAuthencatedInstagram ? (instagramAccount ? instagramAccount.id : '') : '',
            call_to_action_snapchat: isChkSnapchat && isAuthencatedSnapchat ? values.call_to_action_snapchat : null,
            pinterest_board: isChkPinterest && isAuthencatedPinterest ? (pinterestBoard ? pinterestBoard.name : '') : '',
            pinterest_board_id: isChkPinterest && isAuthencatedPinterest ? (pinterestBoard ? pinterestBoard.id : '') : '',
            call_to_action_linkedin: isChkLinkedIn && isAuthencatedLinkedin ? values.call_to_action_linkedin : null,
            headline:
                (isAuthencatedMeta && (isChkFacebook || isChkInstagram || isChkMetaAudNetwork || isChkMessenger)) ||
                (isChkLinkedIn && isAuthencatedLinkedin) ||
                (isChkPinterest && isAuthencatedPinterest) ||
                (isChkSnapchat && isAuthencatedSnapchat)
                    ? values.headline
                    : null,
            primary_text:
                (isAuthencatedMeta && (isChkFacebook || isChkInstagram || isChkMetaAudNetwork || isChkMessenger)) ||
                (isChkLinkedIn && isAuthencatedLinkedin) ||
                (isChkPinterest && isAuthencatedPinterest)
                    ? values.primary_text
                    : null,
            description:
                (isAuthencatedMeta && (isChkFacebook || isChkMetaAudNetwork)) || (isChkLinkedIn && isAuthencatedLinkedin)
                    ? values.description
                    : null,
            brand_name: isChkSnapchat && isAuthencatedSnapchat ? values.brand_name : '',
            call_to_action_meta:
                isAuthencatedMeta && (isChkFacebook || isChkInstagram || isChkMessenger || isChkMetaAudNetwork)
                    ? values.call_to_action_meta
                    : null
        };

        try {
            await adsUpdateBy(data).unwrap();
            AlertSuccess('Update successfully!');
            props.hideModal(false);
        } catch (error) {
            AlertError('Error from server!');
        }
    };

    // HANDLE SUBMIT END =========================================================================

    const handleAlertEnableAdAccount = (event, publisher_platform_name) => {
        setPublisherPlatformForAlert(publisher_platform_name);
        var _isAuthencated = false;
        if (adsUpdating.ads_platform_strings === 'Google') {
            if (isAuthencatedGoogle && publisher_platform_name === 'Google') _isAuthencated = true;
        } else if (adsUpdating.ads_platform_strings === 'Pinterest') {
            if (isAuthencatedPinterest && publisher_platform_name === 'Pinterest') _isAuthencated = true;
        } else if (adsUpdating.ads_platform_strings === 'Linkedin,Facebook,Audience_network') {
            if (isAuthencatedFacebook && publisher_platform_name === 'Facebook') _isAuthencated = true;
            if (isAuthencatedLinkedin && publisher_platform_name === 'LinkedIn') _isAuthencated = true;
            if (isAuthencatedMeta && publisher_platform_name === 'Audience_network') _isAuthencated = true;
        } else if (adsUpdating.ads_platform_strings === 'Pinterest,Messenger,Linkedin,Instagram,Google,Facebook,Audience_network') {
            if (isAuthencatedGoogle && publisher_platform_name === 'Google') _isAuthencated = true;
            if (isAuthencatedFacebook && publisher_platform_name === 'Facebook') _isAuthencated = true;
            if (isAuthencatedInstagram && publisher_platform_name === 'Instagram') _isAuthencated = true;
            if (isAuthencatedLinkedin && publisher_platform_name === 'LinkedIn') _isAuthencated = true;
            if (isAuthencatedPinterest && publisher_platform_name === 'Pinterest') _isAuthencated = true;
            if (isAuthencatedMessenger && publisher_platform_name === 'Messenger') _isAuthencated = true;
            if (isAuthencatedMeta && publisher_platform_name === 'Audience_network') _isAuthencated = true;
        } else if (adsUpdating.ads_platform_strings === 'Linkedin,Google,Facebook') {
            if (isAuthencatedGoogle && publisher_platform_name === 'Google') _isAuthencated = true;
            if (isAuthencatedFacebook && publisher_platform_name === 'Facebook') _isAuthencated = true;
            if (isAuthencatedLinkedin && publisher_platform_name === 'LinkedIn') _isAuthencated = true;
        } else if (adsUpdating.ads_platform_strings === 'Snapchat,Pinterest,Messenger,Linkedin,Instagram,Facebook,Audience_network') {
            if (isAuthencatedFacebook && publisher_platform_name === 'Facebook') _isAuthencated = true;
            if (isAuthencatedInstagram && publisher_platform_name === 'Instagram') _isAuthencated = true;
            if (isAuthencatedLinkedin && publisher_platform_name === 'LinkedIn') _isAuthencated = true;
            if (isAuthencatedSnapchat && publisher_platform_name === 'Snapchat') _isAuthencated = true;
            if (isAuthencatedPinterest && publisher_platform_name === 'Pinterest') _isAuthencated = true;
            if (isAuthencatedMessenger && publisher_platform_name === 'Messenger') _isAuthencated = true;
            if (isAuthencatedMeta && publisher_platform_name === 'Audience_network') _isAuthencated = true;
        } else if (adsUpdating.ads_platform_strings === 'Pinterest,Instagram,Facebook') {
            if (isAuthencatedFacebook && publisher_platform_name === 'Facebook') _isAuthencated = true;
            if (isAuthencatedInstagram && publisher_platform_name === 'Instagram') _isAuthencated = true;
            if (isAuthencatedPinterest && publisher_platform_name === 'Pinterest') _isAuthencated = true;
        } else if (adsUpdating.ads_platform_strings === 'Tiktok,Snapchat,Pinterest,Messenger,Instagram,Facebook,Audience_network') {
            if (isAuthencatedFacebook && publisher_platform_name === 'Facebook') _isAuthencated = true;
            if (isAuthencatedInstagram && publisher_platform_name === 'Instagram') _isAuthencated = true;
            if (isAuthencatedSnapchat && publisher_platform_name === 'Snapchat') _isAuthencated = true;
            if (isAuthencatedPinterest && publisher_platform_name === 'Pinterest') _isAuthencated = true;
            if (isAuthencatedTiktok && publisher_platform_name === 'Tiktok') _isAuthencated = true;
            if (isAuthencatedMessenger && publisher_platform_name === 'Messenger') _isAuthencated = true;
            if (isAuthencatedMeta && publisher_platform_name === 'Audience_network') _isAuthencated = true;
        } else if (adsUpdating.ads_platform_strings === 'Youtube') {
            if (isAuthencatedYoutube && publisher_platform_name === 'Youtube') _isAuthencated = true;
        }
        if (isAuthencatedGoogle && publisher_platform_name === 'Google') _isAuthencated = true;
        if (isAuthencatedFacebook && publisher_platform_name === 'Facebook') _isAuthencated = true;
        if (isAuthencatedInstagram && publisher_platform_name === 'Instagram') _isAuthencated = true;
        if (isAuthencatedLinkedin && publisher_platform_name === 'LinkedIn') _isAuthencated = true;
        if (isAuthencatedPinterest && publisher_platform_name === 'Pinterest') _isAuthencated = true;
        if (isAuthencatedMessenger && publisher_platform_name === 'Messenger') _isAuthencated = true;
        if (isAuthencatedMeta && publisher_platform_name === 'Audience_network') _isAuthencated = true;
        if (!_isAuthencated) {
            setIsShow_AlertEnableAdAccountOneModel(true);
        }
    };

    const handleAlertEnableAdAccountAll = () => {
        // setIsShow_AlertEnableAdAccountAllModel(true);
        setIsShow_AlertUnSelectAdAccountAll(true);
    };

    const handleSaveChange = () => {
        formikAll.handleSubmit();
    };

    const showEditForm = (item, index) => {
        return <Fragment key={index}>{showAdsAll(index, item)}</Fragment>;
    };

    return (
        <>
            {showEditForm(adsUpdating, 1)}
            <div style={{ textAlign: 'right' }}>
                <Button variant="secondary" onClick={() => props.hideModal(false)}>
                    Close
                </Button>
                <Button disabled={isUnCheckedAll} onClick={() => handleSaveChange()} variant="primary">
                    Save Changes
                </Button>
            </div>
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
                    isKeyboard={true}
                />
            )}
        </>
    );
};

export default AdsEditForm;
