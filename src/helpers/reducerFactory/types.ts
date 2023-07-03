/**
 * Типы хендлера reducerFactory
 */
export interface ReducerFactoryHandlersParam<T> {
  [key: string]: (state: T, payload: T) => T;
}

/**
 * Типы экшенов reducerFactory
 */
export interface ReducerFactoryActionParam<T, R> {
  type: T;
  payload: R;
}
