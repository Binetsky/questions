import React from 'react';
import { Footer } from '@layout/Footer';
import { SurveyHeader } from '@features/SurveyPageFeature/components/SurveyHeader';
import { SurveyBody } from '@features/SurveyPageFeature/components/SurveyBody';

/**
 * Страница прохождения опроса через интерфейс приложения
 * @constructor
 */
export const SurveyPageFeature: React.FC = () => {
  const [currentLayoutNumber, setCurrentLayoutNumber] = React.useState(0);
  const groupLength = 3;
  // Todo: При прохождении опроса навешиваем куку и если она есть, то при повторном старте опроса не даем его пройти

  const changeLayoutHandler = () => {
    setCurrentLayoutNumber(currentLayoutNumber + 1);
  };

  return (
    <div className="page">
      <SurveyHeader progress={groupLength / currentLayoutNumber} />
      <SurveyBody
        currentLayoutNumber={currentLayoutNumber}
        changeLayoutHandler={changeLayoutHandler}
      />
      <Footer />
    </div>
  );
};
