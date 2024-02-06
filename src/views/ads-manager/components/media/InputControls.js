import React, { useState, useRef } from 'react';
import { Row, Col, Card, Form, InputGroup, Button } from 'react-bootstrap';
import 'primereact/resources/themes/lara-light-indigo/theme.css'; //theme
import 'primereact/resources/primereact.min.css'; //core css
import 'primeicons/primeicons.css';
// import { MultiSelect } from 'primereact/multiselect';
// import { Dropdown } from 'primereact/dropdown';
import PNotify from 'pnotify/dist/es/PNotify';

import './MediaModal.scss';
import AnimatedModal from '../../../../components/Modal/AnimatedModal';
import { useMediaLibraryConsumer } from '../../common/MediaLibraryContext';
// import * as actions_MediaLAT from '../common/MediaLibraryActionType';
// import { mediaLibraryDeleteItemApi } from '../../../apis/mediaLibraryApi';
// import { STATUS_CODE } from '../../../apis/statusCodeApi';
import UploaderModal from './UploaderModal';
// 
import { useExtraLibraryConsumer } from '../../../../contexts/extra/ExtraLibraryContext';
import * as actions_ExtraLAT from '../../../../contexts/extra/ExtraLibraryActionType';

const InputControlsModal = () => {
    const { state_MLC } = useMediaLibraryConsumer();
    const { isActionLoading } = state_MLC;
    //
    const { state_ExtraLC, dispatch_ExtraLC } = useExtraLibraryConsumer();
    const { extra_mediaSearchValue} = state_ExtraLC;
    //
    const [showModal, setShowModal] = useState(false);
    const [isShowClearBtn, setIsShowClearBtn] = useState(false);
    const [searchValue, setSearchValue] = useState(extra_mediaSearchValue);
    const typingTimeoutRef = useRef(null);

    //
    const handleClickClear = () => {
        dispatch_ExtraLC({
            type: actions_ExtraLAT.AT_SET_EXTRA_MEDIA_SEARCH_VALUE,
            payload: ''
        });
        dispatch_ExtraLC({
            type: actions_ExtraLAT.AT_SET_EXTRA_MEDIA_IS_FOCUS_SEARCH_VALUE,
            payload: true
        });
        // dispatch_MLC({
        //     type: actions_MediaLAT.AT_SET_MEDIA_SEARCH_VALUE,
        //     payload: ''
        // });
        setSearchValue('');
    };
    const handleChangeSearchValue = (e) => {
        // console.log('handleChangeSearchValue: ', e.target.value);
        let value = e.target.value;
        if (value.length === 0) {
            setIsShowClearBtn(false);
        } else {
            setIsShowClearBtn(true);
        }
        setSearchValue(value);
        if (typingTimeoutRef.current) {
            clearTimeout(typingTimeoutRef.current);
        }
        typingTimeoutRef.current = setTimeout(() => {
            dispatch_ExtraLC({
                type: actions_ExtraLAT.AT_SET_EXTRA_MEDIA_SEARCH_VALUE,
                payload: value
            });
            dispatch_ExtraLC({
                type: actions_ExtraLAT.AT_SET_EXTRA_MEDIA_IS_FOCUS_SEARCH_VALUE,
                payload: true
            });
            // dispatch_MLC({
            //     type: actions_MediaLAT.AT_SET_MEDIA_SEARCH_VALUE,
            //     payload: value
            // });
        }, 500);
    };

    const handleInputSearchOnBlur = () => {
        dispatch_ExtraLC({
            type: actions_ExtraLAT.AT_SET_EXTRA_MEDIA_IS_FOCUS_SEARCH_VALUE,
            payload: false
        });
    }

    return (
        <>
            <div className="input_controls_container_media">
                <Row>
                    <Col md="2">
                        <div className="input_controls_button">
                            <Button
                                onClick={() => {
                                    setShowModal(true);
                                }}
                                variant="primary"
                                className="text-capitalize upload_button"
                                style={{width: "100%", marginRight: 0}}
                            >
                                <i className="fas fa-plus" />
                                Upload
                            </Button>
                        </div>
                    </Col>
                    <Col md="4" className='pl-0'>
                        <div className="input_controls_search">
                            <InputGroup className="mb-3">
                                <Form.Control
                                    onChange={(e) => handleChangeSearchValue(e)}
                                    value={searchValue}
                                    type="text"
                                    placeholder="Search..."
                                    className="input_controls_search__text"
                                    onBlur={handleInputSearchOnBlur}
                                />
                                <InputGroup.Append>
                                    <Button
                                        onClick={() => handleClickClear()}
                                        disabled={!isShowClearBtn}
                                        className="input_controls_search__btn_clear"
                                    >
                                        {isShowClearBtn ? 'x' : ''}
                                    </Button>
                                </InputGroup.Append>
                            </InputGroup>
                        </div>
                    </Col>
                </Row>
            </div>
            <AnimatedModal
                isShowMask={true}
                isCloseMaskOnClick={false}
                width={800}
                height={700}
                visible={showModal}
                onClose={() => {
                    if (isActionLoading) {
                        const notice = PNotify.notice({
                            title: false,
                            text: 'Uploading...please wait a few second.',
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
                        setShowModal(false);
                    }
                }}
                animation="zoom"
            >
                <Card>
                    <Card.Body style={{ padding: '20px', paddingTop: '30px' }}>
                        <UploaderModal setShowModal={setShowModal} />
                    </Card.Body>
                </Card>
            </AnimatedModal>
        </>
    );
};

export default InputControlsModal;
