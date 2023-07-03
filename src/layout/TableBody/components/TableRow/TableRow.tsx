import React from 'react';
import { RaLink } from '@frontend/uikit-rbc/RaLink';
import Link from 'next/link';

export const TableRow: React.FC = () => (
  <tr>
    <td>1</td>
    <td>
      <RaLink LibraryLink={Link} href="#" classList="link secondary">
        Название
      </RaLink>
    </td>
    <td>1 000 000</td>
    <td>Черновик</td>
    <td>21 января 2023 г.</td>
    <td>-</td>
    <td>
      <button type="button" className="button xs tertiary m-r-4" title="Скопировать ссылку API" onClick={() => null}>
        API
      </button>
      <button type="button" className="button xs tertiary m-r-4" title="Скопировать ссылку на страницу опроса" onClick={() => null}>
        Страница
      </button>
    </td>
  </tr>
);
