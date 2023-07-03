import { useAmp } from 'next/amp';

/**
 * Функция возвращает признак того, что страница отображается как AMP HTML
 * @return boolean
 */
export const checkIsAmp = (): boolean => useAmp();
