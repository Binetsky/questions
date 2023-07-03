import { isSSR } from '@utils/isSSR';
import { createApiRequestUtility } from '@utils/createApiRequestUtility';
import type { CreateApiRequestParameters, TParams } from '@utils/createApiRequestUtility';
import { baseApiEndpoints } from '@api';

/**
 * Хелпер для создания запроса к API
 * @param parameters CreateApiRequestParameters<R> - параметры запроса
 */
export const createApiRequest = <T, R extends TParams = undefined>(parameters: CreateApiRequestParameters<R>): (() => Promise<T | null>) => {
  const { endpoint } = parameters;
  const baseEndpoint = isSSR() ? baseApiEndpoints.baseSSREndpoint : baseApiEndpoints.baseEndpoint;
  const url = `${baseEndpoint}${endpoint}`;

  return createApiRequestUtility<T, R>({
    ...parameters, endpoint: url,
  });
};
