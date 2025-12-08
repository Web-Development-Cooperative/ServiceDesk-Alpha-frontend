import { UserCard } from '~~>shared/ui/others';

import { useFetchUserProfile } from '../lib/useFetchUserProfile';

const FetchUserProfile = () => {
	const { path, role, firstname, lastname } = useFetchUserProfile();

	return (
		<UserCard
			path={path}
			role={role}
			firstname={firstname}
			lastname={lastname}
		/>
	);
};

export { FetchUserProfile };
