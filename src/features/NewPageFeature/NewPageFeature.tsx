import React from 'react';
import { ComponentWithChildren } from '@frontend/uikit-rbc/types';
import { IntroAndOutro } from '@features/NewPageFeature/components/IntroAndOutro/IntroAndOutro';
import { ControlPanel } from '@features/NewPageFeature/components/ControlPanel';
import { Group } from '@features/NewPageFeature/components/Group';
import { initialAnswer, initialGroup, initialQuestion } from '@features/NewPageFeature/constants';
import { NewSurveyContext } from '@context/NewSurveyContext';
import styles from './styles.module.scss';

/**
 * Компонент страницы создания опроса
 * @returns React.FC
 */
export const NewPageFeature:React.FC<ComponentWithChildren> = () => {
  const {
    setGroupArray, setQuestionArray, setAnswersArray, handleSubmit, handleSave, handleSaveAndPublish, control,
    groupArray, questionArray, answersArray, deleteGroupHandler, addQuestionHandler, addAnswerHandler,
    deleteAnswerHandler, deleteQuestionHandler, moveComponent, addGroupHandler,
  } = React.useContext(NewSurveyContext);

  React.useEffect(() => {
    setGroupArray([initialGroup]);
    setQuestionArray([initialQuestion]);
    setAnswersArray([initialAnswer]);
  }, []);

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
          control={control}
          id={0}
          header="Вступление"
          titlePlaceholder={'Например, "Пройдите наш замечательный опрос"'}
          subtitlePlaceholder="Необязательный подзаголовок для уточняющей информации респонденту"
          titleName="intro-title"
          subtitleName="intro-subtitle"
        />

        <IntroAndOutro
          control={control}
          id={1}
          header="Заключение"
          titlePlaceholder={'Например, "Спасибо за прохождение нашего замечательного опроса"'}
          subtitlePlaceholder="Необязательный подзаголовок для уточняющей информации респонденту"
          titleName="outro-title"
          subtitleName="outro-subtitle"
        />

        {groupArray.map((groupItem, index) => (
          <Group
            control={control}
            placeNumber={index + 1}
            questionArray={questionArray}
            answersArray={answersArray}
            id={groupItem.id}
            type={groupItem.type}
            deleteGroupHandler={deleteGroupHandler}
            key={groupItem.id}
            addQuestionHandler={addQuestionHandler}
            deleteQuestionHandler={deleteQuestionHandler}
            addAnswerHandler={addAnswerHandler}
            deleteAnswerHandler={deleteAnswerHandler}
            groupLength={groupArray.length}
            moveComponent={moveComponent}
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
