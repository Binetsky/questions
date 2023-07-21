import { generateId } from '@utils/generateId';
import { CommonStatesAndDispatchers, UseAnswersToggleReturn } from '@context/NewSurveyContext/types';

/**
 * Хук управления блоками ответов
 * @param params CommonStatesAndDispatchers
 * @returns UseAnswersToggleReturn
 */
export const useAnswersToggle = (
  params: Omit<CommonStatesAndDispatchers, 'groupArray' | 'setGroupArray' | 'questionArray' | 'setQuestionArray'>,
): UseAnswersToggleReturn => {
  const { answersArray, setAnswersArray } = params;

  // Хелпер добавления ответа
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

  // Хелпер удаления ответа
  const deleteAnswerHandler = (idParam: number) => {
    setAnswersArray(answersArray.filter((answerItem) => answerItem.id !== idParam));
  };

  return ({
    addAnswerHandler,
    deleteAnswerHandler,
  });
};
