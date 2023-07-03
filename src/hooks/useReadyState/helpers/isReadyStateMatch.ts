import { ExpectedReadyState } from '../types';

/**
 * Хелпер хука useReadyState проверяет соответствие статуса ожидаемому
 * @param expected? - ExpectedReadyState
 */
export const isReadyStateMatch = (expected?: ExpectedReadyState): boolean => {
  if (!expected) {
    return true;
  }

  if ((typeof expected === 'string') && document.readyState === expected) {
    return true;
  }

  return expected.indexOf(document.readyState) !== -1;
};
