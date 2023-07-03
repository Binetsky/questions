import React from 'react';
import { ComponentWithChildren } from '@types';
import { TabPanel } from '@frontend/uikit-rbc/TabPanel';
import styles from './styles.module.scss';

export const MainPageFeature:React.FC<ComponentWithChildren> = () => {
  const [currentTab, setCurrentTab] = React.useState(0);

  const tabList = ['Опубликованные', 'Все опросы'];

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
        {currentTab}
      </div>
    </div>
  );
};
