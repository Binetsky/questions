import React from 'react';

export type ExpectedReadyState = ReadonlyArray<DocumentReadyState> | DocumentReadyState | undefined;

export interface UseReadyStateType {
  effect: React.EffectCallback;
  deps?: any[];
  onState?: ExpectedReadyState;
}
