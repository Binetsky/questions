/**
 * Общий тип поля ID
 */
export type ID = string;

/**
 * Типы экшенов
 *
 * [key: string]: (data?: T) => { type: R, payload?: T | Promise<void> }
 */
export interface ActionsParams<T, R> {
  [key: string]: (data?: T) => void | Promise<R>;
}
