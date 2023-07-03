import React from 'react';
import { getCurrentDeviceType } from '@helpers/getCurrentDeviceType';
import { UserDeviceType } from '@utils/detectDevice';
import { useReadyState } from '@hooks/useReadyState';
import { ComponentWithChildren } from '@types';
import {
  useDeviceListener, useUserContext,
} from './hooks';
import { AppContextState, OpacityParams } from './types';

/**
 * InitialState для контекста device
 */
const deviceInitialState = getCurrentDeviceType(UserDeviceType.Mobile);

/**
 * InitialState для контекста user
 */
const userInitialState = {
  isGuest: null,
  isSubscribed: null,
  isSubscribedPro: null,
  name: null,
};

const defaultOpacity: OpacityParams = { opacity: '0', transition: '.800s' };

/**
 * AppContext - контекст всего приложения
 */
const contextInitialState: AppContextState = {
  device: deviceInitialState,
  user: userInitialState,
  userLogout: () => {},
  opacity: defaultOpacity,
};

export const AppContext = React.createContext(contextInitialState);

/**
 * AppContextProvider - провайдер контекста приложения
 */
export const AppContextProvider: React.FC<ComponentWithChildren> = ({ children }) => {
  const [opacity, setOpacity] = React.useState<OpacityParams>(defaultOpacity);
  const [deviceState] = useDeviceListener(deviceInitialState);
  const [userState, userLogout] = useUserContext(userInitialState);
  const device = React.useMemo(() => deviceState, [deviceState]);
  const user = React.useMemo(() => userState, [userState]);

  useReadyState({ effect: () => {
    setOpacity(((prevState) => ({ ...prevState, opacity: '1' })));
  } });

  return (
    <AppContext.Provider value={{
      device, user, userLogout, opacity,
    }}
    >
      {children}
    </AppContext.Provider>
  );
};
