import { combineSlices } from '@reduxjs/toolkit';

import { userSlice } from '~~>entities/user';
import { baseApi } from '~~>shared/api';

import type { LazyLoadedReduxSlices } from '~~>shared/model/storeTypes';

const staticReducers = {
	[userSlice.name]: userSlice.reducer,
	[baseApi.reducerPath]: baseApi.reducer,
};
const rootReducer =
	combineSlices(staticReducers).withLazyLoadedSlices<LazyLoadedReduxSlices>();

export { rootReducer };
