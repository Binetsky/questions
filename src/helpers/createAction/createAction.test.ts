import mockStoreConfigure, { MockStoreEnhanced } from 'redux-mock-store';
import { store } from '@redux';
import { createAction } from './createAction';
import {
  createActionExpectedAction, createActionExpectedActionWithoutData,
  createActionTestAction, createActionTestActionWithoutData, CreateActionTestStore,
} from './mocks';

export type MockedStoreType = MockStoreEnhanced<unknown, CreateActionTestStore>;

jest.mock('@redux', () => ({
  store: mockStoreConfigure<unknown, CreateActionTestStore>()({ test: true }),
}));

describe('createAction test suite', () => {
  beforeEach(() => {
    (store as MockedStoreType).clearActions();
  });

  test('createAction: dispatch(action) отрабатывает корректно', async () => {
    createAction(createActionTestAction);

    const actions = (store as MockedStoreType).getActions();

    expect(actions[0]).toEqual(createActionExpectedAction);
  });

  test('createAction: в экшн не добавляется payload, если не передана data', async () => {
    createAction(createActionTestActionWithoutData);

    const actions = (store as MockedStoreType).getActions();

    expect(actions[0]).toEqual(createActionExpectedActionWithoutData);
  });

  test('createAction: если не передан type, action не диспатчится', async () => {
    // @ts-ignore
    createAction({});

    const actions = (store as MockedStoreType).getActions();

    expect(actions.length).toBe(0);
  });
});
