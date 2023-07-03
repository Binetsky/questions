import { UserDeviceType } from '@utils/detectDevice';
import { getCurrentDeviceType } from './getCurrentDeviceType';

describe('getCurrentDeviceType test suite', () => {
  it('getCurrentDeviceType: возвращает isMobile true, если передан Mobile', () => {
    const { isMobile } = getCurrentDeviceType(UserDeviceType.Mobile);

    expect(isMobile).toBeTruthy();
  });

  it('getCurrentDeviceType: возвращает isMobile false, если передан DesktopLarge', () => {
    const { isMobile } = getCurrentDeviceType(UserDeviceType.DesktopLarge);

    expect(isMobile).toBeFalsy();
  });
});
