import React from 'react';
import type { AppProps } from 'next/app';
import '../../public/news/index.scss';
import { ErrorBoundary } from '@features/ErrorBoundary';

/**
 * Приложение проведения опросов
 * @param Component
 * @param pageProps
 * @constructor
 */
const Alexandria = ({ Component, pageProps }: AppProps): JSX.Element => (
  <ErrorBoundary>
    <Component {...pageProps} />
  </ErrorBoundary>
);

export default Alexandria;
