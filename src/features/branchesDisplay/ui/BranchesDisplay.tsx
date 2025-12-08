import { clsx } from 'clsx';

import { UniTable } from '~~>shared/ui/others';

import { useBranchesDisplay } from '../lib/useBranchesDisplay';
import styles from './BranchesDisplay.module.css';

const BranchesDisplay = () => {
	const { data } = useBranchesDisplay();

	const renderHead = () => (
		<>
			<th className={styles.area}>Регион/область</th>
			<th>Филиалы</th>
		</>
	);
	const renderBody = (
		item: NonNullable<typeof data>[number],
		_index: number
	) => (
		<>
			<td
				className={clsx(styles['col-value'], styles['col-value__area'])}
			>
				{item.area}
			</td>
			<td
				className={clsx(styles['col-value'], styles['col-value__name'])}
			>
				<div className={styles['branch-name']}>
					<p>{item.name}</p>
					<p>{item.address}</p>
				</div>
			</td>
		</>
	);

	return (
		<UniTable
			data={data || []}
			renderHead={renderHead}
			renderBody={renderBody}
		/>
	);
};

export { BranchesDisplay };
