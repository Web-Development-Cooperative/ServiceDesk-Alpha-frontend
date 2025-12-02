import { baseApi } from '~~>shared/api';
import { EMPLOYEE_CATEGORY_TAG } from '~~>shared/model/storeConsts';

import type {
	EmployeeCategoryRequestDeleteUrl,
	EmployeeCategoryRequestPostPayload,
	EmployeeCategoryResponseBody,
} from '../model/employeeCategory.types';

const employeeCategoryApi = baseApi.injectEndpoints({
	endpoints: (build) => ({
		postEmployeeCategory: build.mutation<
			EmployeeCategoryResponseBody,
			EmployeeCategoryRequestPostPayload
		>({
			query: ({ url, body }) => ({
				url: `/branches/${url.branchId}/employees/${url.employeeId}/categories`,
				method: 'POST',
				body,
			}),
			invalidatesTags: [EMPLOYEE_CATEGORY_TAG],
		}),
		deleteEmployeeCategoryById: build.mutation<
			void,
			EmployeeCategoryRequestDeleteUrl
		>({
			query: (url) => ({
				url: `/branches/${url.branchId}/employees/${url.employeeId}/categories/${url.categoryId}`,
				method: 'DELETE',
			}),
			invalidatesTags: [EMPLOYEE_CATEGORY_TAG],
		}),
	}),
});

const {
	usePostEmployeeCategoryMutation,
	useDeleteEmployeeCategoryByIdMutation,
} = employeeCategoryApi;

export {
	usePostEmployeeCategoryMutation,
	useDeleteEmployeeCategoryByIdMutation,
};
