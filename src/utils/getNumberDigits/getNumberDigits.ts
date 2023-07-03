/**
 * Утилита возвращает число с разрядами
 * @param number
 */
export const getNumberDigits = (number: number): string => {
  if (number === undefined) {
    throw new Error('Number cannot be empty');
  }

  const numberAsArray = number.toString().split('.');
  const numberWithDigits = numberAsArray[0].replace(/\B(?=(\d{3})+(?!\d))/g, ' ');

  if (numberAsArray[1]) {
    return `${numberWithDigits}.${numberAsArray[1]}`;
  }

  return numberWithDigits;
};
