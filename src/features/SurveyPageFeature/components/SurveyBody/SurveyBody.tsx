import React from 'react';
import { StartLayout } from '@features/SurveyPageFeature/components/StartLayout';
import { StepLayout } from '@features/SurveyPageFeature/components/StepLayout';
import { EndLayout } from '@features/SurveyPageFeature/components/EndLayout';
import { SurveyPageContext } from '@context/SurveyPageContext';
import styles from './styles.module.scss';

/**
 * Компонент тела страницы прохождения опроса
 * @returns React.FC
 */
export const SurveyBody: React.FC = () => {
  const { survey, currentLayoutNumber, changeLayoutHandler } = React.useContext(SurveyPageContext);
  const { intro, outro } = survey;
  const { groups } = survey;
  const groupLength = groups.length;

  return (
    <div className={styles.body}>
      <div className={styles['body-container']}>
        {currentLayoutNumber === 0 && (
          <StartLayout
            changeLayoutHandler={changeLayoutHandler}
            content={intro}
          />
        )}
        {currentLayoutNumber === groupLength + 1 && (
          <EndLayout
            changeLayoutHandler={changeLayoutHandler}
            content={outro}
          />
        )}

        {groups.map((groupItem, index) => (
          <>
            {currentLayoutNumber === index + 1 && (
              <StepLayout
                group={groupItem}
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
