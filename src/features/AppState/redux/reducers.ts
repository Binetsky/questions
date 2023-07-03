import {
  reducerFactory, ReducerFactoryHandlersParam,
} from '@helpers/reducerFactory';
import { AppStateParams } from './types';
import { AppActions } from './constants';
import { appState } from './state';

/**
 * Кейсы редьюсера reducerFactory
 */
const appReducerHandlers: ReducerFactoryHandlersParam<AppStateParams> = {
  /** Редьюсер установки флага загрузки */
  [AppActions.SetIsFetching]: (state, payload) => ({
    ...state, ...payload,
  }),
};

/**
 * Редьюсер общих полей приложения
 * @param appState - ArticleStateParams
 * @param appReducerHandlers - ReducerFactoryHandlersParam<AppStateParams>
 */
export const appReducer = reducerFactory(appState, appReducerHandlers);
