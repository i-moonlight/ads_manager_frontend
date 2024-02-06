import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Row, Col, Card, Button, Modal } from 'react-bootstrap';
import { selectUser } from '../../store/slices/account';
//
import { deleteAccountApi } from '../../apis/authApi';
import { STATUS_CODE } from '../../utils/statusCodeApi';
import { AlertError, AlertSuccess } from '../../utils/alertUtils';
//
import { logout } from '../../store/actions/account';

const SettingsPage = () => {
    const user = useSelector(selectUser);
    const [showModal, setShowModal] = useState(false);

    const handleCloseModal = () => setShowModal(false);
    const handleShowModal = () => setShowModal(true);

    //
    const [isLoadingAction, setIsLoadingAction] = useState(false);
    const dispatch = useDispatch();

    const handleDeleteAccount = () => {
        let data = {};
        setIsLoadingAction(true);
        deleteAccountApi(data).then((resp) => {
            if (resp && resp.status === STATUS_CODE.HTTP_204_NO_CONTENT) {
                console.log('Account deleted');
                AlertSuccess('Deleted your account successfully!');
                dispatch(logout());
                handleCloseModal();
            } else {
                AlertError('Error from server!');
            }
            setIsLoadingAction(false);
        });
    };

    return (
        <React.Fragment>
            <Row>
                <Col>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">Account Settings</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <h5>Account Owner: {user.display_name} </h5>
                            <h5>Email: {user.email} </h5>

                            <hr />
                            <Card.Text>
                                <Button variant="danger" onClick={handleShowModal} disabled={isLoadingAction}>
                                    Delete Account
                                </Button>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Modal show={showModal} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Confirm Account Deletion</Modal.Title>
                </Modal.Header>
                <Modal.Body>Are you sure you want to delete your account? This action cannot be undone.</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseModal}>
                        Cancel
                    </Button>
                    <Button variant="danger" onClick={handleDeleteAccount}>
                        Delete Account
                    </Button>
                </Modal.Footer>
            </Modal>
        </React.Fragment>
    );
};

export default SettingsPage;
