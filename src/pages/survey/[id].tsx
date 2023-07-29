import type { GetServerSideProps, NextPage } from 'next';
import React from 'react';
import { SurveyPageFeature } from '@features/SurveyPageFeature';
import { SurveyItem } from '@models/survey';
import { adminUserKey, API_URL, ApiEndpoints } from '@constants';
import { SurveyPageProvider } from '@context/SurveyPageContext';
import Head from 'next/head';

/**
 * Страница прохождения опроса
 * @returns React.ReactElement
 */
const Index: NextPage<{ repo: SurveyItem }> = (props) => {
  const { repo } = props;

  return (
    <SurveyPageProvider survey={repo}>
      <Head>
        <title>Прохождение опроса</title>
      </Head>
      <SurveyPageFeature />
    </SurveyPageProvider>
  );
};

/**
 * Получение данных с бэка для заполнения опроса
 */
export const getServerSideProps: GetServerSideProps<{
  repo: SurveyItem;
}> = async ({
  req: {
    url,
  },
}) => {
  const surveyId = url?.split('/')?.[2] || '#';

  const response = await fetch(`${API_URL}${ApiEndpoints.SurveyGet}/${surveyId}`, { headers: { userkey: adminUserKey } });
  const repo = await response.json();

  if (repo === '404' || repo === '403') {
    return {
      notFound: true,
    };
  }

  return { props: { repo } };
};

export default Index;
