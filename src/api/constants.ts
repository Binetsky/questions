import {
  API_BASE_URL, API_SSR_BASE_URL, AUTH_API_BASE_URL, PAYWALL_API_BASE_URL,
} from '@constants';

/**
 * Базовые URL для API
 * @property baseEndpoint - базовый URL основного api
 * @property baseAuthEndpoint - базовый URL api авторизации
 * @property basePaywallEndpoint - базовый URL api paywall
 */
export const baseApiEndpoints = {
  baseEndpoint: `${API_BASE_URL || ''}/api`,
  baseSSREndpoint: `${API_SSR_BASE_URL || API_BASE_URL || ''}/api`,
  baseAuthEndpoint: `${AUTH_API_BASE_URL || ''}`,
  basePaywallEndpoint: `${PAYWALL_API_BASE_URL || ''}/api`,
};

/**
 * Api Endpoints
 * @property TopNavigation - ендпойнт топлайна
 * @property TopLinePartners - ендпойнт выгрузки настроек "Брендирование топлайна"
 * @property Rubric - ендпойнт детальной рубрики
 * @property NewsList - ендпойнт списка статей
 * @property Article - ендпойнт статьи
 * @property TagList - ендпойнт списка тегов
 */
export enum ApiEndpoints {
  TopNavigation = '/top_navigation',
  TopLinePartners = '/toplinepartners',
  Rubric = '/rubric',
  NewsList = '/news/list',
  Article = '/news',
  Preview = '/news/preview',
  Tag = '/tag',
  TagList = '/tag/list',
  StaticPageMeta = '/meta',
  MainPagePublisher = '/publisher',
  PromoChannelsPublisher = '/publisher/life_main_promo_channels',
  MasterTagsPublisher = '/publisher/life_main_rubrics',
  RightColumnTagsPublisher = '/publisher/life_main_tags_in_right_column',
  SystemSettings = '/system-settings',
}
