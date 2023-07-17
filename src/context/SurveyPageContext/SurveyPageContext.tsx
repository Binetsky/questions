import React from 'react';
import { SurveyItem } from '@models/survey';
import {
  Control, FieldValues, useForm, UseFormHandleSubmit,
} from 'react-hook-form';

interface SurveyPageState {
  survey: SurveyItem;
  changeLayoutHandler: () => void;
  handleSave: (values: unknown) => void;
  currentLayoutNumber: number;
  groupLength: number;
  handleSubmit?: UseFormHandleSubmit<FieldValues, undefined>;
  control?: Control<FieldValues, unknown>;
}

const surveyPageInitialState: SurveyItem = {
  createTimestamp: 0,
  author: 'unknown',
  firstPublishTimestamp: null,
  publishTimestamp: null,
  intro: { title: 'unknown', subtitle: 'unknown', image: null },
  outro: { title: 'unknown', subtitle: 'unknown', image: null },
  questions: [],
  answers: [],
  groups: [],
  isArchived: false,
  isPublished: false,
};

/**
 * UserContextState - контекст текущего пользователя
 */
const contextInitialState: SurveyPageState = {
  survey: surveyPageInitialState,
  changeLayoutHandler: () => null,
  handleSave: () => null,
  currentLayoutNumber: 0,
  groupLength: 1,
};

export const SurveyPageContext = React.createContext(contextInitialState);

/**
 * UserContextProvider - провайдер контекста пользователя
 */
export const SurveyPageProvider: React.FC<{ survey: SurveyItem; children?: React.ReactNode }> = ({ children, survey }) => {
  const { groups } = survey;
  const [currentLayoutNumber, setCurrentLayoutNumber] = React.useState(0);
  const groupLength = groups?.length || 1;
  const { control, handleSubmit } = useForm({});

  const handleSave = (values: unknown) => {
    console.log(1, values);
  };

  const changeLayoutHandler = () => {
    setCurrentLayoutNumber(currentLayoutNumber + 1);
  };
  // Todo: тут будут обработчики для страницы прохождения опроса

  return (
    <SurveyPageContext.Provider value={{
      survey, changeLayoutHandler, currentLayoutNumber, groupLength, control, handleSubmit, handleSave,
    }}
    >
      {children}
    </SurveyPageContext.Provider>
  );
};
