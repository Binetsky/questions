/**
 * Тип функции-утилиты debounce
 */
export type Debounce = (handler: () => void, timeout: number) => () => void;
