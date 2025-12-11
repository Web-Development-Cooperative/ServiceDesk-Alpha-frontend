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

const ticketCategoryApi = baseApi.injectEndpoints({
	endpoints: (build) => ({
		postBranchType: build.mutation<
			BranchTypeResponseBody,
			BranchTypeRequestBody
		>({
			query: (body) => ({
				url: '/ticket-categories',
				method: 'POST',
				body,
			}),
			invalidatesTags: [BRANCH_TYPE, BRANCH_TYPES],
		}),
		getBranchTypeById: build.query<
			BranchTypeResponseBody,
			BranchTypeRequestParams
		>({
			query: () => ({
				url: '/ticket-categories',
				method: 'GET',
			}),
			providesTags: [BRANCH_TYPE],
		}),
		getBranchTypees: build.query<
			BranchTypesResponseBody,
			BranchTypeRequestParams
		>({
			query: (branchId) => ({
				url: `/ticket-categories/${branchId}`,
				method: 'GET',
			}),
			providesTags: [BRANCH_TYPES],
		}),
		putBranchTypeById: build.mutation<
			BranchTypeResponseBody,
			BranchTypeRequestPutPayload
		>({
			query: ({ url, body }) => ({
				url: `/ticket-categories/${url}`,
				method: 'PUT',
				body,
			}),
			invalidatesTags: [BRANCH_TYPE, BRANCH_TYPES],
		}),
		deleteBranchTypeById: build.mutation<void, BranchTypeRequestUrl>({
			query: (branchId) => ({
				url: `/ticket-categories/${branchId}`,
				method: 'DELETE',
			}),
			invalidatesTags: [BRANCH_TYPE, BRANCH_TYPES],
		}),
	}),
});

const {
	usePostBranchTypeMutation,
	useLazyGetBranchTypeByIdQuery,
	usePutBranchTypeByIdMutation,
	useDeleteBranchTypeByIdMutation,
} = ticketCategoryApi;

export {
	usePostBranchTypeMutation,
	useLazyGetBranchTypeByIdQuery,
	usePutBranchTypeByIdMutation,
	useDeleteBranchTypeByIdMutation,
};
