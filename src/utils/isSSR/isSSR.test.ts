/**
 * @jest-environment node
 */

import { isSSR } from './isSSR';

describe('isSSR in jest-environment node test suite', () => {
  it('isSSR: возвращает true', () => {
    const getIsSSR = isSSR();

    expect(getIsSSR).toBeTruthy();
  });
});
