import React from 'react';
import Image from 'next/image';
import MenuIcon from '@mui/icons-material/Menu';
import { Typography } from '@mui/material';

import { ThemeButton } from '~/features';

import {
  StyledAppBar,
  StyledHeaderContentBox,
  StyledLeftBox,
  StyledMenuButton,
  StyledRightBox,
  StyledToolbar,
} from './elements';

export function AppHeader({
  open,
  position,
  toggleMenu,
  ...props
}: React.ComponentProps<typeof StyledAppBar> & {
  open?: boolean;
  toggleMenu?: () => void;
}) {
  return (
    <StyledAppBar {...props} position="absolute" open={open}>
      <StyledToolbar>
        <StyledMenuButton
          open={open}
          aria-label="open drawer"
          onClick={toggleMenu}
          data-testid="header-menu-button"
        >
          <MenuIcon />
        </StyledMenuButton>

        <StyledHeaderContentBox>
          <StyledLeftBox open={open}>
            <Image
              src="/logo_ecorp.svg"
              alt="Evil Corp Logo"
              width="40"
              height="50"
            />

            <Typography sx={{ ml: '10px', '> i': { fontSize: '10px' } }}>
              <b>ULTIMATE</b> Corpo Boilerplate <i>for Next JS</i>
            </Typography>
          </StyledLeftBox>

          <StyledRightBox>
            <ThemeButton />
          </StyledRightBox>
        </StyledHeaderContentBox>
      </StyledToolbar>
    </StyledAppBar>
  );
}
