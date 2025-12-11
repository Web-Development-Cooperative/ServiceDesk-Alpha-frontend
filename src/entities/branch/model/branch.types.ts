import type { BaseObject } from '~~>shared/model/baseEntity.types';

type BranchRequestUrl = string;
type BranchRequestBody = {
	parentId: string | undefined;
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
	} | null;
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

type BranchRequestModel = Omit<
	BranchRequestBody,
	'parentId' | 'codeId' | 'typeId'
> & { parent: BaseObject; code: BaseObject; type: BaseObject };
type BrancModel = Omit<BranchResponseBody, 'parent' | 'code'> & {
	parent:
		| (Omit<NonNullable<BranchResponseBody['parent']>, 'code'> & {
				code: BaseObject;
		  })
		| null;
	code: BaseObject;
};

export type {
	BranchRequestUrl,
	BranchRequestBody,
	BranchRequestPutPayload,
	BranchResponseBody,
	BranchRequestModel,
	BrancModel,
};
