import type { NextPage } from 'next';
import React from 'react';
import { PageBodyFeature } from '@features/PageBodyFeature/PageBodyFeature';
import { NewPageFeature } from '@features/NewPageFeature';

const Index: NextPage = (): React.ReactElement => (
  <PageBodyFeature>
    <NewPageFeature />
  </PageBodyFeature>
);

export default Index;
