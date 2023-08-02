import React from 'react';
import { Header } from '@layout/Header';
import { Footer } from '@layout/Footer';
import Head from 'next/head';
import { useRouter } from 'next/router';
import type { PageBodyFeatureProps } from './types';

/**
 * Компонент сетки страницы, принимает в себя и отображает контент страниц в сетке сайта
 * @param props - PageBodyProps
 * @return React.ReactElement
 */
export const PageBodyFeature: React.FC<PageBodyFeatureProps> = (props) => {
  const { children } = props;
  const router = useRouter();

  const title = (() => {
    if (router.pathname.includes('new')) {
      return 'Создание опроса';
    }

    if (router.pathname.includes('edit')) {
      return 'Редактирование опроса';
    }

    if (router.pathname.includes('status')) {
      return 'Статистика по опросу';
    }

    if (router.pathname.includes('survey')) {
      return 'Пройдите опрос';
    }

    return 'Главная';
  })();
  const titleString = `${title} - РБК Опросы`;

  return (
    <>
      <div className="page">
        <Head>
          <title>{titleString}</title>
        </Head>
        <Header />
        {children}
        <Footer />
      </div>

      <div className="detect-device" />
    </>
  );
};
