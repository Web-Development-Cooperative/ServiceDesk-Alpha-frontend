import { Provider } from 'react-redux';

import { store } from '~~>app/store';

import type { FC } from 'react';
import type { StoreProviderProps } from '../model/types';

const StoreProvider: FC<StoreProviderProps> = ({ children }) => {
	return <Provider store={store}>{children}</Provider>;
};

export { StoreProvider };
