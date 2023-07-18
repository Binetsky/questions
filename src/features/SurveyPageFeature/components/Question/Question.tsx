import React from 'react';
import styles from '@features/SurveyPageFeature/components/SurveyBody/styles.module.scss';
import { Answer } from '@features/SurveyPageFeature/components/Answer';
import { QuestionItem } from '@models/survey';
import { SurveyPageContext } from '@context/SurveyPageContext';
import { Controller } from 'react-hook-form';

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
  const { survey: { answers }, control } = React.useContext(SurveyPageContext);
  const [activeAnswer, setActiveAnswer] = React.useState<number[]>([]);
  const filteredAnswers = answers.filter((answerItem) => answerItem.questionId === question.id);
  const isMultiselect = question.maxAnswers !== 1;

  const handleAnswerSelect = (currentSelect: number): number[] => {
    if (isMultiselect && activeAnswer.includes(currentSelect)) {
      const returnValue = activeAnswer.filter((answerItem) => answerItem !== currentSelect);

      setActiveAnswer(returnValue);
      return returnValue;
    }

    if (isMultiselect) {
      const returnValue = [...activeAnswer, currentSelect];

      setActiveAnswer(returnValue);
      return returnValue;
    }

    setActiveAnswer([currentSelect]);
    return [currentSelect];
  };

  if (!control) {
    return null;
  }

  return (
    <div className={`${styles['body-layout-step-question']} p-t-24`}>
      <div className="body-1">
        {currentQuestionNumber}
        .
        {' '}
        {question.title}
      </div>
      {question.subtitle && <div className="body-2 p-l-20">{question.subtitle}</div>}

      <fieldset
        className="p-t-12 p-l-20"
        id={question.id.toString()}
      >

        <Controller
          name={question.id.toString()}
          control={control}
          rules={{ required: true }}
          render={({ field: { onChange } }) => (
            <>
              {filteredAnswers.map((answerItem) => (
                <Answer
                  onChange={onChange}
                  isMultiselect={isMultiselect}
                  activeAnswerIndex={activeAnswer}
                  handleAnswerSelect={handleAnswerSelect}
                  answer={answerItem}
                  key={answerItem.id}
                  answerIndex={answerItem.id}
                  control={control}
                />
              ))}
            </>
          )}
        />
      </fieldset>
    </div>
  );
};
