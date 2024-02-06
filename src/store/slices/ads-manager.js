import { createSlice } from '@reduxjs/toolkit';
import { adsManagerTabs } from '../../config/constant';

const initialState = {
    startDate: '',
    endDate: '',
    searchQuery: '',
    currentTab: adsManagerTabs.campaign,
    isHideEmptyRows: false,
    isGroupPlatforms: true,
    currentRefreshTime: ''
};

const slice = createSlice({
    name: 'adsManager',
    initialState,
    reducers: {
        adjustStartDate: (state, { payload }) => {
            state.startDate = payload;
        },
        adjustEndDate: (state, { payload }) => {
            state.endDate = payload;
        },
        clearStartDate: (state) => {
            state.startDate = '';
        },
        clearEndDate: (state) => {
            state.endDate = '';
        },
        updateSearchQuery: (state, { payload }) => {
            state.searchQuery = payload;
        },
        updateCurrentTab: (state, { payload }) => {
            state.currentTab = payload;
        },
        toggleIsHideEmptyRows: (state) => {
            state.isHideEmptyRows = !state.isHideEmptyRows;
        },
        toggleIsGroupPlatforms: (state) => {
            state.isGroupPlatforms = !state.isGroupPlatforms;
        },
        updateCurrentRefreshTime: (state, { payload }) => {
            state.currentRefreshTime = payload;
        }
    }
});

export const {
    adjustStartDate,
    adjustEndDate,
    clearStartDate,
    clearEndDate,
    updateSearchQuery,
    updateCurrentTab,
    toggleIsHideEmptyRows,
    toggleIsGroupPlatforms,
    updateCurrentRefreshTime
} = slice.actions;

export const selectStartDate = (state) => state[slice.name].startDate;
export const selectEndDate = (state) => state[slice.name].endDate;
export const selectSearchQuery = (state) => state[slice.name].searchQuery;
export const selectCurrentTab = (state) => state[slice.name].currentTab;
export const selectIsHideEmptyRows = (state) => state[slice.name].isHideEmptyRows;
export const selectIsGroupPlatforms = (state) => state[slice.name].isGroupPlatforms;
export const selectCurrentRefreshTime = (state) => state[slice.name].currentRefreshTime;

export default slice.reducer;
