import styles from '@features/NewPageFeature/styles.module.scss';
import { FormElementSizes } from '@frontend/uikit-rbc/constants';
import { InputType } from '@frontend/uikit-rbc/InputField/constants';
import React from 'react';
import { DropdownSelectOptions } from '@frontend/uikit-rbc/DropdownSelect/types';
import { InputFieldController } from '@layout/InputFieldController';
import { AnswerProps } from '@features/NewPageFeature/types';
import { DropdownSelectController } from '@layout/DropdownSelectController';

/**
 * Компонент заполнения ответов на вопросы
 * @param props - AnswerProps
 * @returns React.FC
 */
export const Answer: React.FC<AnswerProps> = (props) => {
  const {
    control, id, placeNumber, deleteAnswerHandler,
  } = props;
  const [answerType, setAnswerType] = React.useState<DropdownSelectOptions>({ name: 'Закрытый ответ', value: 'closed' });

  const isQuestionOpen = answerType.value === 'open';

  const answerTypeChangeHandler = (event: DropdownSelectOptions | DropdownSelectOptions[] | null) => {
    if (event && !Array.isArray(event)) {
      setAnswerType(event);
    }
  };

  const deleteButtonHandler = (idParam: number) => {
    deleteAnswerHandler(idParam);
  };

  return (
    <div className={`${styles.answer} m-b-24`}>
      <div className="headline-5">
        Ответ
        {' '}
        {placeNumber}
        {placeNumber !== 1 && (
          <button
            type="button"
            className="button sm tertiary square m-l-12"
            onClick={() => deleteButtonHandler(id)}
          >
            <i className="ra-icon-trash" />
          </button>
        )}
      </div>
      <div className="caption-2 p-b-8">
        answerId:
        {' '}
        {id}
      </div>
      <div className="flex flex-middle">
        <DropdownSelectController
          name={`answer-type-${id}`}
          control={control}
          isRequired={false}
          onChangeHandler={answerTypeChangeHandler}
        />
        <InputFieldController
          control={control}
          name={`group-subtitle-${id}`}
          placeholder={isQuestionOpen ? 'Ответ напишет сам респондент' : 'Напишите вариант ответа'}
          size={FormElementSizes.Medium}
          type={InputType.Text}
          isDisabled={isQuestionOpen}
          isRequired={false}
        />
      </div>
    </div>
  );
};
