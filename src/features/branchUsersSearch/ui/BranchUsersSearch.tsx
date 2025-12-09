import { SearchBar } from '~~>shared/ui/others';

import { useBranchUsersSearch } from '../lib/useBranchUsersSearch';
import styles from './BranchUsersSearch.module.css';

const BranchUsersSearch = () => {
	const { value, updateValue } = useBranchUsersSearch();

	return (
		<SearchBar
			className={styles.search}
			value={value}
			onChange={(e) => updateValue(e.target.value.trimStart())}
		/>
	);
};

export { BranchUsersSearch };
