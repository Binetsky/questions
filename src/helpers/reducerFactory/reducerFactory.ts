import { Reducer } from 'redux';
import {
  ReducerFactoryHandlersParam, ReducerFactoryActionParam,
} from './types';

/**
 * Хелпер для редьюса, замена switch-case конструкции
 * @param initialState
 * @param handlers
 */
export const reducerFactory =
  <T, R extends ReducerFactoryHandlersParam<T>, S extends ReducerFactoryActionParam<string, T>>(
    initialState: T, handlers: R): Reducer<T, S> => (state: T = initialState, action: S): T => {
    const handler = handlers[action.type];

    if (handler) return handler(state, action.payload);

    return state;
  };
