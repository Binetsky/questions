import React from 'react';
import { RaLink } from '@frontend/uikit-rbc/RaLink';
import Link from 'next/link';

export const TableRow: React.FC = () => (
  <tr>
    <td>1</td>
    <td>
      <RaLink
        LibraryLink={Link}
        href="/status/1"
        classList="link secondary"
      >
        Название
      </RaLink>
    </td>
    <td>1 000 000</td>
    <td>Черновик</td>
    <td>21 января 2023 г.</td>
    <td>-</td>
    <td>
      <button
        type="button"
        className="button xs tertiary m-r-4 m-b-4"
        title="Скопировать ссылку API"
        onClick={() => null}
      >
        Редактировать
      </button>
      <button
        type="button"
        className="button xs tertiary m-r-4 m-b-4"
        title="Скопировать ссылку API"
        onClick={() => null}
      >
        Ссылка API
      </button>
      <button
        type="button"
        className="button xs tertiary m-r-4 m-b-4"
        title="Скопировать ссылку на страницу опроса"
        onClick={() => null}
      >
        Ссылка опроса
      </button>
    </td>
  </tr>
);
