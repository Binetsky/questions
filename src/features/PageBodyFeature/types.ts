import React from 'react';
import { PageBodyType } from '@constants';
import { SubscribeChannel } from '@features/AppState/redux/types';
import { CurrentDeviceTypeParams } from '@context';
import { WithChildren } from '@types';

/**
 * Входящие параметры компонента PageBodyFeature
 * @property main: () => React.ReactElement;
 * @property bside?: () => React.ReactElement;
 * @property pageBodyType?: PageBodyType;
 */
export interface PageBodyFeatureProps extends WithChildren {
  currentDevice: CurrentDeviceTypeParams;
  pageBodyType?: PageBodyType;
}

/**
 * Входящие параметры компонента ArticlePageLayoutProps
 * @property main: React.ReactElement;
 */
export interface ArticlePageLayoutProps {
  main: () => React.ReactElement;
}

/**
 * Входящие параметры компонента DefaultPageLayout
 * @property hideOnMobile: boolean;
 * @property hideOnTablet: boolean;
 */
export interface DefaultPageLayoutProps extends Omit<PageBodyFeatureProps, 'pageBodyType'> {
  hideOnMobile: boolean;
  hideOnTablet: boolean;
}

/**
 * Входящие параметры компонента DefaultPageLayout
 * @property main: () => React.ReactElement;
 */
export interface ErrorPageLayoutProps {
  main: () => React.ReactElement;
}

/**
 * Тип пропсов SocialNetworkButton
 * @property channelItem: SubscribeChannelInfo;
 */
export interface SocialNetworkButtonProps {
  channelItem: SubscribeChannel;
}

export interface MainBlockProps extends PageBodyFeatureProps {
  hideOnMobile: boolean;
  hideOnTablet: boolean;
}
