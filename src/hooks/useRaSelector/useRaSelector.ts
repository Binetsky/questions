import { useSelector, shallowEqual } from 'react-redux';
import { CombinedStateParams } from '@redux';

/**
 * Хук сокращает запись useSelector
 * @param storeName - локальный стор для изъятия полей
 * @return T[R] - Возвращает стор фичи переданный аргументом
 */
export const useRaSelector = <T extends CombinedStateParams, R extends keyof T>(storeName: R): T[R] => {
  const currentSelector = useSelector<T, T[R]>((state) => state[storeName], shallowEqual);

  return currentSelector;
};
