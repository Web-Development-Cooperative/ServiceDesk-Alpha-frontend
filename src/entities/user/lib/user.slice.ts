import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { type AxiosRequestConfig } from 'axios';

import { getUser as getUserAs } from '../api/user';
import { USER_ACTIONS, type User, type State } from '../model/types';

const getUser = createAsyncThunk<User, AxiosRequestConfig>(
	USER_ACTIONS.GET_USER,
	async (data, { rejectWithValue }) => {
		try {
			const response = await getUserAs(data);
			return response.data || null; // Написать тип для ответа от сервера
		} catch (error) {
			return rejectWithValue(error);
		}
	}
);

const initialState: State = {
	user: null,
	isLoading: false,
	isError: false,
};

const userSlice = createSlice({
	name: 'user',
	initialState: initialState,
	selectors: {
		userSelector: (state) => state.user,
		loadindSelector: (state) => state.isLoading,
	},
	reducers: {},
	extraReducers(builder) {
		builder
			.addCase(getUser.pending, (state) => {
				state.isLoading = true;
				state.isError = false;
			})
			.addCase(getUser.fulfilled, (state, action) => {
				state.user = action.payload ? action.payload : state.user;
				state.isLoading = false;
			})
			.addCase(getUser.rejected, (state) => {
				state.isLoading = false;
				state.isError = true;
			});
	},
});

export { getUser, userSlice };
