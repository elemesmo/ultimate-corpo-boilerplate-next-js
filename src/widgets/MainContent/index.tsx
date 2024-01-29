import { Box, Container, Toolbar } from '@mui/material';

import { StyledContentBox } from './elements';

export function MainContent({
  children,
  ...props
}: Omit<React.ComponentProps<typeof Box>, 'component'>) {
  return (
    <StyledContentBox component="main" {...props}>
      <Toolbar />
      <Container data-testid="content-container" sx={{ mt: 6, mb: 4, ml: 0 }}>
        {children}
      </Container>
    </StyledContentBox>
  );
}
