import React from 'react';
import { ComponentWithChildren } from '@frontend/uikit-rbc/types';
import { IntroAndOutro } from '@features/NewPageFeature/components/IntroAndOutro/IntroAndOutro';
import { ControlPanel } from '@features/NewPageFeature/components/ControlPanel';
import { Group } from '@features/NewPageFeature/components/Group';
import { NewSurveyContext } from '@context/NewSurveyContext';
import styles from './styles.module.scss';

/**
 * Компонент страницы создания опроса
 * @returns React.FC
 */
export const NewPageFeature:React.FC<ComponentWithChildren> = () => {
  const {
    handleSubmit, handleSave, handleSaveAndPublish, control, groupArray, addGroupHandler,
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
            placeNumber={index + 1}
            id={groupItem.id}
            type={groupItem.type}
            key={groupItem.id}
            groupLength={groupArray.length}
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
