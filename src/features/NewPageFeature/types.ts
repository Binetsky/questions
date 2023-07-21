export interface GroupProps extends BasicGroupProps {
  placeNumber: number;
  groupLength: number;
}

export interface QuestionProps extends BasicQuestionProps {
  placeNumber: number;
  actualIndex: number;
  questionLength: number;
}

export interface AnswerProps extends BasicAnswerProps {
  placeNumber: number;
  actualIndex: number;
  answerLength: number;
  answersLength: number;
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

export interface MoveComponentParams {
  fromIndex: number;
  toIndex: number;
  blockType: BlockType;
}

export interface MoveControlsProps {
  currentIndex: number;
  shouldLeftRender: boolean;
  shouldRightRender: boolean;
  moveComponent: (idParam: MoveComponentParams) => void;
  blockType: BlockType;
}

type BlockType = 'group' | 'question' | 'answer';
