import { Select } from '~~>shared/ui/inputs';

import { SORT_ARRAY } from '../model/branchesSort.consts';
import { useBranchesSort } from '../lib/useBranchesSort';
import styles from './BranchesSort.module.css';

const BranchesSort = () => {
	const { sort, onChangeSort } = useBranchesSort();

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

export { BranchesSort };
