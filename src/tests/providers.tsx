import * as React from 'react';
import { PaletteMode } from '@mui/material';

// eslint-disable-next-line import/no-extraneous-dependencies
import { render, type RenderOptions } from '@testing-library/react';

import { Providers } from '~/app/providers';

const mockSession = {
  user: {
    name: 'John Doe',
    email: 'johndoe@foo.bar',
  },
  expires: '2021-01-01T00:00:00.000Z',
};

const mockCookies: { [key: string]: string } = {
  userColorMode: 'light',
  userMenuState: 'open',
};

export function getCookie<T>(key: string): T {
  return mockCookies[key] as T;
}

export function setCookie(key: string, value: string) {
  mockCookies[key] = value;
}

jest.mock('next/headers', () => {
  return {
    cookies: () => ({
      get: getCookie,
      set: setCookie,
    }),
  };
});

export function JestThemeProvider({ children }: { children: React.ReactNode }) {
  const colorMode = getCookie('userColorMode') as PaletteMode | undefined;

  return (
    <Providers
      setCookie={setCookie}
      getCookie={getCookie}
      colorMode={colorMode}
      session={mockSession}
      jest
    >
      {children}
    </Providers>
  );
}

function customRender(ui: React.ReactElement, options?: RenderOptions) {
  return render(ui, { wrapper: JestThemeProvider, ...options });
}

export { customRender as render };
