import { screen } from '@testing-library/react';

import { render, setCookie } from '~/tests/providers';

import { MainLayout } from './Main';

describe('Main Layout', () => {
  it('should have a root box', () => {
    render(
      <MainLayout session={null} userMenuState setCookie={setCookie}>
        Content
      </MainLayout>
    );
    const root = screen.getByTestId('root-box');
    expect(root).toBeInTheDocument();
  });
});
