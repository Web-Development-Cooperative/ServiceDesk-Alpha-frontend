import type {
	BaseParameters,
	BaseResponseBody,
} from '~~>shared/model/apiTypes';
import type { BaseObject } from '~~>shared/model/baseEntity.types';

type BranchCodesRequestUrl = BaseParameters;

type BranchCodeResponseBody = {
	id: string;
	code: string;
};
type BranchCodesResponseBody = BaseResponseBody<BranchCodeResponseBody>;

type BranchCodeModel = BaseObject;
type BranchCodesModel = Array<BranchCodeModel>;

export type {
	BranchCodesRequestUrl,
	BranchCodeResponseBody,
	BranchCodesResponseBody,
	BranchCodeModel,
	BranchCodesModel,
};
