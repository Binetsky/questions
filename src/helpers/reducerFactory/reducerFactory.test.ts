import {
  reducerFactoryAppChangedState, reducerFactoryAppInitialState, reducerFactoryAppReducerHandlers, ReducerFactoryReducers,
} from './mocks';
import { reducerFactory } from './reducerFactory';

describe('reducerFactory test suite', () => {
  test('reducerFactory: возвращает измененный стейт', () => {
    const reducer = reducerFactory(reducerFactoryAppInitialState, reducerFactoryAppReducerHandlers);
    const result = reducer(undefined, { type: ReducerFactoryReducers.TestReducer, payload: reducerFactoryAppChangedState });

    expect(result).toEqual(reducerFactoryAppChangedState);
  });

  test('reducerFactory: возвращает изначальный стейт, если передан несуществующий type', () => {
    const reducer = reducerFactory(reducerFactoryAppInitialState, reducerFactoryAppReducerHandlers);
    const result = reducer(undefined, { type: 'badType', payload: reducerFactoryAppChangedState });

    expect(result).toEqual(reducerFactoryAppInitialState);
  });
});
