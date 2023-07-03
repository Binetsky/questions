import { detectIsDevMode } from '@utils/detectIsDevMode';

export const ssl = detectIsDevMode() ? '' : 's';
