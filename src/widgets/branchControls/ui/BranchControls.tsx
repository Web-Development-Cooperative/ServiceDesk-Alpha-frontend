import { Link } from 'react-router';

import { EditBranchFlow } from '~~>widgets/editBranchFlow'; // !!cross-import
import { BranchDelete } from '~~>features/branchDelete';
import { BaseButton } from '~~>shared/ui/buttons';
import { ROUTES } from '~~>shared/model/routes';
import { Arrow, PencilEdit, Trashcan } from '~~>shared/ui/icons';

import { useBranchControls } from '../lib/useBranchControls';
import styles from './BranchControls.module.css';

const BranchControls = () => {
	const {
		editIsOpen,
		setEditIsOpen,
		deleteIsOpen,
		setDeleteEditIsOpen,
		branchId,
	} = useBranchControls();

	return (
		<div className={styles.controls}>
			<Link to={ROUTES.BRANCHES}>
				<BaseButton typeButton="base" withoutText>
					<Arrow />
				</BaseButton>
			</Link>
			<h1>Название</h1>
			<div className={styles['btn-wrapper']}>
				<BaseButton
					onClick={() => setEditIsOpen(true)}
					typeButton="base"
				>
					<PencilEdit /> Редактировать
				</BaseButton>
				<BaseButton onClick={() => setDeleteEditIsOpen(true)}>
					<Trashcan /> Удалить филиал
				</BaseButton>
			</div>
			{editIsOpen && (
				<EditBranchFlow
					setIsOpen={setEditIsOpen}
					branchId={branchId || '0'}
				/>
			)}
			{deleteIsOpen && (
				<BranchDelete
					setIsOpen={setDeleteEditIsOpen}
					branchId={branchId || '0'}
				/>
			)}
		</div>
	);
};

export { BranchControls };
