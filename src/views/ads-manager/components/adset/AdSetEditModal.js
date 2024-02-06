import React, { lazy } from 'react';
import { Modal } from 'react-bootstrap';

// import { AdsManagerLibraryProvider } from '../../common/AdsManagerLibraryContext';
const AdSetEditForm = lazy(() => import('./AdSetEditForm'));

const AdSetEditModal = (props) => {
    return (
        <>
            <Modal show={props.show} onHide={props.hideModal} scrollable={false} size="md mt-0" backdrop="static">
                <Modal.Header closeButton>
                    <Modal.Title as="h5">Edit Ad Set</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <AdSetEditForm adSetUpdating={props.adSetUpdating} hideModal={() => props.hideModal(false)} />
                </Modal.Body>
                {/* <Modal.Footer className="flex justify-content-between align-items-center">
                    <Button variant="secondary" onClick={() => props.hideModal(false)}>
                        Close
                    </Button>
                    <Button onClick={handleAddMedia} variant="primary">
                        Add Media
                    </Button>
                </Modal.Footer> */}
            </Modal>
        </>
    );
};

export default AdSetEditModal;
