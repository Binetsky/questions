import styles from '@features/StatusPageFeature/styles.module.scss';
import React from 'react';
import { AllAnswersTableRow } from '@features/StatusPageFeature/components/AllAnswersTableRow';
import { SurveyResult } from '@models/surveyResult';

interface DetailedStatusCardProps {
  results: SurveyResult[];
}

/**
 * Компонент ответа на опрос
 * @returns
 */
export const DetailedStatusCard: React.FC<DetailedStatusCardProps> = (props) => {
  const { results } = props;

  return (
    <div className={`${styles['status-container']} m-b-24`}>
      <div className="m-b-8 flex stroke-b">
        <div className={`${styles['table-column-one']} p-12`}>
          Время
        </div>
        <div className={`${styles['table-column-two']} p-12`}>
          ID ответа
        </div>
        <div className={`${styles['table-column-three']} p-12`}>
          Источник
        </div>
        <div className={`${styles['table-column-four']} p-12`}>
          Результаты
        </div>
        <div className={`${styles['table-column-five']} p-12`}>
          Мета-информация
        </div>
      </div>
      {results.map((resultItem) => (
        <AllAnswersTableRow result={resultItem} />
      ))}
    </div>
  );
};
