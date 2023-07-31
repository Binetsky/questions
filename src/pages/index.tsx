import type { NextPage } from 'next';
import React from 'react';
import { PageBodyFeature } from '@features/PageBodyFeature/PageBodyFeature';
import { MainPageFeature } from '@features/MainPageFeature';

/**
 * Главная страница приложения
 * @returns NextPage
 */
const Index: NextPage = () => (
  <PageBodyFeature>
    <MainPageFeature />
  </PageBodyFeature>
);

export default Index;
