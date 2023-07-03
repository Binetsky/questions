import {
  createStore, Reducer, compose,
} from 'redux';
import {
  HYDRATE, createWrapper,
} from 'next-redux-wrapper';
import { composeWithDevTools } from 'redux-devtools-extension';
import { rootReducer } from './rootReducer';
import { isDev } from './constants';

/**
 * Редьсер обрабатывающий специальный экшен, при первой загрузке приложения
 * для гидрации серверного состояния
 */
const hydratedReducer: Reducer = (state, action) => {
  if (action.type === HYDRATE) {
    return {
      ...state,
      ...action.payload,
    };
  }

  // @ts-ignore todo: check types
  return rootReducer(state, action);
};

/**
 * В dev-режиме собирается с Redux DevTools, а в проде - без.
 */
export const store = isDev ? createStore(hydratedReducer, compose(composeWithDevTools())) : createStore(hydratedReducer);

export const wrapper = createWrapper(() => store);
