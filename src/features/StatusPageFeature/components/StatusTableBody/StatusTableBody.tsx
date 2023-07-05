import React from 'react';
import { StatusTableRow } from '@features/StatusPageFeature/components/StatusTableRow';

export const StatusTableBody = () => {
  const mock = 0;

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
          <StatusTableRow />
        </tbody>
      </table>
    </div>
  );
};
