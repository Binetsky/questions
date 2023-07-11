import type { NextPage } from 'next';
import React from 'react';
import { SurveyPageFeature } from '@features/SurveyPageFeature';

/**
 * Страница прохождения опроса
 * @returns React.ReactElement
 */
const Index: NextPage = (): React.ReactElement => (
  <SurveyPageFeature />
);

export default Index;
