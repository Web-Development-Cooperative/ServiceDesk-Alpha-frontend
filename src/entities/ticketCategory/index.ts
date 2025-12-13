// api
export {
	usePostTicketCategoryMutation,
	useLazyGetTicketCategoryByIdQuery,
	useLazyGetTicketCategoriesQuery,
	usePutTicketCategoryByIdMutation,
	useDeleteTicketCategoryByIdMutation,
} from './api/ticketCategory.api';

// type
export type {
	TicketCategoryResponseBody,
	TicketCategoryRequestBody,
} from './model/ticketCategory.types';
