import { screen } from '@testing-library/react';

import { render } from '~/tests/providers';

import { MainContent } from '.';

describe('MainContent', () => {
  it('should be wrapped in a container', () => {
    render(
      <MainContent>
        <p>Content</p>
      </MainContent>
    );
    const container = screen.getByTestId('content-container');
    expect(container).toBeInTheDocument();
  });
});
