import { SearchBar } from '~~>shared/ui/others';

import { useBranchParentsSearch } from '../lib/useBranchParentsSearch';
import styles from './BranchParentsSearch.module.css';

const BranchParentsSearch = () => {
	const { value, updateValue } = useBranchParentsSearch();

	return (
		<SearchBar
			className={styles.search}
			value={value}
			onChange={(e) => updateValue(e.target.value.trimStart())}
		/>
	);
};

export { BranchParentsSearch };
