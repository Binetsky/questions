import { detectIsDevMode } from './detectIsDevMode';

describe('detectIsDevMode test suite', () => {
  it('detectIsDevMode: возвращает true', () => {
    const isDev = detectIsDevMode();

    expect(isDev).toBeTruthy();
  });
});
