import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

import { AlertSuccess, AlertError } from '../../../../utils/alertUtils';

import { useExtraLibraryConsumer } from '../../../../contexts/extra/ExtraLibraryContext';
import * as actions_ExtraLAT from '../../../../contexts/extra/ExtraLibraryActionType';
import { useAdSetsDeleteByUserMutation } from '../../../../apis/ads-manager-api-slice';

const AdSetDeleteModal = (props) => {
    const { state_ExtraLC, dispatch_ExtraLC } = useExtraLibraryConsumer();
    const { extra_amSelectedAdSetList } = state_ExtraLC;

    const [isLoadingAction, setIsLoadingAction] = useState(false);

    const [adSetsDeleteByUser] = useAdSetsDeleteByUserMutation();

    const handleDeleteAdSets = async () => {
        setIsLoadingAction(true);

        try {
            await adSetsDeleteByUser(extra_amSelectedAdSetList.map((i) => i.id)).unwrap();

            AlertSuccess('Deleted!');

            dispatch_ExtraLC({
                type: actions_ExtraLAT.AT_SET_EXTRA_ADS_MANAGER_AD_SET_SELECTED_LIST,
                payload: []
            });
            dispatch_ExtraLC({
                type: actions_ExtraLAT.AT_SET_EXTRA_ADS_MANAGER_AD_SET_SELECTED_LIST_STRING,
                payload: ''
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
                    <Modal.Title as="h5">Delete Ad sets</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>
                        Are you sure you want to remove the selected ad sets? Once deleted you will not be able to access them again. It
                        will also be removed from the ad platforms that it was running on.
                    </p>
                </Modal.Body>
                <Modal.Footer className="flex justify-content-between align-items-center">
                    <Button variant="secondary" onClick={() => props.hideModal(false)}>
                        Cancel
                    </Button>
                    <Button
                        disabled={!isLoadingAction && !extra_amSelectedAdSetList.length}
                        onClick={() => handleDeleteAdSets()}
                        variant="primary"
                    >
                        Delete
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default AdSetDeleteModal;
