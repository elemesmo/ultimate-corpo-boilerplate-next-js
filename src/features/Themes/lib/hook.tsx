import * as React from 'react';

import { ColorModeContext } from './context';

export function useColorMode() {
  const context = React.useContext(ColorModeContext);
  if (!context || Object.keys(context).length === 0) {
    throw new Error('useColorMode must be used within a ThemeProvider');
  }
  return context;
}
