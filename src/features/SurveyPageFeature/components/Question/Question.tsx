import React from 'react';
import styles from '@features/SurveyPageFeature/components/SurveyBody/styles.module.scss';
import { Answer } from '@features/SurveyPageFeature/components/Answer';
import { QuestionItem } from '@models/survey';
import { SurveyPageContext } from '@context/SurveyPageContext';

interface QuestionProps {
  currentQuestionNumber: number;
  question: QuestionItem;
}

/**
 * Компонент вопроса
 * @param propsSample
 * @constructor
 */
export const Question: React.FC<QuestionProps> = ({ currentQuestionNumber, question }) => {
  const { survey: { answers } } = React.useContext(SurveyPageContext);
  const filteredAnswers = answers.filter((answerItem) => answerItem.questionId === question.id);

  return (
    <div className={`${styles['body-layout-step-question']} p-t-24`}>
      <div className="body-1">
        {currentQuestionNumber}
        .
        {' '}
        {question.title}
      </div>
      {question.description && <div className="body-2 p-l-20">{question.description}</div>}

      <div className="p-t-12 p-l-20">
        {filteredAnswers.map((answerItem, index) => (
          <Answer
            answer={answerItem}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};
