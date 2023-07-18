import React from 'react';
import { FormElementSizes } from '@frontend/uikit-rbc/constants';
import { InputType } from '@frontend/uikit-rbc/InputField/constants';
import { AnswerItem } from '@models/survey';
import { InputFieldController } from '@layout/InputFieldController';
import { RadioOrCheckbox } from '@features/SurveyPageFeature/components/RadioOrCheckbox';
import { Control, FieldValues } from 'react-hook-form';

interface AnswerProps {
  answer: AnswerItem;
  isMultiselect: boolean;
  answerIndex: number;
  onChange: (event: unknown) => void;
  activeAnswerIndex: number[];
  handleAnswerSelect: (value: number) => number[];
  control: Control<FieldValues, unknown>;
}

/**
 * Компонент ответа на вопрос
 * @returns React.FC
 */
export const Answer: React.FC<AnswerProps> = ({
  answer, isMultiselect, answerIndex, activeAnswerIndex, handleAnswerSelect, control, onChange,
}) => {
  const isChecked = activeAnswerIndex.includes(answerIndex);

  const onSelect = () => {
    const currentAnswerArray = handleAnswerSelect(answerIndex);

    onChange(currentAnswerArray);
  };

  if (!control) {
    return null;
  }

  return (
    <>
      {answer.answerType === 'closed' ? (
        <RadioOrCheckbox
          name={answer.id.toString()}
          isDisabled={false}
          isChecked={isChecked}
          onSelect={onSelect}
          size={FormElementSizes.Medium}
          className="m-b-12"
          isMultiselect={isMultiselect}
        >
          {answer.title}
        </RadioOrCheckbox>
      ) : (
        <RadioOrCheckbox
          name={`${answer.id.toString()}`}
          size={FormElementSizes.Medium}
          onSelect={onSelect}
          className="m-b-12"
          isChecked={isChecked}
          isDisabled={false}
          isMultiselect={isMultiselect}
        >
          <InputFieldController
            name={answer.id.toString()}
            control={control}
            placeholder="Напишите свой вариант ответа здесь"
            size={FormElementSizes.Small}
            type={InputType.Text}
            isDisabled={!isChecked}
            style={{ marginTop: isMultiselect ? '0' : '-8px', width: '100%', minWidth: '320px' }}
          />
        </RadioOrCheckbox>
      )}
    </>
  );
};
