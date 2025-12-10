import { baseApi } from '~~>shared/api';
import { BRANCHES_TAG } from '~~>shared/model/storeConsts';

import type {
	BranchesResponseBody,
	BranchesRequestParams,
	BranchesRequestPayload,
} from '../model/branches.types';

const branchesApi = baseApi.injectEndpoints({
	endpoints: (build) => ({
		getBranches: build.query<BranchesResponseBody, BranchesRequestParams>({
			query: (params) => ({
				url: '/branches',
				params,
				method: 'GET',
			}),
			providesTags: [BRANCHES_TAG],
		}),
		getBranchesParents: build.query<
			BranchesResponseBody,
			BranchesRequestPayload
		>({
			query: ({ url, params }) => ({
				url: `/branches/${url}/parent-candidates`,
				params,
				method: 'GET',
			}),
			providesTags: [BRANCHES_TAG],
		}),
	}),
});

const { useLazyGetBranchesQuery, useLazyGetBranchesParentsQuery } = branchesApi;

export { useLazyGetBranchesQuery, useLazyGetBranchesParentsQuery };
