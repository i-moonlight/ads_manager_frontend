import { createSlice } from '@reduxjs/toolkit';
import { logout } from '../actions/account';

const initialState = {
    token: '',
    isLoggedIn: false,
    isInitialized: false,
    user: null
};

const slice = createSlice({
    name: 'account',
    initialState,
    reducers: {
        accountInitialize: (state, action) => {
            const { isLoggedIn, user, token } = action.payload;

            localStorage.setItem('_token', token);

            state.isLoggedIn = isLoggedIn;
            state.isInitialized = true;
            state.token = token;
            state.user = user;
        },
        login: (state, action) => {
            const { user } = action.payload;

            state.isLoggedIn = true;
            state.user = user;
        },
        resetAccount: () => {
            return initialState;
        }
    },

    extraReducers: (builder) => {
        builder.addCase(logout.fulfilled, () => {
            localStorage.clear();
        });
    }
});

export const { accountInitialize, login, resetAccount } = slice.actions;

// thunk actions
export { logout };

export const selectToken = (state) => state[slice.name].token;
export const selectIsLoggedIn = (state) => state[slice.name].isLoggedIn;
export const selectIsInitialized = (state) => state[slice.name].isInitialized;
export const selectUser = (state) => state[slice.name].user;

export default slice.reducer;
