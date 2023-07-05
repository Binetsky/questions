import type { NextPage } from 'next';
import React from 'react';
import { PageBodyFeature } from '@features/PageBodyFeature/PageBodyFeature';
import { StatusPageFeature } from '@features/StatusPageFeature';

const Index: NextPage = (): React.ReactElement => (
  <PageBodyFeature>
    <StatusPageFeature />
  </PageBodyFeature>
);

export default Index;
