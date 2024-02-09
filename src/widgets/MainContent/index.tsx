import { Box, Container, Toolbar } from '@mui/material';

import { StyledContentBox } from './elements';

export function MainContent({
  children,
  hasHeader,
  ...props
}: Omit<React.ComponentProps<typeof Box>, 'component'> & {
  hasHeader?: boolean;
}) {
  return (
    <StyledContentBox component="main" {...props}>
      <Toolbar />
      <Container
        data-testid="content-container"
        sx={{ mt: hasHeader ? 6 : 0, mb: 4, ml: 0 }}
      >
        {children}
      </Container>
    </StyledContentBox>
  );
}
