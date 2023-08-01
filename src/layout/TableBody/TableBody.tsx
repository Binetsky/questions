import { TableRow } from '@layout/TableBody/components/TableRow';
import { SurveyItem } from '@models/survey';
import { SurveyResult } from '@models/surveyResult';
import React from 'react';

interface TableBodyProps {
  surveys: SurveyItem[];
  results: SurveyResult[];
  isTableReady: boolean;
}

/**
 * Компонент таблицы опросов
 * @param props
 * @constructor
 */
export const TableBody = (props: TableBodyProps) => {
  const { surveys, results, isTableReady } = props;

  return (
    <div className="table-wrapper">
      <table className="table w-hover">
        <colgroup>
          <col width="36px" />
          <col />
          <col width="160px" />
          <col width="160px" />
          <col width="160px" />
          <col width="160px" />
          <col width="360px" />
        </colgroup>
        <thead>
          <tr>
            <th>#</th>
            <th>Название</th>
            <th>Количество ответов</th>
            <th>Статус</th>
            <th>Дата создания</th>
            <th>Дата публикации</th>
            <th>Действия</th>
          </tr>
        </thead>
        <tbody>
          {surveys.map((surveyItem, index) => (
            <TableRow
              surveyItem={surveyItem}
              results={results}
              index={index + 1}
              key={surveyItem._id}
            />
          ))}
        </tbody>
      </table>

      {(isTableReady && surveys.length === 0) && <div className="body-5 p-12 txt-center txt-secondary">Тут, пока, пусто</div>}
      {!isTableReady && (
        <div className="body-5 p-12 txt-center txt-secondary">
          <i className="ra-icon-loader-bold rotate block w-10 align-center" />
        </div>
      )}
    </div>
  );
};
