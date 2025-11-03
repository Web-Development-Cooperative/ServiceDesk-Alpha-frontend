import { createApi } from '@reduxjs/toolkit/query/react';

import { FILES_TAG, TOKEN_TAG } from '~~>shared/model/storeConsts';

import { baseQueryWithAuth } from './baseQueryWithAuth';
import type { WithSlice } from '@reduxjs/toolkit';

export const baseApi = createApi({
	tagTypes: [TOKEN_TAG, FILES_TAG],
	reducerPath: 'api',
	keepUnusedDataFor: 300,
	baseQuery: baseQueryWithAuth,
	endpoints: () => ({}),
});

declare module '~~>shared/model/storeTypes' {
	// eslint-disable-next-line @typescript-eslint/no-empty-object-type
	export interface LazyLoadedReduxSlices extends WithSlice<typeof baseApi> {}
}
