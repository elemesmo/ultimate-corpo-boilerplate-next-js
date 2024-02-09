'use client';

import * as React from 'react';
import { type PaletteMode, useMediaQuery } from '@mui/material';
import {
  createTheme,
  ThemeProvider as MuiThemeProvider,
} from '@mui/material/styles';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';

import type { GetCookieFunction, SetCookieFunction } from '~/shared';

import { DarkTheme, LightTheme } from '../variations';

import { ColorModeContext } from './context';

export type ThemeProviderProps = Omit<
  React.ComponentProps<typeof MuiThemeProvider>,
  'theme'
> & {
  jest?: boolean;
  colorMode?: PaletteMode;
  getCookie: GetCookieFunction;
  setCookie: SetCookieFunction;
};

export function ThemeProvider({
  children,
  jest = false,
  colorMode,
  getCookie,
  setCookie,
  ...props
}: ThemeProviderProps) {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const userPreference = prefersDarkMode ? 'dark' : 'light';
  const [mode, setMode] = React.useState<PaletteMode>(
    colorMode ?? userPreference
  );

  React.useEffect(() => {
    if (!colorMode) {
      setMode(userPreference);
      setCookie('userColorMode', userPreference);
    }
  }, [mode, colorMode, userPreference, setCookie]);

  const providerValue = React.useMemo(
    () => ({
      toggleColorMode: async () => {
        const nextColorMode = mode === 'light' ? 'dark' : 'light';
        setCookie('userColorMode', nextColorMode);
        setMode(nextColorMode);
      },
      palletMode: mode,
    }),
    [mode, setCookie]
  );

  const theme = React.useMemo(
    () => createTheme(mode === 'light' ? LightTheme : DarkTheme),
    [mode]
  );

  return (
    <AppRouterCacheProvider options={{ enableCssLayer: !jest }}>
      <ColorModeContext.Provider value={providerValue}>
        <MuiThemeProvider {...props} theme={theme}>
          {children}
        </MuiThemeProvider>
      </ColorModeContext.Provider>
    </AppRouterCacheProvider>
  );
}
