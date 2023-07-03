import { metricCounters } from '@constants';

export const metrikHitPageView = ({ url }: { url: string }): void => {
  if (window.ym || window.gtag) {
    setTimeout(() => {
      if (window.ym) {
        window.ym(metricCounters.yaMetric, 'hit', url);
      }

      if (window.gtag) {
        window.gtag('event', 'page_view', {
          page_path: url,
        });
      }
    }, 0);
  }
};
