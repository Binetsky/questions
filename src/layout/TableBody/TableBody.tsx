import { TableRow } from '@layout/TableBody/components/TableRow';

interface TableBodyProps {
  mock?: string;
}

export const TableBody = (props: TableBodyProps) => {
  const { mock } = props;

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
          <col width="320px" />
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
          <TableRow />
        </tbody>
      </table>
    </div>
  );
};
