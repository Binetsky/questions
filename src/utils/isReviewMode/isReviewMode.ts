import { RBC_ENVIRONMENT } from '@constants';

/**
 * const isReviewMode - признак того, что приложение запущено в режиме отсмотра
 * RBC_ENVIRONMENT=review
 */
export const isReviewMode = RBC_ENVIRONMENT === 'review';
