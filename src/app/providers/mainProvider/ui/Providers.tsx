import { Provider } from 'react-redux';

import { store } from '~~>app/store';

import type { FC } from 'react';
import type { ProvidersProps } from '../model/types';

const Providers: FC<ProvidersProps> = ({ children }) => {
	return <Provider store={store}>{children}</Provider>;
};

export { Providers };
