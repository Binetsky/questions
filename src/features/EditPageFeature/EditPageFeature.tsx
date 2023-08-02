import React from 'react';
import { EditSurveyContext } from '@context/EditSurveyContext';
import { ControlPanel } from '@layout/ControlPanel';
import { IntroAndOutro } from '@layout/IntroAndOutro';
import { Group } from '@layout/Group';
import styles from './styles.module.scss';

/**
 * Компонент страницы редактирования опроса
 * @constructor
 */
export const EditPageFeature: React.FC = () => {
  const {
    handleSubmit, control, handleSave, handleSaveAndPublish, survey, groupArray, addQuestionHandler, deleteGroupHandler,
    questionArray, moveComponent, addAnswerHandler, deleteQuestionHandler, answersArray, deleteAnswerHandler, addGroupHandler,
    isPreviouslyPublished,
  } = React.useContext(EditSurveyContext);

  if (!handleSubmit || !control || !survey) {
    return null;
  }

  const { intro, outro } = survey;

  return (
    <div className={styles.main}>
      {isPreviouslyPublished && (
        <div className="p-b-24 flex-middle">
          <i className="ra-icon-info m-r-8" />
          Удаление блоков отключено для ранее опубликованных опросов, чтобы не влиять на конечную статистику
        </div>
      )}
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
          titleValue={intro.title}
          subtitleValue={intro.subtitle || undefined}
        />

        <IntroAndOutro
          id={1}
          header="Заключение"
          titlePlaceholder={'Например, "Спасибо за прохождение нашего замечательного опроса"'}
          subtitlePlaceholder="Необязательный подзаголовок для уточняющей информации респонденту"
          titleName="outro-title"
          subtitleName="outro-subtitle"
          control={control}
          titleValue={outro.title}
          subtitleValue={outro.subtitle || undefined}
        />

        {groupArray.map((groupItem, index) => (
          <Group
            placeNumber={index + 1}
            groupItem={groupItem}
            key={groupItem.id}
            groupLength={groupArray.length}
            control={control}
            addQuestionHandler={addQuestionHandler}
            deleteGroupHandler={isPreviouslyPublished ? undefined : deleteGroupHandler}
            questionArray={questionArray}
            moveComponent={moveComponent}
            addAnswerHandler={addAnswerHandler}
            deleteQuestionHandler={isPreviouslyPublished ? undefined : deleteQuestionHandler}
            answersArray={answersArray}
            deleteAnswerHandler={isPreviouslyPublished ? undefined : deleteAnswerHandler}
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
