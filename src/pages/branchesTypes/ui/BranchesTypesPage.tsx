import { TableWithPagination } from '~~>widgets/tableWithPagination';
import { BranchesTypesDisplay } from '~~>features/branchesTypesDisplay';
import { BranchesTypesPagination } from '~~>features/branchesTypesPagination';

import { BranchesTypesControls } from './branchesTypesControls/BranchesTypesControls';
import styles from './BranchesTypesPage.module.css';

const BranchesTypesPage = () => {
	return (
		<div className={styles.page}>
			<h1>Типы филиалов</h1>
			<BranchesTypesControls />
			<TableWithPagination>
				<BranchesTypesDisplay />
				<BranchesTypesPagination />
			</TableWithPagination>
		</div>
	);
};

export { BranchesTypesPage };
