import { persistStore } from 'redux-persist';
import { configureStore } from '@reduxjs/toolkit';
import { reducer as formReducer } from 'redux-form';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import adAccountsReducer from './slices/ad-accounts';
import accountReducer from './slices/account';
import adsManagerReducer from './slices/ads-manager';
import { apiSlice } from '../apis/api-slice';

const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        adAccounts: persistReducer(
            {
                key: 'adAccounts',
                storage
            },
            adAccountsReducer
        ),
        account: persistReducer(
            {
                key: 'account',
                storage
            },
            accountReducer
        ),
        adsManager: persistReducer({ key: 'adsManager', storage }, adsManagerReducer),
        form: formReducer
    },
    devTools: true,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false
        }).concat(apiSlice.middleware)
});

const persister = persistStore(store);

export { store, persister };
