/**
 * Тип формата даты для утилиты formatDate
 */
export type DateFormat =
  | 'DD.MM.YYYY'
  | 'MM.DD.YYYY'
  | 'YYYY.MM.DD'
  | 'DD month YYYY'
  | 'DD month'
  | 'DD month, hh:mm'
  | 'DD month YYYY, hh:mm'
  | 'hh:mm';
