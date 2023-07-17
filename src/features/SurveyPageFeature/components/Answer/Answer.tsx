import React from 'react';
import { FormElementSizes } from '@frontend/uikit-rbc/constants';
import { InputType } from '@frontend/uikit-rbc/InputField/constants';
import { AnswerItem } from '@models/survey';
import { SurveyPageContext } from '@context/SurveyPageContext';
import { InputFieldController } from '@layout/InputFieldController';
import { RadioController } from '@layout/RadioController';
import { Radio } from '@frontend/uikit-rbc/Radio';

interface AnswerProps {
  answer: AnswerItem;
  isMultiselect: boolean;
  answerIndex: number;
  activeAnswerIndex: number[];
  handleAnswerSelect: (value: number) => void;
}

/**
 * Компонент ответа на вопрос
 * @constructor
 */
export const Answer: React.FC<AnswerProps> = ({
  answer, isMultiselect, answerIndex, activeAnswerIndex, handleAnswerSelect,
}) => {
  const { control } = React.useContext(SurveyPageContext);

  if (!control) {
    return null;
  }

  return (
    <>
      {answer.answerType === 'closed' ? (
        <RadioController
          name={answer.id.toString()}
          control={control}
          isRequired={false}
          isDisabled={false}
          isChecked={activeAnswerIndex.includes(answerIndex)}
          onSelect={() => handleAnswerSelect(answerIndex)}
          answerValue={answer.title}
          size="md"
          className="m-b-12"
        >
          {answer.title}
        </RadioController>
      ) : (
        <Radio
          size="md"
          onSelect={() => handleAnswerSelect(answerIndex)}
          className="m-b-12"
          isChecked={activeAnswerIndex.includes(answerIndex)}
          isDisabled={false}
        >
          <InputFieldController
            control={control}
            name="open-answer"
            placeholder="Напишите свой вариант ответа здесь"
            size={FormElementSizes.Small}
            type={InputType.Text}
            isDisabled={false}
            isRequired
            style={{ marginTop: '-8px', width: '100%', minWidth: '320px' }}
          />
        </Radio>
      )}
    </>
  );
};
