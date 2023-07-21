import styles from '@features/SurveyPageFeature/components/SurveyBody/styles.module.scss';
import React from 'react';
import { CommonContent } from '@models/survey';

interface StartLayoutProps {
  changeLayoutHandler?: () => void;
  content: CommonContent;
}

/**
 * Компонент стартового слайда опроса
 * @returns React.FC
 */
export const EndLayout: React.FC<StartLayoutProps> = ({ content }) => (
  <div className={styles['body-layout-end']}>
    <h1 className="headline-1 m-b-12">{content.title}</h1>
    {content.subtitle && (<h2 className="body-1 m-b-24">{content.subtitle}</h2>)}
    <a
      href="https://www.rbc.ru/"
      className="button lg secondary"
    >
      Вернуться на сайт
    </a>
  </div>
);
