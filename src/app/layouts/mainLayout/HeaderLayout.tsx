import { Outlet } from 'react-router';

import { Header } from '~~>widgets/header';

import styles from './HeaderLayout.module.css';

const HeaderLayout = () => {
	return (
		<>
			<Header />
			<div className={styles['pages-wrapper']}>
				<Outlet />
			</div>
		</>
	);
};

export { HeaderLayout };
