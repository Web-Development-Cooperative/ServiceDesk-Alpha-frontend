import { baseApi } from '~~>shared/api';
import { BRANCH_TYPE, BRANCH_TYPES } from '~~>shared/model/storeConsts';

import type {
	BranchTypesResponseBody,
	BranchTypeRequestBody,
	BranchTypeRequestParams,
	BranchTypeRequestPutPayload,
	BranchTypeRequestUrl,
	BranchTypeResponseBody,
} from '../model/branchTypes.types';

const branchTypesApi = baseApi.injectEndpoints({
	endpoints: (build) => ({
		postBranchType: build.mutation<
			BranchTypeResponseBody,
			BranchTypeRequestBody
		>({
			query: (body) => ({
				url: '/branch-types',
				method: 'POST',
				body,
			}),
			invalidatesTags: [BRANCH_TYPE, BRANCH_TYPES],
		}),
		getBranchTypeById: build.query<
			BranchTypeResponseBody,
			BranchTypeRequestUrl
		>({
			query: (branchId) => ({
				url: `/branch-types/${branchId}`,
				method: 'GET',
			}),
			providesTags: [BRANCH_TYPE],
		}),
		getBranchTypees: build.query<
			BranchTypesResponseBody,
			BranchTypeRequestParams
		>({
			query: (params) => ({
				url: '/branch-types',
				method: 'GET',
				params,
			}),
			providesTags: [BRANCH_TYPES],
		}),
		putBranchTypeById: build.mutation<
			BranchTypeResponseBody,
			BranchTypeRequestPutPayload
		>({
			query: ({ url, body }) => ({
				url: `/branch-types/${url}`,
				method: 'PUT',
				body,
			}),
			invalidatesTags: [BRANCH_TYPE, BRANCH_TYPES],
		}),
		deleteBranchTypeById: build.mutation<void, BranchTypeRequestUrl>({
			query: (branchId) => ({
				url: `/branch-types/${branchId}`,
				method: 'DELETE',
			}),
			invalidatesTags: [BRANCH_TYPE, BRANCH_TYPES],
		}),
	}),
});

const {
	usePostBranchTypeMutation,
	useLazyGetBranchTypeByIdQuery,
	useLazyGetBranchTypeesQuery,
	usePutBranchTypeByIdMutation,
	useDeleteBranchTypeByIdMutation,
} = branchTypesApi;

export {
	usePostBranchTypeMutation,
	useLazyGetBranchTypeByIdQuery,
	useLazyGetBranchTypeesQuery,
	usePutBranchTypeByIdMutation,
	useDeleteBranchTypeByIdMutation,
};
