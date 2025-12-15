import { UniList } from '~~>shared/ui/others';

import { SummaryItem } from './summaryItem/SummaryItem';
import { ARRAY } from '../model/applicationsSummary.consts';
import styles from './ApplicationsSummary.module.css';

const ApplicationsSummary = () => {
	const renderItem = (item: (typeof ARRAY)[number]) => (
		<SummaryItem item={item} />
	);

	return (
		<UniList
			className={styles.summary}
			items={ARRAY}
			renderItem={renderItem}
		/>
	);
};

export { ApplicationsSummary };
