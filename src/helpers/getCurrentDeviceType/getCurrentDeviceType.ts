import { UserDeviceType } from '@utils/detectDevice';
import { CurrentDeviceTypeParams } from '@context';

/**
 * Функция возвращает объект с флагами текущего к какому типу девайса относится текущий девайс пользователя
 * @param currentDevice - енум текущего девайса
 * @return CurrentDeviceTypeParams - объект с типами устройств и флагами относится к кому относится текущее устройство
 */
export const getCurrentDeviceType = (currentDevice: UserDeviceType): CurrentDeviceTypeParams => ({
  isMobile: currentDevice === UserDeviceType.Mobile,
  isTabletPortrait: currentDevice === UserDeviceType.TabletPortrait,
  isTabletLandscape: currentDevice === UserDeviceType.TabletLandscape,
  isDesktopMedium: currentDevice === UserDeviceType.DesktopMedium,
  isDesktopLarge: currentDevice === UserDeviceType.DesktopLarge,
});
