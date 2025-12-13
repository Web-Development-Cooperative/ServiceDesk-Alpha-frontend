import { Link } from 'react-router';
import { clsx } from 'clsx';

import { EditBranchFlow } from '~~>widgets/editBranchFlow'; // !!forbidden import
import { BranchDelete } from '~~>features/branchDelete'; // !!cross-import
import { BrightBackground, UniTable } from '~~>shared/ui/others';
import { PencilEdit, Trashcan } from '~~>shared/ui/icons';

import { useBranchesDisplay } from '../lib/useBranchesDisplay';
import styles from './BranchesDisplay.module.css';

const BranchesDisplay = () => {
	const {
		data,
		editIsOpen,
		setEditIsOpen,
		deleteIsOpen,
		setDeleteEditIsOpen,
		branchId,
		setBranchId,
	} = useBranchesDisplay();

	const renderHead = () => (
		<>
			<th className={styles.area}>Регион/область</th>
			<th>Филиалы</th>
			<th className={styles.actions}>Действия</th>
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
				<Link to={item.id} className={styles['link__area']}>
					{item.area}
				</Link>
			</td>
			<td
				className={clsx(styles['col-value'], styles['col-value__name'])}
			>
				<Link to={item.id} className={styles['branch-name']}>
					<p>{item.name}</p>
					<p>{item.address}</p>
				</Link>
			</td>
			<td className={clsx(styles['col-value'])}>
				<Link to={item.id} className={styles['col-actions']}>
					<BrightBackground
						onClick={() => {
							setBranchId(item.id);
							setEditIsOpen(true);
						}}
						isAction
					>
						<PencilEdit />
					</BrightBackground>
					<BrightBackground
						onClick={() => {
							setBranchId(item.id);
							setDeleteEditIsOpen(true);
						}}
						typeBG="danger"
						isAction
					>
						<Trashcan />
					</BrightBackground>
				</Link>
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
				<EditBranchFlow setIsOpen={setEditIsOpen} branchId={branchId} />
			)}
			{deleteIsOpen && (
				<BranchDelete
					setIsOpen={setDeleteEditIsOpen}
					branchId={branchId}
				/>
			)}
		</>
	);
};

export { BranchesDisplay };
