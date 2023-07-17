import styles from '@features/SurveyPageFeature/components/SurveyBody/styles.module.scss';
import React from 'react';
import { CommonContent } from '@models/survey';

interface StartLayoutProps {
  changeLayoutHandler: () => void;
  content: CommonContent;
}

/**
 * Компонент стартового слайда опроса
 * @param changeLayoutHandler - () => void
 * @param content - CommonContent
 * @returns React.FC
 */
export const StartLayout: React.FC<StartLayoutProps> = ({ changeLayoutHandler, content }) => (
  <div className={styles['body-layout-start']}>
    <h1 className="headline-1 m-b-12">{content.title}</h1>
    {content.subtitle && (<h2 className="body-1 m-b-24">{content.subtitle}</h2>)}
    <button
      type="button"
      className="button lg primary"
      onClick={changeLayoutHandler}
    >
      Начать
    </button>
  </div>
);
