import React from 'react';
import { useRouter } from 'next/router';
import { useHostname } from '@hooks/useHostname';
import { hideBrokenImages } from '@utils/hideBrokenImages';
import { metrikHitPageView } from '@utils/metrikHitPageView';

/**
 * Хук срабатывающий при смене роута
 * Отвечает за отправку метрик
 * @return void
 */
export const useRouteChange = (): void => {
  const router = useRouter();
  const host = useHostname();
  const [hitNewsPaths, setHitNewsPaths] = React.useState<string[]>([]);

  const handleRouteChange = React.useCallback((path: string) => {
    const clonePath = path.startsWith('/life') ? path.replace(/^(\/life)/, '') : path;
    const isNewsPath = clonePath.startsWith('/news');
    const url = `${host}${clonePath}`;

    hideBrokenImages();

    if (!isNewsPath) {
      metrikHitPageView({ url });
      setHitNewsPaths([]);
    } else if (!hitNewsPaths.includes(clonePath)) {
      setHitNewsPaths((state) => [...state, clonePath]);
      metrikHitPageView({ url });
    }
  }, [hitNewsPaths]);

  React.useEffect(() => {
    router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events, handleRouteChange]);
};
