import { createAsyncThunk } from '@reduxjs/toolkit';
import { resetAdAccounts } from '../slices/ad-accounts';
import { resetAccount } from '../slices/account';

export const logout = createAsyncThunk('account/logout', async (_, { dispatch }) => {
	console.log('Logging out...');
    dispatch(resetAdAccounts());
    dispatch(resetAccount());
});
