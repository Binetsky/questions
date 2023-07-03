import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();

/**
 * Константы хранящие значения из переменных окружения
 */
export const {
  RBC_ENVIRONMENT,
  BASE_PATH,
  ASSETS_PREFIX,
  API_BASE_URL,
  API_SSR_BASE_URL,
  AUTH_API_BASE_URL,
  PAYWALL_API_BASE_URL,
  RBC_FOX_BASE_URL,
} = publicRuntimeConfig || {};

/**
 * Типы страниц ошибок
 */
export enum ErrorPageType {
  Forbidden = '403',
  NotFound = '404',
  ServerError = '503',
}

/**
 * Константа Урла репозитория статики
 */
export const staticContentUrl = 'https://s0.rbk.ru/v1_static/';

/**
 * Ссылка для инфо-блока, чтобы отображать заглушку, когда нет картинки
 */
export const badLuckImg = 'https://s0.rbk.ru/v1_static/images/common/bad-luck-1.png';

export enum PageBodyType {
  Default,
  Error,
}

/**
 * Список идентификаторов счетчиков метрик
 */
export const metricCounters = {
  yaMetric: 16443139,
  gtm: 'G-B011S4PFZ5',
};

/** Типы блоков главной страницы */
export enum BlockTypes {
  Anons = 'anons',
  Article = 'article',
  Category = 'category',
  CommercialAnons = 'commercial_anons',
  ForeignAnons = 'foreign_anons',
  Quiz = 'quiz',
  SpecialBlock = 'special_block',
  SpecialCardsBlock = 'special_block_cards_3_by_3',
  SpecialVideoBlock = 'special_block_video',
  Tag = 'tag',
}
