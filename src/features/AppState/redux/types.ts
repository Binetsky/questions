import { SurveyItem } from '@models/survey';

/**
 * Типы общего стейта приложения
 * @property showBanners: boolean - флаг показа баннеров
 */
export interface AppStateParams {
  isSurveysFetching: boolean;
  surveys: SurveyItem[] | null;
}

