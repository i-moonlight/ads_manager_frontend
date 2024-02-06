import React, { useState, useEffect } from 'react';
import { Card } from 'react-bootstrap';
import moment from 'moment';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import './MediaModal.scss';
import { formatBytes } from '../../../../utils/file';
//
import { useExtraLibraryConsumer } from '../../../../contexts/extra/ExtraLibraryContext';
import * as actions_ExtraLAT from '../../../../contexts/extra/ExtraLibraryActionType';
//
import ImagePlacholder from '../../../../assets/images/image_lazy_loading.gif';
import { useSelector } from 'react-redux';
import { selectAdAccounts } from '../../../../store/slices/ad-accounts';

const MediaItem = (props) => {
    const { item } = props; //dataLength
    const { id: item_id, width, height, is_video } = item;
    //
    const { state_ExtraLC, dispatch_ExtraLC } = useExtraLibraryConsumer();
    const { extra_mediaViewBy, extra_mediaSelectedList, extra_mediaSelectedList1 } = state_ExtraLC;
    //
    const [isShowName, setIsShowName] = useState(false);
    const [isShowSize, setIsShowSize] = useState(true);
    const [isShowDate, setIsShowDate] = useState(false);
    const [isShowImp, setIsShowImp] = useState(false);
    const [isShowClicks, setIsShowClicks] = useState(false);
    const [isShowSpent, setIsShowSpent] = useState(false);
    //
    const [isShowGoogleIcon, setIsShowGoogleIcon] = useState(false);
    const [isShowFacebookIcon, setIsShowFacebookIcon] = useState(false);
    const [isShowSnapchatIcon, setIsShowSnapchatIcon] = useState(false);
    const [isShowLinkedInIcon, setIsShowLinkedInIcon] = useState(false);
    const [isShowInstagramIcon, setIsShowInstagramIcon] = useState(false);

    const [isShowTiktokIcon, setIsShowTiktokIcon] = useState(false);
    const [isShowPinterestIcon, setIsShowPinterestIcon] = useState(false);
    //
    const [isShowYoutubeIcon, setIsShowYoutubeIcon] = useState(false);
    const [isShowMetaIcon, setIsShowMetaIcon] = useState(false);
    const [isShowMessengerIcon, setIsShowMessengerIcon] = useState(false);
    //
    const [isMeetBasicSize, setIsMeetBasicSize] = useState(false);
    //
    const [isChosenThumb, setIsChosenThumb] = useState(false);

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

    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        if (extra_mediaViewBy) {
            const mediaViewByString = extra_mediaViewBy.toString();
            if (mediaViewByString.includes('Name')) {
                setIsShowName(true);
            } else {
                setIsShowName(false);
            }
            if (mediaViewByString.includes('Size')) {
                setIsShowSize(true);
            } else {
                setIsShowSize(false);
            }
            if (mediaViewByString.includes('Date')) {
                setIsShowDate(true);
            } else {
                setIsShowDate(false);
            }
            if (mediaViewByString.includes('Impressions')) {
                setIsShowImp(true);
            } else {
                setIsShowImp(false);
            }
            if (mediaViewByString.includes('Clicks')) {
                setIsShowClicks(true);
            } else {
                setIsShowClicks(false);
            }
            if (mediaViewByString.includes('Spent')) {
                setIsShowSpent(true);
            } else {
                setIsShowSpent(false);
            }
        }
        //
        var w_h = String(width) + 'x' + String(height);
        let compareRatio0 = width / height;
        if (
            height >= 630 &&
            width >= 630 &&
            compareRatio0 <= 1.91 &&
            compareRatio0 > 1 &&
            compareRatio0 !== 1 &&
            compareRatio0 !== 6 / 5 &&
            is_video === false
        ) {
            setIsShowFacebookIcon(true);
            setIsShowLinkedInIcon(true);
            setIsMeetBasicSize(true);
            setIsShowMetaIcon(true);

            if (isAuthencatedFacebook || isAuthencatedLinkedin || isAuthencatedMeta) setIsAuthenticated(true);
        }
        if ((w_h === '1080x1080' || (compareRatio0 === 1 && width >= 1080 && height >= 1080)) && is_video === false) {
            setIsShowGoogleIcon(true);
            setIsShowFacebookIcon(true);
            setIsShowInstagramIcon(true);
            setIsShowLinkedInIcon(true);
            setIsShowPinterestIcon(true);
            setIsMeetBasicSize(true);
            setIsShowMetaIcon(true);
            setIsShowMessengerIcon(true);

            if (
                isAuthencatedGoogle ||
                isAuthencatedFacebook ||
                isAuthencatedInstagram ||
                isAuthencatedLinkedin ||
                isAuthencatedPinterest ||
                isAuthencatedMeta ||
                isAuthencatedMessenger
            )
                setIsAuthenticated(true);
        }
        if ((w_h === '1080x1920') & (is_video === false)) {
            setIsShowSnapchatIcon(true);
            setIsShowFacebookIcon(true);
            setIsShowInstagramIcon(true);
            setIsShowLinkedInIcon(true);
            setIsShowPinterestIcon(true);
            setIsMeetBasicSize(true);
            setIsShowMetaIcon(true);
            setIsShowMessengerIcon(true);

            if (
                isAuthencatedSnapchat ||
                isAuthencatedFacebook ||
                isAuthencatedInstagram ||
                isAuthencatedLinkedin ||
                isAuthencatedPinterest ||
                isAuthencatedMeta ||
                isAuthencatedMessenger
            )
                setIsAuthenticated(true);
        }
        if ((w_h === '1000x1500' || (compareRatio0 === 2 / 3 && width >= 1000 && height >= 1500)) && is_video === false) {
            setIsShowPinterestIcon(true);
            setIsMeetBasicSize(true);

            if (isAuthencatedPinterest) setIsAuthenticated(true);
        }
        if ((w_h === '1296x1080' || (compareRatio0 === 6 / 5 && width >= 1296 && height >= 1080)) && is_video === false) {
            setIsShowGoogleIcon(true);
            setIsShowFacebookIcon(true);
            setIsShowLinkedInIcon(true);
            setIsMeetBasicSize(true);

            if (isAuthencatedGoogle || isAuthencatedFacebook || isAuthencatedLinkedin) setIsAuthenticated(true);
        }
        if ((w_h === '120x600' || (compareRatio0 === 1 / 5 && width >= 120 && height >= 600)) && is_video === false) {
            setIsShowGoogleIcon(true);
            setIsMeetBasicSize(true);

            if (isAuthencatedGoogle) setIsAuthenticated(true);
        }
        if ((w_h === '160x600' || (compareRatio0 === 4 / 15 && width >= 160 && height >= 600)) && is_video === false) {
            setIsShowGoogleIcon(true);
            setIsMeetBasicSize(true);

            if (isAuthencatedGoogle) setIsAuthenticated(true);
        }
        if ((w_h === '300x600' || (compareRatio0 === 1 / 2 && width >= 300 && height >= 600)) && is_video === false) {
            setIsShowGoogleIcon(true);
            setIsMeetBasicSize(true);

            if (isAuthencatedGoogle) setIsAuthenticated(true);
        }
        if (w_h === '468x60') {
            setIsShowGoogleIcon(true);
            setIsMeetBasicSize(true);

            if (isAuthencatedGoogle) setIsAuthenticated(true);
        }
        if (w_h === '728x90') {
            setIsShowGoogleIcon(true);
            setIsMeetBasicSize(true);

            if (isAuthencatedGoogle) setIsAuthenticated(true);
        }
        if (w_h === '930x180') {
            setIsShowGoogleIcon(true);
            setIsMeetBasicSize(true);

            if (isAuthencatedGoogle) setIsAuthenticated(true);
        }
        if (w_h === '970x90') {
            setIsShowGoogleIcon(true);
            setIsMeetBasicSize(true);

            if (isAuthencatedGoogle) setIsAuthenticated(true);
        }
        if (w_h === '970x250') {
            setIsShowGoogleIcon(true);
            setIsMeetBasicSize(true);

            if (isAuthencatedGoogle) setIsAuthenticated(true);
        }
        if (w_h === '980x120') {
            setIsShowGoogleIcon(true);
            setIsMeetBasicSize(true);

            if (isAuthencatedGoogle) setIsAuthenticated(true);
        }
        if (w_h === '300x1050') {
            setIsShowGoogleIcon(true);
            setIsMeetBasicSize(true);

            if (isAuthencatedGoogle) setIsAuthenticated(true);
        }
        // Video
        if (w_h === '1080x1920' && is_video === true) {
            setIsShowFacebookIcon(true);
            setIsShowSnapchatIcon(true);
            setIsShowTiktokIcon(true);
            setIsShowInstagramIcon(true);
            setIsShowPinterestIcon(true);
            setIsMeetBasicSize(true);
            setIsShowMetaIcon(true);
            setIsShowMessengerIcon(true);

            if (
                isAuthencatedFacebook ||
                isAuthencatedSnapchat ||
                isAuthencatedTiktok ||
                isAuthencatedInstagram ||
                isAuthencatedPinterest ||
                isAuthencatedMeta ||
                isAuthencatedMessenger
            )
                setIsAuthenticated(true);
        }
        let compareRatio = width / height;
        if (
            height >= 1080 &&
            width >= 1080 &&
            compareRatio <= 1.91 &&
            width / height !== 9 / 16 &&
            width / height !== 16 / 9 &&
            is_video === true
        ) {
            setIsShowFacebookIcon(true);
            setIsShowInstagramIcon(true);
            setIsShowPinterestIcon(true);
            setIsMeetBasicSize(true);

            if (isAuthencatedFacebook || isAuthencatedInstagram || isAuthencatedPinterest) setIsAuthenticated(true);
        }
        //
        if (height >= 1080 && width >= 1920 && compareRatio === 16 / 9 && is_video === true) {
            setIsShowYoutubeIcon(true);
            setIsMeetBasicSize(true);

            if (isAuthencatedYoutube) setIsAuthenticated(true);
        }
        //
    }, [extra_mediaViewBy, isChosenThumb, is_video, width, height, extra_mediaSelectedList, isAuthencatedFacebook, isAuthencatedGoogle, isAuthencatedInstagram, isAuthencatedLinkedin, isAuthencatedMessenger, isAuthencatedMeta, isAuthencatedPinterest, isAuthencatedSnapchat, isAuthencatedTiktok, isAuthencatedYoutube]);

    useEffect(() => {
        if (extra_mediaSelectedList.includes(item.id)) {
            setIsChosenThumb(true);
        } else {
            setIsChosenThumb(false);
        }
    }, [setIsChosenThumb, extra_mediaSelectedList, item.id]);

    const handleSelectItem = () => {
        setIsChosenThumb(!isChosenThumb);
        if (!isChosenThumb) {
            if (!extra_mediaSelectedList.includes(item_id)) {
                let arrTemp = [...extra_mediaSelectedList];
                arrTemp.push(item_id);
                dispatch_ExtraLC({
                    type: actions_ExtraLAT.AT_SET_EXTRA_MEDIA_SELECTED_LIST,
                    payload: arrTemp
                });
                let arrTemp1 = [...extra_mediaSelectedList1];
                arrTemp1.push(item);
                dispatch_ExtraLC({
                    type: actions_ExtraLAT.AT_SET_EXTRA_MEDIA_SELECTED_LIST_1,
                    payload: arrTemp1
                });
            }
        } else {
            if (extra_mediaSelectedList && extra_mediaSelectedList.length > 0) {
                var arrTemp = [...extra_mediaSelectedList];
                var objIsExist = arrTemp.includes(item_id);
                if (objIsExist) {
                    let index = arrTemp.findIndex((_item_id) => _item_id === item_id);
                    arrTemp.splice(index, 1);
                    dispatch_ExtraLC({
                        type: actions_ExtraLAT.AT_SET_EXTRA_MEDIA_SELECTED_LIST,
                        payload: arrTemp
                    });
                    var arrTemp1 = [...extra_mediaSelectedList1];
                    arrTemp1.splice(index, 1);
                    dispatch_ExtraLC({
                        type: actions_ExtraLAT.AT_SET_EXTRA_MEDIA_SELECTED_LIST_1,
                        payload: arrTemp1
                    });
                }
            }
        }
    };

    const divStyle = {
        width: '100%'
        // border: isChosenThumb_Me ? '2px dashed red' : 'reset'
    };

    return (
        isAuthenticated && (
            <div
                style={divStyle}
                onClick={() => handleSelectItem()}
                className={`media_item_container ${isChosenThumb ? 'media_item_container_active' : ''}`}
            >
                <Card>
                    <div className="tile media_item__image">
                        {!item.is_video && (
                            <LazyLoadImage
                                width="100%"
                                height="100%"
                                src={item.file}
                                alt={item.file}
                                className="product-image"
                                placeholderSrc={ImagePlacholder}
                            />
                        )}
                        {item.is_video && (
                            <LazyLoadImage
                                width="100%"
                                height="100%"
                                src={item.thumb_video}
                                alt={item.file}
                                className="product-image"
                                placeholderSrc={ImagePlacholder}
                            />
                        )}
                    </div>
                    <Card.Body className="tile media_item_content">
                        {isMeetBasicSize && (
                            <div className="media_item__social_logo">
                                {isShowGoogleIcon && <i className="fab fa-google"></i>}
                                {isShowFacebookIcon && <i className="fab fa-facebook-f"></i>}
                                {isShowSnapchatIcon && <i className="fab fa-snapchat-ghost"></i>}
                                {isShowLinkedInIcon && <i className="fab fa-linkedin-in"></i>}
                                {isShowInstagramIcon && <i className="fab fa-instagram"></i>}
                                {isShowTiktokIcon && <i className="fab fa-tiktok"></i>}
                                {isShowPinterestIcon && <i className="fab fa-pinterest"></i>}
                                {isShowYoutubeIcon && <i className="fab fa-youtube"></i>}
                                {isShowMetaIcon && <i className="fab fa-meta"></i>}
                                {isShowMessengerIcon && <i className="fab fa-facebook-messenger"></i>}
                            </div>
                        )}
                        {isShowName && <div className="job-meta-data mb-1">Name: {item.display_file_name}</div>}
                        {isShowSize && <div className="job-meta-data">Size: {formatBytes(parseInt(item.size))}</div>}
                        {isShowSize && (
                            <div className="job-meta-data">
                                {item.is_video && (
                                    <>
                                        Resolution: {item.width}x{item.height}
                                    </>
                                )}
                                {!item.is_video && (
                                    <>
                                        WxH: {item.width}x{item.height}px
                                    </>
                                )}
                            </div>
                        )}
                        {isShowDate && <div className="job-meta-data">Date: {moment(item.uploaded).format('hh:mm A YYYY/MM/DD')}</div>}
                        {isShowImp && <div className="job-meta-data">Imp: {item.impressions}</div>}
                        {isShowClicks && <div className="job-meta-data">Clicks: {item.clicks}</div>}
                        {isShowSpent && <div className="job-meta-data">Spent: {item.spent}</div>}
                    </Card.Body>
                </Card>
            </div>
        )
    );
};

export default MediaItem;
