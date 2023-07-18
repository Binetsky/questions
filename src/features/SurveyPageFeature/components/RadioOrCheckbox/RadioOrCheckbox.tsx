import { ComponentWithChildren } from '@frontend/uikit-rbc/types';
import React from 'react';
import { Radio } from '@frontend/uikit-rbc/Radio';
import { Checkbox } from '@frontend/uikit-rbc/Checkbox';
import { FormElementSizes } from '@frontend/uikit-rbc/constants';

interface RadioOrCheckboxProps extends ComponentWithChildren {
  isMultiselect: boolean;
  name: string;
  isDisabled: boolean;
  isChecked: boolean;
  onSelect: () => void;
  size: FormElementSizes;
  className?: string;
}

/**
 * Компонент возвращающий чекбокс или радио кнопку в зависимости от условия
 * @param props
 * @constructor
 */
export const RadioOrCheckbox: React.FC<RadioOrCheckboxProps> = (props) => {
  const {
    isMultiselect, name, isDisabled, isChecked, onSelect, size, className, children,
  } = props;

  if (isMultiselect) {
    return (
      <Checkbox
        size={size}
        className={className}
        isChecked={isChecked}
        isDisabled={isDisabled}
        name={name}
        onChange={onSelect}
      >
        {children}
      </Checkbox>
    );
  }

  if (!isMultiselect) {
    return (
      <Radio
        size={size}
        onSelect={onSelect}
        className={className}
        isChecked={isChecked}
        isDisabled={isDisabled}
      >
        {children}
      </Radio>
    );
  }

  return null;
};
