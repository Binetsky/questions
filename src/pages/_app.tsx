import React from 'react';
import type { AppProps } from 'next/app';
import { wrapper } from '@redux/store';
import '../../public/news/index.scss';
import { ErrorBoundary } from '@features/ErrorBoundary';

const Alexandria = ({ Component, pageProps }: AppProps): JSX.Element => (
  <ErrorBoundary>
    <Component {...pageProps} />
  </ErrorBoundary>
);

export default wrapper.withRedux(Alexandria);
