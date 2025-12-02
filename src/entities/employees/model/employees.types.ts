import type {
	BaseParameters,
	BaseResponseBody,
} from '~~>shared/model/apiTypes';
import type { BaseObject, Role } from '~~>shared/model/baseEntity.types';

type EmployeesRequestUrl = string;
type EmployeesRequestPayload = {
	url: EmployeesRequestUrl;
	params: BaseParameters;
};

type EmployeeResponseBody = {
	id: string;
	branchId: string;
	user: {
		id: string;
		email: string;
		first_name: string;
		last_name: string;
		patronymic: string;
		workplace: string;
		branch: string;
		enabled: boolean;
		roles: Array<Role>;
	};
	categories: [
		{
			id: string;
			category: string;
		}
	];
};
type EmployeesResponseBody = BaseResponseBody<EmployeeResponseBody>;

type EmployeeModel = Omit<EmployeeResponseBody, 'user' | 'categories'> & {
	user: Omit<EmployeeResponseBody['user'], 'first_name' | 'last_name'> & {
		firstname: string;
		lastname: string;
	};
	categories: Array<BaseObject>;
};
type EmployeesModel = Array<EmployeeModel>;

export type {
	EmployeesRequestPayload,
	EmployeeResponseBody,
	EmployeesResponseBody,
	EmployeeModel,
	EmployeesModel,
};
