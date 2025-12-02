import { baseApi } from '~~>shared/api';
import { BRANCH_CODES_TAG } from '~~>shared/model/storeConsts';

import type {
	BranchCodesRequestUrl,
	BranchCodesResponseBody,
} from '../model/branchCodes.types';

const branchCodesApi = baseApi.injectEndpoints({
	endpoints: (build) => ({
		getBranchCodes: build.query<
			BranchCodesResponseBody,
			BranchCodesRequestUrl
		>({
			query: (params) => ({
				url: '/branches/codes',
				method: 'GET',
				params,
			}),
			providesTags: [BRANCH_CODES_TAG],
		}),
	}),
});

const { useLazyGetBranchCodesQuery } = branchCodesApi;

export { useLazyGetBranchCodesQuery };
