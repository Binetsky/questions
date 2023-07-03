import styles from '@features/NewPageFeature/styles.module.scss';
import { Title } from '@features/NewPageFeature/components/Title';
import React from 'react';

export const IntroAndOutro = () => {
  const mock = 0;

  return (
    <div className={`${styles['intro-and-outro']} m-b-24`}>
      <Title />
    </div>
  );
};
