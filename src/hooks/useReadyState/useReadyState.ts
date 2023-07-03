import React from 'react';
import { isReadyStateMatch } from './helpers';
import { UseReadyStateType } from './types';

/**
 * Хук определяющий готовность страницы
 * @params UseReadyStateType
 * @return void
 */
export const useReadyState = ({ effect, deps = [], onState = 'complete' }: UseReadyStateType): void => {
  React.useEffect(() => {
    const listener = (destructorsParam: Array<() => void>) => {
      if (!isReadyStateMatch(onState)) {
        return;
      }

      const destructor = effect();

      if (destructor) {
        destructorsParam.push(destructor);
      }
    };

    const destructors: Array<() => void> = [
      () => document.removeEventListener('readystatechange', () => listener(destructors)),
    ];

    listener(destructors);
    document.addEventListener('readystatechange', () => listener(destructors));

    return () => destructors.forEach((d) => d());
  }, deps);
};
