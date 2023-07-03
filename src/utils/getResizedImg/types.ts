/**
 * Тип возможных значений для утилиты getResizedImg
 */
export type ResizeValues = 'xl' | 'l' | 'm' | 's';

export interface GetResizedImgTestProps {
  outUrl: string;
  size: ResizeValues;
}
