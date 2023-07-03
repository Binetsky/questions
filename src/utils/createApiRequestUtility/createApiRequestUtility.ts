import type {
  CreateApiRequestParameters, TParams,
} from './types';

/* prettier-ignore */

/**
 * Утилита для создания запроса к API
 * @param parameters CreateApiRequestParameters<R> - параметры запроса
 */
export const createApiRequestUtility =
  <T, R extends TParams = undefined>(parameters: CreateApiRequestParameters<R>) => async (): Promise<T | null> => {
    const {
      endpoint, method = 'GET', params,
    } = parameters;
    const init: RequestInit = { method };

    let query = '';

    if (params) {
      Object.keys(params).forEach((k) => (params[k] === null || typeof params[k] === 'undefined') && delete params[k]);
    }

    if (method === 'GET') {
      query = new URLSearchParams(params as Record<string, string>).toString();
      query = query ? `?${query}` : '';
    } else {
      init.body = params && JSON.stringify(params);
    }

    return new Promise((resolve, reject) => {
      fetch(`${endpoint}${query}`, init)
        .then(async (response) => {
          const contentType = response?.headers?.get('content-type');

          if (contentType && contentType.indexOf('application/json') !== -1) {
            const data = await response?.json();

            if (data) {
              resolve(data);
            }
          }

          resolve(null);
        })
        .catch((error) => {
          reject(error);
        });
    });
  };
