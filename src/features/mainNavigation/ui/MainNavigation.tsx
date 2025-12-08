import { NavBar } from '~~>shared/ui/others';

import { navData } from '../lib/navData';

const MainNavigation = () => {
	return <NavBar items={navData} />;
};

export { MainNavigation };
