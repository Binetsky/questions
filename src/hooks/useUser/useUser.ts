import React from 'react';
import { AppContext } from '@context';
import type {
  AppContextState, CurrentUser,
} from '@context';

/**
 * Хук вовзращающий объект текущего пользователя
 * @return [CurrentUser, userLogout] - кортеж с объектом текущего полльзователя методом выхода
 */
export const useUser = (): [CurrentUser, AppContextState['userLogout']] => {
  const {
    user, userLogout,
  } = React.useContext(AppContext);

  return [user,
    userLogout];
};
