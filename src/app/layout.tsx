import 'core-js/actual';

import type { Metadata, Viewport } from 'next';
import { cookies } from 'next/headers';
import { getServerSession } from 'next-auth';
import { type PaletteMode } from '@mui/material';

import { authOptions } from '~/features';
import { MainLayout } from '~/views';

import { Providers } from './providers';

import '~/features/Themes/global.scss';

export const metadata: Metadata = {
  title: 'ULTIMATE Corpo Boilerplate for NextJS',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);
  const cookieStore = cookies();
  const colorMode = cookieStore.get('userColorMode')?.value as
    | PaletteMode
    | undefined;

  return (
    <html lang="pt-BR">
      <body>
        <Providers session={session} colorMode={colorMode}>
          <MainLayout>{children}</MainLayout>
        </Providers>
      </body>
    </html>
  );
}
