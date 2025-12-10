import { BranchesControls } from '~~>widgets/branchesControls';
import { TableWithPagination } from '~~>widgets/tableWithPagination';
import { BranchesDisplay } from '~~>features/branchesDisplay';
import { BranchesPagination } from '~~>features/branchesPagination';

import styles from './BranchesPage.module.css';

const BranchesPage = () => {
	return (
		<div className={styles.page}>
			<h1>Филиалы</h1>
			<BranchesControls />
			<TableWithPagination>
				<BranchesDisplay />
				<BranchesPagination />
			</TableWithPagination>
		</div>
	);
};

export { BranchesPage };
