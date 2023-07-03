import React from 'react';
import { RaLink } from '@frontend/uikit-rbc/RaLink';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './styles.module.scss';

export const Header: React.FC = () => {
  const router = useRouter();
  const currentPage = router.pathname;

  return (
    <div className={styles.header}>
      <nav>
        <RaLink
          LibraryLink={Link}
          href="/new"
          classList="button primary sm m-r-16 m-y-8"
        >
          + Новый опрос
        </RaLink>
        <RaLink
          LibraryLink={Link}
          href="/"
          classList={`m-r-16${currentPage === '/' ? ' primary' : ''}`}
        >
          Список опросов
        </RaLink>
        <RaLink
          LibraryLink={Link}
          href="/archive"
          classList={`m-r-16${currentPage === '/archive' ? ' primary' : ''}`}
        >
          Архив
        </RaLink>
      </nav>

      <RaLink LibraryLink={Link} href="/" classList={`${styles['header-title']}m-r-16 m-y-12 headline-4-short`}>РБК | Опросы</RaLink>
    </div>
  );
};
