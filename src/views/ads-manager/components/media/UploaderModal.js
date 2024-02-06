import React, { useState, useRef } from 'react';
import { DropzoneComponent } from 'react-dropzone-component';
import { Button } from 'react-bootstrap';
import PNotify from 'pnotify/dist/es/PNotify';

import './MediaModal.scss';
import { useMediaLibraryConsumer } from '../../common/MediaLibraryContext';
import * as actions_MediaLAT from '../../common/MediaLibraryActionType';
import { mediaLibraryUploadImageApi } from '../../../../apis/mediaLibraryApi';
import { STATUS_CODE } from '../../../../apis/statusCodeApi';
//
import { useExtraLibraryConsumer } from '../../../../contexts/extra/ExtraLibraryContext';
import * as actions_ExtraLAT from '../../../../contexts/extra/ExtraLibraryActionType';
import generateVideoThumbnail from '../../../../utils/generateVideoThumbnail';

// https://stackoverflow.com/questions/57237983/how-to-call-axios-on-submit-button-in-react-dropzone
// https://docs.dropzone.dev/configuration/basics/methods
const UploaderModal = (props) => {
    const { dispatch_ExtraLC } = useExtraLibraryConsumer();
    //
    const { state_MLC, dispatch_MLC } = useMediaLibraryConsumer();
    const { isActionLoading, isRefreshAfterUpdate } = state_MLC;
    //
    var [isHasPreviewFiles, setIsHasPreviewFiles] = useState(false);
    var fileListTemp = useRef([]);
    var fileListTemp1 = useRef([]);
    var myDropzone = useRef(null);
    var isValidVideo = useRef(true);
    var countNotificationsOnImage = 0;
    var countNotificationsOnVideo = 0;

    const djsConfig = {
        addRemoveLinks: true,
        acceptedFiles: 'image/jpeg,image/png,image/gif,video/mp4,video/mov,video/m4v',
        autoProcessQueue: false,
        uploadMultiple: true
        /*autoProcessQueue: false,
        uploadprogress: 100*/
    };
    const config = {
        iconFiletypes: ['.jpg', '.png', '.gif', '.mp4', '.mov', 'm4v'],
        showFiletypeIcon: true,
        postUrl: 'no-url'
    };
    // const sizeFileList = [
    //     { width: 600, height: 600 },
    //     { width: 600, height: 1000 },
    //     { width: 728, height: 90 },
    //     { width: 1200, height: 1000 },
    //     { width: 1080, height: 1920 },
    //     { width: 1920, height: 1080 },
    //     { width: 1000, height: 1500 }
    // ];
    const sizeFileList_image_special = [
        { width: 2062, height: 1080 } //1.91:1
    ];
    const sizeFileList_image_Google = [
        { width: 1080, height: 1080, wRatio: 1, hRatio: 1 }, //1:1
        { width: 1296, height: 1080, wRatio: 6, hRatio: 5 }, //6:5
        { width: 120, height: 600, wRatio: 1, hRatio: 5 }, //1:5
        { width: 160, height: 600, wRatio: 4, hRatio: 15 }, //4:15
        { width: 300, height: 600, wRatio: 1, hRatio: 2 }, //1:2
        { width: 468, height: 60 },
        { width: 728, height: 90 },
        { width: 930, height: 180 },
        { width: 970, height: 90 },
        { width: 970, height: 250 },
        { width: 980, height: 120 },
        { width: 300, height: 1050 }
    ];
    const sizeFileList_image_Facebook = [
        { width: 1080, height: 1080, wRatio: 1, hRatio: 1 }, //1:1
        { width: 1080, height: 1920, wRatio: 9, hRatio: 16 }, //9:16
        { width: 1296, height: 1080, wRatio: 6, hRatio: 5 } //6:5
    ];
    const sizeFileList_image_LinkedIn = [
        { width: 1080, height: 1080, wRatio: 1, hRatio: 1 }, //1:1
        { width: 1080, height: 1920, wRatio: 9, hRatio: 16 }, //9:16
        { width: 1296, height: 1080, wRatio: 6, hRatio: 5 } //6:5
    ];
    const sizeFileList_image_Instagram = [
        { width: 1080, height: 1080, wRatio: 1, hRatio: 1 }, //1:1
        { width: 1080, height: 1920, wRatio: 9, hRatio: 16 } //9:16
    ];
    const sizeFileList_image_Pinterest = [
        { width: 1080, height: 1080, wRatio: 1, hRatio: 1 }, //1:1
        { width: 1080, height: 1920, wRatio: 9, hRatio: 16 }, //9:16
        { width: 1000, height: 1500, wRatio: 2, hRatio: 3 } //2:3
    ];
    //
    const sizeFileList_image_Meta = [
        { width: 1080, height: 1080, wRatio: 1, hRatio: 1 }, //1:1
        { width: 1080, height: 1920, wRatio: 9, hRatio: 16 } //9:16
    ];
    const sizeFileList_image_Messenger = [
        { width: 1080, height: 1080, wRatio: 1, hRatio: 1 }, //1:1
        { width: 1080, height: 1920, wRatio: 9, hRatio: 16 } //9:16
    ];
    //
    const sizeFileList_video_special = [
        { width: 2062, height: 1080 } //1.91:1
    ];
    const sizeFileList_video_Facebook = [
        { width: 1080, height: 1920, wRatio: 9, hRatio: 16 } //9:16
    ];
    const sizeFileList_video_Instagram = [
        { width: 1080, height: 1920, wRatio: 9, hRatio: 16 } //9:16
    ];
    const sizeFileList_video_Pinterest = [
        { width: 1080, height: 1920, wRatio: 9, hRatio: 16 } //9:16
    ];
    const sizeFileList_video_Snapchat = [
        { width: 1080, height: 1920, wRatio: 9, hRatio: 16 } //9:16
    ];
    const sizeFileList_video_Tiktok = [
        { width: 1080, height: 1920, wRatio: 9, hRatio: 16 } //9:16
    ];
    const sizeFileList_video_Meta = [
        { width: 1080, height: 1920, wRatio: 9, hRatio: 16 } //9:16
    ];
    const sizeFileList_video_Messenger = [
        { width: 1080, height: 1920, wRatio: 9, hRatio: 16 } //9:16
    ];
    const sizeFileList_video_Youtube = [
        { width: 1920, height: 1080, wRatio: 16, hRatio: 9 } //16:9
    ];

    var addedfileCallBack = function (file) {
        // console.log('addedfileCallBack==========================================================================');
        if (file.type.includes('video')) {
            readVideoFile(file);
            countNotificationsOnVideo = 0;
            generateVideoThumbnail(file).then((t) => {
                file.previewElement.querySelector('[data-dz-thumbnail]').src = t;
            });
        } else if (file.type.includes('image')) {
            readImageFile(file);
            countNotificationsOnImage = 0;
            // console.log('addedfileCallBack_image_myDropzone.current: ', myDropzone.current);
            // console.log('addedfileCallBack_image_fileListTemp.current: ', fileListTemp.current.length);
            // console.log('addedfileCallBack_image_fileListTemp1.current: ', fileListTemp1.current.length);
        }
    };
    var removedfileCallBack = function (file) {
        console.log('removedfileCallBack==========================================================================');
        // console.log('removedfileCallBack_first_myDropzone.current: ', myDropzone.current);
        // console.log('removedfileCallBack_first_fileListTemp.current: ', fileListTemp.current.length);
        // console.log('removedfileCallBack_first_fileListTemp1.current: ', fileListTemp1.current.length);
        // if (myDropzone.current && myDropzone.current.files.length <= fileListTemp.current.length) {
        // console.log('removedfileCallBack_recaculate: ', typeof(fileListTemp.current));
        var objIsExist = fileListTemp.current.find((elem) => {
            return elem.name === file.name;
        });
        if (objIsExist) {
            let index = fileListTemp.current.findIndex((obj) => obj.name === file.name);
            fileListTemp.current.splice(index, 1);
            let index1 = fileListTemp1.current.findIndex((obj) => obj.name === file.name);
            fileListTemp1.current.splice(index1, 1);
            // console.log('removedfileCallBack_objIsExist_fileListTemp1.current: ', fileListTemp1.current);
        }
        // }
        if (fileListTemp.current.length > 0) {
            setIsHasPreviewFiles(true);
        } else {
            setIsHasPreviewFiles(false);
        }
        // console.log('removedfileCallBack_fileListTemp.current: ', fileListTemp.current);
        // console.log('removedfileCallBack_end_myDropzone.current: ', myDropzone.current);
        // console.log('removedfileCallBack_end_fileListTemp.current: ', fileListTemp.current.length);
        // console.log('removedfileCallBack_end_fileListTemp1.current: ', fileListTemp1.current.length);
    };
    function readVideoFile(file) {
        var reader = new FileReader();
        reader.onload = function (e) {
            var videoElement = document.createElement('video');
            videoElement.src = e.target.result;
            //
            // <=2Gb 2x1024x1024x1024
            if (file.size > 2147483648) {
                const notice = PNotify.notice({
                    title: false,
                    text: 'Size of file ' + file.name + ' should be less 2Gb!',
                    icon: true,
                    modules: {
                        Buttons: {
                            closer: false,
                            sticker: false
                        }
                    },
                    delay: 2500
                });
                notice.on('click', function () {
                    notice.close();
                });
                myDropzone.current.removeFile(file);
                return false;
            }
            //
            //
            var timer = setInterval(() => {
                if (videoElement.readyState === 4) {
                    if (videoElement.duration) {
                        // console.log('videoElement.videoWidth: ', videoElement.videoWidth);
                        var fileIsExistInSize_video_special = sizeFileList_video_special.find((elem) => {
                            // { width: 2062, height: 1080 } //1.91:1
                            let condition = (videoElement.videoWidth >= 1080) & (videoElement.videoHeight >= 1080);
                            let ratioMin = 1;
                            let ratioMax = 1.91;
                            let currentRatio = (videoElement.videoWidth / videoElement.videoHeight).toFixed(2);
                            let result = condition & (currentRatio >= ratioMin) & (currentRatio <= ratioMax);
                            // console.log('fileIsExistInSize_video_special_result: ', result);
                            return result;
                        });
                        var fileIsExistInSize_Facebook = sizeFileList_video_Facebook.find((elem) => {
                            let condition = (videoElement.videoWidth >= elem.width) & (videoElement.videoHeight >= elem.height);
                            let validRatio = videoElement.videoWidth / videoElement.videoHeight === elem.wRatio / elem.hRatio;
                            return condition & validRatio;
                            // return elem.width === videoElement.videoWidth && elem.height === videoElement.videoHeight;
                        });
                        var fileIsExistInSize_Instagram = sizeFileList_video_Instagram.find((elem) => {
                            let condition = (videoElement.videoWidth >= elem.width) & (videoElement.videoHeight >= elem.height);
                            let validRatio = videoElement.videoWidth / videoElement.videoHeight === elem.wRatio / elem.hRatio;
                            return condition & validRatio;
                        });
                        var fileIsExistInSize_Snapchat = sizeFileList_video_Snapchat.find((elem) => {
                            let condition = (videoElement.videoWidth >= elem.width) & (videoElement.videoHeight >= elem.height);
                            let validRatio = videoElement.videoWidth / videoElement.videoHeight === elem.wRatio / elem.hRatio;
                            return condition & validRatio;
                        });
                        var fileIsExistInSize_Pinterest = sizeFileList_video_Pinterest.find((elem) => {
                            let condition = (videoElement.videoWidth >= elem.width) & (videoElement.videoHeight >= elem.height);
                            let validRatio = videoElement.videoWidth / videoElement.videoHeight === elem.wRatio / elem.hRatio;
                            return condition & validRatio;
                        });
                        var fileIsExistInSize_Tiktok = sizeFileList_video_Tiktok.find((elem) => {
                            let condition = (videoElement.videoWidth >= elem.width) & (videoElement.videoHeight >= elem.height);
                            let validRatio = videoElement.videoWidth / videoElement.videoHeight === elem.wRatio / elem.hRatio;
                            return condition & validRatio;
                        });
                        //
                        var fileIsExistInSize_Meta = sizeFileList_video_Meta.find((elem) => {
                            let condition = (videoElement.videoWidth >= elem.width) & (videoElement.videoHeight >= elem.height);
                            let validRatio = videoElement.videoWidth / videoElement.videoHeight === elem.wRatio / elem.hRatio;
                            return condition & validRatio;
                        });
                        var fileIsExistInSize_Messenger = sizeFileList_video_Messenger.find((elem) => {
                            let condition = (videoElement.videoWidth >= elem.width) & (videoElement.videoHeight >= elem.height);
                            let validRatio = videoElement.videoWidth / videoElement.videoHeight === elem.wRatio / elem.hRatio;
                            return condition & validRatio;
                        });
                        var fileIsExistInSize_Youtube = sizeFileList_video_Youtube.find((elem) => {
                            let condition = (videoElement.videoWidth >= elem.width) & (videoElement.videoHeight >= elem.height);
                            let validRatio = videoElement.videoWidth / videoElement.videoHeight === elem.wRatio / elem.hRatio;
                            return condition & validRatio;
                        });
                        if (
                            (fileIsExistInSize_video_special === undefined) &
                            (fileIsExistInSize_Facebook === undefined) &
                            (fileIsExistInSize_Instagram === undefined) &
                            (fileIsExistInSize_Pinterest === undefined) &
                            (fileIsExistInSize_Snapchat === undefined) &
                            (fileIsExistInSize_Tiktok === undefined) &
                            (fileIsExistInSize_Meta === undefined) &
                            (fileIsExistInSize_Messenger === undefined) &
                            (fileIsExistInSize_Youtube === undefined)
                        ) {
                            isValidVideo.current = false;
                        }
                        //
                        var fileIsExist = fileListTemp.current.find((elem) => {
                            return elem.name === file.name && elem.type.includes('video');
                        });
                        if (fileIsExist === undefined) {
                            fileListTemp.current.push(file);
                            fileListTemp1.current.push({
                                file: file,
                                width: videoElement.videoWidth,
                                height: videoElement.videoHeight,
                                type: 'video'
                            });
                        } else if (fileIsExist.name === file.name && fileIsExist.type.includes('video')) {
                            const notice = PNotify.notice({
                                title: false,
                                text: 'File ' + file.name + ' exists!',
                                icon: true,
                                modules: {
                                    Buttons: {
                                        closer: false,
                                        sticker: false
                                    }
                                },
                                delay: 2500
                            });
                            notice.on('click', function () {
                                notice.close();
                            });
                            myDropzone.current.removeFile(file);
                        }
                        if (fileListTemp.current.length > 0) {
                            setIsHasPreviewFiles(true);
                        } else {
                            setIsHasPreviewFiles(false);
                        }
                        // console.log('fileIsExistInSize_fileListTemp_video.current: ', fileListTemp.current);
                    }
                    clearInterval(timer);
                }
            }, 500);
            //
            if (isValidVideo.current === false) {
                if (countNotificationsOnVideo === 0) {
                    const notice = PNotify.notice({
                        title: false,
                        text: 'File ' + file.name + ' has no standard ratio!',
                        icon: true,
                        modules: {
                            Buttons: {
                                closer: false,
                                sticker: false
                            }
                        },
                        delay: 2500
                    });
                    notice.on('click', function () {
                        notice.close();
                    });
                    countNotificationsOnVideo += 1;
                }
                myDropzone.current.removeFile(file);
                return false;
            }
            dispatch_MLC({
                type: actions_MediaLAT.AT_SET_IS_ACTION_LOADING,
                payload: false
            });
        };
        reader.readAsDataURL(file);
    }

    function readImageFile(file) {
        var reader = new FileReader();
        reader.onload = function (e) {
            var img = new Image();
            img.src = e.target.result;

            img.onload = function () {
                var w = this.width;
                var h = this.height;
                // <=5Mb 5x1024x1024
                if (file.size > 5242880) {
                    const notice = PNotify.notice({
                        title: false,
                        text: 'Size of file ' + file.name + ' should be less 5Mb!',
                        icon: true,
                        modules: {
                            Buttons: {
                                closer: false,
                                sticker: false
                            }
                        },
                        delay: 2500
                    });
                    notice.on('click', function () {
                        notice.close();
                    });
                    myDropzone.current.removeFile(file);
                    return false;
                }
                // console.log('readImageFile_this: ', file.size);
                //
                var fileIsExist = fileListTemp.current.find((elem) => {
                    return elem.name === file.name && elem.type.includes('image');
                });
                if (fileIsExist === undefined) {
                    fileListTemp.current.push(file);
                    fileListTemp1.current.push({ file: file, width: w, height: h, type: 'image' });
                } else if (fileIsExist.name === file.name && fileIsExist.type.includes('image')) {
                    const notice = PNotify.notice({
                        title: false,
                        text: 'File ' + file.name + ' exists!',
                        icon: true,
                        modules: {
                            Buttons: {
                                closer: false,
                                sticker: false
                            }
                        },
                        delay: 2500
                    });
                    notice.on('click', function () {
                        notice.close();
                    });
                    myDropzone.current.removeFile(file);
                    return false;
                }
                if (fileListTemp.current.length > 0) {
                    setIsHasPreviewFiles(true);
                } else {
                    setIsHasPreviewFiles(false);
                }
                //
                // var fileIsExistInSize = sizeFileList.find((elem) => {
                //     return elem.width === w && elem.height === h;
                // });
                var fileIsExistInSize_image_special = sizeFileList_image_special.find((elem) => {
                    // { width: 2062, height: 1080 } //1.91:1
                    let condition = (w >= 1080) & (h >= 1080);
                    let ratioMin = 1;
                    let ratioMax = 1.91;
                    let currentRatio = (w / h).toFixed(2);
                    let result = condition & (currentRatio >= ratioMin) & (currentRatio <= ratioMax);
                    // console.log('fileIsExistInSize_image_special_result: ', result);
                    return result;
                });
                var fileIsExistInSize_Google = sizeFileList_image_Google.find((elem) => {
                    if (elem.wRatio && elem.hRatio) {
                        let condition = (w >= elem.width) & (h >= elem.height);
                        let validRatio = w / h === elem.wRatio / elem.hRatio;
                        return condition & validRatio;
                    }
                    return elem.width === w && elem.height === h;
                });
                var fileIsExistInSize_Facebook = sizeFileList_image_Facebook.find((elem) => {
                    let condition = (w >= elem.width) & (h >= elem.height);
                    let validRatio = w / h === elem.wRatio / elem.hRatio;
                    // console.log('validRatio: ', validRatio);
                    return condition & validRatio;
                });
                var fileIsExistInSize_Instagram = sizeFileList_image_Instagram.find((elem) => {
                    let condition = (w >= elem.width) & (h >= elem.height);
                    let validRatio = w / h === elem.wRatio / elem.hRatio;
                    return condition & validRatio;
                });
                var fileIsExistInSize_LinkedIn = sizeFileList_image_LinkedIn.find((elem) => {
                    let condition = (w >= elem.width) & (h >= elem.height);
                    let validRatio = w / h === elem.wRatio / elem.hRatio;
                    return condition & validRatio;
                });
                var fileIsExistInSize_Pinterest = sizeFileList_image_Pinterest.find((elem) => {
                    let condition = (w >= elem.width) & (h >= elem.height);
                    let validRatio = w / h === elem.wRatio / elem.hRatio;
                    return condition & validRatio;
                });
                //
                var fileIsExistInSize_Meta = sizeFileList_image_Meta.find((elem) => {
                    let condition = (w >= elem.width) & (h >= elem.height);
                    let validRatio = w / h === elem.wRatio / elem.hRatio;
                    return condition & validRatio;
                });
                var fileIsExistInSize_Messenger = sizeFileList_image_Messenger.find((elem) => {
                    let condition = (w >= elem.width) & (h >= elem.height);
                    let validRatio = w / h === elem.wRatio / elem.hRatio;
                    return condition & validRatio;
                });
                console.log('not meet: ', fileIsExistInSize_image_special);
                if (
                    (fileIsExistInSize_image_special === undefined) &
                    (fileIsExistInSize_Google === undefined) &
                    (fileIsExistInSize_Facebook === undefined) &
                    (fileIsExistInSize_Instagram === undefined) &
                    (fileIsExistInSize_Pinterest === undefined) &
                    (fileIsExistInSize_LinkedIn === undefined) &
                    (fileIsExistInSize_Meta === undefined) &
                    (fileIsExistInSize_Messenger === undefined)
                ) {
                    if (countNotificationsOnImage === 0) {
                        const notice = PNotify.notice({
                            title: false,
                            text: 'File ' + file.name + ' has no standard size!',
                            icon: true,
                            modules: {
                                Buttons: {
                                    closer: false,
                                    sticker: false
                                }
                            },
                            delay: 2500
                        });
                        notice.on('click', function () {
                            notice.close();
                        });
                        countNotificationsOnImage += 1;
                    }
                    myDropzone.current.removeFile(file);
                    return false;
                }
            };
            dispatch_MLC({
                type: actions_MediaLAT.AT_SET_IS_ACTION_LOADING,
                payload: false
            });
        };
        reader.readAsDataURL(file);
    }

    // =====================================================================

    function initCallback(dropzone) {
        myDropzone.current = dropzone;
    }

    var eventHandlers = {
        init: initCallback,
        addedfile: addedfileCallBack,
        removedfile: removedfileCallBack
    };

    const handleClickUploadFiles = () => {
        // console.log('handleClickUploadFiles==========================================================================');
        dispatch_MLC({
            type: actions_MediaLAT.AT_SET_IS_ACTION_LOADING,
            payload: true
        });
        var _formData = new FormData();
        for (let count = 0; count < fileListTemp1.current.length; count++) {
            let fileArr = fileListTemp1.current[count];
            let fileObj = fileArr.file;
            let fileWidth = fileArr.width;
            let fileHeight = fileArr.height;
            let fileType = fileArr.type === 'image' ? 'image' : 'video';
            let fileInfo = fileObj.name + ';' + fileObj.type + ';' + fileObj.size + ';' + fileWidth + ';' + fileHeight + ';' + fileType;
            // console.log('fileInfo: ', fileInfo);
            // console.log('fileListTemp1.current[count]: ', fileListTemp1.current[count]);
            _formData.append('files', fileObj);
            _formData.append('infoFiles', fileInfo);
        }
        // return;
        mediaLibraryUploadImageApi(_formData).then((resp) => {
            if (resp && resp.status === STATUS_CODE.HTTP_201_CREATED) {
                myDropzone.current.removeAllFiles();
                fileListTemp.current = [];
                fileListTemp1.current = [];
                dispatch_MLC({
                    type: actions_MediaLAT.AT_SET_IS_REFRESH_AFTER_UPDATE,
                    payload: !isRefreshAfterUpdate
                });
                const notice = PNotify.success({
                    title: false,
                    text: 'Uploaded successfully!',
                    icon: true,
                    modules: {
                        Buttons: {
                            closer: false,
                            sticker: false
                        }
                    },
                    delay: 2500
                });
                notice.on('click', function () {
                    notice.close();
                });
            } else {
                const notice = PNotify.error({
                    title: false,
                    text: 'Error form server!',
                    icon: true,
                    modules: {
                        Buttons: {
                            closer: false,
                            sticker: false
                        }
                    },
                    delay: 2500
                });
                notice.on('click', function () {
                    notice.close();
                });
            }
            dispatch_MLC({
                type: actions_MediaLAT.AT_SET_IS_ACTION_LOADING,
                payload: false
            });
            props.setShowModal(false);
            dispatch_MLC({
                type: actions_MediaLAT.AT_SET_IS_ACTION_LOADING,
                payload: false
            });
            dispatch_ExtraLC({
                type: actions_ExtraLAT.AT_SET_EXTRA_MEDIA_IS_ACTIVATED_ACTIONS,
                payload: true
            });
        });
    };

    return (
        <div className="uploader_modal_container">
            <div className={isActionLoading ? 'drop_zone_component_disable' : ''}>
                <DropzoneComponent config={config} eventHandlers={eventHandlers} djsConfig={djsConfig} />
            </div>
            {/* <div className="uploader_modal_size_media_valid">
                {sizeFileList.map(({ width, height }, index) => {
                    return (
                        <Badge key={index} pill variant="warning" className="mr-1">
                            {width}x{height}px
                        </Badge>
                    );
                })}
            </div> */}
            <div className="uploader_modal_size_media_valid">Specifications for media:</div>

            <div className="uploader_modal_button_upload">
                <Button
                    onClick={() => {
                        handleClickUploadFiles();
                    }}
                    disabled={!isHasPreviewFiles || isActionLoading}
                >
                    {isActionLoading && (
                        <>
                            <span className="spinner-grow spinner-grow-sm mr-1" role="status" /> Uploading...please wait a few seconds.
                        </>
                    )}
                    {!isActionLoading && <>Upload Files</>}
                </Button>
            </div>
        </div>
    );
};

export default UploaderModal;
