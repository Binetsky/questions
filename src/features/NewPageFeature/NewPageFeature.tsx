import React from 'react';
import { ComponentWithChildren } from '@frontend/uikit-rbc/types';
import { IntroAndOutro } from '@features/NewPageFeature/components/IntroAndOutro/IntroAndOutro';
import { FieldValues, useForm } from 'react-hook-form';
import { ControlPanel } from '@features/NewPageFeature/components/ControlPanel';
import { Group } from '@features/NewPageFeature/components/Group';
import { initialGroup, initialQuestion } from '@features/NewPageFeature/constants';
import { BasicGroupProps, BasicQuestionProps } from '@features/NewPageFeature/types';
import { generateId } from '@utils/generateId';
import styles from './styles.module.scss';

/**
 * Компонент страницы создания опроса
 * @returns React.FC
 */
export const NewPageFeature:React.FC<ComponentWithChildren> = () => {
  const [groupArray, setGroupArray] = React.useState<BasicGroupProps[]>([]);
  const [questionArray, setQuestionArray] = React.useState<BasicQuestionProps[]>([]);
  const { control, handleSubmit } = useForm({});

  const handleSave = (data: FieldValues) => {
    console.log('handleSave', data);
  };

  const handleSaveAndPublish = () => {
    // Запускается до handleSave, ставим флаг isPublished в true
    console.log('handleSaveAndPublish');
  };

  React.useEffect(() => {
    setGroupArray([initialGroup]);
    setQuestionArray([initialQuestion]);
  }, []);

  const addGroupHandler = () => {
    const groupId = generateId();

    setGroupArray([
      ...groupArray,
      {
        type: 'group',
        id: groupId,
      },
    ]);

    setQuestionArray([
      ...questionArray,
      {
        type: 'question',
        groupId,
        answers: [{
          type: 'answer',
          id: generateId(),
        }],
      },
    ]);
  };

  const deleteGroupHandler = (idParam: string | number) => {
    setGroupArray(groupArray.filter((groupItem) => groupItem.id !== idParam));
    setQuestionArray(questionArray.filter((questionItem) => questionItem.groupId !== idParam));
  };

  return (
    <div className={styles.main}>
      <form
        className={styles['main-content']}
        onSubmit={handleSubmit(handleSave)}
      >
        <ControlPanel handleSaveAndPublish={handleSaveAndPublish} />

        <IntroAndOutro
          control={control}
          id="intro"
          header="Вступление"
          titlePlaceholder={'Например, "Пройдите наш замечательный опрос"'}
          subtitlePlaceholder="Необязательный подзаголовок для уточняющей информации респонденту"
        />

        <IntroAndOutro
          control={control}
          id="outro"
          header="Заключение"
          titlePlaceholder={'Например, "Спасибо за прохождение нашего замечательного опроса"'}
          subtitlePlaceholder="Необязательный подзаголовок для уточняющей информации респонденту"
        />

        {groupArray.map((groupItem, index) => (
          <Group
            control={control}
            placeNumber={index + 1}
            questionArray={questionArray}
            id={groupItem.id}
            type={groupItem.type}
            deleteGroupHandler={deleteGroupHandler}
            key={groupItem.id}
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
