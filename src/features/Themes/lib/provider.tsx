'use client';

import * as React from 'react';
import { type PaletteMode, useMediaQuery } from '@mui/material';
import {
  createTheme,
  ThemeProvider as MuiThemeProvider,
} from '@mui/material/styles';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import nookies from 'nookies';

import { ColorModeResponse } from '~/app/api/user/color-mode/route';
import { nextApi } from '~/features/QueryClient';

import { DarkTheme, LightTheme } from '../variations';

import { ColorModeContext } from './context';

export type ThemeProviderProps = Omit<
  React.ComponentProps<typeof MuiThemeProvider>,
  'theme'
> & {
  jest?: boolean;
  colorMode?: PaletteMode;
};

export function ThemeProvider({
  children,
  jest = false,
  colorMode,
  ...props
}: ThemeProviderProps) {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const userPreference = prefersDarkMode ? 'dark' : 'light';
  const cookieStore = nookies.get();
  const cookieColorMode = cookieStore?.userColorMode as PaletteMode | undefined;
  const [mode, setMode] = React.useState<PaletteMode>(
    cookieColorMode ?? colorMode ?? userPreference
  );

  React.useEffect(() => {
    if (!cookieColorMode && !colorMode && mode !== userPreference) {
      setMode(userPreference);
    }
  }, [mode, colorMode, userPreference, cookieColorMode]);

  const providerValue = React.useMemo(
    () => ({
      toggleColorMode: async () => {
        try {
          const colorUrl = '/user/color-mode';
          const { data } = await nextApi.post<ColorModeResponse>(colorUrl);
          setMode(data.nextColorMode);
        } catch (err) {
          console.error(err);
        }
      },
      palletMode: mode,
    }),
    [mode]
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
