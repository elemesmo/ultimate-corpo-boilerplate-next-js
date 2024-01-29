import * as React from 'react';
import { SessionProviderProps } from 'next-auth/react';
import { type PaletteMode } from '@mui/material';

import { NextAuthProvider, QueryProvider, ThemeProvider } from '~/features';

export type ProvidersProps = {
  children: React.ReactNode;
  session?: SessionProviderProps['session'];
  jest?: boolean;
  colorMode?: PaletteMode;
};

export function Providers({
  children,
  jest = false,
  session,
  colorMode,
}: ProvidersProps) {
  return (
    <NextAuthProvider session={session}>
      <QueryProvider>
        <ThemeProvider jest={jest} colorMode={colorMode}>
          {children}
        </ThemeProvider>
      </QueryProvider>
    </NextAuthProvider>
  );
}
