import { Link } from 'react-router';

import { BaseButton } from '~~>shared/ui/buttons';
import { Select } from '~~>shared/ui/inputs';
import { SearchBar } from '~~>shared/ui/others';
import { ROUTES } from '~~>shared/model/routes';
import { Plus } from '~~>shared/ui/icons';

import { useBranchesControls } from '../lib/useBranchesControls';
import { SORT_ARRAY } from '../model/branchesControls.consts';
import styles from './BranchesControls.module.css';

const BranchesControls = () => {
	const { search, setSearch, sort, onChangeSort } = useBranchesControls();

	return (
		<div className={styles.controls}>
			<SearchBar
				className={styles.search}
				value={search}
				onChange={(e) => setSearch(e.target.value.trimStart())}
			/>
			<div className={styles['sort-wrapper']}>
				<p>Сортировка</p>
				<Select
					className={styles.select}
					value={sort?.label || ''}
					onChange={onChangeSort}
					options={SORT_ARRAY}
				/>
			</div>
			<Link to={ROUTES.BRANCHES}>
				<BaseButton>
					<Plus /> Добавить филиал
				</BaseButton>
			</Link>
		</div>
	);
};

export { BranchesControls };
