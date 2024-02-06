import React, { lazy } from 'react';
import { Modal } from 'react-bootstrap';

const CampaignEditForm = lazy(() => import('./CampaignEditForm'));

const CampaignEditModal = (props) => {
    return (
        <>
            <Modal show={props.show} onHide={props.hideModal} scrollable={false} size="md" backdrop="static">
                <Modal.Header closeButton>
                    <Modal.Title as="h4">Edit Campaign</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <CampaignEditForm campaignUpdating={props.campaignUpdating} hideModal={() => props.hideModal(false)} />
                </Modal.Body>
            </Modal>
        </>
    );
};

export default CampaignEditModal;
