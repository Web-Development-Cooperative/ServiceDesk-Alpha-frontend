import { ADAPTER_ROUTES_BREADCRUMBS, ROUTES } from '~~>shared/model/routes';

const navData = [
	{
		id: 1,
		text: ADAPTER_ROUTES_BREADCRUMBS[ROUTES.HOME],
		path: ROUTES.HOME,
	},
	{
		id: 2,
		text: ADAPTER_ROUTES_BREADCRUMBS[ROUTES.USERS],
		path: ROUTES.USERS,
	},
];

export { navData };
