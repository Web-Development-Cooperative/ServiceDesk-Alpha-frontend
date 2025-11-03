import { Outlet } from 'react-router';

import { MainNavigation } from '~~>widgets/mainNavigation';
import { Breadcrumbs } from '~~>features/breadcrumbs';

const HeaderLayout = () => {
	return (
		<>
			<Breadcrumbs />
			<MainNavigation />
			<Outlet />
		</>
	);
};

export { HeaderLayout };
