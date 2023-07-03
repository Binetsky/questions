import { baseApiEndpoints } from '@api';

/**
 * User Api Endpoints
 * @var userMetaEndpoint - ендпойнт признака авторизации и имени пользователя
 * @var paywallEndpoint - ендпойнт признака платности пользователя
 */
export const userMetaEndpoint = `${baseApiEndpoints.baseAuthEndpoint}/v2/user/info/profile/?fields=display_name`;
export const userLogoutEndpoint = `${baseApiEndpoints.baseAuthEndpoint}/v2/user/logout/`;
export const paywallEndpoint = `${baseApiEndpoints.basePaywallEndpoint}/billing/adapter/v3/showcase/BANNERS/`;

/**
 * @var checkAuthTimeout - интервал с которым проверяется авторизация
 */
export const checkAuthTimeout = 5 * 60 * 1000; // 5 minutes in milliseconds
