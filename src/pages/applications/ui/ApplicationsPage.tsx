import styles from './ApplicationsPage.module.css';

const ApplicationsPage = () => {
	return (
		<div className={styles['home-page']}>
			<h1>application-page</h1>
			{/* <ActiveIcon typeActive="danger">
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
			<LoadFiles /> */}
		</div>
	);
};

export { ApplicationsPage };
