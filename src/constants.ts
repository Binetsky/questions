import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();

/**
 * Константы хранящие значения из переменных окружения
 */
export const {
  MONGODB_URI,
  MONGODB_DB_NAME,
  API_URL,
} = publicRuntimeConfig || {};

export enum HttpMethods {
  Get = 'GET',
  Post = 'POST',
  Delete = 'DELETE',
}

export enum Collections {
  Surveys = 'surveys',
}

export enum ApiEndpoints {
  SurveysAdmin = '/api/admin/surveys',
}
