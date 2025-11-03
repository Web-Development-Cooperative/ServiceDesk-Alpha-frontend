import { Navigate } from 'react-router';
import { useKeycloak } from '@react-keycloak/web';

import { ROUTES } from '~~>shared/model/routes';

import type { FC } from 'react';
import type { GuestProviderProps } from '../model/types';

const GuestProvider: FC<GuestProviderProps> = ({ children }) => {
	const { keycloak } = useKeycloak();

	if (keycloak.authenticated) return <Navigate to={ROUTES.HOME} />;

	return children;
};

export { GuestProvider };
