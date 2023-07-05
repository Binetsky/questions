import { RaLink } from '@frontend/uikit-rbc/RaLink';
import Link from 'next/link';
import React from 'react';

export const StatusTableRow = () => {
  const mock = 0;

  return (
    <tr>
      <td>1</td>
      <td>
        <RaLink
          LibraryLink={Link}
          href="/status/1"
          classList="link secondary"
        >
          Определенно нет
        </RaLink>
      </td>
      <td>Закрытый</td>
      <td>1 000 000</td>
      <td>25,5%</td>
    </tr>
  );
};
