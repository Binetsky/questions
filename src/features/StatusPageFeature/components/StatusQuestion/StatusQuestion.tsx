import { StatusTableBody } from '@features/StatusPageFeature/components/StatusTableBody';
import React from 'react';
import { QuestionItem } from '@models/survey';

interface StatusQuestionProps {
  question: QuestionItem;
}

/**
 * Компонент вопроса из списка вопросов группы
 * @param props
 * @returns React.FC
 */
export const StatusQuestion: React.FC<StatusQuestionProps> = (props) => {
  const { question } = props;

  return (
    <>
      <div className="headline-5 p-b-4 p-t-8">{question.title}</div>
      {question?.subtitle && <div className="headline-5 p-b-12">{question.subtitle}</div>}
      <StatusTableBody questionId={question.id} />
    </>
  );
};
