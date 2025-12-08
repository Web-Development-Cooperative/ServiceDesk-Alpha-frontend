type Pageable = {
	pageNumber: number;
	pageSize: number;
	sort: [];
	offset: number;
	paged: boolean;
	unpaged: boolean;
};

type BaseParameters = {
	page?: string;
	size?: string;
	sort?: Array<string>;
};

type BaseResponseBody<T> = {
	content: Array<T>;
	pageable: Pageable;
	totalPages: number;
	last: boolean;
	totalElements: number;
	size: number;
	number: number;
	sort: [];
	first: boolean;
	numberOfElements: number;
	empty: boolean;
};

export type { BaseResponseBody, BaseParameters };
