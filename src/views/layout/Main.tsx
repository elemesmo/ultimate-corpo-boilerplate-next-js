'use client';

import * as React from 'react';
import type { Session } from 'next-auth';
import { Box, Typography } from '@mui/material';

import type { SetCookieFunction } from '~/shared';
import { AppHeader, MainContent, MainNavigation } from '~/widgets';

type MainLayoutProps = React.ComponentProps<typeof Box> & {
  setCookie: SetCookieFunction;
  userMenuState: boolean;
  session: Session | null;
};

function MySecretComponent({ session }: { session: Session }) {
  return (
    <Typography
      sx={{ position: 'absolute', zIndex: '9999', bottom: 20, right: 20 }}
    >
      Show for authenticated users | {session.user?.name}
    </Typography>
  );
}

export function MainLayout({
  children,
  sx,
  setCookie,
  userMenuState,
  session,
  ...props
}: MainLayoutProps) {
  const [isMenuOpen, setIsMenuOpen] = React.useState<boolean>(
    userMenuState ?? true
  );
  const toggleMenu = () => {
    setCookie('userMenuState', !isMenuOpen ? 'open' : 'closed');
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <Box {...props} sx={{ ...sx, display: 'flex' }} data-testid="root-box">
      {session && <MySecretComponent session={session} />}
      <AppHeader open={isMenuOpen} toggleMenu={toggleMenu} />
      <MainNavigation open={isMenuOpen} toggleMenu={toggleMenu} />
      <MainContent hasHeader>{children}</MainContent>
    </Box>
  );
}
