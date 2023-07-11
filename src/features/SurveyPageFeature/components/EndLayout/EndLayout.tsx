import styles from '@features/SurveyPageFeature/components/SurveyBody/styles.module.scss';
import React from 'react';

interface StartLayoutProps {
  changeLayoutHandler?: () => void;
}

/**
 * Компонент стартового слайда опроса
 * @returns React.FC
 */
export const EndLayout: React.FC<StartLayoutProps> = () => (
  <div className={styles['body-layout-start']}>
    <h1 className="headline-1 m-b-12">Спасибо за прохождение опроса!</h1>
    <h2 className="body-1 m-b-24">Мы вам очень признательны</h2>
    <a
      href="https://www.rbc.ru/"
      className="button lg secondary"
    >
      Вернуться на сайт
    </a>
  </div>
);
