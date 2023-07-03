import { PageBodyType } from '@constants';
import { WithChildren } from '@types';

/**
 * Входящие параметры компонента PageBodyFeature
 * @property pageBodyType?: PageBodyType;
 */
export interface PageBodyFeatureProps extends WithChildren {
  pageBodyType?: PageBodyType;
}
