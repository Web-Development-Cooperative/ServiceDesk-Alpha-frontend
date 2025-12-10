import { TableWithPagination } from '~~>widgets/tableWithPagination';
import { BranchControls } from '~~>widgets/branchControls';
import { BranchUsersControls } from '~~>widgets/branchUsersControls';
import { BranchDisplay } from '~~>features/branchDisplay';
import { BranchUsersDisplay } from '~~>features/branchUsersDisplay';
import { BranchUsersPagination } from '~~>features/branchUsersPagination';
import { InfoSection } from '~~>shared/ui/others';

import styles from './BranchPage.module.css';

const BranchPage = () => {
	return (
		<div className={styles.page}>
			<BranchControls />
			<InfoSection title="Информация о филиале">
				<BranchDisplay />
			</InfoSection>
			<InfoSection
				title="Пользователи"
				controls={<BranchUsersControls />}
			>
				<TableWithPagination>
					<BranchUsersDisplay />
					<BranchUsersPagination />
				</TableWithPagination>
			</InfoSection>
		</div>
	);
};

export { BranchPage };
