// api
export {
	usePostBranchTypeMutation,
	useLazyGetBranchTypeByIdQuery,
	useLazyGetBranchTypeesQuery,
	usePutBranchTypeByIdMutation,
	useDeleteBranchTypeByIdMutation,
} from './api/branchTypes.api';

// type
export type {
	BranchTypeResponseBody,
	BranchTypeRequestBody,
} from './model/branchTypes.types';
