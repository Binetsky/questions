/**
 * Общий тип поля ID
 */
export type ID = string;

/**
 * Типы экшенов
 *
 * [key: string]: (data?: T) => { type: R, payload?: T | Promise<void> }
 */
export interface ActionsParams<T, R> {
  [key: string]: (data?: T) => void | Promise<R>;
}

export type BlockType = 'group' | 'question' | 'answer';

export interface MoveComponentParams {
  fromIndex: number;
  toIndex: number;
  blockType: BlockType;
}

export interface BasicGroupProps {
  type: 'group';
  id: number;
}

export interface BasicQuestionProps {
  id: number;
  type: 'question';
  groupId: number;
}

export interface BasicAnswerProps {
  type: 'answer';
  id: number;
  questionId: number;
  groupId: number;
}
