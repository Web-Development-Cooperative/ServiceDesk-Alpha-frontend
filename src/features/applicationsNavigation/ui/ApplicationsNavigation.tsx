import { NavBar } from '~~>shared/ui/others';

import { NAV_DATA } from '../model/applicationsNavigation.consts';
import styles from './ApplicationsNavigation.module.css';

const ApplicationsNavigation = () => {
	return <NavBar className={styles.navigation} items={NAV_DATA} />;
};

export { ApplicationsNavigation };
