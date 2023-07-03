import React from 'react';
import type { PageBodyFeatureProps } from './types';

/**
 * Компонент сетки страницы, принимает в себя и отображает контент страниц в сетке сайта
 * @param props - PageBodyProps
 * @return React.ReactElement
 */
export const PageBodyFeature: React.FC<PageBodyFeatureProps> = (props) => {
  const { children } = props;

  return (
    <>
      <div className="page">
        {children}
      </div>

      <div className="detect-device" />
    </>
  );
};
