import React, { lazy } from 'react';

import './AdsManager.scss';
import { AdsManagerLibraryProvider } from './common/AdsManagerLibraryContext';
import { MediaLibraryProvider } from './common/MediaLibraryContext';
import { w3cwebsocket as WebSocket } from 'websocket';
import PNotify from 'pnotify/dist/es/PNotify';
import { useEffect } from 'react';

const InputControls = lazy(() => import('./components/InputControls'));
const TabsMain = lazy(() => import('./components/TabsMain'));

const client = new WebSocket('ws://localhost:8000/ws/ad-manager/');

const AMPage = () => {
    useEffect(() => {
        client.onmessage = (message) => {
            const messageData = JSON.parse(message.data);

            if (messageData?.message?.length) {
                const notice = PNotify.error({
                    title: false,
                    text: messageData.message,
                    icon: true,
                    modules: {
                        Buttons: {
                            closer: true,
                            sticker: false
                        }
                    }
                });
                notice.on('click', function () {
                    notice.close();
                });
            }
        };
    }, []);

    return (
        <div className="am_page_container" style={{ position: 'fixed', width: '-webkit-fill-available' }}>
            <AdsManagerLibraryProvider>
                <MediaLibraryProvider>
                    <InputControls />
                    <TabsMain />
                </MediaLibraryProvider>
            </AdsManagerLibraryProvider>
        </div>
    );
};

export default AMPage;
