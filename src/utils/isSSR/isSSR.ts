/**
 * Функция возвращает признак того, что код выполняется на серверной стороне
 * @return boolean
 */
export const isSSR: () => boolean = () => typeof window === 'undefined';
