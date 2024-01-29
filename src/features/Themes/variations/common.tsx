import { Roboto } from 'next/font/google';
import type { ThemeOptions } from '@mui/material';

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export const commonTheme: ThemeOptions = {
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
};
