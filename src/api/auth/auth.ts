import { CurrentUser } from '@context';
import { logError } from '@utils/logError';
import {
  userMetaEndpoint, userLogoutEndpoint, paywallEndpoint,
} from './constants';

/**
 * Функция получения текущего пользователя
 * @return Promise<Partial<CurrentUser>>
 */
export const getAuth = async (): Promise<Partial<CurrentUser>> => {
  /**
   * Получение признака авторизации и имени пользователя
   */
  const userMetaGetter = fetch(userMetaEndpoint, { credentials: 'include' })
    .then((response) => {
      const { status } = response;
      const isGuest = status === 403;

      if (isGuest) {
        return new Promise((resolve) => {
          resolve({ isGuest });
        });
      }

      return response.json();
    })
    .then(
      ({
        data: { profile: { display_name: name } },
        isGuest = false,
      }) => ({
        isGuest,
        name,
      }),
    )
    .catch(() => ({ isGuest: true }));

  /**
   * Получение признака платности пользователя
   */
  const paidGetter = fetch(paywallEndpoint, { credentials: 'include' })
    .then((response) => {
      const { status } = response;
      const isError = status !== 200;

      if (isError) {
        return new Promise((resolve) => {
          resolve({});
        });
      }

      return response.json();
    })
    .then(({ data }) => {
      const isSubscribed = data?.subscription?.status === 'on';
      const isSubscribedPro = data?.callToAction?.nick.includes('_pro');

      return {
        isSubscribed,
        isSubscribedPro,
      };
    })
    .catch(() => ({
      isSubscribed: null,
      isSubscribedPro: null,
    }));

  return Promise.all([userMetaGetter,
    paidGetter]).then((data) => ({
    ...data[0],
    ...data[1],
  }));
};

/**
 * Функция выхода пользователя
 * @return void
 */
export const logout = async (): Promise<boolean | void> => fetch(userLogoutEndpoint, {
  method: 'post',
  credentials: 'include',
})
  .then(() => true)
  .catch((error) => {
    logError(error);
  });
