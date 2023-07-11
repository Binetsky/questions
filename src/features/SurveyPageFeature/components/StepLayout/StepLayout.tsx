import React from 'react';
import styles from '@features/SurveyPageFeature/components/SurveyBody/styles.module.scss';
import { Question } from '@features/SurveyPageFeature/components/Question';

interface StepLayoutProps {
  currentStep: number;
  groupLength: number;
  changeLayoutHandler: () => void;
}

/**
 * Компонент шага опроса
 * @param changeLayoutHandler - () => void
 * @param currentStep - number
 * @param groupLength - number
 * @constructor
 */
export const StepLayout: React.FC<StepLayoutProps> = ({ changeLayoutHandler, currentStep, groupLength }) => {
  const questionsLength = 3;
  const questions = [...Array(questionsLength)];

  return (
    <div className={`${styles['body-layout-step']} w-100`}>
      <div className="headline-3">
        {currentStep}
        . Название группы вопросов
      </div>
      <div className="body-4">Пояснение к группе вопросов</div>

      {questions.map((questionItem, index) => (
        <Question
          key={index}
          currentQuestionNumber={index + 1}
        />
      ))}

      <button
        type="button"
        className="button lg primary m-t-24"
        onClick={changeLayoutHandler}
      >
        {currentStep === groupLength ? 'Завершить опрос' : 'Далее'}
      </button>
    </div>
  );
};
