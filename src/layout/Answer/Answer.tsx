import { FormElementSizes } from '@frontend/uikit-rbc/constants';
import { InputType } from '@frontend/uikit-rbc/InputField/constants';
import React from 'react';
import { DropdownSelectOptions } from '@frontend/uikit-rbc/DropdownSelect/types';
import { InputFieldController } from '@layout/InputFieldController';
import { BasicAnswerProps, MoveComponentParams } from '@types';
import { DropdownSelectController } from '@layout/DropdownSelectController';
import { MoveControls } from '@layout/MoveControls';
import { Control, FieldValues } from 'react-hook-form';
import styles from './styles.module.scss';

export interface AnswerProps extends BasicAnswerProps {
  placeNumber: number;
  actualIndex: number;
  answerLength: number;
  answersLength: number;
  control: Control<FieldValues, unknown>;
  deleteAnswerHandler: (idParam: number) => void;
  moveComponent: ({ fromIndex, toIndex, blockType }: MoveComponentParams) => void;
}

/**
 * Компонент заполнения ответов на вопросы
 * @param props - AnswerProps
 * @returns React.FC
 */
export const Answer: React.FC<AnswerProps> = (props) => {
  const {
    id, placeNumber, groupId, questionId, answersLength, control, deleteAnswerHandler, moveComponent,
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

  if (!control) {
    return null;
  }

  return (
    <div className={`${styles.answer} m-b-24`}>
      <MoveControls
        currentIndex={placeNumber - 1}
        moveComponent={moveComponent}
        blockType="answer"
        shouldRightRender={placeNumber < answersLength}
        shouldLeftRender={placeNumber > 1}
      />
      <div className="headline-5">
        Ответ
        {' '}
        {placeNumber}
        {answersLength > 1 && (
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
          name={`answer-type-${groupId}-${questionId}-${id}`}
          control={control}
          isRequired={false}
          onChangeHandler={answerTypeChangeHandler}
        />
        <InputFieldController
          control={control}
          name={`answer-${groupId}-${questionId}-${id}`}
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
