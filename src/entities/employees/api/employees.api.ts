import { baseApi } from '~~>shared/api';
import { EMPLOYEES_TAG } from '~~>shared/model/storeConsts';

import type {
	EmployeesRequestPayload,
	EmployeesResponseBody,
} from '../model/employees.types';

const employeesApi = baseApi.injectEndpoints({
	endpoints: (build) => ({
		getEmployees: build.query<
			EmployeesResponseBody,
			EmployeesRequestPayload
		>({
			query: ({ url, params }) => ({
				url: `/branches/${url}/employees`,
				method: 'GET',
				params,
			}),
			providesTags: [EMPLOYEES_TAG],
		}),
	}),
});

const { useLazyGetEmployeesQuery } = employeesApi;

export { useLazyGetEmployeesQuery };
