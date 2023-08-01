import styles from '@features/StatusPageFeature/styles.module.scss';
import { RaLink } from '@frontend/uikit-rbc/RaLink';
import Link from 'next/link';
import { DropdownActions } from '@layout/DropdownActions';
import React from 'react';
import { ActionPanelProps } from '@features/StatusPageFeature/types';

/**
 * Компонент панели управления страницы просмотра опроса
 * @param props - ActionPanelProps
 * @returns React.FC
 */
export const ActionPanel: React.FC<ActionPanelProps> = (props) => {
  const {
    shouldPublishRender, shouldDropdownActionsRender, isPublished, dropdownActions, notification, handlePublish,
  } = props;

  return (
    <div className={`${styles['main-content-actions']} p-b-24 flex-middle`}>
      <RaLink
        href="/"
        LibraryLink={Link}
        classList="button sm tertiary square m-r-12"
      >
        <i className="ra-icon-angle-arrow r-180" />
      </RaLink>
      {shouldPublishRender && (
        <button
          type="button"
          onClick={handlePublish}
          className={`button sm ${isPublished ? 'tertiary' : 'primary'} m-r-12`}
        >
          {isPublished ? 'Снять с публикации' : 'Опубликовать'}
        </button>
      )}
      {shouldDropdownActionsRender && (
        <DropdownActions
          actions={dropdownActions}
          size="sm"
          className="m-r-12"
        />
      )}
      {notification && (
        <div>{notification}</div>
      )}
    </div>
  );
};
