import React, { useState, useRef } from 'react';
import { DropzoneComponent } from 'react-dropzone-component';
import { Button, Badge } from 'react-bootstrap';
import PNotify from 'pnotify/dist/es/PNotify';

import '../MediaLibrary.scss';
import { useMediaLibraryConsumer } from '../common/MediaLibraryContext';
import * as actions_MediaLAT from '../common/MediaLibraryActionType';
import { mediaLibraryUploadImageApi } from '../../../apis/mediaLibraryApi';
import { STATUS_CODE } from '../../../apis/statusCodeApi';

// https://stackoverflow.com/questions/57237983/how-to-call-axios-on-submit-button-in-react-dropzone
// https://docs.dropzone.dev/configuration/basics/methods
const UploaderModal = (props) => {
    const { state_MLC, dispatch_MLC } = useMediaLibraryConsumer();
    const { isActionLoading, isRefreshAfterUpdate } = state_MLC;
    //
    var [isHasPreviewFiles, setIsHasPreviewFiles] = useState(false);
    var fileListTemp = useRef([]);
    var fileListTemp1 = useRef([]);
    var myDropzone = useRef(null);
    const djsConfig = {
        addRemoveLinks: true,
        acceptedFiles: 'image/jpeg,image/png,image/gif,video/mp4',
        autoProcessQueue: false,
        uploadMultiple: true
        /*autoProcessQueue: false,
        uploadprogress: 100*/
    };
    const config = {
        iconFiletypes: ['.jpg', '.png', '.gif', '.mp4'],
        showFiletypeIcon: true,
        postUrl: 'no-url'
    };
    const sizeFileList = [
        { width: 600, height: 600 },
        { width: 600, height: 1000 },
        { width: 728, height: 90 },
        { width: 1200, height: 1000 },
        { width: 1080, height: 1920 },
        { width: 1920, height: 1080 },
        { width: 1000, height: 1500 }
    ];

    var addedfileCallBack = function (file) {
        // console.log('addedfileCallBack==========================================================================');
        dispatch_MLC({
            type: actions_MediaLAT.AT_SET_IS_ACTION_LOADING,
            payload: true
        });
        //
        if (file.type.includes('video')) readVideoFile(file);
        else if (file.type.includes('image')) {
            readImageFile(file);
        }
    };
    var removedfileCallBack = function (file) {
        // console.log('removedfileCallBack==========================================================================');
        if (myDropzone.current && myDropzone.current.files.length < fileListTemp.current.length) {
            // console.log('removedfileCallBack_recaculate');
            var objIsExist = fileListTemp.current.find((elem) => {
                return elem.name === file.name;
            });
            if (objIsExist) {
                let index = fileListTemp.current.findIndex((obj) => obj.name === file.name);
                fileListTemp.current.splice(index, 1);
            }
        }
        if (fileListTemp.current.length > 0) {
            setIsHasPreviewFiles(true);
        } else {
            setIsHasPreviewFiles(false);
        }
        // console.log('removedfileCallBack_fileListTemp.current: ', fileListTemp.current);
    };
    function readVideoFile(file) {
        var reader = new FileReader();
        reader.onload = function (e) {
            var videoElement = document.createElement('video');
            videoElement.src = e.target.result;
            var timer = setInterval(() => {
                if (videoElement.readyState === 4) {
                    if (videoElement.duration) {
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
                //
                var fileIsExistInSize = sizeFileList.find((elem) => {
                    return elem.width === w && elem.height === h;
                });
                // console.log('not meet: ', fileIsExistInSize);
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
                }
                if (fileListTemp.current.length > 0) {
                    setIsHasPreviewFiles(true);
                } else {
                    setIsHasPreviewFiles(false);
                }
                if (fileIsExistInSize === undefined) {
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
                }
            };
            dispatch_MLC({
                type: actions_MediaLAT.AT_SET_IS_ACTION_LOADING,
                payload: false
            });
        };
        reader.readAsDataURL(file);
    }
    // function readImageFile1(file) {
    //     var reader = new FileReader();
    //     reader.onload = function (e) {
    //         var img = new Image();
    //         img.src = e.target.result;

    //         img.onload = function () {
    //             var w = this.width;
    //             var h = this.height;
    //             //
    //             var fileIsExistInSize = sizeFileList.find((elem) => {
    //                 return elem.width === w && elem.height === h;
    //             });
    //             if (fileIsExistInSize) {
    //                 //
    //                 var fileIsExist = fileListTemp.current.find((elem) => {
    //                     return elem.name === file.name && elem.type.includes('image');
    //                 });
    //                 if (fileIsExist === undefined) {
    //                     fileListTemp.current.push(file);
    //                     fileListTemp1.current.push({ file: file, width: w, height: h, type: 'image' });
    //                 } else if (fileIsExist.name === file.name && fileIsExist.type.includes('image')) {
    //                     const notice = PNotify.notice({
    //                         title: false,
    //                         text: 'File ' + file.name + ' exists!',
    //                         icon: true,
    //                     });
    //                     myDropzone.current.removeFile(file);
    //                 }
    //                 if (fileListTemp.current.length > 0) {
    //                     setIsHasPreviewFiles(true);
    //                 } else {
    //                     setIsHasPreviewFiles(false);
    //                 }
    //                 // console.log('fileIsExistInSize_fileListTemp_image.current: ', fileListTemp.current);
    //             } else {
    //                 const notice = PNotify.notice({
    //                     title: false,
    //                     text: 'File ' + file.name + ' has invalid size!',
    //                     icon: true,
    //                 });
    //                 myDropzone.current.removeFile(file);
    //             }
    //         };
    //         dispatch_MLC({
    //             type: actions_MediaLAT.AT_SET_IS_ACTION_LOADING,
    //             payload: false
    //         });
    //     };
    //     reader.readAsDataURL(file);
    // }

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
            let fileInfo =
                fileObj.name +
                ';' +
                fileObj.type +
                ';' +
                fileObj.size +
                ';' +
                fileObj.upload.uuid +
                ';' +
                fileWidth +
                ';' +
                fileHeight +
                ';' +
                fileType;
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
        });
    };

    return (
        <div className="uploader_modal_container">
            <div className={isActionLoading ? 'drop_zone_component_disable' : ''}>
                <DropzoneComponent config={config} eventHandlers={eventHandlers} djsConfig={djsConfig} />
            </div>
            <div className="uploader_modal_size_media_valid">
                {sizeFileList.map(({ width, height }, index) => {
                    return (
                        <Badge key={index} pill variant="warning" className="mr-1">
                            {width}x{height}px
                        </Badge>
                    );
                })}
            </div>
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
