import styles from '@features/NewPageFeature/styles.module.scss';
import React from 'react';
import { Answer } from '@features/NewPageFeature/components/Answer';
import { Title } from '@features/NewPageFeature/components/Title';
import { FormElementSizes } from '@frontend/uikit-rbc/constants';
import { InputType } from '@frontend/uikit-rbc/InputField/constants';
import { QuestionProps } from '@features/NewPageFeature/types';
import { InputFieldController } from '@layout/InputFieldController';
import { MoveControls } from '@features/NewPageFeature/components/MoveControls';

/**
 * Компонент заполнения вопроса
 * @param props - QuestionProps
 * @returns React.FC
 */
export const Question: React.FC<QuestionProps> = (props) => {
  const {
    control, placeNumber, id, deleteQuestionHandler, answersArray, groupId, addAnswerHandler, deleteAnswerHandler,
    questionLength, moveComponent, actualIndex,
  } = props;

  const filteredAnswers = answersArray.filter((answerItem) => answerItem.questionId === id);

  const deleteButtonHandler = (idParam: number) => {
    deleteQuestionHandler(idParam);
  };

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
        id={id}
        control={control}
        titlePlaceholder="Здесь укажите вопрос"
        subtitlePlaceholder="Необязательный подзаголовок для уточняющей информации респонденту"
        header={`Вопрос ${placeNumber}`}
        deleteButtonHandler={questionLength > 1 ? deleteButtonHandler : undefined}
        titleName={`question-title-${groupId}-${id}`}
        subtitleName={`question-subtitle-${groupId}-${id}`}
      />

      <div className="flex flex-middle p-b-12">
        <div className="m-r-12">Минимум возможных ответов</div>
        <InputFieldController
          control={control}
          name={`question-min-answers-${groupId}-${id}`}
          placeholder=""
          size={FormElementSizes.Medium}
          type={InputType.Text}
          style={{ width: '52px', flex: 'none' }}
          isDisabled={false}
          defaultValue={1}
          isRequired
        />
      </div>

      <div className="flex flex-middle p-b-24">
        <div className="m-r-12">Максимум возможных ответов</div>
        <InputFieldController
          control={control}
          name={`question-max-answers-${groupId}-${id}`}
          placeholder=""
          size={FormElementSizes.Medium}
          type={InputType.Text}
          style={{ width: '52px', flex: 'none' }}
          isDisabled={false}
          defaultValue={99}
          isRequired
        />
      </div>

      {filteredAnswers.map((answerItem, index) => (
        <Answer
          control={control}
          placeNumber={index + 1}
          actualIndex={answersArray.findIndex((commonAnswerItem) => commonAnswerItem.id === answerItem.id)}
          id={answerItem.id}
          type={answerItem.type}
          groupId={groupId}
          questionId={id}
          key={answerItem.id}
          answerLength={filteredAnswers.length}
          deleteAnswerHandler={deleteAnswerHandler}
          answersLength={filteredAnswers.length}
          moveComponent={moveComponent}
        />
      ))}

      <button
        type="button"
        className="button md tertiary"
        onClick={() => addAnswerHandler({ questionIdParam: id, groupIdParam: groupId })}
      >
        + Вариант ответа
      </button>
    </div>
  );
};
