import { KeycloakProvider } from '../../keycloakProvider/ui/KeycloakProvider';
import { StoreProvider } from '../../storeProvider/ui/StoreProvider';
import type { FC } from 'react';
import type { ProvidersProps } from '../model/types';

const Providers: FC<ProvidersProps> = ({ children }) => {
	return (
		<KeycloakProvider>
			<StoreProvider>{children}</StoreProvider>
		</KeycloakProvider>
	);
};

export { Providers };
