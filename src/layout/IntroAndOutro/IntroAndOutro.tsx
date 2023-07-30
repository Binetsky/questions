import { Title } from '@layout/Title';
import React from 'react';
import { Control, FieldValues } from 'react-hook-form';
import styles from './styles.module.scss';

interface IntroAndOutroProps {
  header: string;
  id: number;
  titlePlaceholder: string;
  subtitlePlaceholder: string;
  titleName: string;
  subtitleName: string;
  titleValue?: string | number;
  subtitleValue?: string | number;
  control: Control<FieldValues, unknown>;
}

/**
 * Компонент заполнения вступления и заключения опроса
 * @param props - IntroAndOutroProps
 * @returns React.FC
 */
export const IntroAndOutro: React.FC<IntroAndOutroProps> = (props) => {
  const {
    id, titlePlaceholder, subtitlePlaceholder, header, titleName, subtitleName, titleValue, subtitleValue, control,
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
        titleValue={titleValue}
        subtitleValue={subtitleValue}
        control={control}
      />
    </div>
  );
};
