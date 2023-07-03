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
  [AppActions.SetHostName]: (state, payload) => ({
    ...state, ...payload,
  }),
  [AppActions.GetSubscribeChannels]: (state, payload) => ({
    ...state,
    subscribeChannelsInfo: payload.subscribeChannelsInfo,
    isSubscribeChannelFetch: false,
  }),
  [AppActions.GetMasterTagsAction]: (state, payload) => ({
    ...state, masterTags: payload.masterTags, isMasterTagsFetch: false,
  }),
  [AppActions.GetFoxVersion]: (state, payload) => ({
    ...state, ...payload,
  }),
  [AppActions.GetSystemSettings]: (state, payload) => ({
    ...state, ...payload,
  }),
};

/**
 * Редьюсер общих полей приложения
 * @param appState - ArticleStateParams
 * @param appReducerHandlers - ReducerFactoryHandlersParam<AppStateParams>
 */
export const appReducer = reducerFactory(appState, appReducerHandlers);
