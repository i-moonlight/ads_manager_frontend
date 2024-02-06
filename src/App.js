import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
import { useDetectAdBlock } from 'adblock-detect-react';

import routes, { renderRoutes } from './routes';
import { BASENAME } from './config/constant';
import { ExtraLibraryProvider } from './contexts/extra/ExtraLibraryContext';
import useGetAdsManagerData from './hooks/useGetAdsManagerData';
import { useDispatch, useSelector } from 'react-redux';
import { updateCurrentRefreshTime } from './store/slices/ads-manager';
import { selectIsLoggedIn } from './store/slices/account';
import LoadingModal from './components/Modal/LoadingModal';

const App = () => {
    const isLoggedIn = useSelector(selectIsLoggedIn);
    const { isFetching, isLoading } = useGetAdsManagerData({ skip: !window.location.pathname.includes('ads-manager') });
    const dispatch = useDispatch();
    const adBlockDetected = useDetectAdBlock();
    const [showModal, setShowModal] = useState(false);
    const [showLoading, setShowLoading] = useState(false);
    const [loadingMessage, setLoadingMessage] = useState('');

    useEffect(() => {
        if (adBlockDetected && isLoggedIn) {
            setShowModal(true);
        }
    }, [adBlockDetected, isLoggedIn]); // Added isLoggedIn to the dependency array

    useEffect(() => {
        if (!isFetching && window.location.pathname.includes('ads-manager')) {
            dispatch(updateCurrentRefreshTime(new Date()));
        }
    }, [isFetching, dispatch]);

    useEffect(() => {
        if (isLoading || isFetching) {
            setShowLoading(true);
            setLoadingMessage(isLoading ? 'Retrieving Data' : isFetching ? 'Updating Data' : 'Loading...');
        } else {
            setTimeout(() => setShowLoading(false), 500);
        }
    }, [isLoading, isFetching]);

    return (
        <React.Fragment>
            <ExtraLibraryProvider>
                <Router basename={BASENAME}>{renderRoutes(routes)}</Router>
            </ExtraLibraryProvider>

            <Modal show={showModal} backdrop="static" keyboard={false}>
                <Modal.Header>
                    <Modal.Title>Turn off ad blocker</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    Please disable your Ad Blocker to view the content.
                    Our advertising tools might not work as expected when an ad blocker is enabled in a web browser. Turn off the ad blocker or add this web page's URL as an exception so you can create ads without any problems. After you turn off the ad blocker, you'll need to refresh your screen.
                </Modal.Body>

            </Modal>

            <LoadingModal show={showLoading} message={loadingMessage} />
        </React.Fragment>
    );
};

export default App;
