import { FormElementSizes } from '@frontend/uikit-rbc/constants';
import { InputType } from '@frontend/uikit-rbc/InputField/constants';
import React from 'react';
import { DropdownSelectOptions } from '@frontend/uikit-rbc/DropdownSelect/types';
import { InputFieldController } from '@layout/InputFieldController';
import { BasicAnswerProps, MoveComponentParams } from '@types';
import { DropdownSelectController } from '@layout/DropdownSelectController';
import { MoveControls } from '@layout/MoveControls';
import { Control, FieldValues } from 'react-hook-form';
import { AnswerEditItem } from '@context/EditSurveyContext/types';
import styles from './styles.module.scss';

export interface AnswerProps {
  answerItem: BasicAnswerProps;
  groupId: number;
  questionId: number;
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
    answerItem, placeNumber, groupId, questionId, answersLength, control, deleteAnswerHandler, moveComponent,
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

  const extendedQuestionForEdit = answerItem as AnswerEditItem;

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
            onClick={() => deleteButtonHandler(answerItem.id)}
          >
            <i className="ra-icon-trash" />
          </button>
        )}
      </div>
      <div className="caption-2 p-b-8">
        answerId:
        {' '}
        {answerItem.id}
      </div>
      <div className="flex flex-middle">
        <DropdownSelectController
          name={`answer-type-${groupId}-${questionId}-${answerItem.id}`}
          control={control}
          isRequired={false}
          onChangeHandler={answerTypeChangeHandler}
          defaultValue={extendedQuestionForEdit?.answerType ?
            {
              name: extendedQuestionForEdit.answerType === 'open' ? 'Открытый ответ' : 'Закрытый ответ',
              value: extendedQuestionForEdit.answerType,
            } : undefined}
        />
        <InputFieldController
          control={control}
          name={`answer-${groupId}-${questionId}-${answerItem.id}`}
          placeholder={isQuestionOpen ? 'Ответ напишет сам респондент' : 'Напишите вариант ответа'}
          size={FormElementSizes.Medium}
          type={InputType.Text}
          isDisabled={extendedQuestionForEdit?.answerType === 'open' || isQuestionOpen}
          isRequired={false}
          defaultValue={extendedQuestionForEdit?.title}
        />
      </div>
    </div>
  );
};
