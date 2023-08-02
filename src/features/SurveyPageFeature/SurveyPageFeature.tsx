import React from 'react';
import { Footer } from '@layout/Footer';
import { SurveyHeader } from '@features/SurveyPageFeature/components/SurveyHeader';
import { SurveyBody } from '@features/SurveyPageFeature/components/SurveyBody';
import { SurveyPageContext } from '@context/SurveyPageContext';
import { StopLayout } from '@features/SurveyPageFeature/components/StopLayout';

/**
 * Страница прохождения опроса через интерфейс приложения
 * @constructor
 */
export const SurveyPageFeature: React.FC = () => {
  const [isSurveyDone, setIsSurveyDone] = React.useState(false);
  const { groupLength, currentLayoutNumber, survey: { _id: surveyId } } = React.useContext(SurveyPageContext);
  const progress = groupLength / currentLayoutNumber;

  // Todo: При старте опроса отправляем запрос на бэк с метаданными для записи инфы что кто-то стартовал опрос

  React.useEffect(() => {
    if (document && surveyId) {
      setIsSurveyDone(document.cookie.includes(surveyId));
    }
  }, []);

  return (
    <div className="page">
      <SurveyHeader progress={progress} />
      {isSurveyDone ? <StopLayout /> : <SurveyBody />}
      <Footer />
    </div>
  );
};
