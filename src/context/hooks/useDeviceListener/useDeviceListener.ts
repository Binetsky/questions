import React from 'react';
import { debounce } from '@utils/debounce';
import { detectDevice } from '@utils/detectDevice';
import { getCurrentDeviceType } from '@helpers/getCurrentDeviceType';
import type { CurrentDeviceTypeParams } from '@context';
import { UseDeviceListenerState } from './types';

/**
 * Хук определения типа устройства пользователя
 * @param initialState
 * @return UseDeviceListenerState
 */
export const useDeviceListener = (initialState: CurrentDeviceTypeParams): UseDeviceListenerState => {
  const [device, setDevice] = React.useState(initialState);
  const [isInitValue, setIsInitValue] = React.useState(true);

  React.useEffect(() => {
    window.addEventListener(
      'resize',
      debounce(() => {
        setDevice(getCurrentDeviceType(detectDevice()));
      }, 20),
    );

    setDevice(getCurrentDeviceType(detectDevice()));
    setIsInitValue(false);
  }, [setDevice]);

  return [{
    ...device,
    isInitValue,
  }];
};
