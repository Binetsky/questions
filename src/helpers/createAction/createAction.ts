import { store } from '@redux';

/**
 * Хелпер для диспатча экшена
 * @param type - тип экшена
 * @param data - данные для payload
 * @return void
 */
export const createAction = <T, R>({
  type, data,
}: { type: R; data?: T }): void => {
  if (!type) return;

  const actionObject: { type: R; payload?: T } = { type };

  if (data) {
    actionObject.payload = data;
  }

  store.dispatch(actionObject);
};
