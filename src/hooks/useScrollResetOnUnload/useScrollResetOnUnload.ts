import React from 'react';

const onUnload = (): void => {
  window.scrollTo(0, 0);
};

/**
 * Хук сбрасывает скролл страницы при перезагрузке
 */
export const useScrollResetOnUnload = (): void => {
  React.useEffect(() => {
    window.addEventListener('unload', onUnload);

    return () => {
      window.removeEventListener('unload', onUnload);
    };
  }, []);
};
