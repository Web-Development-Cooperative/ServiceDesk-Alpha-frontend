import { Select } from '~~>shared/ui/inputs';

import { SORT_ARRAY } from '../model/branchParentsSort.consts';
import { useBranchParentsSort } from '../lib/useBranchParentsSort';
import styles from './BranchParentsSort.module.css';

const BranchParentsSort = () => {
	const { parentSort, onChangeSort } = useBranchParentsSort();

	return (
		<div className={styles['sort-wrapper']}>
			<p>Сортировка</p>
			<Select
				className={styles.select}
				value={
					SORT_ARRAY.find((o) => o.value === parentSort)?.label || ''
				}
				onChange={onChangeSort}
				options={SORT_ARRAY}
			/>
		</div>
	);
};

export { BranchParentsSort };
