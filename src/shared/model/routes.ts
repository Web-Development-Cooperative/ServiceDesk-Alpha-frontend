const ROUTES = {
	LOGIN: '/login',
	HOME: '/',
	BRANCHES: '/branches',
	BRANCH: '/branches/:branch-id',
	BRANCHES_TYPES: '/branches-types',
	APPLICATIONS_CATEGORIES: '/application-categories',
	MY_APPLICATIONS: '/my-applications',
	APPLICATION: '/my-applications/:application-id',
	MY_APPLICATIONS_All: '/my-applications/all',
	MY_APPLICATIONS_ACTIVE: '/my-applications/active',
	MY_APPLICATIONS_COMPLETED: '/my-applications/completed',
} as const;

const ADAPTER_ROUTES_BREADCRUMBS = {
	'/': 'Главная',
	'/login': 'Вход',
	'/branches': 'Филиалы',
	'/branches/:branch-id': 'Филиал:',
	'/branches-types': 'Типы филиалов',
	'/application-categories': 'Категории заявок',
	'/my-applications': 'Мои заявки',
	'/my-applications/:application-id': 'Заявка: ',
	'/my-applications/all': 'Все',
	'/my-applications/active': 'Активные',
	'/my-applications/completed': 'Завершенные',
} as const;

type PathParams = {
	[ROUTES.LOGIN]: {
		objectId: string;
	};
	[ROUTES.HOME]: {
		objectId: string;
	};
	[ROUTES.BRANCHES]: {
		objectId: string;
	};
	[ROUTES.BRANCH]: {
		objectId: string;
	};
	[ROUTES.BRANCHES_TYPES]: {
		objectId: string;
	};
	[ROUTES.APPLICATIONS_CATEGORIES]: {
		objectId: string;
	};
	[ROUTES.MY_APPLICATIONS]: {
		objectId: string;
	};
	[ROUTES.APPLICATION]: {
		objectId: string;
	};
	[ROUTES.MY_APPLICATIONS_All]: {
		objectId: string;
	};
	[ROUTES.MY_APPLICATIONS_ACTIVE]: {
		objectId: string;
	};
	[ROUTES.MY_APPLICATIONS_COMPLETED]: {
		objectId: string;
	};
};

declare module 'react-router' {
	interface Register {
		params: PathParams;
	}
}

export { ROUTES, ADAPTER_ROUTES_BREADCRUMBS, type PathParams };
