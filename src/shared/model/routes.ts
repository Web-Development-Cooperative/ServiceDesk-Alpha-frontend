const ROUTES = {
	LOGIN: '/login',
	HOME: '/',
} as const;

const ADAPTER_ROUTES_BREADCRUMBS = {
	'/': 'Главная',
	'/login': 'Вход',
} as const;

type PathParams = {
	[ROUTES.LOGIN]: {
		objectId: string;
	};
	[ROUTES.HOME]: {
		objectId: string;
	};
};

declare module 'react-router' {
	interface Register {
		params: PathParams;
	}
}

export { ROUTES, ADAPTER_ROUTES_BREADCRUMBS, type PathParams };
