import React, { useContext } from 'react';
import { StatusQuestion } from '@features/StatusPageFeature/components/StatusQuestion';
import { StatusPageContext } from '@context/StatusPageContext';
import styles from '@features/StatusPageFeature/styles.module.scss';

/**
 * Компонент группы из списка групп вопросов
 * @returns React.FC
 */
export const StatusGroupContainer = () => {
  const { survey } = useContext(StatusPageContext);
  const { groups, questions } = survey;

  return (
    <>
      {groups.map((groupItem) => {
        const filteredQuestions = questions.filter((questionItem) => questionItem.groupId === groupItem.id);

        return (
          <div
            className={`${styles['status-container']} m-b-24 p-24`}
            key={groupItem.id}
          >
            <div className="body-2">{groupItem.title}</div>
            {filteredQuestions.map((filteredQuestionsItem) => (
              <StatusQuestion question={filteredQuestionsItem} />
            ))}
          </div>
        );
      })}
    </>
  );
};
