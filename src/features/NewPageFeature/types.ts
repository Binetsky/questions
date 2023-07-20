import { Control, FieldValues } from 'react-hook-form';

export interface GroupProps extends BasicGroupProps {
  control: Control<FieldValues, unknown>;
  placeNumber: number;
  groupLength: number;
  moveComponent: (idParam: MoveComponentParams) => void;
  deleteGroupHandler: (idParam: number) => void;
  addQuestionHandler: (idParam: number) => void;
  deleteQuestionHandler: (idParam: number) => void;
  deleteAnswerHandler: (idParam: number) => void;
  addAnswerHandler: (params: { questionIdParam: number; groupIdParam: number }) => void;
  questionArray: BasicQuestionProps[];
  answersArray: BasicAnswerProps[];
}

export interface QuestionProps extends BasicQuestionProps {
  control: Control<FieldValues, unknown>;
  moveComponent: (idParam: MoveComponentParams) => void;
  deleteQuestionHandler: (idParam: number) => void;
  deleteAnswerHandler: (idParam: number) => void;
  addAnswerHandler: (params: { questionIdParam: number; groupIdParam: number }) => void;
  placeNumber: number;
  actualIndex: number;
  questionLength: number;
  answersArray: BasicAnswerProps[];
}

export interface AnswerProps extends BasicAnswerProps {
  control: Control<FieldValues, unknown>;
  placeNumber: number;
  actualIndex: number;
  answerLength: number;
  answersLength: number;
  moveComponent: (idParam: MoveComponentParams) => void;
  deleteAnswerHandler: (idParam: number) => void;
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
