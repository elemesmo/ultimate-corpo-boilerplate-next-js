import * as React from 'react';
import { SessionProviderProps } from 'next-auth/react';
import { type PaletteMode } from '@mui/material';

import { NextAuthProvider, QueryProvider, ThemeProvider } from '~/features';
import type { GetCookieFunction, SetCookieFunction } from '~/shared';

export type ProvidersProps = {
  children: React.ReactNode;
  session?: SessionProviderProps['session'];
  jest?: boolean;
  colorMode?: PaletteMode;
  getCookie: GetCookieFunction;
  setCookie: SetCookieFunction;
};

export function Providers({
  children,
  jest = false,
  session,
  colorMode,
  getCookie,
  setCookie,
}: ProvidersProps) {
  return (
    <NextAuthProvider session={session}>
      <QueryProvider>
        <ThemeProvider
          getCookie={getCookie}
          setCookie={setCookie}
          jest={jest}
          colorMode={colorMode}
        >
          {children}
        </ThemeProvider>
      </QueryProvider>
    </NextAuthProvider>
  );
}
