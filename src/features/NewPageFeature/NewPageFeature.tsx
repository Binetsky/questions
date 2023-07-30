import React from 'react';
import { ComponentWithChildren } from '@frontend/uikit-rbc/types';
import { IntroAndOutro } from '@layout/IntroAndOutro';
import { ControlPanel } from '@layout/ControlPanel';
import { Group } from '@layout/Group';
import { NewSurveyContext } from '@context/NewSurveyContext';
import styles from './styles.module.scss';

/**
 * Компонент страницы создания опроса
 * @returns React.FC
 */
export const NewPageFeature:React.FC<ComponentWithChildren> = () => {
  const {
    handleSubmit, handleSave, handleSaveAndPublish, control, groupArray, questionArray, answersArray, addGroupHandler, deleteGroupHandler,
    addQuestionHandler, deleteQuestionHandler, addAnswerHandler, deleteAnswerHandler, moveComponent,
  } = React.useContext(NewSurveyContext);

  if (!handleSubmit || !control) {
    return null;
  }

  return (
    <div className={styles.main}>
      <form
        className={styles['main-content']}
        onSubmit={handleSubmit(handleSave)}
      >
        <ControlPanel handleSaveAndPublish={handleSaveAndPublish} />

        <IntroAndOutro
          id={0}
          header="Вступление"
          titlePlaceholder={'Например, "Пройдите наш замечательный опрос"'}
          subtitlePlaceholder="Необязательный подзаголовок для уточняющей информации респонденту"
          titleName="intro-title"
          subtitleName="intro-subtitle"
          control={control}
        />

        <IntroAndOutro
          id={1}
          header="Заключение"
          titlePlaceholder={'Например, "Спасибо за прохождение нашего замечательного опроса"'}
          subtitlePlaceholder="Необязательный подзаголовок для уточняющей информации респонденту"
          titleName="outro-title"
          subtitleName="outro-subtitle"
          control={control}
        />

        {groupArray.map((groupItem, index) => (
          <Group
            placeNumber={index + 1}
            id={groupItem.id}
            type={groupItem.type}
            key={groupItem.id}
            groupLength={groupArray.length}
            control={control}
            addQuestionHandler={addQuestionHandler}
            deleteGroupHandler={deleteGroupHandler}
            questionArray={questionArray}
            moveComponent={moveComponent}
            addAnswerHandler={addAnswerHandler}
            deleteQuestionHandler={deleteQuestionHandler}
            answersArray={answersArray}
            deleteAnswerHandler={deleteAnswerHandler}
          />
        ))}

        <button
          type="button"
          className="button md tertiary"
          onClick={addGroupHandler}
        >
          + Группа вопросов
        </button>
      </form>
    </div>
  );
};
