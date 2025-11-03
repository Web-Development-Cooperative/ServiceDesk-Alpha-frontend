import Keycloak from 'keycloak-js';

import { env } from '~~>shared/lib';

const keycloak = new Keycloak({
	url: env.VITE_API_BASE_KEYCLOAK_URL,
	realm: env.VITE_API_BASE_KEYCLOAK_REALM,
	clientId: env.VITE_API_BASE_KEYCLOAK_CLIENT_ID,
});

export default keycloak;
