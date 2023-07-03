import React from 'react';
import { ComponentWithChildren } from '@frontend/uikit-rbc/types';
import { Group } from '@features/NewPageFeature/components/Group';
import { IntroAndOutro } from '@features/NewPageFeature/components/IntroAndOutro/IntroAndOutro';
import { RaLink } from '@frontend/uikit-rbc/RaLink';
import Link from 'next/link';
import styles from './styles.module.scss';

export const NewPageFeature:React.FC<ComponentWithChildren> = () => {
  const [currentTab, setCurrentTab] = React.useState(0);

  const tabList = ['Опубликованные', 'Не опубликованные', 'Все'];

  const changeTab = (tab: number) => {
    setCurrentTab(tab);
  };

  return (
    <div className={styles.main}>
      <div className={styles['main-content']}>
        <div className="flex p-b-24">
          <button type="button" className="button md primary m-r-12">Сохранить</button>
          <button type="button" className="button md tertiary m-r-12">Сохранить и опубликовать</button>
          <RaLink LibraryLink={Link} href="/" classList="button md tertiary">Отменить</RaLink>
        </div>

        <IntroAndOutro />

        <IntroAndOutro />

        <Group />
        <button type="button" className="button md tertiary">+ Группа вопросов</button>
      </div>
    </div>
  );
};
