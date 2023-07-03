import { ActionsParams } from '@types';
import { createAction } from '@helpers/createAction';
import { AppStateParams } from './types';
import { AppActions } from './constants';

/**
 * Экшен-креаторы общих экшенов приложения
 */
export const appActions: ActionsParams<Partial<AppStateParams>, void | null> = {
  /** Экшен установки флага загрузки */
  setIsFetching: (data) => createAction({
    type: AppActions.SetIsFetching,
    data,
  }),
};
