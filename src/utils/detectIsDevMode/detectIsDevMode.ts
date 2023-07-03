import { production } from './constants';

/**
 * Утилита принимает значение переменной окружения NODE_ENV и возвращает булево в зависимости от значения
 * @params GetWordDeclensionParams
 * @return boolean
 */
export const detectIsDevMode = (): boolean => process.env.NODE_ENV !== production;
