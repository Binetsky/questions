import { formatDate } from './formatDate';

const getTimestampFromDateString = (string: string): number => new Date(string).getTime() / 1000;

describe('formatDate test suite', () => {
  it('formatDate: тестовый timestamp генерируется верно', () => {
    const timestamp = getTimestampFromDateString('2021-10-21');

    expect(timestamp).toBe(1634774400);
  });

  it('formatDate: форматирует дату согласно шаблону верно', () => {
    const timestamp = getTimestampFromDateString('2021-01-21');

    expect(formatDate(timestamp, 'YYYY.MM.DD')).toBe('2021.01.21');
  });

  it('formatDate: форматирует дату согласно шаблону c ведущими нолями верно', () => {
    const timestamp = getTimestampFromDateString('2021-02-05');

    expect(formatDate(timestamp, 'DD.MM.YYYY')).toBe('05.02.2021');
  });

  it('formatDate: форматирует дату согласно дефолтному шаблону верно', () => {
    const timestamp = getTimestampFromDateString('2021-03-21');

    expect(formatDate(timestamp)).toBe('21.03.2021');
  });

  it('formatDate: форматирует дату согласно шаблону "MM.DD.YYYY" верно', () => {
    const timestamp = getTimestampFromDateString('2021-04-21');

    expect(formatDate(timestamp, 'MM.DD.YYYY')).toBe('04.21.2021');
  });

  it('formatDate: форматирует дату согласно шаблону "YYYY.MM.DD" верно', () => {
    const timestamp = getTimestampFromDateString('2021-05-21');

    expect(formatDate(timestamp, 'YYYY.MM.DD')).toBe('2021.05.21');
  });

  it('formatDate: форматирует дату согласно шаблону "DD month YYYY" верно', () => {
    const timestamp = getTimestampFromDateString('2021-06-21');

    expect(formatDate(timestamp, 'DD month YYYY')).toBe('21 июня 2021');
  });

  it('formatDate: форматирует дату согласно шаблону "DD month" верно', () => {
    const timestamp = getTimestampFromDateString('2021-07-21');

    expect(formatDate(timestamp, 'DD month')).toBe('21 июля');
  });

  it('formatDate: форматирует дату сентября согласно шаблону "DD month" верно', () => {
    const timestamp = getTimestampFromDateString('2021-09-21');

    expect(formatDate(timestamp, 'DD month')).toBe('21 сентября');
  });

  it('formatDate: форматирует дату октября согласно шаблону "DD month" верно', () => {
    const timestamp = getTimestampFromDateString('2021-10-21');

    expect(formatDate(timestamp, 'DD month')).toBe('21 октября');
  });

  it('formatDate: форматирует дату ноября согласно шаблону "DD month" верно', () => {
    const timestamp = getTimestampFromDateString('2021-11-21');

    expect(formatDate(timestamp, 'DD month')).toBe('21 ноября');
  });

  it('formatDate: форматирует дату декабря согласно шаблону "DD month" верно', () => {
    const timestamp = getTimestampFromDateString('2021-12-21');

    expect(formatDate(timestamp, 'DD month')).toBe('21 декабря');
  });

  it('formatDate: с некорректными параметрами возвращает null', () => {
    const timestamp = getTimestampFromDateString('2021-55-21');

    expect(formatDate(timestamp, 'DD month')).toBeNull();
  });

  it('formatDate: c пустым параметром возвращает null', () => {
    const time = formatDate();

    expect(time).toBeNull();
  });
});
