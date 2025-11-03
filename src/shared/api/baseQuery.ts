import { fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import Cookies from 'js-cookie';

import { env } from '~~>shared/lib';

const baseQuery = fetchBaseQuery({
	baseUrl: env.VITE_API_BASE_BACKEND_URL,
	credentials: 'include',
	prepareHeaders: (headers) => {
		const token = Cookies.get('accessToken');
		console.log(token);
		if (token) {
			headers.set('authorization', `Bearer ${token}`);
		}
		return headers;
	},
});

export { baseQuery };
