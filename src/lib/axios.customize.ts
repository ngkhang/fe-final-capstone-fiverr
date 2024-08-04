/* eslint-disable no-console */
import axios, { AxiosError, AxiosInstance, AxiosResponse, AxiosRequestConfig, AxiosRequestHeaders } from 'axios';
import { redirect } from 'next/navigation';
import { DOMAIN, TOKEN_CYBERSOFT, tokenCybersoftKey } from '@/utils/constants';

// Define types
interface AdaptAxiosRequestConfig extends AxiosRequestConfig {
  headers: AxiosRequestHeaders
}

interface StatusCode {
  [key: number | string]: {
    message: string,
    path: string
  }
}

// export const isClient = () => typeof window !== 'undefined';

/**
* Status Code Error
*/
const STATUS_CODE: StatusCode= {
  /**
  * Xử lý lỗi 401 Unauthorized
  */
  401: {
    message: 'Unauthorized access - perhaps the user is not logged in or token expired.',
    path: '/auth/signin',
  },
  /**
  * Xử lý lỗi 403 Forbidden
  */
  403: {
    message: "Forbidden - you don't have permission to access this resource.",
    path: '/auth/signin',
  },
  /**
  * Xử lý lỗi 404 Not Found
  */
  404: {
    message: 'Resource not found.',
    path: '/not-found',
  },
  /**
  * Xử lý lỗi 500 Internal Server Error
  */
  500: {
    message: 'Internal server error.',
    path: '/not-found',
  },
};

/**
* Instance Axios
*
* @link https://axios-http.com/docs/instance
*/
const axiosInstance: AxiosInstance = axios.create({
  baseURL: DOMAIN,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
});

/**
* Request interceptor
*
* @link https://axios-http.com/docs/interceptors
*/

axiosInstance.interceptors.request.use(
  (config: AdaptAxiosRequestConfig) => {
  // TODO: Config accessToken
  // const accessToken = localStorage.getItem('key');
    if (config.headers) {
      config.headers.set(tokenCybersoftKey, TOKEN_CYBERSOFT);
      // config.headers['Authorization'] = accessToken ? `${accessToken}` : '';
    }
    // if (isClient()) {
    // if (
    //   ['auth/login', 'auth/register'].some(
    //     (item) => item === normalizePath(url)
    //   )
    // ) {
    //   const { token, expiresAt } = (payload as LoginResType).data
    //   localStorage.setItem('sessionToken', token)
    //   localStorage.setItem('sessionTokenExpiresAt', expiresAt)
    // } else if ('auth/logout' === normalizePath(url)) {
    //   localStorage.removeItem('sessionToken')
    //   localStorage.removeItem('sessionTokenExpiresAt')
    // }
    // }
    return config;
  },
  (err: AxiosError) => Promise.reject(err)
);

/**
* Response interceptor
*
* @link https://axios-http.com/docs/interceptors
*/
axiosInstance.interceptors.response.use(
  (res: AxiosResponse) => res,
  (err: AxiosError) => {
    // NOTE: Add middleware
    const { response, request, message } = err;
    if (response) {
      const CodeError = STATUS_CODE[response.status];

      const messageError = CodeError
        ? CodeError.message
        : `Error ${response.status}: ${response.statusText}`;

      console.error(messageError);

      if (CodeError) redirect(CodeError.path);
      return Promise.reject(err);

    }
    else {
      request
        // Request đã được gửi nhưng không nhận được phản hồi từ server
        ? console.error('No response received from server')
        // Một số lỗi khác xảy ra trong quá trình thiết lập request
        : console.error(`Error setting up request: ${message}`);
    }

    return Promise.reject(err);
  }
);

export default axiosInstance;
