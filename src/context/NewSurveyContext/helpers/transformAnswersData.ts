import { BasicAnswerProps, BasicGroupProps, BasicQuestionProps } from '@features/NewPageFeature/types';
import { FieldValues } from 'react-hook-form';

/**
 * Хелпер преобразование ответов в модель бэка для отправки на сервер
 * @param groupArray
 * @param questionArray
 * @param answersArray
 * @param data
 */
export const transformAnswersData = (
  {
    groupArray, questionArray, answersArray, data,
  }: {
    groupArray: BasicGroupProps[];
    questionArray: BasicQuestionProps[];
    answersArray: BasicAnswerProps[];
    data: FieldValues;
  },
) => groupArray.map((groupItem) => (questionArray.map((questionItem) => (
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
