import type { BaseObject, Category } from '~~>shared/model/baseEntity.types';

type EmployeeCategoryRequestUrl = {
	branchId: string;
	employeeId: string;
};
type EmployeeCategoryRequestBody = {
	categoryId: string;
};
type EmployeeCategoryRequestPostPayload = {
	url: EmployeeCategoryRequestUrl;
	body: EmployeeCategoryRequestBody;
};
type EmployeeCategoryRequestDeleteUrl = EmployeeCategoryRequestUrl & {
	categoryId: string;
};

type EmployeeCategoryResponseBody = {
	id: string;
	category: Category;
};

type EmployeeCategoryModel = BaseObject;

export type {
	EmployeeCategoryRequestPostPayload,
	EmployeeCategoryRequestDeleteUrl,
	EmployeeCategoryResponseBody,
	EmployeeCategoryModel,
};
