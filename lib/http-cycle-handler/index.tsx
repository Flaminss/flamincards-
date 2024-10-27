import axios from "axios";
// import logger from './logService';
// import {
//   toast
// } from 'react-toastify';

// axios.interceptors.response.use(null, (error) => {
//   const expectedError =
//     error.response &&
//     error.response.status >= 400 &&
//     error.response.status < 500;

//     if (!expectedError) {
//       logger.log(error);
//     }

//   return Promise.reject(error);
// });

export const createHandler = axios.create;

export default {
  get: axios.get,
  post: axios.post,
  patch: axios.patch,
  put: axios.put,
  delete: axios.delete,
};

// MOVE TO DECLARATION FILE
declare module "@lib/http-cycle-handler" {
  interface HttpRequestConfig {
    baseURL: string;
    timeout: number;
    headers: Record<string, string>;
  }

  interface HttpRequest {
    handlerInstance(config: HttpRequestConfig): any;
  }

  const httpRequest: HttpRequest;
}
