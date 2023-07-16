import React from 'react';
import { SurveyItem } from '@models/survey';

interface SurveyPageState {
  survey: SurveyItem;
  changeLayoutHandler: () => void;
  currentLayoutNumber: number;
  groupLength: number;
}

const surveyPageInitialState: SurveyItem = {
  createTimestamp: 0,
  author: 'unknown',
  firstPublishTimestamp: null,
  publishTimestamp: null,
  intro: { title: 'unknown', description: 'unknown', image: null },
  outro: { title: 'unknown', description: 'unknown', image: null },
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

  const changeLayoutHandler = () => {
    setCurrentLayoutNumber(currentLayoutNumber + 1);
  };
  // Todo: тут будут обработчики для страницы прохождения опроса

  return (
    <SurveyPageContext.Provider value={{
      survey, changeLayoutHandler, currentLayoutNumber, groupLength,
    }}
    >
      {children}
    </SurveyPageContext.Provider>
  );
};
