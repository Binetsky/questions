import React from 'react';
import { logError } from '@utils/logError';
import { ErrorBoundaryProps, ErrorBoundaryState } from './types';

export class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch = (error: Error): void => {
    logError(error);
  };

  static getDerivedStateFromError = (): { hasError: boolean } => ({ hasError: true });

  render(): React.ReactNode {
    const { hasError } = this.state;
    const { children } = this.props;

    if (hasError) {
      return null;
    }

    return children;
  }
}
