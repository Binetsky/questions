import { BasicGroupProps } from '@features/NewPageFeature/types';
import { FieldValues } from 'react-hook-form';

/**
 * Хелпер преобразование групп в модель бэка для отправки на сервер
 * @param groupArray
 * @param questionArray
 * @param data
 */
export const transformGroupsData = (
  {
    groupArray, data,
  }: {
    groupArray: BasicGroupProps[];
    data: FieldValues;
  },
) => groupArray.map((groupItem) => ({
  id: groupItem.id,
  title: data[`group-title-${groupItem.id}`],
  description: data[`group-subtitle-${groupItem.id}`] || null,
  image: data[`group-image-${groupItem.id}`] || null,
}));
