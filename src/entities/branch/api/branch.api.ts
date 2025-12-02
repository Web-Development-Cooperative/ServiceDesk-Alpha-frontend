import { baseApi } from '~~>shared/api';
import { BRANCH_TAG, BRANCHES_TAG } from '~~>shared/model/storeConsts';

import type {
	BranchResponseBody,
	BranchRequestUrl,
	BranchRequestBody,
	BranchRequestPutPayload,
} from '../model/branch.types';

const branchApi = baseApi.injectEndpoints({
	endpoints: (build) => ({
		postBranch: build.mutation<BranchResponseBody, BranchRequestBody>({
			query: (body) => ({
				url: '/branches',
				method: 'POST',
				body,
			}),
			invalidatesTags: [BRANCH_TAG, BRANCHES_TAG],
		}),
		getBranchById: build.query<BranchResponseBody, BranchRequestUrl>({
			query: (branchId) => ({
				url: `/branches/${branchId}`,
				method: 'GET',
			}),
			providesTags: [BRANCH_TAG],
		}),
		putBranchById: build.mutation<
			BranchResponseBody,
			BranchRequestPutPayload
		>({
			query: ({ branchId, body }) => ({
				url: `/branches/${branchId}`,
				method: 'PUT',
				body,
			}),
			invalidatesTags: [BRANCH_TAG, BRANCHES_TAG],
		}),
		deleteBranchById: build.mutation<void, BranchRequestUrl>({
			query: (branchId) => ({
				url: `/branches/${branchId}`,
				method: 'DELETE',
			}),
			invalidatesTags: [BRANCH_TAG, BRANCHES_TAG],
		}),
	}),
});

const {
	usePostBranchMutation,
	useLazyGetBranchByIdQuery,
	usePutBranchByIdMutation,
	useDeleteBranchByIdMutation,
} = branchApi;

export {
	usePostBranchMutation,
	useLazyGetBranchByIdQuery,
	usePutBranchByIdMutation,
	useDeleteBranchByIdMutation,
};
