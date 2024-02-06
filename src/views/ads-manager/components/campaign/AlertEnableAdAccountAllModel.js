import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

const AlertEnableAdAccountAllModel = (props) => {
    const history = useHistory();

    const handleEnableAdAccountAll = () => {
        history.push('/ad-accounts');
        props.hideModal(false);
    };

    return (
        <>
            <Modal show={props.show} onHide={props.hideModal} scrollable={false} size="md" backdrop="static" keyboard={props.isKeyboard}>
                <Modal.Header>
                    <Modal.Title as="h5">Attention Required</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>At least one Ad Account must be enabled to access the Ads Manager.</p>
                </Modal.Body>
                <Modal.Footer className="flex justify-content-between align-items-center">
                    {/* <Button variant="secondary" onClick={() => props.hideModal(false)}>
                        Cancel
                    </Button> */}
                    <div></div>
                    <Button onClick={() => handleEnableAdAccountAll()} variant="success">
                        Enable Ad Account
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default AlertEnableAdAccountAllModel;
