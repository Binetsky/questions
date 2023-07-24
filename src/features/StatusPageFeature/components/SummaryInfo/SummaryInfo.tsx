import React, { useContext } from 'react';
import { StatusPageContext } from '@context/StatusPageContext';
import { formatDate } from '@utils/formatDate';

/**
 * Компонент блока общей информации об опросе
 * @constructor
 */
export const SummaryInfo = () => {
  const { survey, results } = useContext(StatusPageContext);
  const surveyFinishedTimes = results.length;
  const surveyPublishedDate = survey?.publishTimestamp ? `${formatDate(survey.publishTimestamp / 1000, 'DD month YYYY')}  г.` : '-';
  const surveyFirstPublishedDate = survey?.firstPublishTimestamp ? `${formatDate(survey.firstPublishTimestamp / 1000, 'DD month YYYY')}  г.` : '-';

  return (
    <div className="p-b-16">
      <div className="p-b-8">
        ID опроса:
        {' '}
        {survey._id}
      </div>
      <div className="p-b-8">
        Опрос пройден, раз:
        {' '}
        {surveyFinishedTimes}
      </div>
      <div className="p-b-8">
        Опрос начат, раз:
        {' '}
        {surveyFinishedTimes}
      </div>
      <div className="p-b-8">
        Дата публикации:
        {' '}
        {surveyPublishedDate}
      </div>
      <div className="p-b-8">
        Дата первой публикации:
        {' '}
        {surveyFirstPublishedDate}
      </div>
      <div className="p-b-8">
        Автор:
        {' '}
        {survey.author}
      </div>
    </div>
  );
};
