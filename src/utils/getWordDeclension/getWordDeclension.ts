/**
 * Утилита принимающая на вход число и массив строк и возвращающая подходящее склонение слова к переданному числу
 * ex: getWordDeclension(12, 'стул', 'стула', 'стульев')
 * @params GetWordDeclensionParams
 * @return string
 */
export const getWordDeclension = (number: number, one: string, two: string, five: string): string => {
  if (number === undefined || !one || !two || !five) {
    throw new Error('No required parameter');
  }

  let absoluteNumber = Math.abs(number);

  absoluteNumber %= 100;

  if (absoluteNumber >= 5 && absoluteNumber <= 20) {
    return five;
  }

  absoluteNumber %= 10;

  if (absoluteNumber === 1) {
    return one;
  }

  if (absoluteNumber >= 2 && absoluteNumber <= 4) {
    return two;
  }

  return five;
};
