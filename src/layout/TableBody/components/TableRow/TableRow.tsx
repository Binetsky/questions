import React from 'react';
import { RaLink } from '@frontend/uikit-rbc/RaLink';
import Link from 'next/link';
import { SurveyItem } from '@models/survey';
import { formatDate } from '@utils/formatDate';
import { API_URL } from '@constants';
import { useRouter } from 'next/router';
import { SurveyResult } from '@models/surveyResult';

interface TableRowProps {
  surveyItem: SurveyItem;
  results: SurveyResult[];
  index: number;
}

/**
 * Компонент строки таблицы опросов
 * @returns React.FC
 */
export const TableRow: React.FC<TableRowProps> = (props) => {
  const { surveyItem, index, results } = props;
  const {
    _id: surveyId, intro, isPublished, isArchived, createTimestamp, publishTimestamp,
  } = surveyItem;
  const [surveyDoneNumber, setSurveyDoneNumber] = React.useState<number>(0);
  const [isApiButtonDisabled, setIsApiButtonDisabled] = React.useState<boolean>(false);
  const [isPageButtonDisabled, setIsPageButtonDisabled] = React.useState<boolean>(false);
  const router = useRouter();

  const creationDate = `${formatDate(createTimestamp / 1000, 'DD month YYYY')}  г.`;
  const publishDate = publishTimestamp ? `${formatDate(publishTimestamp / 1000, 'DD month YYYY')}  г.` : '-';

  const getSurveyStatus = () => {
    if (isPublished) {
      return 'Опубликован';
    }

    if (isArchived) {
      return 'В архиве';
    }

    return 'Черновик';
  };

  const copyToClipboard = async ({ value, whichButton }:{ value: string; whichButton: string }) => {
    const unsecuredCopyToClipboard = (text: string) => {
      const textArea = document.createElement('textarea');

      // @ts-ignore
      textArea.style = 'position: absolute; top: 0; left: 0;';
      textArea.value = text;
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();

      try { document.execCommand('copy'); } catch (err) {
        console.error('Unable to copy to clipboard', err);
      }

      document.body.removeChild(textArea);
    };

    if (window.isSecureContext) {
      await navigator.clipboard?.writeText(value);
    }

    if (!window.isSecureContext) {
      await unsecuredCopyToClipboard(value);
    }

    if (whichButton === 'api') {
      setIsApiButtonDisabled(true);

      setTimeout(() => setIsApiButtonDisabled(false), 3000);
    }

    if (whichButton === 'page') {
      setIsPageButtonDisabled(true);

      setTimeout(() => setIsPageButtonDisabled(false), 3000);
    }
  };

  React.useEffect(() => {
    setSurveyDoneNumber(results.filter((resultItem) => resultItem.surveyId === surveyId).length);
  });

  return (
    <tr>
      <td>{index}</td>
      <td>
        <RaLink
          LibraryLink={Link}
          href={`/status/${surveyId}`}
          classList="link secondary"
        >
          {intro.title}
        </RaLink>
      </td>
      <td>{surveyDoneNumber}</td>
      <td>{getSurveyStatus()}</td>
      <td>{creationDate}</td>
      <td>{publishDate}</td>
      <td>
        <div className="flex">
          <button
            type="button"
            className="button xs tertiary m-r-4 m-b-4"
            title="Редактировать опрос"
            onClick={() => router.push(`/edit/${surveyId}`)}
          >
            Редактировать
          </button>
          <button
            type="button"
            className={`button xs tertiary m-r-4 m-b-4${isApiButtonDisabled ? ' disabled' : ''}`}
            title="Скопировать ссылку API"
            onClick={() => copyToClipboard({ value: `${API_URL}api/survey/${surveyId}`, whichButton: 'api' })}
            disabled={isApiButtonDisabled}
          >
            Ссылка API
          </button>
          <button
            type="button"
            className={`button xs tertiary m-b-4${isPageButtonDisabled ? ' disabled' : ''}`}
            title="Скопировать ссылку на страницу опроса"
            onClick={() => copyToClipboard({ value: `${API_URL}survey/${surveyId}`, whichButton: 'page' })}
            disabled={isPageButtonDisabled}
          >
            Страница опроса
          </button>
        </div>
      </td>
    </tr>
  );
};
