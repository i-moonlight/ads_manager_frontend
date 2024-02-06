import React, { lazy } from 'react';

import './MediaLibrary.scss';
import { MediaLibraryProvider } from './common/MediaLibraryContext';

const InputControls = lazy(() => import('./components/InputControls'));
const MediaList = lazy(() => import('./components/MediaList'));

const MLPage = () => {
    return (
        <div className="ml_page_container">
            <MediaLibraryProvider>
                <InputControls />
                <MediaList />
            </MediaLibraryProvider>
        </div>
    );
};

export default MLPage;
