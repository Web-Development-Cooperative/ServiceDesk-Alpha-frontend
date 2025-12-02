import type { BaseObject } from '~~>shared/model/baseEntity.types';

type BranchRequestUrl = string;
type BranchRequestBody = {
	parentId: string;
	typeId: string;
	codeId: string;
	name: string;
	area: string;
	address: string;
};
type BranchRequestPutPayload = {
	branchId: BranchRequestUrl;
	body: BranchRequestBody;
};

type BranchResponseBody = {
	id: string;
	parent: {
		id: string;
		type: {
			id: string;
			name: string;
		};
		code: {
			id: string;
			code: string;
		};
		name: string;
		area: string;
		address: string;
	};
	type: {
		id: string;
		name: string;
	};
	code: {
		id: string;
		code: string;
	};
	name: string;
	area: string;
	address: string;
};

type BrancModel = Omit<BranchResponseBody, 'parent' | 'code'> & {
	parent: Omit<BranchResponseBody['parent'], 'code'> & {
		code: BaseObject;
	};
	code: BaseObject;
};

export type {
	BranchRequestUrl,
	BranchRequestBody,
	BranchRequestPutPayload,
	BranchResponseBody,
	BrancModel,
};
