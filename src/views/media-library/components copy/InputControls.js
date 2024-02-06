import React, { useState, useRef} from 'react';
import { Row, Col, Card, Form, InputGroup, Button } from 'react-bootstrap';
import 'primereact/resources/themes/lara-light-indigo/theme.css'; //theme
import 'primereact/resources/primereact.min.css'; //core css
import 'primeicons/primeicons.css';
import { MultiSelect } from 'primereact/multiselect';
import { Dropdown } from 'primereact/dropdown';
import PNotify from 'pnotify/dist/es/PNotify';

import '../MediaLibrary.scss';
import AnimatedModal from '../../../components/Modal/AnimatedModal';
import { useMediaLibraryConsumer } from '../common/MediaLibraryContext';
import * as actions_MediaLAT from '../common/MediaLibraryActionType';
import { mediaLibraryDeleteItemApi } from '../../../apis/mediaLibraryApi';
import { STATUS_CODE } from '../../../apis/statusCodeApi';
import UploaderModal from './UploaderModal';

const InputControls = () => {
    const { state_MLC, dispatch_MLC } = useMediaLibraryConsumer();
    const { mediaSelectedList, isRefreshAfterUpdate, isActionLoading } = state_MLC;
    //
    const [showModal, setShowModal] = useState(false);
    const [isShowClearBtn, setIsShowClearBtn] = useState(false);
    const [searchValue, setSearchValue] = useState('');
    const typingTimeoutRef = useRef(null);
    const [viewBy, setViewBy] = useState(['Name,']);
    const [sortBy, setSortBy] = useState('');
    const sortByItems = [
       
        { label: 'Name', value: 'name' },
        { label: 'Size', value: 'size' },
        { label: 'Date', value: 'date' },
        { label: 'Impressions', value: 'imp' },
        { label: 'Clicks', value: 'clicks' },
        { label: 'Spent', value: 'spent' }
    ];
    const viewByItems = [
        { label: 'Name', value: 'Name,' },
        { label: 'Size', value: 'Size' },
        { label: 'Date', value: 'Date,' },
        { label: 'Impressions', value: 'Impressions,' },
        { label: 'Clicks', value: 'Clicks,' },
        { label: 'Spent', value: 'Spent,' }
    ];
    // console.log('viewBy: ', viewBy);
    //
    const handleClickClear = () => {
        dispatch_MLC({
            type: actions_MediaLAT.AT_SET_MEDIA_SEARCH_VALUE,
            payload: ''
        });
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
            dispatch_MLC({
                type: actions_MediaLAT.AT_SET_MEDIA_SEARCH_VALUE,
                payload: value
            });
        }, 500);
    };

    //
    const handleChangeSortBy = (value) => {
        setSortBy(value);
        dispatch_MLC({
            type: actions_MediaLAT.AT_SET_MEDIA_SORT_BY,
            payload: value
        });
    };
    const handleChangeViewBy = (value) => {
        setViewBy(value);
        dispatch_MLC({
            type: actions_MediaLAT.AT_SET_MEDIA_VIEW_BY,
            payload: value
        });
    };
    const handleDeleteMedias = () => {
        const isDelete = window.confirm('Are you sure to delete the medias?');
        if (isDelete) {
            dispatch_MLC({
                type: actions_MediaLAT.AT_SET_IS_ACTION_LOADING,
                payload: true
            });
            const value = { ids: mediaSelectedList.toString() }; //arr_ids_seleted
            // console.log('handleDeleteMedias: ', value);
            // return;
            mediaLibraryDeleteItemApi(value).then((resp) => {
                if (resp && resp.status === STATUS_CODE.HTTP_204_NO_CONTENT) {
                    //   console.log("editCategoryImageLibraryApi: ", resp);
                    dispatch_MLC({
                        type: actions_MediaLAT.AT_SET_IS_REFRESH_AFTER_UPDATE,
                        payload: !isRefreshAfterUpdate
                    });
                    dispatch_MLC({
                        type: actions_MediaLAT.AT_SET_MEDIA_SELECTED_LIST,
                        payload: []
                    });
                    const notice = PNotify.success({
                        title: false,
                        text: 'Deleted successfully!',
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
                    console.log('Error from server!');
                }
                dispatch_MLC({
                    type: actions_MediaLAT.AT_SET_IS_ACTION_LOADING,
                    payload: false
                });
            });
        }
    };
    return (
        <>
            <div className="input_controls_container">
                <Row>
                    <Col md="4">
                        <div className="input_controls_search">
                            <InputGroup className="mb-3">
                                <Form.Control
                                    onChange={(e) => handleChangeSearchValue(e)}
                                    value={searchValue}
                                    type="text"
                                    placeholder="Search..."
                                    className="input_controls_search__text"
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
                    <Col md="8" className="pl-0">
                        <div className="input_controls_button">
                            <Button
                                onClick={() => {
                                    setShowModal(true);
                                }}
                                variant="primary"
                                className="text-capitalize upload_button"
                            >
                                <i className="fas fa-plus" />
                                Upload
                            </Button>
                            <Button
                                onClick={() => handleDeleteMedias()}
                                disabled={mediaSelectedList.length === 0 || isActionLoading}
                                variant="danger"
                                className="text-capitalize"
                            >
                                Delete
                            </Button>
                            <Dropdown
                                value={sortBy}
                                options={sortByItems}
                                onChange={(e) => handleChangeSortBy(e.value)}
                                placeholder="Sort by"
                                className="sort_by_dropdown"
                            />
                            <MultiSelect
                                value={viewBy}
                                options={viewByItems}
                                onChange={(e) => handleChangeViewBy(e.value)}
                                placeholder="View by"
                                maxSelectedLabels={3}
                            />
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

export default InputControls;
