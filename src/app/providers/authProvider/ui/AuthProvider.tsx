import { useEffect } from 'react';
import { Navigate } from 'react-router';
import { useKeycloak } from '@react-keycloak/web';
import Cookies from 'js-cookie';
import { jwtDecode } from 'jwt-decode';

import { clearCredentials, setCredentials } from '~~>entities/user';
import { useAppDispatch } from '~~>shared/lib';
import { ROUTES } from '~~>shared/model/routes';

import type { FC } from 'react';
import type { TokenDecode } from '~~>entities/user';
import type { AuthProviderProps } from '../model/types';

const AuthProvider: FC<AuthProviderProps> = ({ children }) => {
	const dispatch = useAppDispatch();
	const { keycloak } = useKeycloak();

	useEffect(() => {
		const syncAuthState = () => {
			if (keycloak.authenticated && keycloak.token) {
				Cookies.set('accessToken', keycloak.token);
				const decodedToken = jwtDecode<TokenDecode>(keycloak.token);
				dispatch(setCredentials(decodedToken));
			}
		};
		syncAuthState();
		keycloak.onAuthRefreshSuccess = syncAuthState;

		return () => {
			Cookies.remove('accessToken');
			dispatch(clearCredentials());
			keycloak.onAuthRefreshSuccess = undefined;
		};
	}, [keycloak.authenticated, keycloak.token]);

	if (!keycloak.authenticated) return <Navigate to={ROUTES.LOGIN} />;

	return children;
};

export { AuthProvider };
