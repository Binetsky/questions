import React from 'react';
import styles from '@features/SurveyPageFeature/components/SurveyBody/styles.module.scss';
import { Answer } from '@features/SurveyPageFeature/components/Answer';

interface QuestionProps {
  currentQuestionNumber: number;
}

/**
 * Компонент вопроса
 * @param propsSample
 * @constructor
 */
export const Question: React.FC<QuestionProps> = ({ currentQuestionNumber }) => (
  <div className={`${styles['body-layout-step-question']} p-t-24`}>
    <div className="body-1">
      {currentQuestionNumber}
      . Какой-то вопрос
    </div>
    <div className="body-2 p-l-20">Пояснение к вопросу</div>

    <div className="p-t-12 p-l-20">
      <Answer />
    </div>
  </div>
);
