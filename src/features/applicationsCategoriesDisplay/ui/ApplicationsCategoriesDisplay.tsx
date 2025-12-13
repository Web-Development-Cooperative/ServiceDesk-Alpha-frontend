import { clsx } from 'clsx';

import { ApplicationsCategoryEdit } from '~~>features/applicationsCategoryEdit'; // !!cross-import
import { ApplicationsCategoryDelete } from '~~>features/applicationsCategoryDelete'; // !!cross-import
import { BrightBackground, UniTable } from '~~>shared/ui/others';
import { Clock, PencilEdit, Trashcan } from '~~>shared/ui/icons';

import { useApplicationsCategoriesDisplay } from '../lib/useApplicationsCategoriesDisplay';
import styles from './ApplicationsCategoriesDisplay.module.css';

const ApplicationsCategoriesDisplay = () => {
	const {
		data,
		editIsOpen,
		setEditIsOpen,
		deleteIsOpen,
		setDeleteEditIsOpen,
		applicationsCategoryId,
		setApplicationsCategoryId,
	} = useApplicationsCategoriesDisplay();

	const renderHead = () => (
		<>
			<th className={styles.name}>Название категории</th>
			<th className={styles.description}>Описание</th>
			<th className={styles.prio}>Приоритет</th>
			<th className={styles.time}>Ожидаемое время выполнения</th>
			<th className={styles.actions}>Действия</th>
		</>
	);
	const renderBody = (
		item: NonNullable<typeof data>[number],
		_index: number
	) => (
		<>
			<td
				className={clsx(styles['col-value'], styles['col-value__name'])}
			>
				<p>{item.name || ''}</p>
			</td>
			<td
				className={clsx(
					styles['col-value'],
					styles['col-value__description']
				)}
			>
				<p>{item.description || ''}</p>
			</td>
			<td
				className={clsx(
					styles['col-value'],
					styles['col-value__priority']
				)}
			>
				<div>
					<BrightBackground typeBG="purple">
						<p>{item.priority || ''}</p>
					</BrightBackground>
				</div>
			</td>
			<td
				className={clsx(styles['col-value'], styles['col-value__time'])}
			>
				<div>
					<BrightBackground>
						<Clock />{' '}
						<p>{item.deadlineHours || 'Неизвестно'} часа</p>
					</BrightBackground>
				</div>
			</td>
			<td className={clsx(styles['col-value'])}>
				<div className={styles['col-actions']}>
					<BrightBackground
						onClick={() => {
							setApplicationsCategoryId(item.id);
							setEditIsOpen(true);
						}}
						isAction
					>
						<PencilEdit />
					</BrightBackground>
					<BrightBackground
						onClick={() => {
							setApplicationsCategoryId(item.id);
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
				<ApplicationsCategoryEdit
					setIsOpen={setEditIsOpen}
					applicationsCategoryId={applicationsCategoryId}
				/>
			)}
			{deleteIsOpen && (
				<ApplicationsCategoryDelete
					setIsOpen={setDeleteEditIsOpen}
					applicationsCategoryId={applicationsCategoryId}
				/>
			)}
		</>
	);
};

export { ApplicationsCategoriesDisplay };
