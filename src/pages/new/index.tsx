import type { NextPage } from 'next';
import React from 'react';
import { PageBodyFeature } from '@features/PageBodyFeature/PageBodyFeature';
import { NewPageFeature } from '@features/NewPageFeature';
import { NewSurveyProvider } from '@context/NewSurveyContext';

/**
 * Страница создания опроса
 * @returns NextPage
 */
const Index: NextPage = () => (
  <PageBodyFeature>
    <NewSurveyProvider>
      <NewPageFeature />
    </NewSurveyProvider>
  </PageBodyFeature>
);

export default Index;
