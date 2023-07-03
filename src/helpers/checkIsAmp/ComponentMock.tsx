import React from 'react';
import { checkIsAmp } from '@helpers/checkIsAmp';

export const ComponentMock = (): React.ReactElement => {
  const statusIsAmp = checkIsAmp();

  return (
    <>
      {statusIsAmp ? (
        <h3>AMP Page!</h3>
      ) : (
        <h3>Simple Page!</h3>
      )}
    </>
  );
};
