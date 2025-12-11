import type {
	BaseParameters,
	BaseResponseBody,
} from '~~>shared/model/apiTypes';
import type { Category } from '~~>shared/model/baseEntity.types';

type TicketCategoryRequestUrl = string;
type TicketCategoryRequestBody = Omit<
	Category,
	'id' | 'createdAt' | 'updatedAt'
>;
type TicketCategoryRequestParams = BaseParameters & {
	name?: string;
	description?: string;
};
type TicketCategoryRequestPutPayload = {
	url: TicketCategoryRequestUrl;
	body: TicketCategoryRequestBody;
};

type TicketCategoryResponseBody = Category;
type TicketCategoriesResponseBody =
	BaseResponseBody<TicketCategoryResponseBody>;

type TicketCategoryModel = TicketCategoryResponseBody;
type TicketCategoriesModel = Array<TicketCategoryModel>;

export type {
	TicketCategoryRequestUrl,
	TicketCategoryRequestBody,
	TicketCategoryRequestParams,
	TicketCategoryRequestPutPayload,
	TicketCategoryResponseBody,
	TicketCategoriesResponseBody,
	TicketCategoryModel,
	TicketCategoriesModel,
};
