'use client';

import isPropValid from '@emotion/is-prop-valid';
import {
  AppBar as MuiAppBar,
  type AppBarProps,
  Box,
  type BoxProps,
  IconButton,
  type IconButtonProps,
  Toolbar,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import type {} from '@mui/material/themeCssVarsAugmentation';

import { DRAWER_WIDTH } from '../MainNavigation';

interface StyledAppBarProps extends AppBarProps {
  open?: boolean;
}

interface StyledLeftBoxProps extends BoxProps {
  open?: boolean;
}

interface StyledMenuButtonProps extends IconButtonProps {
  open?: boolean;
}

export const StyledAppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop: string) => isPropValid(prop),
})<StyledAppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.short,
  }),
  ...(open && {
    marginLeft: DRAWER_WIDTH,
    width: `calc(100% - ${DRAWER_WIDTH}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.short,
    }),
  }),
}));

export const StyledToolbar = styled(Toolbar, {
  shouldForwardProp: (prop: string) => isPropValid(prop),
})(() => ({
  paddingRight: 24,
  userSelect: 'none',
}));

export const StyledHeaderContentBox = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  flexGrow: 1,
});

export const StyledLeftBox = styled(Box, {
  shouldForwardProp: (prop: string) => isPropValid(prop),
})<StyledLeftBoxProps>(({ theme, open }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  color: theme.palette.text.primaryChannel,
  transition: theme.transitions.create(['margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.short,
  }),
  ...(open ? { marginLeft: '-25px' } : { marginLeft: '0px' }),
}));

export const StyledRightBox = styled(Box)({
  display: 'flex',
});

export const StyledMenuButton = styled(IconButton, {
  shouldForwardProp: (prop: string) => isPropValid(prop),
})<StyledMenuButtonProps>(({ theme, open = true }) => ({
  marginRight: '30px',
  color: 'inherit',
  transition: theme.transitions.create(['margin', 'opacity'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.short,
  }),
  ...(open && {
    marginRight: 0,
    opacity: 0,
    pointerEvents: 'none',
  }),
}));
