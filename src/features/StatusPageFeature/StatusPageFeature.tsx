import React from 'react';
import { TabPanel } from '@frontend/uikit-rbc/TabPanel';
import { ComponentWithChildren } from '@frontend/uikit-rbc/types';
import { SummaryInfo } from '@features/StatusPageFeature/components/SummaryInfo';
import { StatusGroupContainer } from '@features/StatusPageFeature/components/StatusGroupContainer';
import { DetailedStatusCard } from '@features/StatusPageFeature/components/DetailedStatusCard';
import { DetailedStatusFilter } from '@features/StatusPageFeature/components/DetailedStatusFilter';
import styles from './styles.module.scss';

/**
 * Страница просмотра статистики по опросу
 * @returns React.FC<ComponentWithChildren>
 */
export const StatusPageFeature:React.FC<ComponentWithChildren> = () => {
  const [currentTab, setCurrentTab] = React.useState(0);

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
            <div className="headline-3 p-b-12">21 января 2023 г.</div>
            <DetailedStatusCard />
            <DetailedStatusCard />
          </>
        )}
      </div>
    </div>
  );
};
