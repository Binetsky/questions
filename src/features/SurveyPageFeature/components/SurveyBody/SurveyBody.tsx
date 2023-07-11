import { SurveyBodyProps } from '@features/SurveyPageFeature/components/SurveyBody/types';
import React from 'react';
import { StartLayout } from '@features/SurveyPageFeature/components/StartLayout';
import { StepLayout } from '@features/SurveyPageFeature/components/StepLayout';
import { EndLayout } from '@features/SurveyPageFeature/components/EndLayout';
import styles from './styles.module.scss';

/**
 * Компонент тела страницы прохождения опроса
 * @returns React.FC
 */
export const SurveyBody: React.FC<SurveyBodyProps> = (props) => {
  const { currentLayoutNumber, changeLayoutHandler } = props;
  const groupLength = 3;
  const groups = [...Array(groupLength)];

  return (
    <div className={styles.body}>
      <div className={styles['body-container']}>
        {currentLayoutNumber === 0 && (
          <StartLayout changeLayoutHandler={changeLayoutHandler} />
        )}
        {currentLayoutNumber === groups.length + 1 && (
          <EndLayout changeLayoutHandler={changeLayoutHandler} />
        )}

        {groups.map((groupItem, index) => (
          <>
            {currentLayoutNumber === index + 1 && (
              <StepLayout
                currentStep={index + 1}
                groupLength={groupLength}
                changeLayoutHandler={changeLayoutHandler}
                key={index}
              />
            )}
          </>
        ))}

      </div>
    </div>
  );
};
