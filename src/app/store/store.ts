import { configureStore } from '@reduxjs/toolkit';

import { userSlice } from '~~>entities/user';

const store = configureStore({
	reducer: {
		[userSlice.name]: userSlice.reducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({ serializableCheck: false }),
});

export { store };

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
