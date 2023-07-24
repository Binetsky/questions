import React, { useContext } from 'react';
import { TabPanel } from '@frontend/uikit-rbc/TabPanel';
import { ComponentWithChildren } from '@frontend/uikit-rbc/types';
import { SummaryInfo } from '@features/StatusPageFeature/components/SummaryInfo';
import { StatusGroupContainer } from '@features/StatusPageFeature/components/StatusGroupContainer';
import { DetailedStatusCard } from '@features/StatusPageFeature/components/DetailedStatusCard';
import { DetailedStatusFilter } from '@features/StatusPageFeature/components/DetailedStatusFilter';
import { StatusPageContext } from '@context/StatusPageContext';
import { SurveyResult } from '@models/surveyResult';
import { formatDate } from '@frontend/utils';
import styles from './styles.module.scss';

/**
 * Страница просмотра статистики по опросу
 * @returns React.FC<ComponentWithChildren>
 */
export const StatusPageFeature:React.FC<ComponentWithChildren> = () => {
  const [currentTab, setCurrentTab] = React.useState(0);
  const { survey, results } = useContext(StatusPageContext);
  const { _id: surveyId } = survey;

  const filteredResults = results.filter((resultItem) => resultItem.surveyId === surveyId);

  const groupedData = filteredResults.reduce((acc: Record<number, SurveyResult[]>, item) => {
    const itemDate = new Date(item.timestamp).setHours(0, 0, 0, 0);

    if (acc[itemDate]) {
      acc[itemDate].push(item);
    } else {
      acc[itemDate] = [item];
    }

    return acc;
  }, {});

  const tabList = ['Сводная статистика', 'Все ответы'];

  const changeTab = (tab: number) => {
    setCurrentTab(tab);
  };

  return (
    <div className={styles.main}>
      <div className={styles['main-content']}>
        <TabPanel
          tabList={tabList}
          activeTab={currentTab}
          changeTab={changeTab}
          className="p-b-24"
        />
        {currentTab === 0 && (
          <>
            <SummaryInfo />
            <StatusGroupContainer />
          </>
        )}
        {currentTab === 1 && (
          <>
            <DetailedStatusFilter />
            {Object.entries(groupedData).map(([date, items]) => {
              const dateAsNumber = `${formatDate(Number(date) / 1000, 'DD month YYYY')}  г.`;

              return (
                <>
                  <div className="headline-3 p-b-12">{dateAsNumber}</div>
                  <DetailedStatusCard results={items} />
                </>
              );
            })}
          </>
        )}
      </div>
    </div>
  );
};
