import axios, { type AxiosError, type AxiosRequestConfig } from 'axios';
import { toast } from 'react-toastify';

const BASE_URL = 'https://jsonplaceholder.typicode.com';
// axios.defaults.withCredentials = true;

const handleError = (error: AxiosError) => {
	toast.error(`Ошибка запроса, статус - ${error.status || 'неизвестен'}!`, {
		toastId: 'error_request1',
	});
	return Promise.reject(error);
};

const makeRequest = (config: AxiosRequestConfig) => {
	return axios({ baseURL: BASE_URL, ...config }).catch(handleError);
};

const unauthenticatedRequest = (config: AxiosRequestConfig) => {
	return makeRequest(config);
};

export { unauthenticatedRequest };
