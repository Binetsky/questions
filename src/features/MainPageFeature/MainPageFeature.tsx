import React from 'react';
import { ComponentWithChildren } from '@types';
import 'swiper/css';
import styles from './styles.module.scss';

export const MainPageFeature:React.FC<ComponentWithChildren> = () => (
  <div className="page">
    Шапка
    <div className={styles.main}>
      Тело страницы
    </div>
  </div>
);
