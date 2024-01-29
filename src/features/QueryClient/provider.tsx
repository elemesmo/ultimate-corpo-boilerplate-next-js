'use client';

import * as React from 'react';
import {
  QueryClient,
  QueryClientProvider,
  type QueryClientProviderProps,
} from '@tanstack/react-query';

import { queryClientConfig } from './config';

export function QueryProvider({
  children,
  ...props
}: Omit<QueryClientProviderProps, 'client'>) {
  const [queryClient] = React.useState(
    () => new QueryClient(queryClientConfig)
  );
  return (
    <QueryClientProvider {...props} client={queryClient}>
      {children}
    </QueryClientProvider>
  );
}
