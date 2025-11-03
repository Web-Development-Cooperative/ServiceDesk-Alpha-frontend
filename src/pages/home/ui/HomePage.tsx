import { LoadFiles } from '~~>features/loadFiles';

import styles from './HomePage.module.css';

const HomePage = () => {
	return (
		<div className={styles['home-page']}>
			<h1>home-page</h1>
			<LoadFiles />
		</div>
	);
};

export { HomePage };
