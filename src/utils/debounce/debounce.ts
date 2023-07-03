import type { Debounce } from './types';

/**
 * Утилита, создающая debounce эффект для хендлера события
 * @param handler
 * @param timeout
 * @return () => void
 */
export const debounce: Debounce = (handler, timeout) => {
  let timer: ReturnType<typeof setTimeout>;

  return () => {
    if (timer) clearTimeout(timer);
    timer = setTimeout(handler, timeout);
  };
};
