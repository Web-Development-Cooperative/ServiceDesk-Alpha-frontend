import { Select } from '~~>shared/ui/inputs';

import { SORT_ARRAY } from '../model/BranchesTypesSort.consts';
import { useBranchesTypesSort } from '../lib/useBranchesTypesSort';
import styles from './BranchesTypesSort.module.css';

const BranchesTypesSort = () => {
	const { sort, onChangeSort } = useBranchesTypesSort();

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

export { BranchesTypesSort };
