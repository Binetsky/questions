import { generateId } from '@utils/generateId';
import { CommonStatesAndDispatchers, UseQuestionsToggleReturn } from '@context/NewSurveyContext/types';

/**
 * Хук управления блоками вопросов
 * @param params CommonStatesAndDispatchers
 * @returns UseQuestionsToggleReturn
 */
export const useQuestionsToggle = (params: Omit<CommonStatesAndDispatchers, 'groupArray' | 'setGroupArray'>): UseQuestionsToggleReturn => {
  const {
    questionArray, setQuestionArray, answersArray, setAnswersArray,
  } = params;
  // Хелпер добавления опроса
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

  // Хелпер удаления вопроса
  const deleteQuestionHandler = (idParam: number) => {
    setQuestionArray(questionArray.filter((questionItem) => questionItem.id !== idParam));
    setAnswersArray(answersArray.filter((answerItem) => answerItem.questionId !== idParam));
  };

  return ({
    addQuestionHandler,
    deleteQuestionHandler,
  });
};
