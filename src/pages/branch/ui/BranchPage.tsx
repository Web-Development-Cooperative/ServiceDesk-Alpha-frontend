import { TableWithPagination } from '~~>widgets/tableWithPagination';
import { BranchControls } from '~~>widgets/branchControls';
import { BranchDisplay } from '~~>features/branchDisplay';
import { InfoSection } from '~~>shared/ui/others';

import styles from './BranchPage.module.css';

const BranchPage = () => {
	return (
		<div className={styles.page}>
			<BranchControls />
			<InfoSection title="Информация о филиале">
				<BranchDisplay />
			</InfoSection>
			<div className="branch-users">
				<TableWithPagination>
					<div className="table"></div>
					<div className="pagination"></div>
				</TableWithPagination>
			</div>
		</div>
	);
};

export { BranchPage };
