import React from 'react';
import { Answer } from '@layout/Answer';
import { Title } from '@layout/Title';
import { FormElementSizes } from '@frontend/uikit-rbc/constants';
import { InputType } from '@frontend/uikit-rbc/InputField/constants';
import { BasicAnswerProps, BasicQuestionProps, MoveComponentParams } from '@types';
import { InputFieldController } from '@layout/InputFieldController';
import { MoveControls } from '@layout/MoveControls';
import { Control, FieldValues } from 'react-hook-form';
import { QuestionEditItem } from '@context/EditSurveyContext/types';
import styles from './styles.module.scss';

export interface QuestionProps {
  questionItem: BasicQuestionProps;
  groupId: number;
  placeNumber: number;
  actualIndex: number;
  questionLength: number;
  control: Control<FieldValues, unknown>;
  answersArray: BasicAnswerProps[];
  addAnswerHandler: ({ questionIdParam, groupIdParam }: { questionIdParam: number; groupIdParam: number }) => void;
  deleteQuestionHandler?: (idParam: number) => void;
  moveComponent: ({ fromIndex, toIndex, blockType }: MoveComponentParams) => void;
  deleteAnswerHandler?: (idParam: number) => void;
}

/**
 * Компонент заполнения вопроса
 * @param props - QuestionProps
 * @returns React.FC
 */
export const Question: React.FC<QuestionProps> = (props) => {
  const {
    placeNumber, questionItem, groupId, questionLength, actualIndex, control, answersArray, addAnswerHandler,
    deleteQuestionHandler, moveComponent, deleteAnswerHandler,
  } = props;

  const filteredAnswers = answersArray.filter((answerItem) => answerItem.questionId === questionItem.id);

  const deleteButtonHandler = (idParam: number) => {
    if (deleteQuestionHandler) {
      deleteQuestionHandler(idParam);
    }
  };

  const extendedQuestionForEdit = questionItem as QuestionEditItem;

  return (
    <div className={`${styles.question} m-b-24`}>
      <MoveControls
        currentIndex={actualIndex}
        moveComponent={moveComponent}
        blockType="question"
        shouldRightRender={placeNumber < questionLength}
        shouldLeftRender={placeNumber > 1}
      />
      <Title
        id={questionItem.id}
        titlePlaceholder="Здесь укажите вопрос"
        subtitlePlaceholder="Необязательный подзаголовок для уточняющей информации респонденту"
        header={`Вопрос ${placeNumber}`}
        deleteButtonHandler={questionLength > 1 && deleteQuestionHandler ? deleteButtonHandler : undefined}
        titleName={`question-title-${groupId}-${questionItem.id}`}
        subtitleName={`question-subtitle-${groupId}-${questionItem.id}`}
        control={control}
        titleValue={extendedQuestionForEdit?.title}
        subtitleValue={extendedQuestionForEdit?.subtitle || undefined}
      />

      <div className="flex flex-middle p-b-12">
        <div className="m-r-12">Минимум возможных ответов</div>
        <InputFieldController
          control={control}
          name={`question-min-answers-${groupId}-${questionItem.id}`}
          placeholder=""
          size={FormElementSizes.Medium}
          type={InputType.Text}
          style={{ width: '52px', flex: 'none' }}
          isDisabled={false}
          defaultValue={extendedQuestionForEdit?.minAnswers || 1}
          isRequired
        />
      </div>

      <div className="flex flex-middle p-b-24">
        <div className="m-r-12">Максимум возможных ответов</div>
        <InputFieldController
          control={control}
          name={`question-max-answers-${groupId}-${questionItem.id}`}
          placeholder=""
          size={FormElementSizes.Medium}
          type={InputType.Text}
          style={{ width: '52px', flex: 'none' }}
          isDisabled={false}
          defaultValue={extendedQuestionForEdit?.maxAnswers || 99}
          isRequired
        />
      </div>

      {filteredAnswers.map((answerItem, index) => (
        <Answer
          placeNumber={index + 1}
          actualIndex={answersArray.findIndex((commonAnswerItem) => commonAnswerItem.id === answerItem.id)}
          answerItem={answerItem}
          groupId={groupId}
          questionId={questionItem.id}
          key={answerItem.id}
          answerLength={filteredAnswers.length}
          answersLength={filteredAnswers.length}
          deleteAnswerHandler={deleteAnswerHandler}
          control={control}
          moveComponent={moveComponent}
        />
      ))}

      <button
        type="button"
        className="button md tertiary"
        onClick={() => addAnswerHandler({ questionIdParam: questionItem.id, groupIdParam: groupId })}
      >
        + Вариант ответа
      </button>
    </div>
  );
};
