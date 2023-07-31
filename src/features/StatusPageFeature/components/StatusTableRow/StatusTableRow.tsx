import React, { useContext } from 'react';
import { StatusPageContext } from '@context/StatusPageContext';
import { AnswerItem } from '@models/survey';

interface StatusTableBodyProps {
  questionId: number;
  index: number;
  answer: AnswerItem;
}

/**
 * Компонент строки ответа на вопрос из списка групп вопросов
 * @param props - StatusTableBodyProps
 * @returns React.FC
 */
export const StatusTableRow: React.FC<StatusTableBodyProps> = (props) => {
  const { answer, index, questionId } = props;
  const { results, survey: { _id: surveyId } } = useContext(StatusPageContext);
  const thisSurveyResults = results.filter((resultItem) => resultItem.surveyId === surveyId)?.map((resultItem) => [resultItem.results]).flat();

  const thisQuestionResultsTotal = thisSurveyResults.reduce((currentSum, anwersItem) => {
    if (anwersItem[questionId]) {
      // Todo: я не понял почему нельзя в массиве чисел смотреть включение числа, потом разберусь
      // @ts-ignore
      const isThisAnswerChosen = anwersItem[questionId].includes(answer.id);

      return {
        answersTotal: currentSum.answersTotal + 1,
        thisAnswerTotal: isThisAnswerChosen ? currentSum.thisAnswerTotal + 1 : currentSum.thisAnswerTotal,
      };
    }

    return currentSum;
  }, { answersTotal: 0, thisAnswerTotal: 0 });

  const thisAnswerTotalPercentage = (thisQuestionResultsTotal.thisAnswerTotal * 100) / thisQuestionResultsTotal.answersTotal;

  const answerType = answer.answerType === 'closed' ? 'Закрытый' : 'Открытый';
  const answerTitle = answer.answerType === 'closed' ? answer.title : 'Открытый ответ (результаты в "Все ответы")';

  return (
    <tr>
      <td>{index}</td>
      <td>
        {answerTitle}
      </td>
      <td>{answerType}</td>
      <td>{thisQuestionResultsTotal.thisAnswerTotal}</td>
      <td>
        {thisAnswerTotalPercentage ? thisAnswerTotalPercentage.toFixed(2) : 0}
        %
      </td>
    </tr>
  );
};
