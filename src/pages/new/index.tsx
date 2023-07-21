import type { NextPage } from 'next';
import React from 'react';
import { PageBodyFeature } from '@features/PageBodyFeature/PageBodyFeature';
import { NewPageFeature } from '@features/NewPageFeature';
import Head from 'next/head';
import { NewSurveyProvider } from '@context/NewSurveyContext';

/**
 * Страница создания опроса
 * @returns NextPage
 */
const Index: NextPage = () => (
  <PageBodyFeature>
    <Head>
      <title>Создание опроса</title>
    </Head>
    <NewSurveyProvider>
      <NewPageFeature />
    </NewSurveyProvider>
  </PageBodyFeature>
);

export default Index;
