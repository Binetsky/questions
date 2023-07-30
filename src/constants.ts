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
  Results = 'results',
}

export enum ApiEndpoints {
  SurveysAdmin = '/api/admin/surveys',
  ResultsAdmin = '/api/admin/results',
  SurveyGet = '/api/survey',
  ResultPost = '/api/results',
}

export const adminUserKey = 'SUPERADMIN111';

export enum PageBodyType {
  Default,
}
