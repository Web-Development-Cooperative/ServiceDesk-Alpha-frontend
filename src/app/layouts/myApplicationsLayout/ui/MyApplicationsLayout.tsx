import { useState } from 'react';
import { Outlet } from 'react-router';

import { ApplicationsSummary } from '~~>features/applicationsSummary';
import { ApplicationsNavigation } from '~~>features/applicationsNavigation';
import { BaseButton } from '~~>shared/ui/buttons';
import { Plus } from '~~>shared/ui/icons';

import styles from './MyApplicationsLayout.module.css';

const MyApplicationsLayout = () => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className={styles['page-wrapper']}>
			<div className={styles['header-wrapper']}>
				<h1>Мои заявки</h1>
				<BaseButton onClick={() => setIsOpen(true)}>
					<Plus /> Создать заявку
				</BaseButton>
			</div>
			<ApplicationsSummary />
			<ApplicationsNavigation />
			<Outlet />
			{isOpen && <>Модалка</>}
		</div>
	);
};

export { MyApplicationsLayout };
