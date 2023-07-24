import React, { useContext } from 'react';
import { StatusTableRow } from '@features/StatusPageFeature/components/StatusTableRow';
import { StatusPageContext } from '@context/StatusPageContext';

interface StatusTableBodyProps {
  questionId: number;
}

/**
 * Компонент ответов из списка вопросов группы
 * @param props - StatusTableBodyProps
 * @returns React.FC
 */
export const StatusTableBody: React.FC<StatusTableBodyProps> = (props) => {
  const { questionId } = props;
  const { survey } = useContext(StatusPageContext);
  const filteredAnswers = survey.answers.filter((answerItem) => answerItem.questionId === questionId);

  return (
    <div className="table-wrapper">
      <table className="table w-hover">
        <colgroup>
          <col width="36px" />
          <col />
          <col width="160px" />
          <col width="160px" />
          <col width="160px" />
        </colgroup>
        <thead>
          <tr>
            <th>#</th>
            <th>Текст ответа</th>
            <th>Тип ответа</th>
            <th>Количество ответов</th>
            <th>% ответов</th>
          </tr>
        </thead>
        <tbody>
          {filteredAnswers.map((answerItem, index) => (
            <StatusTableRow
              answer={answerItem}
              questionId={questionId}
              key={answerItem.id}
              index={index + 1}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};
