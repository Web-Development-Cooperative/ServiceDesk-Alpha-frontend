import { useKeycloak } from '@react-keycloak/web';

import type { FC } from 'react';

const LoginPage: FC = () => {
	const { keycloak } = useKeycloak();

	return (
		<>
			<h1>Login page</h1>
			<button type="button" onClick={() => keycloak.login()}>
				Login
			</button>
		</>
	);
};

export { LoginPage };
