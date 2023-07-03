import { DateFormat } from './types';

/**
 * Разбивает дату на составные части
 * @param date
 */
const getDateParts = (date: Date) => ({
  day: date.getDate(),
  month: date.getMonth() + 1,
  year: date.getFullYear(),
  hours: date.getHours(),
  minutes: date.getMinutes(),
});

/**
 * Добавляет ведущий ноль
 * @param value
 */
const leadingZero = (value: string | number): string => {
  const number = parseInt(value.toString(), 10);

  return number < 10 ? `0${number}` : number.toString();
};

/**
 * Возвращает название месяца
 * @param value: number
 * @return string
 */
const getMonthName = (value: number): string => {
  switch (value) {
    case 1:
      return 'января';
    case 2:
      return 'февряля';
    case 3:
      return 'марта';
    case 4:
      return 'апреля';
    case 5:
      return 'мая';
    case 6:
      return 'июня';
    case 7:
      return 'июля';
    case 8:
      return 'августа';
    case 9:
      return 'сентября';
    case 10:
      return 'октября';
    case 11:
      return 'ноября';
    case 12:
      return 'декабря';
    default:
      return value.toString();
  }
};

/**
 * Функция генерации соотвествий частей формата значениям
 * @param date
 */
const generateRegs = (date: Date) => {
  const parts = getDateParts(date);

  return {
    DD: leadingZero(parts.day),
    MM: leadingZero(parts.month),
    month: getMonthName(parts.month),
    YYYY: parts.year,
    hh: leadingZero(parts.hours),
    mm: leadingZero(parts.minutes),
  };
};

/**
 * Утилита для форматирования даты из timestamp
 * @param timestamp: дата в формате timestamp
 * @param format: формат даты, который нужно получить (по умолчанию: 'DD.MM.YYYY')
 */
export const formatDate = (timestamp?: number, format?: DateFormat): string | null => {
  if (!timestamp) {
    return null;
  }

  const formatString = format || 'DD.MM.YYYY';
  const newDate = new Date(timestamp * 1000);
  const regs = generateRegs(newDate);

  let result: string = formatString;

  Object.entries(regs).forEach((item) => {
    const [reg,
      value] = item;

    result = result.replace(reg, value.toString());
  });

  return result;
};
