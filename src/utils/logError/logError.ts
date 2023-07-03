/**
 * Функция по логированию ошибок
 * @param message
 */
export const logError = (message: unknown): void => {
  // todo: добавить логирование через Kibana
  // eslint-disable-next-line no-console
  console.dir(message);
};
