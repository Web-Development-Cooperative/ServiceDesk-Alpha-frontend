import { useState, type ComponentProps } from 'react';

import { LoadFiles } from '~~>features/loadFiles';
import {
	ActiveIcon,
	ActiveText,
	NavigationText,
	Notification,
	SearchBar,
	StatusBadge,
	UserCard,
} from '~~>shared/ui/others';
import { PencilEdit, Plus } from '~~>shared/ui/icons';
import { Select } from '~~>shared/ui/inputs';
import { BaseButton } from '~~>shared/ui/buttons';

import styles from './HomePage.module.css';

const HomePage = () => {
	const [value, setValue] = useState('');
	const [valuse, setValuse] = useState<
		ComponentProps<typeof Select>['options'][number]
	>({ value: NaN, label: '' });

	console.log(valuse);

	return (
		<div className={styles['home-page']}>
			<h1>home-page</h1>
			<ActiveIcon typeActive="danger">
				<PencilEdit />
			</ActiveIcon>
			<Notification data="9" />
			<BaseButton>
				<Plus /> button
			</BaseButton>
			<ActiveText>Text text</ActiveText>
			<StatusBadge />
			<StatusBadge typeBadge="danger" />
			<StatusBadge typeBadge="inProgress" />
			<StatusBadge typeBadge="success" />
			<NavigationText to="/">Ссылка</NavigationText>
			<NavigationText to="/ooo">Ссылка</NavigationText>
			<UserCard
				path="#"
				role="Исполнитель"
				firstname="Петров"
				lastname="Петр"
				patronymic="Петрович"
			/>
			<SearchBar
				value={value}
				onChange={(e) => setValue(e.target.value)}
			/>
			<Select
				options={[
					{ value: 1, label: 'opop' },
					{ value: 2, label: 'ipipip' },
				]}
				value={valuse.label}
				onChange={(obj) => setValuse(obj)}
			/>
			<LoadFiles />
		</div>
	);
};

export { HomePage };
