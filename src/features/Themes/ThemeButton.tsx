import { DarkMode, LightMode } from '@mui/icons-material';
import { IconButton } from '@mui/material';

import { useColorMode } from './lib/hook';

export function ThemeButton() {
  const colorMode = useColorMode();

  return (
    <IconButton
      aria-label="change theme"
      onClick={colorMode.toggleColorMode}
      sx={{ color: 'inherit' }}
      data-testid="header-theme-button"
    >
      {colorMode.palletMode === 'dark' ? <LightMode /> : <DarkMode />}
    </IconButton>
  );
}
