import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';
import type { PaletteMode } from '@mui/material';

export type ColorModeResponse = {
  nextColorMode: PaletteMode;
};

export async function POST() {
  const cookieStore = cookies();
  const currentColorMode = cookieStore.get('userColorMode')?.value;
  const nextColorMode = currentColorMode === 'dark' ? 'light' : 'dark';
  cookieStore.set('userColorMode', nextColorMode);
  return NextResponse.json({ nextColorMode });
}
