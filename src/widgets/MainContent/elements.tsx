import isPropValid from '@emotion/is-prop-valid';
import { Box, styled } from '@mui/material';

export const StyledContentBox = styled(Box, {
  shouldForwardProp: (prop: string) => isPropValid(prop),
})(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  color: theme.palette.text.primary,
  flexGrow: 1,
  height: '100vh',
  overflow: 'auto',
}));
