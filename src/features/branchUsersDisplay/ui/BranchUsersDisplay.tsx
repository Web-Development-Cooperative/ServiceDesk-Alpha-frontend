import { UniList } from '~~>shared/ui/others';
import { ROLES } from '~~>shared/model/baseConsts';

import { UserCard } from './userCard/UserCard';
import styles from './BranchUsersDisplay.module.css';
import type { EmployeesModel } from '~~>entities/employees';

const BranchUsersDisplay = () => {
	const data: EmployeesModel = [
		{
			id: '1',
			branchId: '7275ad3c-1dad-4adc-8b87-20cb2cf071a0',
			user: {
				id: '1',
				email: 'фыва',
				firstname: 'ПользовательИмя',
				lastname: 'ФамилияПользователь',
				patronymic: '',
				workplace: 'Ул пушкина дом ну понятно уже',
				branch: 'ыыыыыыы',
				enabled: true,
				roles: [ROLES.ROLE_ADMIN],
			},
			categories: [],
		},
		{
			id: '2',
			branchId: '7275ad3c-1dad-4adc-8b87-20cb2cf071a0',
			user: {
				id: '2',
				email: '@@@',
				firstname: 'ПользовательИмя2',
				lastname: 'ФамилияПользователь2',
				patronymic: '2ОтчествоПользователь',
				workplace: 'Ул Лучшая дом ну понятно уже',
				branch: 'ыыыыыыы',
				enabled: true,
				roles: [ROLES.ROLE_ADMIN],
			},
			categories: [],
		},
		{
			id: '2',
			branchId: '7275ad3c-1dad-4adc-8b87-20cb2cf071a0',
			user: {
				id: '2',
				email: 'фываяы',
				firstname: 'ПользовательИмя3',
				lastname: 'ФамилияПользователь3',
				patronymic: '3ОтчествоПользователь3',
				workplace: 'Ул Худж дом ну понятно уже',
				branch: 'ыыыыыыы',
				enabled: true,
				roles: [ROLES.ROLE_ADMIN],
			},
			categories: [],
		},
	];

	if (!data.length)
		return <p className={styles['branch-users']}>Данных нет!</p>;

	return (
		<UniList
			className={styles['branch-users']}
			items={data}
			renderItem={(item) => <UserCard data={item} />}
		/>
	);
};

export { BranchUsersDisplay };
