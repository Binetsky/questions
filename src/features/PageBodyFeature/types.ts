import { PageBodyType } from '@constants';
import { ComponentWithChildren } from '@frontend/uikit-rbc/types';

/**
 * Входящие параметры компонента PageBodyFeature
 * @property pageBodyType?: PageBodyType;
 */
export interface PageBodyFeatureProps extends ComponentWithChildren {
  pageBodyType?: PageBodyType;
}
