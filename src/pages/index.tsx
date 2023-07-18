import type { NextPage } from 'next';
import React from 'react';
import { PageBodyFeature } from '@features/PageBodyFeature/PageBodyFeature';
import { MainPageFeature } from '@features/MainPageFeature';
import Head from 'next/head';

/**
 * Главная страница приложения
 * @returns NextPage
 */
const Index: NextPage = () => (
  <PageBodyFeature>
    <Head>
      <title>РБК Опросы - Главная</title>
    </Head>
    <MainPageFeature />
  </PageBodyFeature>
);

export default Index;
