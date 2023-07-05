import React from 'react';
import { TabPanel } from '@frontend/uikit-rbc/TabPanel';
import { ComponentWithChildren } from '@frontend/uikit-rbc/types';
import { SummaryInfo } from '@features/StatusPageFeature/components/SummaryInfo';
import { StatusGroupContainer } from '@features/StatusPageFeature/components/StatusGroupContainer';
import { DetailedStatusCard } from '@features/StatusPageFeature/components/DetailedStatusCard';
import { Radio } from '@frontend/uikit-rbc/Radio';
import { FormElementSizes } from '@frontend/uikit-rbc/constants';
import { InputType } from '@frontend/uikit-rbc/InputField/constants';
import { InputField } from '@frontend/uikit-rbc/InputField';
import { DetailedStatusFilter } from '@features/StatusPageFeature/components/DetailedStatusFilter';
import styles from './styles.module.scss';

export const StatusPageFeature:React.FC<ComponentWithChildren> = () => {
  const [currentTab, setCurrentTab] = React.useState(1);

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
            <div className={styles['status-container']}>
              <StatusGroupContainer />
            </div>
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
