import { clsx } from 'clsx';

import { BranchesTypesEdit } from '~~>features/branchesTypesEdit'; // !!cross-import
import { BranchesTypesDelete } from '~~>features/branchesTypesDelete'; // !!cross-import
import { BrightBackground, UniTable } from '~~>shared/ui/others';
import { PencilEdit, Trashcan } from '~~>shared/ui/icons';

import { useBranchesTypesDisplay } from '../lib/useBranchesTypesDisplay';
import styles from './BranchesTypesDisplay.module.css';

const BranchesTypesDisplay = () => {
	const {
		data,
		editIsOpen,
		setEditIsOpen,
		deleteIsOpen,
		setDeleteEditIsOpen,
		branchesTypesId,
		setBranchesTypesId,
	} = useBranchesTypesDisplay();

	const renderHead = () => (
		<>
			<th className={styles.id}>ID</th>
			<th className={styles.name}>Название типа</th>
			<th className={styles.actions}>Действия</th>
		</>
	);
	const renderBody = (
		item: NonNullable<typeof data>[number],
		_index: number
	) => (
		<>
			<td className={clsx(styles['col-value'], styles['col-value__id'])}>
				<p>{item.id || ''}</p>
			</td>
			<td
				className={clsx(styles['col-value'], styles['col-value__name'])}
			>
				<p>{item.name || ''}</p>
			</td>
			<td className={clsx(styles['col-value'])}>
				<div className={styles['col-actions']}>
					<BrightBackground
						onClick={() => {
							setBranchesTypesId(item.id);
							setEditIsOpen(true);
						}}
						isAction
					>
						<PencilEdit />
					</BrightBackground>
					<BrightBackground
						onClick={() => {
							setBranchesTypesId(item.id);
							setDeleteEditIsOpen(true);
						}}
						typeBG="danger"
						isAction
					>
						<Trashcan />
					</BrightBackground>
				</div>
			</td>
		</>
	);

	return (
		<>
			<UniTable
				data={data || []}
				renderHead={renderHead}
				renderBody={renderBody}
			/>
			{editIsOpen && (
				<BranchesTypesEdit
					setIsOpen={setEditIsOpen}
					branchesTypesId={branchesTypesId}
				/>
			)}
			{deleteIsOpen && (
				<BranchesTypesDelete
					setIsOpen={setDeleteEditIsOpen}
					branchesTypesId={branchesTypesId}
				/>
			)}
		</>
	);
};

export { BranchesTypesDisplay };
