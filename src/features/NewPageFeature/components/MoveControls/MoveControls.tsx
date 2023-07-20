import { MoveControlsProps } from '@features/NewPageFeature/types';
import React from 'react';

/**
 * Компонент управления порядком блоков при создании опроса
 * @param currentIndex
 * @param moveComponent
 * @param blockType
 * @param shouldRightRender
 * @param shouldLeftRender
 * @constructor
 */
export const MoveControls: React.FC<MoveControlsProps> = ({
  currentIndex, moveComponent, blockType, shouldRightRender, shouldLeftRender,
}) => (
  <>
    {(shouldRightRender || shouldLeftRender) && (
      <div className="flex-inline flex-middle m-b-24">
        <div className="m-r-24">Переместить блок</div>
        {shouldRightRender && (
          <button
            type="button"
            onClick={() => moveComponent({ fromIndex: currentIndex, toIndex: currentIndex + 1, blockType })}
            className="button sm tertiary square m-r-8"
          >
            <i className="ra-icon-chevron r-180" />
          </button>
        )}
        {shouldLeftRender && (
          <button
            type="button"
            onClick={() => moveComponent({ fromIndex: currentIndex, toIndex: currentIndex - 1, blockType })}
            className="button sm tertiary square"
          >
            <i className="ra-icon-chevron" />
          </button>
        )}
      </div>
    )}
  </>
);
