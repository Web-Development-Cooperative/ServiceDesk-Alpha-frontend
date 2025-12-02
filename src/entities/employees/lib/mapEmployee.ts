import type {
	EmployeeModel,
	EmployeeResponseBody,
} from '../model/employees.types';

const mapEmployee = (data: EmployeeResponseBody): EmployeeModel => {
	return {
		...data,
		user: {
			...data.user,
			firstname: data.user.first_name,
			lastname: data.user.last_name,
		},
		categories: data.categories.map((c) => ({
			id: c.id,
			name: c.category,
		})),
	};
};

export { mapEmployee };
