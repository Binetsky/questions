import type { NextPage } from 'next';
import React from 'react';
import dynamic from 'next/dynamic';
import { ComponentWithChildren } from '@types';
import { PageBodyFeature } from '@features/PageBodyFeature/PageBodyFeature';

const MainPageFeature = dynamic<ComponentWithChildren>(() => import('@features/MainPageFeature/MainPageFeature').then((mod) => mod.MainPageFeature));

const Index: NextPage = (): React.ReactElement => (
  <PageBodyFeature>
    <MainPageFeature />
  </PageBodyFeature>
);

export default Index;
