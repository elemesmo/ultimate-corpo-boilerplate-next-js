import { QueryClientConfig } from '@tanstack/react-query';

export const queryClientConfig: QueryClientConfig = {
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000, // 1 minute in milliseconds
    },
  },
};
