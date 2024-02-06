import React, { lazy, useEffect, useState } from 'react';
import Masonry from 'react-masonry-css';

import '../MediaLibrary.scss';
import { useMediaLibraryConsumer } from '../common/MediaLibraryContext';
import * as actions_MediaLAT from '../common/MediaLibraryActionType';
//
import { mediaLibraryGetAllImageApi } from '../../../apis/mediaLibraryApi';

//
const MediaItem = lazy(() => import('./MediaItem'));
// const GalleryMasonry = lazy(() => import('../../../components/Gallery/GalleryMasonry'));
//
let brakePoints = [350, 500, 750];
//
const useGetAllImageApi = (mediaSearchValue, mediaSortBy, isRefreshAfterUpdate) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setIsError(false);
            setIsLoading(true);
            try {
                const result = await mediaLibraryGetAllImageApi(mediaSearchValue, mediaSortBy);
                setData(result.data);
            } catch (error) {
                setIsError(true);
            }
            setIsLoading(false);
        };

        fetchData();
    }, [mediaSearchValue, mediaSortBy, isRefreshAfterUpdate]);

    return [{ data, isLoading, isError }];
};

//
const MediaListModal = () => {
    const { state_MLC, dispatch_MLC } = useMediaLibraryConsumer();
    const { mediaSortBy, mediaSearchValue, isRefreshAfterUpdate } = state_MLC;
    const [{ data, isLoading }] = useGetAllImageApi(mediaSearchValue, mediaSortBy, isRefreshAfterUpdate);
    // console.log('MediaListModal_data: ', data);
    //
    useEffect(() => {
        if (!isLoading && data) {
            dispatch_MLC({
                type: actions_MediaLAT.AT_SET_IS_REFRESH_AFTER_UPDATE,
                payload: !isRefreshAfterUpdate
            });
        }
    }, [data, dispatch_MLC]);
    //
    return (
        <div className="media_list_container">
            {isLoading && (
                <div style={{ width: '2rem', height: '2rem' }} className="spinner-grow spinner-grow-sm mr-1" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            )}
            {!isLoading && data && (
                <Masonry breakpointCols={4} className="my-masonry-grid" columnClassName="my-masonry-grid_column">
                    {data.map((item, index) => {
                        return <MediaItem key={index} item={item} dataLength={data.length} />;
                    })}
                </Masonry>
            )}
            {!isLoading && data && data.length === 0 && <h4>Not media file found!</h4>}
        </div>
    );
};

export default MediaListModal;
