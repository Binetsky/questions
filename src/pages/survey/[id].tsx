import type { GetServerSideProps, NextPage } from 'next';
import React from 'react';
import { SurveyPageFeature } from '@features/SurveyPageFeature';
import { SurveyItem } from '@models/survey';
import { API_URL } from '@constants';
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

  const response = await fetch(`${API_URL}/api/survey/${surveyId}`);
  const repo = await response.json();

  if (repo === '404' || repo === '403') {
    return {
      notFound: true,
    };
  }

  return { props: { repo } };
};

export default Index;
