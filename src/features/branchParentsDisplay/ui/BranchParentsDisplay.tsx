import { clsx } from 'clsx';

import { UniTable } from '~~>shared/ui/others';

import { useBranchParentsDisplay } from '../lib/useBranchParentsDisplay';
import styles from './BranchParentsDisplay.module.css';
import type { FC } from 'react';
import type { BranchParentsDisplayProps } from '../model/branchParentsDisplay.types';

const BranchParentsDisplay: FC<BranchParentsDisplayProps> = ({
	branch,
	branchId,
	onSelect,
}) => {
	const { data } = useBranchParentsDisplay(branchId);

	const renderHead = () => (
		<>
			<th className={styles.area}>ID филиала</th>
			<th>Название филиала</th>
		</>
	);
	const renderBody = (
		item: NonNullable<typeof data>[number],
		_index: number
	) => (
		<>
			<td
				className={clsx(
					styles['col-value'],
					{ [styles.active]: branch.id == item.id },
					styles['col-value__area']
				)}
				onClick={() => onSelect(item)}
			>
				<div className={styles['link__area']}>{item.id}</div>
			</td>
			<td
				className={clsx(
					styles['col-value'],
					{ [styles.active]: branch.id == item.id },
					styles['col-value__name']
				)}
				onClick={() => onSelect(item)}
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

export { BranchParentsDisplay };
