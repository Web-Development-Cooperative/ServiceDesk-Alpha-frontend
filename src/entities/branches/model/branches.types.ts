import type {
	BaseParameters,
	BaseResponseBody,
} from '~~>shared/model/apiTypes';

type BranchesRequestParams = BaseParameters;

type BranchResponseBody = {
	id: string;
	name: string;
	area: string;
	address: string;
};
type BranchesResponseBody = BaseResponseBody<BranchResponseBody>;

type BranchModel = BranchResponseBody;
type BranchesModel = BranchModel;

export type {
	BranchesRequestParams,
	BranchesResponseBody,
	BranchesModel,
	BranchResponseBody,
};
