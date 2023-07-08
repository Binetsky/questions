import { Control, FieldValues } from 'react-hook-form';

export interface GroupProps extends BasicGroupProps {
  control: Control<FieldValues, unknown>;
  placeNumber: number;
  deleteGroupHandler: (idParam: string | number) => void;
  questionArray: BasicQuestionProps[];
}

export interface QuestionProps extends BasicQuestionProps {
  control: Control<FieldValues, unknown>;
  placeNumber: number;
}

export interface AnswerProps extends BasicAnswerProps {
  control: Control<FieldValues, unknown>;
  placeNumber: number;
}

export interface BasicGroupProps {
  type: 'group';
  id: number;
}

export interface BasicQuestionProps {
  type: 'question';
  groupId: number;
  answers: BasicAnswerProps[];
}

export interface BasicAnswerProps {
  type: 'answer';
  id: number;
}
