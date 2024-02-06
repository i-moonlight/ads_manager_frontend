import React, { lazy } from 'react';
import { Button, Modal } from 'react-bootstrap';

import { useAdsManagerLibraryConsumer } from '../../ads-manager/common/AdsManagerLibraryContext';
import * as actions_AdsManagerLAT from '../../ads-manager/common/AdsManagerLibraryActionType';
// import { useMediaLibraryConsumer } from '../common/MediaLibraryContext';
// 
import { useExtraLibraryConsumer } from '../../../contexts/extra/ExtraLibraryContext';
// import * as actions_ExtraLAT from '../../../contexts/extra/ExtraLibraryActionType';
// 
const InputControlsModal = lazy(() => import('./InputControlsModal'));
const MediaListModal = lazy(() => import('./MediaListModal'));

const MediaLibraryModal = (props) => {
    // const { state_MLC } = useMediaLibraryConsumer();
    // const { mediaSelectedList } = state_MLC;
    const { state_AdsManagerLC, dispatch_AdsManagerLC } = useAdsManagerLibraryConsumer();
    const { amIsVisibilityMediaLibraryModal, amIsShowMediaLibraryModal, amIsCreateAdSets, amIsCreateCampaign } = state_AdsManagerLC;
    // 
    const { state_ExtraLC } = useExtraLibraryConsumer();
    const { extra_mediaSelectedList} = state_ExtraLC;
    // 
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
        // 
        dispatch_AdsManagerLC({
            type: actions_AdsManagerLAT.AT_SET_ADS_MANAGER_IS_CREATE_CAMPAIGN,
            payload: true
        });
        dispatch_AdsManagerLC({
            type: actions_AdsManagerLAT.AT_SET_ADS_MANAGER_IS_CREATE_AD_SETS,
            payload: true
        });
    };

    const handleBack = () => {        
        if(amIsCreateCampaign){
            dispatch_AdsManagerLC({
                type: actions_AdsManagerLAT.AT_SET_ADS_MANAGER_IS_VISIBILITY_CAMPAIGN_CREATE_MODAL,
                payload: 'visible'
            });
        }else{
            if (amIsCreateAdSets) {
                dispatch_AdsManagerLC({
                    type: actions_AdsManagerLAT.AT_SET_ADS_MANAGER_IS_VISIBILITY_CAMPAIGN_CREATE_MODAL,
                    payload: 'visible'
                });
                // dispatch_AdsManagerLC({
                //     type: actions_AdsManagerLAT.AT_SET_ADS_MANAGER_IS_VISIBILITY_CAMPAIGN_CREATE_AND_EDIT_MODAL,
                //     payload: 'visible'
                // });
                // dispatch_AdsManagerLC({
                //     type: actions_AdsManagerLAT.AT_SET_ADS_MANAGER_IS_SHOW_CAMPAIGN_CREATE_AND_EDIT_MODAL,
                //     payload: true
                // });
            } else {
                dispatch_AdsManagerLC({
                    type: actions_AdsManagerLAT.AT_SET_ADS_MANAGER_IS_VISIBILITY_CAMPAIGN_CREATE_MODAL,
                    payload: 'visible'
                });
            }
        }
        dispatch_AdsManagerLC({
            type: actions_AdsManagerLAT.AT_SET_ADS_MANAGER_IS_VISIBILITY_MEDIA_LIBRARY_MODAL,
            payload: 'hidden'
        });
        // dispatch_AdsManagerLC({
        //     type: actions_AdsManagerLAT.AT_SET_ADS_MANAGER_IS_SHOW_MEDIA_LIBRARY_MODAL,
        //     payload: false
        // });
    };

    const handleNext = () => {
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
    };

    // console.log("extra_mediaSelectedList1: ", extra_mediaSelectedList1)

    return (
        <Modal
            style={{ visibility: amIsVisibilityMediaLibraryModal }}
            show={amIsShowMediaLibraryModal}
            onHide={props.hideModal}
            scrollable={true}
            size="xl"
            backdrop="static"
        >
            <Modal.Header>
                <Modal.Title as="h5">Select Media</Modal.Title>
                <Button size="sm" variant="light" onClick={() => handleCancel()}>
                    X
                </Button>
            </Modal.Header>
            <Modal.Body>
                <InputControlsModal />
                <MediaListModal />
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={() => handleBack()}>
                    Back
                </Button>
                <Button variant="danger" onClick={() => handleCancel()}>
                    Cancel
                </Button>
                <Button onClick={() => handleNext()} disabled={extra_mediaSelectedList && extra_mediaSelectedList.length === 0} variant="primary">
                    Next
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default MediaLibraryModal;
