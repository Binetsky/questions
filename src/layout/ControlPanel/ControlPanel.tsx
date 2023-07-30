import { RaLink } from '@frontend/uikit-rbc/RaLink';
import Link from 'next/link';
import React from 'react';

interface ControlPanelProps {
  handleSaveAndPublish: () => void;
}

/**
 * Кнопки управления страницы создания опроса
 * @param props ControlPanelProps
 * @returns React.FC
 */
export const ControlPanel: React.FC<ControlPanelProps> = (props) => {
  const { handleSaveAndPublish } = props;

  return (
    <div className="flex p-b-24">
      <button
        type="submit"
        className="button md primary m-r-12"
      >
        Сохранить
      </button>
      <button
        type="submit"
        className="button md tertiary m-r-12"
        onClick={handleSaveAndPublish}
      >
        Сохранить и опубликовать
      </button>
      <RaLink
        LibraryLink={Link}
        href="/"
        classList="button md tertiary"
      >
        Отменить
      </RaLink>
    </div>
  );
};
