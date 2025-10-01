import { unauthenticatedRequest } from '~~>shared/api';

import type { AxiosRequestConfig, AxiosResponse } from 'axios';
import type { User } from '../model/types';

const URL = 'users';

const getUser = (config: AxiosRequestConfig): Promise<AxiosResponse<User>> =>
	unauthenticatedRequest({
		...config,
		method: 'GET',
		url: URL + '/' + config.url,
	});

export { getUser };
