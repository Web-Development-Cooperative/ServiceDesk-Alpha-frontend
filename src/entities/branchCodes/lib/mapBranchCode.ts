import type {
	BranchCodeModel,
	BranchCodeResponseBody,
} from '../model/branchCodes.types';

const mapBranchCode = (data: BranchCodeResponseBody): BranchCodeModel => {
	return {
		id: data.id,
		name: data.code,
	};
};

export { mapBranchCode };
