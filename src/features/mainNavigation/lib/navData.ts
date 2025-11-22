import { ADAPTER_ROUTES_BREADCRUMBS, ROUTES } from '~~>shared/model/routes';

const navData = [
	{
		id: 1,
		text: ADAPTER_ROUTES_BREADCRUMBS[ROUTES.APPLICATIONS],
		path: ROUTES.APPLICATIONS,
	},
	{
		id: 2,
		text: ADAPTER_ROUTES_BREADCRUMBS[ROUTES.BRANCHES],
		path: ROUTES.BRANCHES,
	},
];

export { navData };
