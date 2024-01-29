import * as React from 'react';
import { cookies } from 'next/headers';
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

const mockCookies = {
  userColorMode: 'light',
};

jest.mock('next/headers', () => {
  return {
    cookies: () => ({
      get: (key: keyof typeof mockCookies) => ({
        value: mockCookies[key],
      }),
    }),
  };
});

export function JestThemeProvider({ children }: { children: React.ReactNode }) {
  const cookieStore = cookies();
  const colorMode = cookieStore.get('userColorMode')?.value as
    | PaletteMode
    | undefined;

  return (
    <Providers session={mockSession} jest colorMode={colorMode}>
      {children}
    </Providers>
  );
}

function customRender(ui: React.ReactElement, options?: RenderOptions) {
  return render(ui, { wrapper: JestThemeProvider, ...options });
}

export { customRender as render };
