import type {
	BaseParameters,
	BaseResponseBody,
} from '~~>shared/model/apiTypes';

type BranchesRequestParams = BaseParameters & {
	name?: string;
	area?: string;
	address?: string;
};
type BranchesRequestPayload = {
	url: string;
	params: BranchesRequestParams;
};

type BranchResponseBody = {
	id: string;
	name: string;
	area: string;
	address: string;
};
type BranchesResponseBody = BaseResponseBody<BranchResponseBody>;

type BranchModel = BranchResponseBody;
type BranchesModel = Array<BranchModel>;

export type {
	BranchesRequestParams,
	BranchesRequestPayload,
	BranchesResponseBody,
	BranchesModel,
	BranchResponseBody,
};
