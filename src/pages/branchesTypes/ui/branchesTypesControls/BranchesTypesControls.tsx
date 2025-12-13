import { useState } from 'react';

import { BranchesTypesSearch } from '~~>features/branchesTypesSearch';
import { BranchesTypesSort } from '~~>features/branchesTypesSort';
import { BranchesTypesAdd } from '~~>features/branchesTypesAdd';
import { BaseButton } from '~~>shared/ui/buttons';
import { Plus } from '~~>shared/ui/icons';

import styles from './BranchesTypesControls.module.css';

const BranchesTypesControls = () => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className={styles.controls}>
			<BranchesTypesSearch />
			<BranchesTypesSort />
			<BaseButton onClick={() => setIsOpen(true)}>
				<Plus /> Добавить категорию
			</BaseButton>
			{isOpen && <BranchesTypesAdd setIsOpen={setIsOpen} />}
		</div>
	);
};

export { BranchesTypesControls };
