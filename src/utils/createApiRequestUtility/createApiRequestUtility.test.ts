import { createApiRequestUtility } from './createApiRequestUtility';
import { ResponseTestProps } from './types';

const response: ResponseTestProps = {};

const unmockedFetch = global.fetch;

describe('createApiRequestUtility test suite', () => {
  beforeEach(async () => {
    global.fetch = jest.fn(() => Promise.resolve(response)) as jest.Mock;
  });

  afterEach(() => {
    global.fetch = unmockedFetch;
  });

  test('createApiRequestUtility: при отсутствии заголовков и данных возвращается null', async () => {
    const request = createApiRequestUtility({ endpoint: 'https://test.ru' });

    request().then((data) => expect(data).toBeNull());
  });

  test('createApiRequestUtility: при заголовке "audio/webm" возвращается null', async () => {
    response.headers = { get: jest.fn(() => 'audio/webm') };

    const request = createApiRequestUtility({ endpoint: 'https://test.ru' });

    request().then((data) => expect(data).toBeNull());
  });

  test('createApiRequestUtility: при отсутствии данных возвращается пустой объект', async () => {
    response.headers = { get: jest.fn(() => 'application/json') };
    response.json = () => Promise.resolve(null);

    const request = createApiRequestUtility({ endpoint: 'https://test.ru' });

    request().then((data) => expect(data).toBeNull());
  });

  test('createApiRequestUtility: при заполненных данных возвращаются те же данные', async () => {
    response.json = () => Promise.resolve({ statusCode: 200 });

    const request = createApiRequestUtility({ endpoint: 'https://test.ru' });

    request().then((data) => expect(data).toEqual({ statusCode: 200 }));
  });

  test('createApiRequestUtility: при отправке PUT метода с параметрами возвращаются корректно данные', async () => {
    const request = createApiRequestUtility({
      endpoint: 'https://test.ru',
      method: 'PUT',
      params: {
        name: 'Ann', age: 18,
      },
    });

    request().then((data) => expect(data).toEqual({ statusCode: 200 }));
  });

  test('createApiRequestUtility: при отправке произошла ошибка', async () => {
    // eslint-disable-next-line prefer-promise-reject-errors
    global.fetch = jest.fn(() => Promise.reject({ statusCode: 500 })) as jest.Mock;

    const request = createApiRequestUtility({ endpoint: 'https://test.ru' });

    request().catch((data) => expect(data).toEqual({ statusCode: 500 }));
  });
});
