import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();

/**
 * Константы хранящие значения из переменных окружения
 */
export const {
  RBC_ENVIRONMENT,
} = publicRuntimeConfig || {};

export enum HttpMethods {
  Get = 'GET',
  Post = 'POST',
  Delete = 'DELETE',
}
