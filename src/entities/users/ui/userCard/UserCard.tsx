import { Link } from 'react-router';

import { ROUTES } from '~~>shared/model/routes';

import styles from './UserCard.module.css';
import type { FC } from 'react';
import type { User } from '../../model/users';

type UserCardProps = {
	user: User;
};

const UserCard: FC<UserCardProps> = ({ user }) => {
	return (
		<Link to={ROUTES.USERS + '/' + user.id} className={styles['user-card']}>
			<h4>{user.name}</h4>
			<p>{user.email}</p>
		</Link>
	);
};

export { UserCard };
