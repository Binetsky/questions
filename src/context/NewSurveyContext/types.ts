import {
  BasicAnswerProps,
  BasicGroupProps,
  BasicQuestionProps,
  MoveComponentParams,
} from '@types';
import React from 'react';
import { FieldValues } from 'react-hook-form';

export interface CommonStatesAndDispatchers {
  groupArray: BasicGroupProps[];
  questionArray: BasicQuestionProps[];
  answersArray: BasicAnswerProps[];
  setGroupArray: React.Dispatch<React.SetStateAction<BasicGroupProps[]>>;
  setQuestionArray: React.Dispatch<React.SetStateAction<BasicQuestionProps[]>>;
  setAnswersArray: React.Dispatch<React.SetStateAction<BasicAnswerProps[]>>;
}

export interface UseGroupsToggleReturn {
  addGroupHandler: () => void;
  deleteGroupHandler: (idParam: number) => void;
}

export interface UseQuestionsToggleReturn {
  addQuestionHandler: (groupIdParam: number) => void;
  deleteQuestionHandler: (idParam: number) => void;
}

export interface UseAnswersToggleReturn {
  addAnswerHandler: ({ questionIdParam, groupIdParam }: { questionIdParam: number; groupIdParam: number }) => void;
  deleteAnswerHandler: (idParam: number) => void;
}

export interface UseMoveComponentsReturn {
  moveComponent: ({ fromIndex, toIndex, blockType }: MoveComponentParams) => void;
}

export interface UseHandleSaveParams {
  groupArray: BasicGroupProps[];
  questionArray: BasicQuestionProps[];
  answersArray: BasicAnswerProps[];
  publishTimestamp: number | null;
  surveyId?: string;
}

export interface UseHandleSaveReturn {
  handleSave: (data: FieldValues) => Promise<void>;
}
