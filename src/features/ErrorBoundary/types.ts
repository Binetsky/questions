import React from 'react';

export interface ErrorBoundaryProps {
  children: React.ReactNode;
  hasError: boolean;
}

export interface ErrorBoundaryState {
  hasError: boolean;
}
