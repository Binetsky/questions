import type { NextPage } from 'next';
import React from 'react';
import { PageBodyFeature } from '@features/PageBodyFeature/PageBodyFeature';
import { StatusPageFeature } from '@features/StatusPageFeature';
import { StatusPageProvider } from '@context/StatusPageContext';
import { GetServerSideProps } from 'next';
import { SurveyItem } from '@models/survey';
import { API_URL, ApiEndpoints } from '@constants';
import { SurveyResult } from '@models/surveyResult';

/**
 * Страница детальной статистики по опросу
 * @constructor
 */
const Index: NextPage<{ survey: SurveyItem; results: SurveyResult[] }> = ({ survey, results }) => (
  <StatusPageProvider
    survey={survey}
    results={results}
  >
    <PageBodyFeature>
      <StatusPageFeature />
    </PageBodyFeature>
  </StatusPageProvider>
);

/**
 * Получение данных с бэка для заполнения опроса
 */
export const getServerSideProps: GetServerSideProps<{ survey: SurveyItem; results: SurveyResult[] }> = async ({
  params,
}) => {
  const surveyId = params?.id || '#';

  const survey = await fetch(`${API_URL}${ApiEndpoints.SurveyGet}/${surveyId}`).then((data) => data.json());
  const results: SurveyResult[] = await fetch(`${API_URL}${ApiEndpoints.ResultsAdmin}?filterField=surveyId&surveyId=${surveyId}`)
    .then((data) => data.json());

  if (survey === '404' || survey === '403') {
    return {
      notFound: true,
    };
  }

  return { props: { survey, results } };
};

export default Index;
