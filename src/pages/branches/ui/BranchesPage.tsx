import { BranchesControls } from '~~>widgets/BranchesControls';

import styles from './BranchesPage.module.css';

const BranchesPage = () => {
	return (
		<div className={styles.page}>
			<h1>Филиалы</h1>
			<BranchesControls />
			<div className="branches-list"></div>
		</div>
	);
};

export { BranchesPage };
