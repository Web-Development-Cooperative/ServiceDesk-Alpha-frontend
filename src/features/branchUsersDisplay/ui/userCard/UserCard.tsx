import { BrightBackground } from '~~>shared/ui/others';
import { Email, Phone, Place } from '~~>shared/ui/icons';

import styles from './UserCard.module.css';
import type { FC } from 'react';
import type { EmployeesModel } from '~~>entities/employees';

const UserCard: FC<Record<'data', EmployeesModel[number]>> = ({ data }) => {
	return (
		<div className={styles['user-card']}>
			<p className={styles.img}>
				{data.user.firstname[0]}
				{data.user.lastname[0]}
			</p>
			<div className={styles['user-info']}>
				<div className={styles['main-info']}>
					<h4>
						{data.user.firstname} {data.user.lastname}{' '}
						{data.user.patronymic || ''}
					</h4>
					<BrightBackground typeBG="success">
						{data.user.roles[0]}
					</BrightBackground>
				</div>
				<div className={styles.contacts}>
					<div className={styles.phone}>
						<Phone />
						<div className={styles.info}>
							<p>Телефон</p>
							<p>+7 (495) 123-45-67</p>
							<p>+7 (916) 234-56-78</p>
						</div>
					</div>
					<div className={styles.email}>
						<Email />
						<div className={styles.info}>
							<p>Email</p>
							<p>{data.user.email}</p>
						</div>
					</div>
					<div className={styles.workplace}>
						<Place />
						<div className={styles.info}>
							<p>Рабочее место</p>
							<p>{data.user.workplace}</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export { UserCard };
