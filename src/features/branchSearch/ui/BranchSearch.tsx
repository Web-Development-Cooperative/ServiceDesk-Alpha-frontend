import { SearchBar } from '~~>shared/ui/others';

import { useBranchSearch } from '../lib/useBranchSearch';
import styles from './BranchSearch.module.css';

const BranchSearch = () => {
	const { value, updateValue } = useBranchSearch();

	return (
		<SearchBar
			className={styles.search}
			value={value}
			onChange={(e) => updateValue(e.target.value.trimStart())}
		/>
	);
};

export { BranchSearch };
