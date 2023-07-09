import { Control, Controller, FieldValues } from 'react-hook-form';
import React from 'react';
import { DropdownSelect } from '@frontend/uikit-rbc/DropdownSelect';
import { DropdownSelectOptions } from '@frontend/uikit-rbc/DropdownSelect/types';

interface DropdownSelectControllerProps {
  name: string;
  control: Control<FieldValues, unknown>;
  isRequired?: boolean;
  style?: React.CSSProperties;
  onChangeHandler: (event: DropdownSelectOptions | DropdownSelectOptions[] | null) => void;
}

/**
 * Контроллер подключения поля дропдауна к реакт хук формам
 * @param props DropdownSelectControllerProps
 * @returns React.FC
 */
export const DropdownSelectController: React.FC<DropdownSelectControllerProps> = (props) => {
  const {
    name, control, isRequired, style, onChangeHandler,
  } = props;
  const defaultValue = { name: 'Закрытый ответ', value: 'closed' };

  const answerTypeChangeHandler = (
    { value, onChange }: { value: DropdownSelectOptions | DropdownSelectOptions[] | null; onChange: (event: any) => void },
  ) => {
    if (value && !Array.isArray(value)) {
      onChangeHandler(value);
      onChange(value);
    }
  };
  const possibleValues = [
    { name: 'Закрытый ответ', value: 'closed' },
    { name: 'Открытый ответ', value: 'open' },
  ];

  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue}
      rules={{ required: isRequired }}
      render={({ field: { onChange, value } }) => (
        <DropdownSelect
          onChange={(onChangeValue) => answerTypeChangeHandler({ value: onChangeValue, onChange })}
          options={possibleValues}
          value={value}
          theme="linear"
          placeholder="Тип ответа"
          className="w-20 m-r-12"
          style={style}
        />
      )}
    />
  );
};
