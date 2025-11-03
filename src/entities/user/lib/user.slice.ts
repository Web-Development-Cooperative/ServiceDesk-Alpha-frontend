import { createSlice } from '@reduxjs/toolkit';

import { mapTokenToUser } from './mapTokenToUser';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { State, TokenDecode } from '../model/types';

const initialState: State = {
	user: null,
};

const userSlice = createSlice({
	name: 'user',
	initialState: initialState,
	selectors: {
		userSelector: (state) => state.user,
	},
	reducers: {
		setCredentials: (state, action: PayloadAction<TokenDecode>) => {
			state.user = mapTokenToUser(action.payload);
		},
		clearCredentials: (state) => {
			state.user = null;
		},
	},
});

const { setCredentials, clearCredentials } = userSlice.actions;

export { userSlice, setCredentials, clearCredentials };
