import React from 'react';
import { Footer } from '@layout/Footer';
import { SurveyHeader } from '@features/SurveyPageFeature/components/SurveyHeader';
import { SurveyBody } from '@features/SurveyPageFeature/components/SurveyBody';
import { SurveyPageContext } from '@context/SurveyPageContext';

/**
 * Страница прохождения опроса через интерфейс приложения
 * @constructor
 */
export const SurveyPageFeature: React.FC = () => {
  const { groupLength, currentLayoutNumber } = React.useContext(SurveyPageContext);
  const progress = groupLength / currentLayoutNumber;

  // Todo: При старте опроса отправляем запрос на бэк с метаданными для записи инфы что кто-то стартовал опрос
  // Todo: При прохождении опроса навешиваем куку и если она есть, то при повторном старте опроса не даем его пройти

  return (
    <div className="page">
      <SurveyHeader progress={progress} />
      <SurveyBody />
      <Footer />
    </div>
  );
};
