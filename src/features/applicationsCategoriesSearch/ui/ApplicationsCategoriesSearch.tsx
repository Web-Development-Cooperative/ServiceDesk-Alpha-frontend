import { SearchBar } from '~~>shared/ui/others';

import { useApplicationsCategoriesSearch } from '../lib/useApplicationsCategoriesSearch';
import styles from './ApplicationsCategoriesSearch.module.css';

const ApplicationsCategoriesSearch = () => {
	const { value, updateValue } = useApplicationsCategoriesSearch();

	return (
		<SearchBar
			className={styles.search}
			value={value}
			onChange={(e) => updateValue(e.target.value.trimStart())}
		/>
	);
};

export { ApplicationsCategoriesSearch };
