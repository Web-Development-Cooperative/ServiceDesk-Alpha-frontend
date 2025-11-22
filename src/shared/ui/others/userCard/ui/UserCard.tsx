import { useState } from 'react';

import styles from './UserCard.module.css';
import type { FC } from 'react';
import type { UserCardProps } from '../model/userCard.types';

const UserCard: FC<UserCardProps> = ({
	path,
	role,
	firstname,
	lastname,
	patronymic,
}) => {
	const [imgError, setImgError] = useState(false);

	return (
		<div className={styles['user-card']}>
			<div className={styles.avatar}>
				{imgError ? (
					`${lastname.slice(0, 1)}${firstname.slice(0, 1)}`
				) : (
					<img
						src={path}
						alt={`${lastname} ${firstname}`}
						onError={() => setImgError(true)}
					/>
				)}
			</div>
			<div className={styles.data}>
				<p className={styles['user-name']}>
					{lastname} {firstname.slice(0, 1)}.{' '}
					{patronymic ? `${patronymic.slice(0, 1)}.` : ''}
				</p>
				<p className={styles.role}>{role}</p>
			</div>
		</div>
	);
};

export { UserCard };
