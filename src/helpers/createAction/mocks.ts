export interface CreateActionTestStore {
  test: boolean;
}

export const createActionTestAction = { type: 'test', data: {} };

export const createActionExpectedAction = { type: 'test', payload: {} };

export const createActionTestActionWithoutData = { type: 'test' };

export const createActionExpectedActionWithoutData = { type: 'test' };
