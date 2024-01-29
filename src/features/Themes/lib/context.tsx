'use client';

import * as React from 'react';
import type { PaletteMode } from '@mui/material';

type ColorModeContextType = {
  toggleColorMode: () => void;
  palletMode: PaletteMode;
};

export const ColorModeContext = React.createContext<ColorModeContextType>(
  {} as ColorModeContextType
);
