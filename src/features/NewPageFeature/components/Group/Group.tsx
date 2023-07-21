import styles from '@features/NewPageFeature/styles.module.scss';
import React from 'react';
import { Question } from '@features/NewPageFeature/components/Question';
import { Title } from '@features/NewPageFeature/components/Title';
import { GroupProps } from '@features/NewPageFeature/types';
import { MoveControls } from '@features/NewPageFeature/components/MoveControls';
import { NewSurveyContext } from '@context/NewSurveyContext';

/**
 * Компонент заполнения группы вопросов
 * @param props - GroupProps
 * @returns React.FC
 */
export const Group: React.FC<GroupProps> = (props) => {
  const {
    placeNumber, id, groupLength,
  } = props;
  const {
    control, questionArray, deleteGroupHandler, addQuestionHandler, moveComponent,
  } = React.useContext(NewSurveyContext);
  const currentQuestions = questionArray.filter((questionItem) => questionItem.groupId === id);

  if (!control) {
    return null;
  }

  return (
    <fieldset
      className={`${styles.group} m-b-24`}
      id={`group-fieldset-${id}`}
    >
      <MoveControls
        currentIndex={placeNumber - 1}
        moveComponent={moveComponent}
        blockType="group"
        shouldRightRender={placeNumber < groupLength}
        shouldLeftRender={placeNumber > 1}
      />
      <Title
        id={id}
        header={`Группа ${placeNumber}`}
        titlePlaceholder="Озаглавьте группу вопросов, чтобы респондент с чем ему придется иметь дело далее"
        subtitlePlaceholder="Необязательный подзаголовок для уточняющей информации респонденту"
        deleteButtonHandler={groupLength > 1 ? deleteGroupHandler : undefined}
        titleName={`group-title-${id}`}
        subtitleName={`group-subtitle-${id}`}
      />
      {currentQuestions && currentQuestions.map((questionItem, index) => (
        <Question
          placeNumber={index + 1}
          actualIndex={questionArray.findIndex((commonQuestionItem) => commonQuestionItem.id === questionItem.id)}
          id={questionItem.id}
          groupId={id}
          type={questionItem.type}
          key={id}
          questionLength={currentQuestions.length}
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
