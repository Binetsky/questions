import React from 'react';
import { SurveyItem } from '@models/survey';
import { SurveyResult } from '@models/surveyResult';

interface StatusPageState {
  survey: SurveyItem;
  results: SurveyResult[];
}

const statusPageInitialState: SurveyItem = {
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
  isDeleted: false,
};

/**
 * UserContextState - контекст текущего пользователя
 */
const contextInitialState: StatusPageState = {
  survey: statusPageInitialState,
  results: [],
};

export const StatusPageContext = React.createContext(contextInitialState);

/**
 * UserContextProvider - провайдер контекста пользователя
 */
export const StatusPageProvider: React.FC<{ survey: SurveyItem; results: SurveyResult[]; children?: React.ReactNode }> = (props) => {
  const { children, survey, results } = props;

  return (
    <StatusPageContext.Provider value={{
      survey,
      results,
    }}
    >
      {children}
    </StatusPageContext.Provider>
  );
};
