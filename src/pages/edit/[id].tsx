import type { NextPage } from 'next';
import React from 'react';
import { PageBodyFeature } from '@features/PageBodyFeature/PageBodyFeature';
import { GetServerSideProps } from 'next';
import { SurveyItem } from '@models/survey';
import { adminUserKey, API_URL, ApiEndpoints } from '@constants';
import { EditSurveyProvider } from '@context/EditSurveyContext';
import { EditPageFeature } from '@features/EditPageFeature';

/**
 * Страница редактирования опроса
 * @constructor
 */
const Index: NextPage<{ survey: SurveyItem }> = ({ survey }) => (
  <EditSurveyProvider survey={survey}>
    <PageBodyFeature>
      <EditPageFeature />
    </PageBodyFeature>
  </EditSurveyProvider>
);

/**
 * Получение данных с бэка для заполнения опроса
 */
export const getServerSideProps: GetServerSideProps<{ survey: SurveyItem }> = async ({ params }) => {
  const surveyId = params?.id || '#';

  const survey = await fetch(`${API_URL}${ApiEndpoints.SurveyGet}/${surveyId}`, { headers: { userkey: adminUserKey } }).then((data) => data.json());

  if (survey === '404' || survey === '403') {
    return {
      notFound: true,
    };
  }

  return { props: { survey } };
};

export default Index;
