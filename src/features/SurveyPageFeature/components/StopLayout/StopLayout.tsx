import styles from '@features/SurveyPageFeature/components/SurveyBody/styles.module.scss';
import React from 'react';

/**
 * Компонент слайда опроса для пользователей прошедших опрос ранее
 * @returns React.FC
 */
export const StopLayout: React.FC = () => (
  <div className={styles.body}>
    <div className={styles['body-container']}>
      <div className={styles['body-layout-end']}>
        <h1 className="headline-1 m-b-12">Вы уже прошли этот опрос</h1>
        <h2 className="body-1 m-b-24">Ждем вашего участия в других наших опросах</h2>
        <a
          href="https://www.rbc.ru/"
          className="button lg secondary"
        >
          Вернуться на сайт
        </a>
      </div>
    </div>
  </div>
);
