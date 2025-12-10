import { baseApi } from '~~>shared/api';
import {
	TICKET_CATEGORIES,
	TICKET_CATEGORY,
} from '~~>shared/model/storeConsts';

import type {
	TicketCategoriesResponseBody,
	TicketCategoryRequestBody,
	TicketCategoryRequestParams,
	TicketCategoryRequestPutPayload,
	TicketCategoryRequestUrl,
	TicketCategoryResponseBody,
} from '../model/ticketCategory.types';

const ticketCategoryApi = baseApi.injectEndpoints({
	endpoints: (build) => ({
		postTicketCategory: build.mutation<
			TicketCategoryResponseBody,
			TicketCategoryRequestBody
		>({
			query: (body) => ({
				url: '/ticket-categories',
				method: 'POST',
				body,
			}),
			invalidatesTags: [TICKET_CATEGORY, TICKET_CATEGORIES],
		}),
		getTicketCategoryById: build.query<
			TicketCategoryResponseBody,
			TicketCategoryRequestParams
		>({
			query: () => ({
				url: '/ticket-categories',
				method: 'GET',
			}),
			providesTags: [TICKET_CATEGORY],
		}),
		getTicketCategoryes: build.query<
			TicketCategoriesResponseBody,
			TicketCategoryRequestParams
		>({
			query: (branchId) => ({
				url: `/ticket-categories/${branchId}`,
				method: 'GET',
			}),
			providesTags: [TICKET_CATEGORIES],
		}),
		putTicketCategoryById: build.mutation<
			TicketCategoryResponseBody,
			TicketCategoryRequestPutPayload
		>({
			query: ({ url, body }) => ({
				url: `/ticket-categories/${url}`,
				method: 'PUT',
				body,
			}),
			invalidatesTags: [TICKET_CATEGORY, TICKET_CATEGORIES],
		}),
		deleteTicketCategoryById: build.mutation<
			void,
			TicketCategoryRequestUrl
		>({
			query: (branchId) => ({
				url: `/ticket-categories/${branchId}`,
				method: 'DELETE',
			}),
			invalidatesTags: [TICKET_CATEGORY, TICKET_CATEGORIES],
		}),
	}),
});

const {
	usePostTicketCategoryMutation,
	useLazyGetTicketCategoryByIdQuery,
	usePutTicketCategoryByIdMutation,
	useDeleteTicketCategoryByIdMutation,
} = ticketCategoryApi;

export {
	usePostTicketCategoryMutation,
	useLazyGetTicketCategoryByIdQuery,
	usePutTicketCategoryByIdMutation,
	useDeleteTicketCategoryByIdMutation,
};
