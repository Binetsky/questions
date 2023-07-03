import { debounce } from './debounce';

jest.useFakeTimers();

describe('debounce test suite', () => {
  it('debounce: функция будет вызвана 1 раз', () => {
    const func = jest.fn();
    const debouncedFunc = debounce(func, 500);

    debouncedFunc();
    jest.advanceTimersByTime(250);
    debouncedFunc();
    jest.runAllTimers();

    expect(func).toBeCalledTimes(1);
  });
});
