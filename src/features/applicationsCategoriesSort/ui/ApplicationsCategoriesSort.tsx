import { Select } from '~~>shared/ui/inputs';

import { SORT_ARRAY } from '../model/ApplicationsCategoriesSort.consts';
import { useApplicationsCategoriesSort } from '../lib/useApplicationsCategoriesSort';
import styles from './ApplicationsCategoriesSort.module.css';

const ApplicationsCategoriesSort = () => {
	const { sort, onChangeSort } = useApplicationsCategoriesSort();

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

export { ApplicationsCategoriesSort };
