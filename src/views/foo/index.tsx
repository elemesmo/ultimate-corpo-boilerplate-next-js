'use client';

import { type Session } from 'next-auth';
import { signOut } from 'next-auth/react';
import { Box, Button, Typography } from '@mui/material';

export async function FooView({ session }: { session: Session | null }) {
  return (
    <Box>
      <Typography>Protected Foo</Typography>
      {session && <Button onClick={() => signOut()}>Sign Out</Button>}
    </Box>
  );
}
