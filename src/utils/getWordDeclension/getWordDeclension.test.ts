import { getWordDeclension } from './getWordDeclension';

describe('getWordDeclension test suite', () => {
  it('getWordDeclension: возвращает "стул" верно', () => {
    const word = getWordDeclension(1, 'стул', 'стула', 'стульев');

    expect(word).toBe('стул');
  });

  it('getWordDeclension: возвращает "стула" верно', () => {
    const word = getWordDeclension(3, 'стул', 'стула', 'стульев');

    expect(word).toBe('стула');
  });

  it('getWordDeclension: возвращает "стульев" верно', () => {
    const word = getWordDeclension(12, 'стул', 'стула', 'стульев');

    expect(word).toBe('стульев');
  });

  it('getWordDeclension: при 0 возвращает "стульев" верно', () => {
    const word = getWordDeclension(0, 'стул', 'стула', 'стульев');

    expect(word).toBe('стульев');
  });

  it('getWordDeclension: без параметров не преобразует', () => {
    // @ts-ignore
    expect(() => getWordDeclension()).toThrow();
  });

  it('getWordDeclension: без 3-х параметров не преобразует', () => {
    // @ts-ignore
    expect(() => getWordDeclension(0)).toThrow('No required parameter');
  });

  it('getWordDeclension: без 2-х параметров не преобразует', () => {
    // @ts-ignore
    expect(() => getWordDeclension(0, 'стул')).toThrow('No required parameter');
  });

  it('getWordDeclension: без одного параметров не преобразует', () => {
    // @ts-ignore
    expect(() => getWordDeclension(0, 'стул', 'стула')).toThrow('No required parameter');
  });
});
