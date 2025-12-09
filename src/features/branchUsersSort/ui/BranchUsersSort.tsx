import { Select } from '~~>shared/ui/inputs';

import { useBranchUsersSort } from '../lib/useBranchUsersSort';
import { SORT_ARRAY } from '../model/branchesSort.consts';
import styles from './BranchUsersSort.module.css';

const BranchUsersSort = () => {
	const { sort, onChangeSort } = useBranchUsersSort();

	return (
		<div className={styles['sort-wrapper']}>
			<p>Сортировка:</p>
			<Select
				className={styles.select}
				value={SORT_ARRAY.find((o) => o.value === sort)?.label || ''}
				onChange={onChangeSort}
				options={SORT_ARRAY}
			/>
		</div>
	);
};

export { BranchUsersSort };
