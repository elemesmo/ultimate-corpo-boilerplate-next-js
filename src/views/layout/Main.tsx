'use client';

import * as React from 'react';
import { Box } from '@mui/material';

import { AppHeader, MainContent, MainNavigation } from '~/widgets';

export function MainLayout({
  children,
  sx,
  ...props
}: React.ComponentProps<typeof Box>) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(true);
  const toggleMenu = () => setIsMenuOpen(prev => !prev);

  return (
    <Box {...props} sx={{ ...sx, display: 'flex' }} data-testid="root-box">
      <AppHeader open={isMenuOpen} toggleMenu={toggleMenu} />
      <MainNavigation open={isMenuOpen} toggleMenu={toggleMenu} />
      <MainContent>{children}</MainContent>
    </Box>
  );
}
