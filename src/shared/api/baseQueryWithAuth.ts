import { baseQuery } from './baseQuery';
import type { BaseQueryFn, FetchArgs } from '@reduxjs/toolkit/query';

const baseQueryWithAuth: BaseQueryFn<
	string | FetchArgs,
	unknown,
	object
> = async (args, api, extraOptions) => {
	const result = await baseQuery(args, api, extraOptions);

	if (
		result.error &&
		(result.error.status === 401 || result.error.status === 403)
	) {
		console.error('Authentication error:', result.error.status);
	}

	return result;
};

export { baseQueryWithAuth };
