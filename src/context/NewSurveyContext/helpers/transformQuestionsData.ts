import { BasicGroupProps, BasicQuestionProps } from '@features/NewPageFeature/types';
import { FieldValues } from 'react-hook-form';

/**
 * Хелпер преобразование вопросов в модель бэка для отправки на сервер
 * @param groupArray
 * @param questionArray
 * @param data
 */
export const transformQuestionsData = (
  {
    groupArray, questionArray, data,
  }: {
    groupArray: BasicGroupProps[];
    questionArray: BasicQuestionProps[];
    data: FieldValues;
  },
) => groupArray.map((groupItem) => (questionArray.map((questionItem) => {
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
