import { NavBar } from '~~>features/navBar';

import { navData } from '../lib/navData';

const MainNavigation = () => {
	return <NavBar items={navData} />;
};

export { MainNavigation };
