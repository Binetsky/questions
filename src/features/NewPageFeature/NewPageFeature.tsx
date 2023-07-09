import React from 'react';
import { ComponentWithChildren } from '@frontend/uikit-rbc/types';
import { IntroAndOutro } from '@features/NewPageFeature/components/IntroAndOutro/IntroAndOutro';
import { FieldValues, useForm } from 'react-hook-form';
import { ControlPanel } from '@features/NewPageFeature/components/ControlPanel';
import { Group } from '@features/NewPageFeature/components/Group';
import { initialAnswer, initialGroup, initialQuestion } from '@features/NewPageFeature/constants';
import { BasicAnswerProps, BasicGroupProps, BasicQuestionProps } from '@features/NewPageFeature/types';
import { generateId } from '@utils/generateId';
import styles from './styles.module.scss';

/**
 * Компонент страницы создания опроса
 * @returns React.FC
 */
export const NewPageFeature:React.FC<ComponentWithChildren> = () => {
  const [groupArray, setGroupArray] = React.useState<BasicGroupProps[]>([]);
  const [questionArray, setQuestionArray] = React.useState<BasicQuestionProps[]>([]);
  const [answersArray, setAnswersArray] = React.useState<BasicAnswerProps[]>([]);
  const { control, handleSubmit } = useForm({});

  const handleSave = (data: FieldValues) => {
    console.log('handleSave', data);
  };

  const handleSaveAndPublish = () => {
    // Запускается до handleSave, ставим флаг isPublished в true
    console.log('handleSaveAndPublish');
  };

  const addGroupHandler = () => {
    const groupId = generateId();
    const questionId = generateId();

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
        id: questionId,
        type: 'question',
        groupId,
      },
    ]);

    setAnswersArray([
      ...answersArray,
      {
        id: generateId(),
        questionId,
        groupId,
        type: 'answer',
      },
    ]);
  };

  const deleteGroupHandler = (idParam: number) => {
    setGroupArray(groupArray.filter((groupItem) => groupItem.id !== idParam));
    setQuestionArray(questionArray.filter((questionItem) => questionItem.groupId !== idParam));
  };

  const addQuestionHandler = (groupIdParam: number) => {
    const questionId = generateId();

    setQuestionArray([
      ...questionArray,
      {
        id: questionId,
        groupId: groupIdParam,
        type: 'question',
      },
    ]);

    setAnswersArray([
      ...answersArray,
      {
        id: generateId(),
        questionId,
        groupId: groupIdParam,
        type: 'answer',
      },
    ]);
  };

  const deleteQuestionHandler = (idParam: number) => {
    setQuestionArray(questionArray.filter((questionItem) => questionItem.id !== idParam));
    setAnswersArray(answersArray.filter((answerItem) => answerItem.questionId !== idParam));
  };

  const addAnswerHandler = ({ questionIdParam, groupIdParam }: { questionIdParam: number; groupIdParam: number }) => {
    setAnswersArray([
      ...answersArray,
      {
        id: generateId(),
        questionId: questionIdParam,
        groupId: groupIdParam,
        type: 'answer',
      },
    ]);
  };

  const deleteAnswerHandler = (idParam: number) => {
    setAnswersArray(answersArray.filter((answerItem) => answerItem.id !== idParam));
  };

  React.useEffect(() => {
    setGroupArray([initialGroup]);
    setQuestionArray([initialQuestion]);
    setAnswersArray([initialAnswer]);
  }, []);

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
        />

        <IntroAndOutro
          control={control}
          id={1}
          header="Заключение"
          titlePlaceholder={'Например, "Спасибо за прохождение нашего замечательного опроса"'}
          subtitlePlaceholder="Необязательный подзаголовок для уточняющей информации респонденту"
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
