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
 * @param props - StepLayoutProps
 */
export const StepLayout: React.FC<StepLayoutProps> = (props) => {
  const { currentStep, group } = props;
  const { title, id, subtitle = undefined } = group;
  const [questionsRecord, setQuestionsRecord] = React.useState({});
  const { changeLayoutHandler, groupLength, survey: { questions } } = React.useContext(SurveyPageContext);
  const filteredQuestions = questions.filter((questionItem) => questionItem.groupId === id);
  const isLastQuestion = currentStep === groupLength;
  // Todo: пока реагируем при валидации только на то что выделен чекбокс или радио, надо реагировать на заполнение инпута
  const isNextStepAvailable = Object.values(questionsRecord).filter((valueItem) => valueItem === true).length === filteredQuestions.length;

  return (
    <div className={`${styles['body-layout-step']} w-100`}>
      <div className="headline-3">
        {currentStep}
        .
        {' '}
        {title}
      </div>
      {subtitle && (<div className="body-4">{subtitle}</div>)}

      {filteredQuestions.length > 0 && filteredQuestions.map((questionItem, index) => (
        <Question
          question={questionItem}
          key={questionItem.id}
          currentQuestionNumber={index + 1}
          questionsRecord={questionsRecord}
          setQuestionsRecord={setQuestionsRecord}
        />
      ))}

      <button
        type="submit"
        className={`button lg primary m-t-24${isNextStepAvailable ? '' : ' disabled'}`}
        onClick={changeLayoutHandler}
        disabled={!isNextStepAvailable}
      >
        {isLastQuestion ? 'Завершить опрос' : 'Далее'}
      </button>
    </div>
  );
};
