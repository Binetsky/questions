import { ReducerFactoryHandlersParam } from './types';

export enum ReducerFactoryReducers {
  TestReducer = 'TEST_REDUCER',
}

interface ReducerFactoryTestData {
  test: number;
}

export const reducerFactoryAppReducerHandlers: ReducerFactoryHandlersParam<{ test: number }> = {
  [ReducerFactoryReducers.TestReducer]: (state: ReducerFactoryTestData, payload: ReducerFactoryTestData) => ({
    ...state, ...payload,
  }),
};

export const reducerFactoryAppInitialState: ReducerFactoryTestData = {
  test: 1,
};

export const reducerFactoryAppChangedState: ReducerFactoryTestData = {
  test: 2,
};
