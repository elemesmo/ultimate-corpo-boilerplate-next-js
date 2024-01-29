import * as React from 'react';
import Link from 'next/link';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
} from '@mui/material';

import { StyledMainDrawer } from './elements';

export function MainNavigation({
  toggleMenu,
  ...props
}: Omit<React.ComponentProps<typeof StyledMainDrawer>, 'variant'> & {
  toggleMenu?: () => void;
}) {
  return (
    <StyledMainDrawer {...props} variant="permanent" data-testid="main-drawer">
      <Toolbar
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-end',
          px: [1],
        }}
      >
        <IconButton onClick={toggleMenu} data-testid="main-drawer-toggle">
          <ChevronLeftIcon />
        </IconButton>
      </Toolbar>
      <List>
        <Link href="/" legacyBehavior>
          <ListItemButton>
            <ListItemIcon>
              <DashboardIcon />
            </ListItemIcon>
            <ListItemText>Home</ListItemText>
          </ListItemButton>
        </Link>
        <Link href="/foo" legacyBehavior>
          <ListItemButton>
            <ListItemIcon>
              <ShoppingCartIcon />
            </ListItemIcon>
            <ListItemText>Protected Foo</ListItemText>
          </ListItemButton>
        </Link>
      </List>
    </StyledMainDrawer>
  );
}

export * from './elements';
