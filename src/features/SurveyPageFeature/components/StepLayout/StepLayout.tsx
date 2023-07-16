import React from 'react';
import styles from '@features/SurveyPageFeature/components/SurveyBody/styles.module.scss';
import { Question } from '@features/SurveyPageFeature/components/Question';
import { SurveyPageContext } from '@context/SurveyPageContext';
import { GroupItem } from '@models/survey';

interface StepLayoutProps {
  group: GroupItem;
  currentStep: number;
  groupLength: number;
  changeLayoutHandler: () => void;
}

/**
 * Компонент шага опроса
 * @param currentStep - number
 * @param group - GroupItem
 */
export const StepLayout: React.FC<StepLayoutProps> = ({ currentStep, group }) => {
  const { title, id, description = undefined } = group;
  const { changeLayoutHandler, groupLength, survey: { questions } } = React.useContext(SurveyPageContext);
  const filteredQuestions = questions.filter((questionItem) => questionItem.groupId === id);

  return (
    <div className={`${styles['body-layout-step']} w-100`}>
      <div className="headline-3">
        {currentStep}
        .
        {' '}
        {title}
      </div>
      {description && (<div className="body-4">{description}</div>)}

      {filteredQuestions.length > 0 && filteredQuestions.map((questionItem, index) => (
        <Question
          question={questionItem}
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
