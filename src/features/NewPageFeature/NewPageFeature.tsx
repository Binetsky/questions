import React from 'react';
import { ComponentWithChildren } from '@frontend/uikit-rbc/types';
import { IntroAndOutro } from '@features/NewPageFeature/components/IntroAndOutro/IntroAndOutro';
import { FieldValues, useForm } from 'react-hook-form';
import { ControlPanel } from '@features/NewPageFeature/components/ControlPanel';
import { Group } from '@features/NewPageFeature/components/Group';
import { initialAnswer, initialGroup, initialQuestion } from '@features/NewPageFeature/constants';
import { BasicAnswerProps, BasicGroupProps, BasicQuestionProps } from '@features/NewPageFeature/types';
import { generateId } from '@utils/generateId';
import { SurveyItem } from '@models/survey';
import { sendChanges } from '@helpers/sendChanges';
import { ApiEndpoints } from '@constants';
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

  const handleSave = async (data: FieldValues) => {
    const intro = {
      title: data['intro-title'],
      subtitle: data['intro-subtitle'] || null,
    };

    const outro = {
      title: data['outro-title'],
      subtitle: data['outro-subtitle'] || null,
    };

    const groups = groupArray.map((groupItem) => ({
      id: groupItem.id,
      title: data[`group-title-${groupItem.id}`],
      description: data[`group-subtitle-${groupItem.id}`] || null,
      image: data[`group-image-${groupItem.id}`] || null,
    }));

    const questions = groupArray.map((groupItem) => (questionArray.map((questionItem) => {
      if (!data[`question-title-${groupItem.id}-${questionItem.id}`]) {
        return null;
      }

      return ({
        id: questionItem.id,
        groupId: groupItem.id,
        minAnswers: Number(data[`question-min-answers-${groupItem.id}-${questionItem.id}`]),
        maxAnswers: Number(data[`question-max-answers-${groupItem.id}-${questionItem.id}`]),
        title: data[`question-title-${groupItem.id}-${questionItem.id}`],
        description: data[`question-subtitle-${groupItem.id}-${questionItem.id}`] || null,
        image: data[`question-image-${groupItem.id}-${questionItem.id}`] || null,
      });
    }))).flat().filter((questionItem) => !!questionItem);

    const answers = groupArray.map((groupItem) => (questionArray.map((questionItem) => (
      answersArray.map((answerItem) => {
        const isWithoutTitle = !data[`answer-${groupItem.id}-${questionItem.id}-${answerItem.id}`];
        const isClosedQuestion = data[`answer-type-${groupItem.id}-${questionItem.id}-${answerItem.id}`]?.value !== 'open';

        if (isWithoutTitle && isClosedQuestion) {
          return null;
        }

        return ({
          id: answerItem.id,
          questionId: questionItem.id,
          groupId: groupItem.id,
          answerType: data[`answer-type-${groupItem.id}-${questionItem.id}-${answerItem.id}`]?.value,
          title: data[`answer-${groupItem.id}-${questionItem.id}-${answerItem.id}`],
          image: data[`answer-image-${groupItem.id}-${questionItem.id}-${answerItem.id}`] || null,
        });
      }))))).flat(2).filter((answerItem) => answerItem);

    const readySurvey = {
      createTimestamp: new Date().valueOf(),
      author: 'Константинопольский Константин Константинович',
      firstPublishTimestamp: null,
      publishTimestamp: null,
      intro,
      outro,
      questions,
      answers,
      groups,
      isArchived: false,
      isPublished: false,
    } as unknown as SurveyItem;

    const savedSurvey = await sendChanges(`${ApiEndpoints.SurveysAdmin}`, readySurvey);

    // Todo: в случае успеха сделать редирект на страницу просмотра статистики по созданному опросу
    console.log(savedSurvey);
  };

  const handleSaveAndPublish = () => {
    // Todo: Запускается до handleSave, ставим флаг isPublished в true
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
