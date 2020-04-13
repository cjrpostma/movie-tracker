import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import PageNotFound from './PageNotFound';

describe('PageNotFound', () => {
  it('should render the correct content', () => {
    const { getByText } = render(<PageNotFound />);
    expect(
      getByText("Sorry, we can't seem to find the page you were looking for.")
    ).toBeInTheDocument();
  });
});
