import { type AxiosRequestConfig, type AxiosResponse } from 'axios';

import { unauthenticatedRequest } from '~~>shared/api';

import type { User } from '~~>entities/users/model/users';

const URL = 'users';

const getAllUsers = (
	config: AxiosRequestConfig
): Promise<AxiosResponse<User[]>> =>
	unauthenticatedRequest({ ...config, method: 'GET', url: URL });

export { getAllUsers };
