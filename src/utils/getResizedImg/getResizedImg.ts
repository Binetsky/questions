import { ResizeValues } from './types';

/**
 * Утилита принимает в себя урл изображения и возвращает урл ресайза изображения в соответствии списку ресайзов БО
 * для использования с компонентами библиотеки UIKit
 * Ресайзы БО: https://confluence.rbc.ru/pages/viewpage.action?pageId=10813945
 *
 * Возможные размеры:
 * xxxl - 1200xH
 * xxl - 960xH
 * xl - 673xH
 * l - 320xH
 * m - 200xH
 * s - 78x78_crop
 *
 * @param boImgUrl: string
 * @param size: 'xl' | 'l' | 'm' | 's'
 * @return string
 */
export const getResizedImg = ({
  boImgUrl, size,
}: { boImgUrl: string | null; size: ResizeValues }): string | null => {
  if (!boImgUrl || !size) return null;

  const imgSizes = {
    xxxl: '1200xH',
    xxl: '960xH',
    xl: '673xH',
    l: '320xH',
    m: '200xH',
    s: '78x78_crop',
  };

  if (boImgUrl.includes('resized')) {
    return boImgUrl.replace(/resized.*media/, `resized/${imgSizes[size]}/media`);
  }

  return boImgUrl.replace('/media', `/resized/${imgSizes[size]}/media`);
};
// Todo: в далеком светлом будущем было бы здорово убрать все лишние ресайзы из БО и оставить только нужные
//  в рамках дизайн-системы с опцией кроп и без.
