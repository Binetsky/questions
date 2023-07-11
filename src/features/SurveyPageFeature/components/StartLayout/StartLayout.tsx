import styles from '@features/SurveyPageFeature/components/SurveyBody/styles.module.scss';
import React from 'react';

interface StartLayoutProps {
  changeLayoutHandler: () => void;
}

/**
 * Компонент стартового слайда опроса
 * @param changeLayoutHandler
 * @returns React.FC
 */
export const StartLayout: React.FC<StartLayoutProps> = ({ changeLayoutHandler }) => (
  <div className={styles['body-layout-start']}>
    <h1 className="headline-1 m-b-12">Пройдите наш замечательный опрос!</h1>
    <h2 className="body-1 m-b-24">Мы вам будем очень признательны</h2>
    <button
      type="button"
      className="button lg primary"
      onClick={changeLayoutHandler}
    >
      Начать
    </button>
  </div>
);
