import { screen } from '@testing-library/react';

import { render } from '~/tests/providers';

import { DRAWER_WIDTH, MainNavigation } from '.';

const mockToggleMenu = jest.fn();

describe('MainNavigation', () => {
  it('should render main menu drawer', () => {
    render(<MainNavigation open toggleMenu={mockToggleMenu} />);
    const drawer = screen.getByTestId('main-drawer');
    expect(drawer).toBeInTheDocument();
  });

  it('should be DRAWER_WIDTH wide when open', () => {
    render(<MainNavigation open toggleMenu={mockToggleMenu} />);
    const drawer = screen.getByTestId('main-drawer');
    expect(drawer).toHaveStyle({ width: DRAWER_WIDTH });
  });

  it('should render toggle button in drawer', () => {
    render(<MainNavigation open toggleMenu={mockToggleMenu} />);
    const toggle = screen.getByTestId('main-drawer-toggle');
    expect(toggle).toBeInTheDocument();
  });

  it('should call toggleMenu when toggle button is clicked', () => {
    render(<MainNavigation open={false} toggleMenu={mockToggleMenu} />);
    const toggle = screen.getByTestId('main-drawer-toggle');
    toggle.click();
    expect(mockToggleMenu).toHaveBeenCalled();
  });
});
