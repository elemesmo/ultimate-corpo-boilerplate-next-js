'use client';

import { signIn } from 'next-auth/react';
import { Box, Button } from '@mui/material';

export function LoginView() {
  return (
    <Box>
      <Button onClick={() => signIn('credentials')}>Login</Button>
    </Box>
  );
}
