import React from 'react';
import type {
  CurrentUser, AppContextState,
} from '@context';
import {
  getAuth, checkAuthTimeout, logout,
} from '@api/auth';

/**
 * Хук получения и формирования объекта текущего пользователя
 * @param initialState - начальное состояние контекста пользователя
 * @return [CurrentUser, userLogout] - кортеж с объектом текущего полльзователя методом выхода
 */
export const useUserContext = (initialState: CurrentUser): [CurrentUser, AppContextState['userLogout']] => {
  const [user,
    setUser] = React.useState(initialState);
  const [timeoutCount,
    setTimeoutCount] = React.useState(0);

  const logoutUser = async () => {
    const isLogout = await logout();

    if (isLogout) {
      setUser({
        ...user,
        isGuest: true,
        isSubscribed: false,
        name: null,
      });
    }
  };

  const getAuthEffect = async () => {
    const currentUser = await getAuth();

    setUser({
      ...user,
      ...currentUser,
    });
  };

  React.useEffect(() => {
    const interval = setInterval(() => {
      setTimeoutCount((state) => state + 1);
    }, checkAuthTimeout);

    return () => {
      clearInterval(interval);
    };
  }, []);

  React.useEffect(() => {
    getAuthEffect();
  }, [timeoutCount]);

  return [user,
    logoutUser];
};
