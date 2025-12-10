import type {
	BaseParameters,
	BaseResponseBody,
} from '~~>shared/model/apiTypes';
import type { Category, Role } from '~~>shared/model/baseEntity.types';

type EmployeesRequestUrl = string;
type EmployeesRequestParams = BaseParameters & {
	firstName?: string;
	lastName?: string;
	patronymic?: string;
	email?: string;
	phone?: string;
	workplace?: string;
};
type EmployeesRequestPayload = {
	url: EmployeesRequestUrl;
	params: EmployeesRequestParams;
};

type EmployeeCategory = {
	id: string;
	category: Category;
};
type EmployeeResponseBody = {
	id: string;
	branchId: string;
	user: {
		id: string;
		email: string;
		firstName: string;
		lastName: string;
		patronymic: string;
		phone: string;
		workplace: string;
		branch: string;
		enabled: boolean;
		roles: Array<Role>;
	};
	categories: Array<EmployeeCategory>;
};
type EmployeesResponseBody = BaseResponseBody<EmployeeResponseBody>;

type EmployeeModel = EmployeeResponseBody;
type EmployeesModel = Array<EmployeeModel>;

export type {
	EmployeesRequestPayload,
	EmployeeResponseBody,
	EmployeesResponseBody,
	EmployeeModel,
	EmployeesModel,
};
