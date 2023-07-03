import { createApiRequest } from './createApiRequest';

const response: string | null = null;

const unmockedFetch = global.fetch;

describe('createApiRequest test suite', () => {
  beforeEach(async () => {
    global.fetch = jest.fn(() => Promise.resolve(response)) as jest.Mock;
  });

  afterEach(() => {
    global.fetch = unmockedFetch;
  });

  test('createApiRequest: возвращает функцию, возвращающую промис', async () => {
    const request = createApiRequest({ endpoint: 'https://test.ru' });

    await expect(request()).resolves.not.toThrow();
  });
});
