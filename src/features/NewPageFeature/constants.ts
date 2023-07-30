import { generateId } from '@utils/generateId';
import { BasicAnswerProps, BasicGroupProps, BasicQuestionProps } from '@types';

const groupId = generateId();
const questionId = generateId();

/**
 * Базовый объект группы вопросов
 */
export const initialGroup: BasicGroupProps = {
  id: groupId,
  type: 'group',
};/**
 * Базовый объект вопроса
 */
export const initialQuestion: BasicQuestionProps = {
  id: questionId,
  type: 'question',
  groupId,
};

export const initialAnswer: BasicAnswerProps = {
  id: generateId(),
  type: 'answer',
  groupId,
  questionId,
};
