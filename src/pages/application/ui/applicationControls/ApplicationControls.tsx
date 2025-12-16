import { Link } from 'react-router';

import { ApplicationDelete } from '~~>features/applicationDelete';
import { ROUTES } from '~~>shared/model/routes';
import { BaseButton } from '~~>shared/ui/buttons';
import { Arrow, ClockHistory, PencilEdit, Trashcan } from '~~>shared/ui/icons';

import { useApplicationControls } from '../../lib/useApplicationControls';
import styles from './ApplicationControls.module.css';

const ApplicationControls = () => {
	const {
		editIsOpen,
		setEditIsOpen,
		deleteIsOpen,
		setDeleteEditIsOpen,
		applicationId,
	} = useApplicationControls();

	return (
		<div className={styles.controls}>
			<Link to={ROUTES.MY_APPLICATIONS}>
				<BaseButton typeButton="base" withoutText>
					<Arrow />
				</BaseButton>
			</Link>
			<h1>Название</h1>
			<div className={styles['btn-wrapper']}>
				<Link to="#" className={styles['history-link']}>
					<BaseButton typeButton="base">
						<ClockHistory /> История
					</BaseButton>
				</Link>
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
			{editIsOpen && <>Модалка</>}
			{deleteIsOpen && (
				<ApplicationDelete
					setIsOpen={setDeleteEditIsOpen}
					applicationId={applicationId || '0'}
				/>
			)}
		</div>
	);
};

export { ApplicationControls };
