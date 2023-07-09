import { Control, FieldValues } from 'react-hook-form';

export interface GroupProps extends BasicGroupProps {
  control: Control<FieldValues, unknown>;
  placeNumber: number;
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
  deleteQuestionHandler: (idParam: number) => void;
  deleteAnswerHandler: (idParam: number) => void;
  addAnswerHandler: (params: { questionIdParam: number; groupIdParam: number }) => void;
  placeNumber: number;
  answersArray: BasicAnswerProps[];
}

export interface AnswerProps extends BasicAnswerProps {
  control: Control<FieldValues, unknown>;
  placeNumber: number;
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
