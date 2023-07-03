/**
 * Типы поля currentDeviceType в контексте
 * @property isMobile: boolean,
 * @property isTabletPortrait: boolean,
 * @property isTabletLandscape: boolean,
 * @property isDesktopMedium: boolean,
 * @property isDesktopLarge: boolean,
 */
export interface CurrentDeviceTypeParams {
  isMobile: boolean;
  isTabletPortrait: boolean;
  isTabletLandscape: boolean;
  isDesktopMedium: boolean;
  isDesktopLarge: boolean;
  isInitValue?: boolean;
}

export interface CurrentUser {
  isGuest: boolean | null;
  isSubscribed: boolean | null;
  isSubscribedPro: boolean | null;
  name: string | null;
}

/**
 * Тип данных для контекста приложения
 * @property device: CurrentDeviceTypeParams - тип устройства пользователя
 * @property user: CurrentUser - текущий пользователь
 * @property userLogout: () => void - функция выхода пользователя
 * @property opacity - параметр управления видимостью контента на странице
 */
export interface AppContextState {
  device: CurrentDeviceTypeParams;
  user: CurrentUser;
  userLogout: () => void;
  opacity: OpacityParams;
}

export interface OpacityParams {
  opacity: '0' | '1';
  transition: string;
}
