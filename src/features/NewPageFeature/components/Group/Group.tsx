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
    control, placeNumber, questionArray, id, deleteGroupHandler,
  } = props;
  const currentQuestions = questionArray.filter((questionItem) => questionItem.groupId === id);

  return (
    <div className={`${styles.group} m-b-24`}>
      <Title
        control={control}
        id={id}
        header={`Группа ${placeNumber}`}
        subtitlePlaceholder="Озаглавьте группу вопросов, чтобы респондент с чем ему придется иметь дело далее"
        titlePlaceholder="Необязательный подзаголовок для уточняющей информации респонденту"
        deleteButtonHandler={placeNumber !== 1 ? deleteGroupHandler : undefined}
      />

      {currentQuestions && currentQuestions.map((questionItem, index) => (
        <Question
          control={control}
          placeNumber={index + 1}
          groupId={id}
          answers={questionItem.answers}
          type={questionItem.type}
          key={id}
        />
      ))}

      <button
        type="button"
        className="button md tertiary"
      >
        + Вопрос
      </button>
    </div>
  );
};
