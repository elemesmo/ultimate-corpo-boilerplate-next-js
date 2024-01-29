import { screen } from '@testing-library/react';

import { render } from '~/tests/providers';

import { MainLayout } from './Main';

describe('Home Page', () => {
  it('should have a root box', () => {
    render(<MainLayout>Content</MainLayout>);
    const root = screen.getByTestId('root-box');
    expect(root).toBeInTheDocument();
  });
});
