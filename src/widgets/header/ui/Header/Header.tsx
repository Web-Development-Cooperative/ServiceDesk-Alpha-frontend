import { FetchUserProfile } from '~~>features/fetchUserProfile';
import { FetchNotification } from '~~>features/fetchNotification';
import { MainNavigation } from '~~>features/mainNavigation';

import styles from './Header.module.css';
import type { FC } from 'react';

const Header: FC = () => {
	// TODO, добавить пользователя?
	return (
		<div className={styles.header}>
			<FetchUserProfile />
			<MainNavigation />
			<FetchNotification />
		</div>
	);
};

export { Header };
