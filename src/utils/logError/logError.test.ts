import { logError } from '@utils/logError';

describe('logError in jest-environment node test suite', () => {
  it('logError: получает параметр строку', () => {
    expect(() => logError('Error')).not.toThrow();
  });

  it('logError: получает параметр Error', () => {
    expect(() => logError(new Error('Error'))).not.toThrow();
  });

  it('logError: получает параметр undefined', () => {
    expect(() => logError(undefined)).not.toThrow();
  });
});
