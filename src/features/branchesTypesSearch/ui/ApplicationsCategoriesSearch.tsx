import { SearchBar } from '~~>shared/ui/others';

import { useBranchesTypesSearch } from '../lib/useBranchesTypesSearch';
import styles from './BranchesTypesSearch.module.css';

const BranchesTypesSearch = () => {
	const { value, updateValue } = useBranchesTypesSearch();

	return (
		<SearchBar
			className={styles.search}
			value={value}
			onChange={(e) => updateValue(e.target.value.trimStart())}
		/>
	);
};

export { BranchesTypesSearch };
