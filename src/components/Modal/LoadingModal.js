import { Modal, Spinner } from 'react-bootstrap';

const LoadingModal = ({ show, onHide, message = 'Loading...' }) => (
    <Modal show={show} centered onHide={onHide}>
        <Modal.Body className="d-flex justify-content-center align-items-center">
            <Spinner className="spinner-grow text-info mr-3" animation="border" role="status" style={{ width: '6rem', height: '6rem' }}>
                <span className="sr-only">{message}</span>
            </Spinner>
            <div>{message}</div>
        </Modal.Body>
    </Modal>
);

export default LoadingModal;
