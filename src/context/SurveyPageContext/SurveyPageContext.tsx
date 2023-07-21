import React from 'react';
import { SurveyItem } from '@models/survey';
import {
  Control, FieldValues, useForm, UseFormHandleSubmit,
} from 'react-hook-form';
import { getOs } from '@utils/getOs';
import { getBrowser } from '@utils/getBrowser';
import { SurveyResult } from '@models/surveyResult';
import { sendChanges } from '@helpers/sendChanges';
import { ApiEndpoints } from '@constants';

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
  isDeleted: false,
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
  const { groups, _id: surveyId } = survey;
  const [currentLayoutNumber, setCurrentLayoutNumber] = React.useState(0);
  const groupLength = groups?.length || 1;
  const { control, handleSubmit } = useForm({});

  const handleSave = async (values: unknown) => {
    const readyResult: SurveyResult = {
      surveyId: surveyId || 'lost',
      clientKey: 123,
      timestamp: new Date().valueOf(),
      meta: {
        cookies: document.cookie,
        browser: getBrowser(),
        os: getOs(),
      },
      results: values as Record<number | string, number[]>[],
    };

    const savedResult = await sendChanges(`${ApiEndpoints.ResultPost}`, readyResult);

    console.log(1, savedResult);
  };

  const changeLayoutHandler = () => {
    setCurrentLayoutNumber(currentLayoutNumber + 1);

    if (currentLayoutNumber === groupLength) {
      handleSubmit(handleSave)();
    }
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
