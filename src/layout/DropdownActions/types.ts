import { CommonStyles } from '@frontend/uikit-rbc/types';
import { NextLinkParam, ReactRouterLinkParam } from '@frontend/uikit-rbc/RaLink';

export interface DropdownActionsProps extends CommonStyles {
  actions: DropdownActionItemProps[];
  customLink?: NextLinkParam | ReactRouterLinkParam;
  size?: 'lg' | 'md' | 'sm' | 'xs';
  order?: 'primary' | 'secondary' | 'tertiary' | 'ghost';
}

export interface DropdownActionItemProps {
  name: string | React.ReactNode;
  onClick?: () => void;
  href?: string;
  target?: '_blank';
  customLink?: NextLinkParam | ReactRouterLinkParam;
}
