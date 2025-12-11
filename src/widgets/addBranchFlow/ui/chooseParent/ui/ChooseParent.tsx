import { useState } from 'react';

import { BranchParentsSearch } from '~~>features/branchParentsSearch';
import { BranchParentsSort } from '~~>features/branchParentsSort';
import { BranchParentsDisplay } from '~~>features/branchParentsDisplay';
import { TableWithPagination } from '~~>widgets/tableWithPagination';
import { BranchParentsPagination } from '~~>features/branchParentsPagination';
import { BasePopup } from '~~>shared/ui/popups';
import { BaseButton } from '~~>shared/ui/buttons';

import styles from './ChooseParent.module.css';
import type { FC } from 'react';
import type { ChooseParentProps } from '../model/ChooseParent.types';

const ChooseParent: FC<ChooseParentProps> = ({
	setIsOpen,
	title,
	data,
	onSubmit,
	onCancel,
	submitText,
	cancelText,
}) => {
	const [localBranch, setLocalBranch] = useState(data.parent);

	return (
		<BasePopup setIsOpen={setIsOpen} withCross>
			<div className={styles.header}>
				<h3>{title}</h3>
			</div>
			<div className={styles.body}>
				<div className={styles.controls}>
					<BranchParentsSearch />
					<BranchParentsSort />
				</div>
				<TableWithPagination>
					<BranchParentsDisplay
						branch={localBranch}
						branchId={'0'}
						onSelect={(value) => setLocalBranch(value)}
					/>
					<BranchParentsPagination branchId={'0'} />
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
		</BasePopup>
	);
};

export { ChooseParent };
