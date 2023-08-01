import { DropdownActionItem } from '@layout/DropdownActions/components';
import React from 'react';
import { DropdownActionsProps } from './types';

/**
 * Компонент элемента списка экшенов
 * @props - DropdownActionsProps
 * @returns DropdownActions
 */
export const DropdownActions: React.FC<DropdownActionsProps> = (props) => {
  const {
    actions, className, style, customLink, size = 'md', order = 'tertiary',
  } = props;
  const [isListOpen, setIsListOpen] = React.useState<boolean>(false);

  const handleListOpen = () => {
    setIsListOpen(!isListOpen);
  };

  const handleListBlur = () => {
    setTimeout(() => setIsListOpen(false), 250);
  };

  return (
    <div
      className={`dropdown-actions ${className}`}
      style={style}
    >
      <button
        type="button"
        className={`dropdown-actions-button button ${size} square ${order}`}
        onClick={handleListOpen}
        onBlur={handleListBlur}
      >
        <i className="ra-icon-more" />
      </button>
      {isListOpen && (
        <div className="dropdown-actions-list">
          {actions.map((actionItem, index) => (
            <DropdownActionItem
              key={index}
              name={actionItem.name}
              onClick={actionItem.onClick}
              target={actionItem.target}
              href={actionItem.href}
              customLink={customLink}
            />
          ))}
        </div>
      )}
    </div>
  );
};
