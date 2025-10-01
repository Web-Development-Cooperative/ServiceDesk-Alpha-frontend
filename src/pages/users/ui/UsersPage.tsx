import { useEffect, useState } from 'react';

import { getAllUsers, UserCard } from '~~>entities/users';
import { UniList } from '~~>shared/ui/others';
import { mapArrNumberToString } from '~~>shared/lib';

import styles from './UsersPage.module.css';
import type { User } from '~~>entities/users';

const UsersPage = () => {
	const [users, setUsers] = useState<User[]>([]);

	useEffect(() => {
		getAllUsers({}).then((res) => setUsers(res.data));
	}, []);

	return (
		<>
			<p>
				id пользователей:{' '}
				{mapArrNumberToString(users.map((user) => user.id)).join(', ')}
			</p>
			{users.length ? (
				<UniList
					className={styles['user-list']}
					items={users}
					renderItem={(user) => <UserCard user={user} />}
				/>
			) : (
				<p>Пользователей нет!</p>
			)}
		</>
	);
};

export { UsersPage };
