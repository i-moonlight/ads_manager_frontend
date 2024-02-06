import React, { lazy } from 'react';
import { Modal } from 'react-bootstrap';

const AdsEditForm = lazy(() => import('./AdsEditForm'));

const AdsEditModal = (props) => {
    return (
        <>
            <Modal show={props.show} onHide={props.hideModal} scrollable={false} size="xl mt-0" backdrop="static">
                <Modal.Header closeButton>
                    <Modal.Title as="h5">Edit Ads</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <AdsEditForm adsUpdating={props.adsUpdating} hideModal={() => props.hideModal(false)} />
                </Modal.Body>
            </Modal>
        </>
    );
};

export default AdsEditModal;
