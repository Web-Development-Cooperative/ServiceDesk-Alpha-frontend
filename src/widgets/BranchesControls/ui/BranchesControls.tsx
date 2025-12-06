import { Link } from 'react-router';

import { BranchSearch } from '~~>features/branchSearch';
import { BranchSort } from '~~>features/branchSort';
import { BaseButton } from '~~>shared/ui/buttons';
import { ROUTES } from '~~>shared/model/routes';
import { Plus } from '~~>shared/ui/icons';

import styles from './BranchesControls.module.css';

const BranchesControls = () => {
	return (
		<div className={styles.controls}>
			<BranchSearch />
			<BranchSort />
			<Link to={ROUTES.BRANCHES}>
				<BaseButton>
					<Plus /> Добавить филиал
				</BaseButton>
			</Link>
		</div>
	);
};

export { BranchesControls };
