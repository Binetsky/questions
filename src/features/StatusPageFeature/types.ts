import { DropdownActionItemProps } from '@layout/DropdownActions/types';

export interface DateRange {
  from: number;
  to: number;
}

export interface ActionPanelProps {
  shouldPublishRender: boolean;
  shouldDropdownActionsRender: boolean;
  isPublished: boolean;
  notification: string;
  handlePublish: () => void;
  dropdownActions: DropdownActionItemProps[];
}
