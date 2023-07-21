import { CommonStatesAndDispatchers, UseMoveComponentsReturn } from '@context/NewSurveyContext/types';
import { MoveComponentParams } from '@features/NewPageFeature/types';

/**
 * Хук управления блоками групп
 * @param params CommonStatesAndDispatchers
 * @returns UseGroupsToggleReturn
 */
export const useMoveComponents = (params: CommonStatesAndDispatchers): UseMoveComponentsReturn => {
  const {
    groupArray, setGroupArray, questionArray, setQuestionArray, answersArray, setAnswersArray,
  } = params;

  // Хелпер перемещения местами групп, вопросов и ответов
  const moveComponent = ({ fromIndex, toIndex, blockType = 'group' }: MoveComponentParams) => {
    if (blockType === 'group') {
      const newComponents = [...groupArray];
      const [removedComponent] = newComponents.splice(fromIndex, 1);

      newComponents.splice(toIndex, 0, removedComponent);
      setGroupArray(newComponents);
      return;
    }

    if (blockType === 'question') {
      const newComponents = [...questionArray];
      const [removedComponent] = newComponents.splice(fromIndex, 1);

      newComponents.splice(toIndex, 0, removedComponent);
      setQuestionArray(newComponents);
      return;
    }

    if (blockType === 'answer') {
      const newComponents = [...answersArray];
      const [removedComponent] = newComponents.splice(fromIndex, 1);

      newComponents.splice(toIndex, 0, removedComponent);
      setAnswersArray(newComponents);
    }
  };

  return ({ moveComponent });
};
