const ROUTES = {
	LOGIN: '/login',
	HOME: '/',
	BRANCHES: '/branches',
	ADD_BRANCH: '/branches/add-branch',
	BRANCH: '/branches/:branch-id',
	APPLICATIONS: '/applications',
} as const;

const ADAPTER_ROUTES_BREADCRUMBS = {
	'/': 'Главная',
	'/login': 'Вход',
	'/branches': 'Филиалы',
	'/branches/add-branch': 'Добавить филиал',
	'/branches/:branch-id': 'Филиал:',
	'/applications': 'Мои заявки',
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
	[ROUTES.APPLICATIONS]: {
		objectId: string;
	};
};

declare module 'react-router' {
	interface Register {
		params: PathParams;
	}
}

export { ROUTES, ADAPTER_ROUTES_BREADCRUMBS, type PathParams };
