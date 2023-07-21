import styles from '@features/NewPageFeature/styles.module.scss';
import { Title } from '@features/NewPageFeature/components/Title';
import React from 'react';

interface IntroAndOutroProps {
  header: string;
  id: number;
  titlePlaceholder: string;
  subtitlePlaceholder: string;
  titleName: string;
  subtitleName: string;
}

/**
 * Компонент заполнения вступления и заключения опроса
 * @param props - IntroAndOutroProps
 * @returns React.FC
 */
export const IntroAndOutro: React.FC<IntroAndOutroProps> = (props) => {
  const {
    id, titlePlaceholder, subtitlePlaceholder, header, titleName, subtitleName,
  } = props;

  return (
    <div className={`${styles['intro-and-outro']} m-b-24`}>
      <Title
        id={id}
        header={header}
        titlePlaceholder={titlePlaceholder}
        subtitlePlaceholder={subtitlePlaceholder}
        titleName={titleName}
        subtitleName={subtitleName}
      />
    </div>
  );
};
