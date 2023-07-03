import React from 'react';
import {
  AppContext, CurrentDeviceTypeParams,
} from '@context';

/**
 * Хук вовзращающий объект с признаками устройств
 * @return CurrentDeviceTypeParams
 */
export const useDevice = (): CurrentDeviceTypeParams => {
  const { device } = React.useContext(AppContext);

  return device;
};
