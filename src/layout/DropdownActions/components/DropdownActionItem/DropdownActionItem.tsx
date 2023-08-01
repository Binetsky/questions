import { RaLink } from '@frontend/uikit-rbc/RaLink';
import { DropdownActionItemProps } from '../../types';

/**
 * Компонент элемента списка экшенов
 * @param props - DropdownActionItemProps
 * @returns React.FC
 */
export const DropdownActionItem: React.FC<DropdownActionItemProps> = (props) => {
  const {
    name, onClick, target, href, customLink,
  } = props;

  if (onClick) {
    return (
      <button
        type="button"
        className="dropdown-actions-item"
        onClick={onClick}
      >
        {name}
      </button>
    );
  }

  return (
    <RaLink
      LibraryLink={customLink}
      classList="dropdown-actions-item"
      href={href}
      target={target}
    >
      {name}
    </RaLink>
  );
};
