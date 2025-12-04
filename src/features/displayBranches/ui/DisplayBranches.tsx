import { clsx } from 'clsx';

import { UniTable } from '~~>shared/ui/others';

import { useDisplayBranches } from '../lib/iuseDisplayBranches';
import styles from './DisplayBranches.module.css';

const DisplayBranches = () => {
	const { data } = useDisplayBranches();

	const renderHead = () => (
		<>
			<th className={styles.area}>Регион/область</th>
			<th>Филиалы</th>
		</>
	);
	const renderBody = (
		item: NonNullable<typeof data>['content'][number],
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
			data={data?.content || []}
			renderHead={renderHead}
			renderBody={renderBody}
		/>
	);
};

export { DisplayBranches };
