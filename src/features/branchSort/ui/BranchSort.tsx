import { Select } from '~~>shared/ui/inputs';

import { SORT_ARRAY } from '../model/branchesControls.consts';
import { useBranchSort } from '../lib/useBranchSort';
import styles from './BranchSort.module.css';

const BranchSort = () => {
	const { sort, onChangeSort } = useBranchSort();

	return (
		<div className={styles['sort-wrapper']}>
			<p>Сортировка</p>
			<Select
				className={styles.select}
				value={SORT_ARRAY.find((o) => o.value === sort)?.label || ''}
				onChange={onChangeSort}
				options={SORT_ARRAY}
			/>
		</div>
	);
};

export { BranchSort };
