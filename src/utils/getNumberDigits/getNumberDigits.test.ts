import { getNumberDigits } from './getNumberDigits';

describe('getNumberDigits test suite', () => {
  it('getNumberDigits: преобразует 12 в "12" верно', () => {
    const number = getNumberDigits(12);

    expect(number).toBe('12');
  });

  it('getNumberDigits: преобразует 12.34 в "12.34" верно', () => {
    const number = getNumberDigits(12.34);

    expect(number).toBe('12.34');
  });

  it('getNumberDigits: преобразует 1234.67 в "1 234.67" верно', () => {
    const number = getNumberDigits(1234.67);

    expect(number).toBe('1 234.67');
  });

  it('getNumberDigits: преобразует 123456 в "123 456" верно', () => {
    const number = getNumberDigits(123456);

    expect(number).toBe('123 456');
  });

  it('getNumberDigits: преобразует 12345.6789 в "12 345.6789" верно', () => {
    const number = getNumberDigits(12345.6789);

    expect(number).toBe('12 345.6789');
  });

  it('getNumberDigits: преобразует 0 в "0" верно', () => {
    const number = getNumberDigits(0);

    expect(number).toBe('0');
  });

  it('getNumberDigits: без параметров не преобразует', () => {
    // @ts-ignore
    expect(() => getNumberDigits()).toThrow('Number cannot be empty');
  });
});
