import { useRaSelector } from '@hooks/useRaSelector';
import { StoreSections } from '@redux';
import { BASE_PATH } from '@constants';
import { ssl } from './constants';

/**
 * Хук вовзращающий полный host
 * @return string
 */
export const useHostname = (): string => {
  const { hostname } = useRaSelector(StoreSections.AppState);

  return `http${ssl}://${hostname}${BASE_PATH}`;
};
