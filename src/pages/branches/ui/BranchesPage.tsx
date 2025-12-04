import { BranchesControls } from '~~>widgets/BranchesControls';
import { DisplayBranches } from '~~>features/displayBranches';

import styles from './BranchesPage.module.css';

const BranchesPage = () => {
	return (
		<div className={styles.page}>
			<h1>Филиалы</h1>
			<BranchesControls />
			<DisplayBranches />
		</div>
	);
};

export { BranchesPage };
