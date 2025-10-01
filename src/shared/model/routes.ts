const ROUTES = {
	HOME: '/',
	USERS: '/users',
	USER: '/users/:userId',
} as const;

const ADAPTER_ROUTES_BREADCRUMBS = {
	'/': 'Главная',
	'/users': 'Пользователи',
	'/users/:userId': 'Пользователь',
} as const;

type PathParams = {
	[ROUTES.HOME]: {
		objectId: string;
	};
	[ROUTES.USERS]: {
		objectId: string;
	};
	[ROUTES.USER]: {
		objectId: string;
	};
};

declare module 'react-router' {
	interface Register {
		params: PathParams;
	}
}

export { ROUTES, ADAPTER_ROUTES_BREADCRUMBS, type PathParams };
