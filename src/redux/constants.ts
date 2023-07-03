import { detectIsDevMode } from '@utils/detectIsDevMode';

/**
 * Доступные области общего store
 */
export enum StoreSections {
  AppState = 'appState',
}

export const isDev = detectIsDevMode();
