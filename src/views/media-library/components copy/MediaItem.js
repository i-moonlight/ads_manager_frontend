import React, { useState, useEffect } from 'react';
import { Card } from 'react-bootstrap';
import moment from 'moment';

import '../MediaLibrary.scss';
import { useMediaLibraryConsumer } from '../common/MediaLibraryContext';
import * as actions_MediaLAT from '../common/MediaLibraryActionType';
import { formatBytes } from '../../../utils/file';
// const URL_MEDIA = process.env.REACT_APP_BACKEND_SERVER_HOME;

const MediaItem = (props) => {
    const { item, dataLength } = props;
    const { id: item_id, width, height } = item;
    const { state_MLC, dispatch_MLC } = useMediaLibraryConsumer();
    const { mediaViewBy, mediaSelectedList, mediaSelectedList1 } = state_MLC;
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
    const [isShowYoutubeIcon, setIsShowYoutubeIcon] = useState(false);
    const [isShowTiktokIcon, setIsShowTiktokIcon] = useState(false);
    const [isShowPinterestIcon, setIsShowPinterestIcon] = useState(false);
    const [isMeetBasicSize, setIsMeetBasicSize] = useState(false);
    //
    const [isChosenThumb, setIsChosenThumb] = useState(false);

    useEffect(() => {
        if (mediaViewBy) {
            const mediaViewByString = mediaViewBy.toString();
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
        if (isChosenThumb) {
            // console.log('handleSelectItem_True_' + String(item_id), isChosenThumb);
            if (!mediaSelectedList.includes(item_id)) {
                let arrTemp = [...mediaSelectedList];
                arrTemp.push(item_id);
                dispatch_MLC({
                    type: actions_MediaLAT.AT_SET_MEDIA_SELECTED_LIST,
                    payload: arrTemp
                });
                //
                let arrTemp1 = [...mediaSelectedList1];
                arrTemp1.push(item);
                dispatch_MLC({
                    type: actions_MediaLAT.AT_SET_MEDIA_SELECTED_LIST_1,
                    payload: arrTemp1
                });
            }
        } else {
            if (mediaSelectedList.length > 0) {
                // console.log('handleSelectItem_False_' + String(item_id), isChosenThumb);
                var arrTemp = [...mediaSelectedList];
                var objIsExist = arrTemp.includes(item_id);
                // console.log("objIsExist_type:", objIsExist)
                if (objIsExist) {
                    let index = arrTemp.findIndex((_item_id) => _item_id === item_id);
                    arrTemp.splice(index, 1);
                    dispatch_MLC({
                        type: actions_MediaLAT.AT_SET_MEDIA_SELECTED_LIST,
                        payload: arrTemp
                    });
                    //
                    var arrTemp1 = [...mediaSelectedList1];
                    arrTemp1.splice(index, 1);
                    dispatch_MLC({
                        type: actions_MediaLAT.AT_SET_MEDIA_SELECTED_LIST_1,
                        payload: arrTemp1
                    });
                }
            }
        }
        //
        var w_h = String(width) + 'x' + String(height);
        if (w_h === '600x600') {
            setIsShowGoogleIcon(true);
            setIsShowFacebookIcon(true);
            setIsShowLinkedInIcon(true);
            setIsShowInstagramIcon(true);
            setIsMeetBasicSize(true);
        }
        if (w_h === '600x1000') {
            setIsShowGoogleIcon(true);
            setIsMeetBasicSize(true);
        }
        if (w_h === '728x90') {
            setIsShowGoogleIcon(true);
            setIsShowYoutubeIcon(true);
            setIsMeetBasicSize(true);
        }
        if (w_h === '1200x1000') {
            setIsShowFacebookIcon(true);
            setIsShowInstagramIcon(true);
            setIsMeetBasicSize(true);
        }
        if (w_h === '1080x1920') {
            setIsShowFacebookIcon(true);
            setIsShowSnapchatIcon(true);
            setIsShowTiktokIcon(true);
            setIsShowInstagramIcon(true);
            setIsMeetBasicSize(true);
        }
        if (w_h === '1920x1080') {
            setIsShowYoutubeIcon(true);
            setIsMeetBasicSize(true);
        }
        if (w_h === '1000x1500') {
            setIsShowPinterestIcon(true);
            setIsMeetBasicSize(true);
        }
    }, [mediaViewBy, isChosenThumb, item_id, width, height, mediaSelectedList, dispatch_MLC]);
    // console.log('mediaViewBy: ', mediaViewBy);

    const handleSelectItem = () => {
        setIsChosenThumb(!isChosenThumb);
    };

    return (
        <div
            style={{ width: dataLength === 1 ? '50%' : '100%' }}
            onClick={() => handleSelectItem()}
            className={`media_item_container ${isChosenThumb ? 'media_item_container_active' : ''}`}
        >
            <Card>
                <div className="tile media_item__image">
                    {/* <Card.Img variant="top" src={URL_MEDIA + item.file} /> */}
                    {!item.is_video && <Card.Img variant="top" src={item.file} />}
                    {item.is_video && (
                        <video width="100%" controls>
                            <source src={item.file} type={item.type} />
                            Your browser does not support HTML video.
                        </video>
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
                            {isShowYoutubeIcon && <i className="fab fa-youtube"></i>}
                            {isShowTiktokIcon && <i className="fab fa-tiktok"></i>}
                            {isShowPinterestIcon && <i className="fab fa-pinterest"></i>}
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
    );
};

export default MediaItem;
