import styles from '@features/NewPageFeature/styles.module.scss';
import React from 'react';
import { Question } from '@features/NewPageFeature/components/Question';
import { Title } from '@features/NewPageFeature/components/Title';
import { GroupProps } from '@features/NewPageFeature/types';

/**
 * Компонент заполнения группы вопросов
 * @param props - GroupProps
 * @returns React.FC
 */
export const Group: React.FC<GroupProps> = (props) => {
  const {
    control, placeNumber, questionArray, id, deleteGroupHandler, addQuestionHandler, deleteQuestionHandler, answersArray,
    addAnswerHandler, deleteAnswerHandler,
  } = props;
  const currentQuestions = questionArray.filter((questionItem) => questionItem.groupId === id);

  return (
    <fieldset
      className={`${styles.group} m-b-24`}
      id={`group-fieldset-${id}`}
    >
      <Title
        control={control}
        id={id}
        header={`Группа ${placeNumber}`}
        titlePlaceholder="Озаглавьте группу вопросов, чтобы респондент с чем ему придется иметь дело далее"
        subtitlePlaceholder="Необязательный подзаголовок для уточняющей информации респонденту"
        deleteButtonHandler={placeNumber !== 1 ? deleteGroupHandler : undefined}
      />

      {currentQuestions && currentQuestions.map((questionItem, index) => (
        <Question
          control={control}
          answersArray={answersArray}
          placeNumber={index + 1}
          id={questionItem.id}
          groupId={id}
          type={questionItem.type}
          key={id}
          deleteQuestionHandler={deleteQuestionHandler}
          addAnswerHandler={addAnswerHandler}
          deleteAnswerHandler={deleteAnswerHandler}
        />
      ))}

      <button
        type="button"
        className="button md tertiary"
        onClick={() => addQuestionHandler(id)}
      >
        + Вопрос
      </button>
    </fieldset>
  );
};
