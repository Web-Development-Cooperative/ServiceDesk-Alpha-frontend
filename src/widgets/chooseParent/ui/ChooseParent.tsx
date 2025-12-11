import { useState } from 'react';

import { BranchParentsSearch } from '~~>features/branchParentsSearch';
import { BranchParentsSort } from '~~>features/branchParentsSort';
import { BranchParentsDisplay } from '~~>features/branchParentsDisplay';
import { TableWithPagination } from '~~>widgets/tableWithPagination';
import { BranchParentsPagination } from '~~>features/branchParentsPagination';
import { BaseButton } from '~~>shared/ui/buttons';
import { CheckMark } from '~~>shared/ui/icons';

import styles from './ChooseParent.module.css';
import type { FC } from 'react';
import type { ChooseParentProps } from '../model/ChooseParent.types';

const ChooseParent: FC<ChooseParentProps> = ({
	title,
	data,
	branchId,
	onSubmit,
	onCancel,
	submitText,
	cancelText,
}) => {
	const [localBranch, setLocalBranch] = useState(data.parent);

	return (
		<>
			<div className={styles.header}>
				<h3>{title}</h3>
			</div>
			<div className={styles.body}>
				<div className={styles.controls}>
					<BranchParentsSearch />
					<BranchParentsSort />
				</div>
				<div className={styles.branch}>
					<CheckMark />
					<p>Выбран: {localBranch.name}</p>
				</div>
				<TableWithPagination>
					<BranchParentsDisplay
						branch={localBranch}
						branchId={branchId}
						onSelect={(value) => setLocalBranch(value)}
					/>
					<BranchParentsPagination branchId={branchId} />
				</TableWithPagination>
			</div>
			<div className={styles.footer}>
				<BaseButton typeButton="base" onClick={onCancel}>
					{cancelText}
				</BaseButton>
				<BaseButton onClick={() => onSubmit(localBranch)}>
					{submitText}
				</BaseButton>
			</div>
		</>
	);
};

export { ChooseParent };
