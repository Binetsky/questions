import { combineReducers } from 'redux';
import {
  appReducer, AppStateParams,
} from '@features/AppState';

import { StoreSections } from './constants';

export interface CombinedStateParams {
  [StoreSections.AppState]: AppStateParams;
}

/**
 * Корневой редьюсер, в него помещаются редьюсеры страниц
 */
export const rootReducer = combineReducers({
  [StoreSections.AppState]: appReducer,
});
