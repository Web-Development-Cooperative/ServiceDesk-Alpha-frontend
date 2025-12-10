import { Link } from 'react-router';

import { BaseButton } from '~~>shared/ui/buttons';
import { ROUTES } from '~~>shared/model/routes';
import { Arrow, PencilEdit, Trashcan } from '~~>shared/ui/icons';

import styles from './BranchControls.module.css';

const BranchControls = () => {
	return (
		<div className={styles.controls}>
			<BaseButton typeButton="base" withoutText>
				<Link to={ROUTES.BRANCHES}>
					<Arrow />
				</Link>
			</BaseButton>
			<h1>Название</h1>
			<div className={styles['btn-wrapper']}>
				<BaseButton typeButton="base">
					<PencilEdit /> Редактировать
				</BaseButton>
				<BaseButton>
					<Trashcan /> Удалить филиал
				</BaseButton>
			</div>
		</div>
	);
};

export { BranchControls };
