/**
 * Типы устройств пользователя
 * @property Mobile - < 659px,
 * @property TabletPortrait - 660-959px,
 * @property TabletLandscape - 960-1259px,
 * @property DesktopMedium - 1260-1440px,
 * @property DesktopLarge - > 1440px,
 */
export enum UserDeviceType {
  Mobile,
  TabletPortrait,
  TabletLandscape,
  DesktopMedium,
  DesktopLarge,
}

export enum MediaBreakpoints {
  Mobile = 'mobile',
  TabletPortrait = 'tabletPortrait',
  TabletLandscape = 'tabletLandscape',
  DesktopMedium = 'desktopSmall',
  DesktopLarge = 'desktopLarge',
}
