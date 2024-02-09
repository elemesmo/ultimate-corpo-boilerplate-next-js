import { Box } from '@mui/material';

import {
  act,
  render as noWrapperRender,
  renderHook,
  screen,
} from '@testing-library/react';

import { getCookie, JestThemeProvider, setCookie } from '~/tests/providers';

import { ThemeProvider, useColorMode } from '.';

describe('Themes Feature', () => {
  describe('ThemeProvider', () => {
    it('should render without crashing', () => {
      noWrapperRender(
        <ThemeProvider setCookie={setCookie} getCookie={getCookie}>
          <Box>Content</Box>
        </ThemeProvider>
      );
      const div = screen.getByText('Content');
      expect(div).toBeInTheDocument();
    });
  });

  describe('useColorMode', () => {
    it('should change theme mode', async () => {
      const { result } = renderHook(() => useColorMode(), {
        wrapper: JestThemeProvider,
      });
      expect(result.current.palletMode).toBe('light');
      await act(async () => result.current.toggleColorMode());
      expect(result.current.palletMode).toBe('dark');
    });

    test('should throw error if not wrapped in ThemeProvider', () => {
      const spyLog = jest.spyOn(console, 'error').mockImplementation(() => {});
      expect(() => renderHook(() => useColorMode())).toThrow();
      expect(spyLog).toHaveBeenCalled();
      spyLog.mockRestore();
    });
  });
});
