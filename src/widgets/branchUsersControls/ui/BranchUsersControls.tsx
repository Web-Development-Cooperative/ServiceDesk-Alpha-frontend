import { BranchUsersSearch } from '~~>features/branchUsersSearch';
import { BranchUsersSort } from '~~>features/branchUsersSort';

import styles from './BranchUsersControls.module.css';

const BranchUsersControls = () => {
	return (
		<div className={styles.controls}>
			<BranchUsersSearch />
			<BranchUsersSort />
		</div>
	);
};

export { BranchUsersControls };
