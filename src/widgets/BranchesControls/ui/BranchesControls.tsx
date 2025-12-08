import { Link } from 'react-router';

import { BranchesSearch } from '~~>features/branchesSearch';
import { BranchesSort } from '~~>features/branchesSort';
import { BaseButton } from '~~>shared/ui/buttons';
import { ROUTES } from '~~>shared/model/routes';
import { Plus } from '~~>shared/ui/icons';

import styles from './BranchesControls.module.css';

const BranchesControls = () => {
	return (
		<div className={styles.controls}>
			<BranchesSearch />
			<BranchesSort />
			<Link to={ROUTES.BRANCHES}>
				<BaseButton>
					<Plus /> Добавить филиал
				</BaseButton>
			</Link>
		</div>
	);
};

export { BranchesControls };
