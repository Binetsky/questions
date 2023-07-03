import type { NextPage } from 'next';
import React from 'react';
import { PageBodyFeature } from '@features/PageBodyFeature/PageBodyFeature';
import { MainPageFeature } from '@features/MainPageFeature';

const Index: NextPage = (): React.ReactElement => (
  <PageBodyFeature>
    <MainPageFeature />
  </PageBodyFeature>
);

export default Index;
