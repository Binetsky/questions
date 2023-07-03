import { getResizedImg } from './getResizedImg';
import { GetResizedImgTestProps } from './types';
import { outUrlsBySize } from './mocks';

const inputUrl = 'https://s0.test.rbk.ru/v6_top_pics/media/img/3/53/test.png';

describe('getResizedImg test suite', () => {
  it.each<GetResizedImgTestProps>(outUrlsBySize)('getResizedImg: генерирует ссылку при размере $size', ({
    outUrl, size,
  }) => {
    const resultUrl = getResizedImg({
      boImgUrl: inputUrl, size,
    });

    expect(resultUrl).toBe(outUrl);
  });

  it('getResizedImg: без параметров генерирует исключение', () => {
    // @ts-ignore
    expect(() => getResizedImg()).toThrow();
  });

  it('getResizedImg: с пустым объектом возвращает null', () => {
    // @ts-ignore
    const resultUrl = getResizedImg({});

    expect(resultUrl).toBeNull();
  });

  it('getResizedImg: с нулевыми параметрами возвращает null', () => {
    const resultUrl = getResizedImg({
      // @ts-ignore
      boImgUrl: null, size: null,
    });

    expect(resultUrl).toBeNull();
  });

  it('getResizedImg: с одним параметром возвращает null', () => {
    // @ts-ignore
    const resultUrl = getResizedImg({ boImgUrl: inputUrl });

    expect(resultUrl).toBeNull();
  });

  it('getResizedImg: с нулевым size возвращает null', () => {
    const resultUrl = getResizedImg({
      // @ts-ignore
      boImgUrl: inputUrl, size: null,
    });

    expect(resultUrl).toBeNull();
  });
});
