import { CurrentUser } from '@context';

const isAuth = true;
const isSubscribed = true;

/**
 * Mock-функция получения текущего пользователя
 */
export const getAuth = async (): Promise<Partial<CurrentUser>> => {
  if (isAuth) {
    return {
      isGuest: false,
      name: 'Mock User',
      isSubscribed,
    };
  }

  return { isGuest: true };
};
