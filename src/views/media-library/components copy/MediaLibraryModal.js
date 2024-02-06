import React, { lazy } from 'react';
import { Button, Modal } from 'react-bootstrap';

import { useAdsManagerLibraryConsumer } from '../../ads-manager/common/AdsManagerLibraryContext';
import * as actions_AdsManagerLAT from '../../ads-manager/common/AdsManagerLibraryActionType';
import { useMediaLibraryConsumer } from '../common/MediaLibraryContext';
const InputControlsModal = lazy(() => import('./InputControlsModal'));
const MediaListModal = lazy(() => import('./MediaListModal'));

const MediaLibraryModal = (props) => {
    const { state_MLC } = useMediaLibraryConsumer();
    const { mediaSelectedList } = state_MLC;
    const { state_AdsManagerLC, dispatch_AdsManagerLC } = useAdsManagerLibraryConsumer();
    const { amIsVisibilityMediaLibraryModal, amIsShowMediaLibraryModal } = state_AdsManagerLC;

    return (
        <Modal
            style={{ visibility: amIsVisibilityMediaLibraryModal }}
            show={amIsShowMediaLibraryModal}
            onHide={props.hideModal}
            scrollable={true}
            size="xl"
            backdrop="static"
        >
            <Modal.Header closeButton>
                <Modal.Title as="h5">Select Media</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <InputControlsModal />
                <MediaListModal />
            </Modal.Body>
            <Modal.Footer>
                <Button
                    variant="secondary"
                    onClick={() => {
                        dispatch_AdsManagerLC({
                            type: actions_AdsManagerLAT.AT_SET_ADS_MANAGER_IS_VISIBILITY_CAMPAIGN_CREATE_MODAL,
                            payload: 'visible'
                        });
                        dispatch_AdsManagerLC({
                            type: actions_AdsManagerLAT.AT_SET_ADS_MANAGER_IS_SHOW_MEDIA_LIBRARY_MODAL,
                            payload: false
                        });
                        // props.hideModal(false);
                    }}
                >
                    Back
                </Button>
                <Button
                    variant="danger"
                    onClick={() => {
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
                            payload: ""
                        }); 
                        dispatch_AdsManagerLC({
                            type: actions_AdsManagerLAT.AT_SET_ADS_MANAGER_DISPLAY_URL_CURRENT,
                            payload: ""
                        });                        
                    }}
                >
                    Cancel
                </Button>
                <Button
                    onClick={() => {
                        dispatch_AdsManagerLC({
                            type: actions_AdsManagerLAT.AT_SET_ADS_MANAGER_IS_VISIBILITY_MEDIA_LIBRARY_MODAL,
                            payload: 'hidden'
                        });
                        dispatch_AdsManagerLC({
                            type: actions_AdsManagerLAT.AT_SET_ADS_MANAGER_IS_VISIBILITY_CAMPAIGN_FINALIZE_MODAL,
                            payload: 'visible'
                        });
                        dispatch_AdsManagerLC({
                            type: actions_AdsManagerLAT.AT_SET_ADS_MANAGER_IS_SHOW_CAMPAIGN_FINALIZE_MODAL,
                            payload: true
                        });
                    }}
                    disabled={mediaSelectedList && mediaSelectedList.length === 0}
                    variant="primary"
                >
                    Next
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default MediaLibraryModal;
