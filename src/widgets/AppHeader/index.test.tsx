import { act, screen } from '@testing-library/react';

import { render } from '~/tests/providers';

import { AppHeader } from '.';

describe('AppHeader', () => {
  it('should have button to open drawer when drawer is closed', () => {
    render(<AppHeader open={false} />);
    const button = screen.getByTestId('header-menu-button');
    expect(button).toBeVisible();
  });

  it('should not have button to open drawer when drawer is open', () => {
    render(<AppHeader open />);
    const button = screen.queryByTestId('header-menu-button');
    expect(button).not.toBeVisible();
  });

  it('should have theme button', () => {
    render(<AppHeader />);
    const button = screen.getByTestId('header-theme-button');
    expect(button).toBeVisible();
  });

  it('should change theme icon when theme is changed', async () => {
    render(<AppHeader />);
    const button = screen.getByTestId('header-theme-button');
    expect(button).toContainElement(screen.getByTestId('DarkModeIcon'));
    await act(async () => button.click());
    expect(button).toContainElement(screen.getByTestId('LightModeIcon'));
  });
});
