import {
  MediaBreakpoints, UserDeviceType,
} from './constants';

/**
 * Утилита получения типа девайса от ширины экрана
 * @return UserDeviceType - тип девайса
 */
export const detectDevice = (): UserDeviceType => {
  const detectDeviceDiv = document.querySelector('.detect-device');
  const currentBreakpoint = detectDeviceDiv ? getComputedStyle(detectDeviceDiv, '::before').getPropertyValue('content').replace(/"/g, '') : 'mobile';

  switch (currentBreakpoint) {
    case MediaBreakpoints.Mobile:
      return UserDeviceType.Mobile;
    case MediaBreakpoints.TabletPortrait:
      return UserDeviceType.TabletPortrait;
    case MediaBreakpoints.TabletLandscape:
      return UserDeviceType.TabletLandscape;
    case MediaBreakpoints.DesktopMedium:
      return UserDeviceType.DesktopMedium;
    case MediaBreakpoints.DesktopLarge:
      return UserDeviceType.DesktopLarge;
    default:
      return UserDeviceType.Mobile;
  }
};
