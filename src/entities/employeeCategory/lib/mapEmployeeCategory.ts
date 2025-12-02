import type {
	EmployeeCategoryModel,
	EmployeeCategoryResponseBody,
} from '../model/employeeCategory.types';

const mapEmployeeCategory = (
	data: EmployeeCategoryResponseBody
): EmployeeCategoryModel => {
	return {
		id: data.id,
		name: data.category,
	};
};

export { mapEmployeeCategory };
