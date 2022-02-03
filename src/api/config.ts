import queryString from 'query-string';

export const defaultConfig = {
  baseURL: 'https://jsonplaceholder.typicode.com',
  headers: (contentType: string) => ({
    'Content-Type': contentType,
    Accept: 'application/json',
  }),
  error: {
    code: 'INTERNAL_ERROR',
    message: 'Something went wrong. Please check your internet connection or contact our support.',
    status: 503,
  },
};


export const objectToQueryString = (obj: any, options = {}) =>
  queryString.stringify(obj, {
    arrayFormat: 'bracket',
    skipEmptyString: true,

    ...options,
  });