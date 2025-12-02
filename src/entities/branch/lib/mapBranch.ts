import type { BranchResponseBody, BrancModel } from '../model/branch.types';

const mapBranch = (data: BranchResponseBody): BrancModel => {
	return {
		...data,
		parent: {
			...data.parent,
			code: {
				id: data.parent.code.id,
				name: data.parent.code.code,
			},
		},
		code: {
			id: data.code.id,
			name: data.code.code,
		},
	};
};

export { mapBranch };
