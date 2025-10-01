import { Outlet, useLocation } from 'react-router';

import { MainNavigation } from '~~>widgets/mainNavigation';
import { Breadcrumbs } from '~~>features/breadcrumbs';
import { ADAPTER_ROUTES_BREADCRUMBS } from '~~>shared/model/routes';

const HeaderLayout = () => {
	const location = useLocation();
	const pageName =
		ADAPTER_ROUTES_BREADCRUMBS[
			location.pathname as keyof typeof ADAPTER_ROUTES_BREADCRUMBS
		];
	return (
		<>
			<h1>Hello, World! ({pageName})</h1>
			<Breadcrumbs />
			<MainNavigation />
			<Outlet />
		</>
	);
};

export { HeaderLayout };
