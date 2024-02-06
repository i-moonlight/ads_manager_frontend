import React from 'react';

import * as actions from './MediaLibraryActionType';

const MediaLibraryContext = React.createContext();

const initState = {
    hello: 'MediaLibraryProvider',
    imageSelectedTempList: [],    
    image1SelectedList: [],
    image2SelectedList: [],
    //
    mediaSortBy: '',
    mediaViewBy: ['Name,'],
    mediaSearchValue: '',
    mediaSortByList: [],
    mediaSelectedList: [],
    isRefreshAfterUpdate: false,
    isActionLoading: false,
    mediaSelectedList1: [],
};

const setMediaSortBy = (mediaSortBy, state) => {
    return { ...state, mediaSortBy: mediaSortBy };
};
const setMediaViewBy = (mediaViewBy, state) => {
    return { ...state, mediaViewBy: mediaViewBy };
};
const setMediaSearchValue = (mediaSearchValue, state) => {
    return { ...state, mediaSearchValue: mediaSearchValue };
};
const setMediaSortByList = (mediaSortByList, state) => {
    return { ...state, mediaSortByList: mediaSortByList };
};
const setMediaSelectedList = (mediaSelectedList, state) => {
    return { ...state, mediaSelectedList: mediaSelectedList };
};
const setIsRefreshAfterUpdate = (isRefreshAfterUpdate, state) => {
    return { ...state, isRefreshAfterUpdate: isRefreshAfterUpdate };
};
const setIsActionLoading = (isActionLoading, state) => {
    return { ...state, isActionLoading: isActionLoading };
};
const setMediaSelectedList1 = (mediaSelectedList1, state) => {
    return { ...state, mediaSelectedList1: mediaSelectedList1 };
};

// 
const setImageSelectedTempList = (imageSelectedTempList, state) => {
    return { ...state, imageSelectedTempList: imageSelectedTempList };
};

const setImage1SelectedList = (image1SelectedList, state) => {
    return { ...state, image1SelectedList: image1SelectedList };
};
const setImage2SelectedList = (image2SelectedList, state) => {
    return { ...state, image2SelectedList: image2SelectedList };
};

const mediaLibraryReducer = (state = initState, action) => {
    switch (action.type) {
        case actions.AT_SET_MEDIA_SORT_BY:
            return setMediaSortBy(action.payload, state);
        case actions.AT_SET_MEDIA_VIEW_BY:
            return setMediaViewBy(action.payload, state);
        case actions.AT_SET_MEDIA_SEARCH_VALUE:
            return setMediaSearchValue(action.payload, state);
        case actions.AT_SET_MEDIA_LIST_BY_SORT_BY:
            return setMediaSortByList(action.payload, state);
        case actions.AT_SET_MEDIA_SELECTED_LIST:
            return setMediaSelectedList(action.payload, state);
        case actions.AT_SET_IS_REFRESH_AFTER_UPDATE:
            return setIsRefreshAfterUpdate(action.payload, state);
        case actions.AT_SET_IS_ACTION_LOADING:
            return setIsActionLoading(action.payload, state);
        case actions.AT_SET_MEDIA_SELECTED_LIST_1:
            return setMediaSelectedList1(action.payload, state);
        //
        case actions.AT_SET_IMAGE_SELECTED_TEMP_LIST:
            return setImageSelectedTempList(action.payload, state);        
        case actions.AT_SET_IMAGE1_SELECTED_LIST:
            return setImage1SelectedList(action.payload, state);
        case actions.AT_SET_IMAGE2_SELECTED_LIST:
            return setImage2SelectedList(action.payload, state);
        default:
            return state;
    }
};

const MediaLibraryProvider = ({ children }) => {
    const [state_MLC, dispatch_MLC] = React.useReducer(mediaLibraryReducer, initState);
    const value = { state_MLC, dispatch_MLC };
    return (
        <MediaLibraryContext.Provider value={value} displayName="MediaLibraryProvider">
            {children}
        </MediaLibraryContext.Provider>
    );
};

const useMediaLibraryConsumer = () => {
    const context = React.useContext(MediaLibraryContext);
    if (context === undefined) {
        throw new Error('useMediaLibrary must be used within a MediaLibraryProvider');
    }
    return context;
};

export { MediaLibraryProvider, useMediaLibraryConsumer };
