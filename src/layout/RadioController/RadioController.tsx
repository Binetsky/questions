import { Control, Controller, FieldValues } from 'react-hook-form';
import React from 'react';
import { Radio } from '@frontend/uikit-rbc/Radio';

interface InputFieldControllerProps {
  name: string;
  control: Control<FieldValues, unknown>;
  size: 'sm' | 'md';
  onSelect: () => void;
  isChecked?: boolean;
  isRequired?: boolean;
  isDisabled?: boolean;
  defaultValue?: string | number;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

/**
 * Контроллер подключения поля ввода к реакт хук формам
 * @param props InputFileControllerProps
 * @returns React.FC
 */
export const RadioController: React.FC<InputFieldControllerProps> = (props) => {
  const {
    name, control, isRequired, isDisabled, size, style, defaultValue, children, className, isChecked, onSelect,
  } = props;
  const onChangeEventValue = { target: { value: { name } } };

  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue}
      rules={{ required: isRequired }}
      render={({ field: { onChange } }) => (
        <Radio
          size={size}
          onSelect={() => {
            onSelect();
            return onChange(onChangeEventValue);
          }}
          className={className}
          isChecked={isChecked || false}
          isDisabled={isDisabled}
          style={style}
        >
          {children}
        </Radio>
      )}
    />
  );
};
