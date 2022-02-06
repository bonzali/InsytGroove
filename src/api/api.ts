import axios, { Method } from 'axios';
import { defaultConfig, objectToQueryString } from './config';

export type ApiParam = {
  method?: Method;
  params?: object; //url request params
  body?: object; //body data
  url: string; //
  contentType?: string;
};

const api = ({
  method,
  url,
  params,
  body,
  contentType = 'application/json',
}: ApiParam): Promise<any> => {
  return new Promise((resolve, reject) => {
    axios({
      url: `${defaultConfig.baseURL}${url}`,
      method,
      headers: defaultConfig.headers(contentType),
      params: method === 'get' ? params : undefined,
      data: method !== 'get' ? body : undefined,
      paramsSerializer: objectToQueryString,
    }).then(
      (response) => {
        resolve(response.data);
      },
      (error) => {
        console.log(error);
        if (error.response) {
          reject(error);
        } else {
          reject(defaultConfig.error);
        }
      }
    );
  });
};

export default {
  get: (args: ApiParam) => api({ ...args, method: 'get' }),
  post: (args: ApiParam) => api({ ...args, method: 'post' }),
};
