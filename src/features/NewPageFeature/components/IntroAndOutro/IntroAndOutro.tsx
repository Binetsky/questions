import styles from '@features/NewPageFeature/styles.module.scss';
import { Title } from '@features/NewPageFeature/components/Title';
import React from 'react';
import { Control, FieldValues } from 'react-hook-form';

interface IntroAndOutroProps {
  control: Control<FieldValues, unknown>;
  header: string;
  id: number;
  titlePlaceholder: string;
  subtitlePlaceholder: string;
}

/**
 * Компонент заполнения вступления и заключения опроса
 * @param props - IntroAndOutroProps
 * @returns React.FC
 */
export const IntroAndOutro: React.FC<IntroAndOutroProps> = (props) => {
  const {
    control, id, titlePlaceholder, subtitlePlaceholder, header,
  } = props;

  return (
    <div className={`${styles['intro-and-outro']} m-b-24`}>
      <Title
        control={control}
        id={id}
        header={header}
        titlePlaceholder={titlePlaceholder}
        subtitlePlaceholder={subtitlePlaceholder}
      />
    </div>
  );
};
