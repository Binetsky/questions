/**
 * Входящие параметры утилиты createApiRequest
 * @property endpoint: string - ссылка запроса
 * @property method?: 'GET' | 'POST' | 'PUT' | 'DELETE' - метод запроса, по-умолчанию GET
 * @property params?: R - параметры запроса
 */
export interface CreateApiRequestParameters<R> {
  endpoint: string;
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE';
  params?: R;
}

/**
 * Включение дженерика params утилиты createApiRequest
 */
export type TParams = Record<string, unknown> | undefined;

/**
 * Данные ответа для тестирования createApiRequestUtility
 */
export interface ResponseTestProps {
  [key: string]: unknown;
}
