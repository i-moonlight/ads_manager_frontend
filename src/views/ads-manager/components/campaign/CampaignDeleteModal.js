import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

import { useAdsManagerLibraryConsumer } from '../../common/AdsManagerLibraryContext';
import * as actions_AdsManagerLAT from '../../common/AdsManagerLibraryActionType';
import { AlertSuccess, AlertError } from '../../../../utils/alertUtils';
//
import { useExtraLibraryConsumer } from '../../../../contexts/extra/ExtraLibraryContext';
import * as actions_ExtraLAT from '../../../../contexts/extra/ExtraLibraryActionType';
import { useCampaignsDeleteByUserMutation } from '../../../../apis/ads-manager-api-slice';
//
const CampaignDeleteModal = (props) => {
    const { state_AdsManagerLC, dispatch_AdsManagerLC } = useAdsManagerLibraryConsumer();
    const { amSelectedCampaignList } = state_AdsManagerLC;
    //
    const { state_ExtraLC, dispatch_ExtraLC } = useExtraLibraryConsumer();
    const { extra_amSelectedCampaignList } = state_ExtraLC;
    //
    const [isLoadingAction, setIsLoadingAction] = useState(false);

    const [campaignsDeleteByUser] = useCampaignsDeleteByUserMutation();

    const handleDeleteCampaigns = async () => {
        setIsLoadingAction(true);

        try {
            await campaignsDeleteByUser(extra_amSelectedCampaignList.map((i) => i.id)).unwrap();

            AlertSuccess('Deleted!');

            dispatch_AdsManagerLC({
                type: actions_AdsManagerLAT.AT_SET_ADS_MANAGER_CAMPAIGN_SELECTED_LIST,
                payload: null
            });
            dispatch_ExtraLC({
                type: actions_ExtraLAT.AT_SET_EXTRA_ADS_MANAGER_CAMPAIGN_SELECTED_LIST,
                payload: []
            });
            dispatch_ExtraLC({
                type: actions_ExtraLAT.AT_SET_EXTRA_ADS_MANAGER_AD_SET_SELECTED_LIST,
                payload: []
            });
            dispatch_ExtraLC({
                type: actions_ExtraLAT.AT_SET_EXTRA_ADS_MANAGER_AD_SET_SELECTED_LIST_STRING,
                payload: ''
            });
            dispatch_AdsManagerLC({
                type: actions_AdsManagerLAT.AT_SET_ADS_MANAGER_ADS_SELECTED_LIST,
                payload: []
            });
            dispatch_ExtraLC({
                type: actions_ExtraLAT.AT_SET_EXTRA_ADS_MANAGER_ADS_SELECTED_LIST,
                payload: []
            });
        } catch (error) {
            AlertError('Error from server!');
        }

        setIsLoadingAction(false);
        props.hideModal(false);
    };

    return (
        <>
            <Modal show={props.show} onHide={props.hideModal} scrollable={false} size="md" backdrop="static">
                <Modal.Header closeButton>
                    <Modal.Title as="h5">Delete Campaigns</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>
                        Are you sure you want to remove the selected campaigns? Once deleted you will not be able to access them again. It
                        will also be removed from the ad platforms that it was running on.
                    </p>
                </Modal.Body>
                <Modal.Footer className="flex justify-content-between align-items-center">
                    <Button variant="secondary" onClick={() => props.hideModal(false)}>
                        Cancel
                    </Button>
                    <Button
                        disabled={!isLoadingAction && amSelectedCampaignList && amSelectedCampaignList.length === 0}
                        onClick={() => handleDeleteCampaigns()}
                        variant="primary"
                    >
                        Delete
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default CampaignDeleteModal;
