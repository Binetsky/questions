import styles from '@features/NewPageFeature/styles.module.scss';
import React from 'react';
import { Question } from '@features/NewPageFeature/components/Question';
import { Title } from '@features/NewPageFeature/components/Title';

export const Group = () => {
  const mock = 0;

  return (
    <div className={`${styles.group} m-b-24`}>
      <Title />

      <Question />

      <button type="button" className="button md tertiary">+ Вопрос</button>
    </div>
  );
};
