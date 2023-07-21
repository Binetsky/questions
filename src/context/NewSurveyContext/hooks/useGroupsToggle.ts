import { generateId } from '@utils/generateId';
import { CommonStatesAndDispatchers, UseGroupsToggleReturn } from '@context/NewSurveyContext/types';

/**
 * Хук управления блоками групп
 * @param params CommonStatesAndDispatchers
 * @returns UseGroupsToggleReturn
 */
export const useGroupsToggle = (params: CommonStatesAndDispatchers): UseGroupsToggleReturn => {
  const {
    groupArray, setGroupArray, questionArray, setQuestionArray, answersArray, setAnswersArray,
  } = params;
  // Хелпер добавления группы
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

  // Хелпер удаления группы
  const deleteGroupHandler = (idParam: number) => {
    setGroupArray(groupArray.filter((groupItem) => groupItem.id !== idParam));
    setQuestionArray(questionArray.filter((questionItem) => questionItem.groupId !== idParam));
  };

  return ({
    addGroupHandler,
    deleteGroupHandler,
  });
};
