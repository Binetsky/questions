import React from 'react';
import { SurveyItem } from '@models/survey';
import { SurveyResult } from '@models/surveyResult';
import { sendChanges } from '@helpers/sendChanges';
import { ApiEndpoints } from '@constants';

interface StatusPageState {
  survey: SurveyItem;
  results: SurveyResult[];
  handleArchive: () => void;
  handleDelete: () => void;
  handlePublish: () => void;
  notification: string;
}

const statusPageInitialState: SurveyItem = {
  createTimestamp: 0,
  surveyStartCount: 0,
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
  handleArchive: () => null,
  handleDelete: () => null,
  handlePublish: () => null,
  notification: '',
};

export const StatusPageContext = React.createContext(contextInitialState);

/**
 * UserContextProvider - провайдер контекста пользователя
 */
export const StatusPageProvider: React.FC<{ survey: SurveyItem; results: SurveyResult[]; children?: React.ReactNode }> = (props) => {
  const { children, survey: initialSurvey, results } = props;
  const [survey, setSurvey] = React.useState<SurveyItem>(initialSurvey);
  const [notification, setNotification] = React.useState<string>('');

  const handleUpdateData = async ({ readySurvey, notificationParam }: { readySurvey: SurveyItem; notificationParam: string }) => {
    const savedSurvey = await sendChanges(`${ApiEndpoints.SurveysAdmin}`, readySurvey);

    if (savedSurvey) {
      setNotification(notificationParam);
    }

    if (!savedSurvey) {
      setNotification('Что-то пошло не так. Обновите страницу и повторите действие');
    }
  };

  const handleArchive = () => {
    const readySurvey = {
      ...survey,
      isArchived: true,
      isPublished: false,
      isDeleted: false,
    };

    setSurvey(readySurvey);

    handleUpdateData({ readySurvey, notificationParam: 'Опрос успешно снят с публикации!' });
  };

  const handleDelete = () => {
    const readySurvey = {
      ...survey,
      isArchived: false,
      isPublished: false,
      isDeleted: true,
    };

    setSurvey(readySurvey);

    handleUpdateData({ readySurvey, notificationParam: 'Опрос успешно снят с публикации!' });
  };

  const handlePublish = () => {
    if (!survey.isPublished) {
      const currentTimestamp = new Date().valueOf();
      const readySurvey = {
        ...survey,
        isArchived: false,
        isPublished: true,
        isDeleted: false,
        publishTimestamp: currentTimestamp,
        firstPublishTimestamp: survey.firstPublishTimestamp || currentTimestamp,
      };

      setSurvey(readySurvey);

      handleUpdateData({ readySurvey, notificationParam: 'Опрос успешно снят с публикации!' });
    }

    if (survey.isPublished) {
      const readySurvey = {
        ...survey,
        isArchived: false,
        isPublished: false,
        isDeleted: false,
        publishTimestamp: null,
      };

      setSurvey(readySurvey);

      handleUpdateData({ readySurvey, notificationParam: 'Опрос успешно снят с публикации!' });
    }
  };

  React.useEffect(() => {
    if (notification) {
      setTimeout(() => setNotification(''), 5000);
    }
  }, [notification]);

  return (
    <StatusPageContext.Provider value={{
      survey,
      results,
      handleArchive,
      handleDelete,
      handlePublish,
      notification,
    }}
    >
      {children}
    </StatusPageContext.Provider>
  );
};
