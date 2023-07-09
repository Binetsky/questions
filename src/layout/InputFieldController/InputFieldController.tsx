import { Control, Controller, FieldValues } from 'react-hook-form';
import { InputField } from '@frontend/uikit-rbc/InputField';
import { FormElementSizes } from '@frontend/uikit-rbc/constants';
import { InputType } from '@frontend/uikit-rbc/InputField/constants';
import React from 'react';

interface InputFieldControllerProps {
  name: string;
  control: Control<FieldValues, unknown>;
  placeholder: string;
  size: FormElementSizes;
  type: InputType;
  isRequired?: boolean;
  isDisabled?: boolean;
  defaultValue?: string | number;
  style?: React.CSSProperties;
}

/**
 * Контроллер подключения поля ввода к реакт хук формам
 * @param props InputFileControllerProps
 * @returns React.FC
 */
export const InputFieldController: React.FC<InputFieldControllerProps> = (props) => {
  const {
    name, control, isRequired, isDisabled, placeholder, size, type, style, defaultValue,
  } = props;

  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue}
      rules={{ required: isRequired }}
      render={({ field: { onChange, value } }) => (
        <InputField
          value={value as string}
          onChange={onChange}
          name={name}
          placeholder={placeholder}
          size={size}
          type={type}
          isRequired={isRequired}
          isDisabled={isDisabled}
          className="w-100"
          style={style}
        />
      )}
    />
  );
};
