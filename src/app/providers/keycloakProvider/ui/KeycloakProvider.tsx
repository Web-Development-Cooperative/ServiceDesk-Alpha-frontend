import { ReactKeycloakProvider } from '@react-keycloak/web';

import keycloak from '~~>app/keycloak';
import { env } from '~~>shared/lib';

import type { FC } from 'react';
import type { KeycloakProviderProps } from '../model/types';

const KeycloakProvider: FC<KeycloakProviderProps> = ({ children }) => {
	return (
		<ReactKeycloakProvider
			authClient={keycloak}
			initOptions={{
				// onLoad: 'login-required',
				pkceMethod: env.VITE_API_BASE_KEYCLOAK_PKCE,
			}}
		>
			{children}
		</ReactKeycloakProvider>
	);
};

export { KeycloakProvider };
