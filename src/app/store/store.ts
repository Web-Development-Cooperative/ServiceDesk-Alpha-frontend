import { configureStore, createDynamicMiddleware } from '@reduxjs/toolkit';

import { baseApi } from '~~>shared/api';

import { rootReducer } from './rootReducer';

const dynamicMiddleware = createDynamicMiddleware();

const store = configureStore({
	reducer: rootReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: ['persist/PERSIST'],
			},
		}).concat(dynamicMiddleware.middleware),
});

rootReducer.inject(baseApi);
dynamicMiddleware.addMiddleware(baseApi.middleware);

export { store };
export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
