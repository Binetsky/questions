import React from 'react';
import type { AppProps } from 'next/app';
import { wrapper } from '@redux/store';
import { AppContextProvider } from '@context';
import { useRouteChange } from '@hooks/useRouteChange';
import '../../public/news/index.scss';

const News = ({ Component, pageProps }: AppProps): JSX.Element => {
  useRouteChange();

  return (
    <AppContextProvider>
      <Component {...pageProps} />
    </AppContextProvider>
  );
};

export default wrapper.withRedux(News);
