import { SearchBar } from '~~>shared/ui/others';

import { useBranchesSearch } from '../lib/useBranchesSearch';
import styles from './BranchesSearch.module.css';

const BranchesSearch = () => {
	const { value, updateValue } = useBranchesSearch();

	return (
		<SearchBar
			className={styles.search}
			value={value}
			onChange={(e) => updateValue(e.target.value.trimStart())}
		/>
	);
};

export { BranchesSearch };
