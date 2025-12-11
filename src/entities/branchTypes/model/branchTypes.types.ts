import type {
	BaseParameters,
	BaseResponseBody,
} from '~~>shared/model/apiTypes';
import type { BaseObject } from '~~>shared/model/baseEntity.types';

type BranchTypeRequestUrl = string;
type BranchTypeRequestBody = Pick<BaseObject, 'name'>;
type BranchTypeRequestParams = BaseParameters;
type BranchTypeRequestPutPayload = {
	url: BranchTypeRequestUrl;
	body: BranchTypeRequestBody;
};

type BranchTypeResponseBody = BaseObject;
type BranchTypesResponseBody = BaseResponseBody<BranchTypeResponseBody>;

type BranchTypeModel = BranchTypeResponseBody;
type BranchTypessModel = Array<BranchTypeModel>;

export type {
	BranchTypeRequestUrl,
	BranchTypeRequestBody,
	BranchTypeRequestParams,
	BranchTypeRequestPutPayload,
	BranchTypeResponseBody,
	BranchTypesResponseBody,
	BranchTypeModel,
	BranchTypessModel,
};
