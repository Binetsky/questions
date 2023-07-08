import { generateId } from '@utils/generateId';
import { BasicGroupProps, BasicQuestionProps } from '@features/NewPageFeature/types';

const groupId = generateId();

/**
 * Базовый объект группы вопросов
 */
export const initialGroup: BasicGroupProps = {
  type: 'group',
  id: groupId,
};/**
 * Базовый объект вопроса
 */
export const initialQuestion: BasicQuestionProps = {
  type: 'question',
  groupId,
  answers: [{
    type: 'answer',
    id: generateId(),
  }],
};
