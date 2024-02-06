import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { logout } from '../store/actions/account';
import { AlertError } from '../utils/alertUtils';

const baseQuery = fetchBaseQuery({
    baseUrl: process.env.REACT_APP_BACKEND_SERVER,
    prepareHeaders: (headers, { getState }) => {
        const token = getState().account.token;
        if (token) headers.set('Authorization', token);
        return headers;
    }
});

const baseQueryWithErrorHandling = async (args, api, extraOptions) => {
    let result = await baseQuery(args, api, extraOptions);

    if (result?.error?.message === 'Network Error') {
        AlertError('Oops! Something went wrong with the network. Please check your connection and refresh the page.');
        return { status: 'Network Error', data: null };
    }
    if (result?.error?.status === 400) {
        AlertError('Invalid request. Please check your input and try again.');
        return { status: 400, data: null };
    }
    if (result?.error?.status === 401) {
        AlertError('Access denied. Please log in or provide valid credentials.');
        return { status: 401, data: null };
    }
    if (result?.error?.status === 403) {
        AlertError("Sorry, you're not authorized to access this page or perform this action.");
        api.dispatch(logout());
    }

    return result;
};

export const apiSlice = createApi({
    baseQuery: baseQueryWithErrorHandling,
    keepUnusedDataFor: 60 * 60 * 24 * 365 * 10, // wait for 10 years
    tagTypes: [
        'campaignGetAllByUser1',
        'campaignsPlatformsUnGroupGetAllByUser',
        'adSetGetAllByUser1',
        'adSetsPlatformsUnGroupGetAllByUser',
        'adsGetAllByUser1',
        'adsPlatformsUnGroupGetAllByUser'
    ],
    endpoints: () => ({})
});
