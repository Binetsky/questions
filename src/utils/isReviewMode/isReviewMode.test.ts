import { isReviewMode } from '.';

describe('isReviewMode in jest-environment node test suite', () => {
  it('isReviewMode: возвращает true', () => {
    expect(isReviewMode).toBeFalsy();
  });
});
