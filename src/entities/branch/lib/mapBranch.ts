import type {
	BranchRequestBody,
	BranchRequestModel,
	BranchResponseBody,
	BrancModel,
} from '../model/branch.types';

const mapBranch = (data: BranchResponseBody): BrancModel => {
	return {
		...data,
		parent: data.parent
			? {
					...data.parent,
					code: {
						id: data.parent.code.id,
						name: data.parent.code.code,
					},
			  }
			: null,
		code: {
			id: data.code.id,
			name: data.code.code,
		},
	};
};
const mapBranchPost = (data: BranchRequestModel): BranchRequestBody => {
	return {
		parentId: data.parent.id.length > 3 ? data.parent.id : undefined,
		typeId: data.type.id,
		codeId: data.code.id,
		name: data.name,
		area: data.area,
		address: data.address,
	};
};

export { mapBranch, mapBranchPost };
