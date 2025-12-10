import { AddBranchFlow } from '~~>widgets/addBranchFlow'; // !!cross-import
import { BranchesSearch } from '~~>features/branchesSearch';
import { BranchesSort } from '~~>features/branchesSort';
import { BaseButton } from '~~>shared/ui/buttons';
import { Plus } from '~~>shared/ui/icons';

import { useBranchesControls } from '../lib/useBranchesControls';
import styles from './BranchesControls.module.css';

const BranchesControls = () => {
	const { popupState, setPopupState, openPopup } = useBranchesControls();

	return (
		<div className={styles.controls}>
			<BranchesSearch />
			<BranchesSort />
			<BaseButton onClick={openPopup}>
				<Plus /> Добавить филиал
			</BaseButton>
			{popupState && <AddBranchFlow setIsOpen={setPopupState} />}
		</div>
	);
};

export { BranchesControls };
