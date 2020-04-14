import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import MovieDetailsCard from './MovieDetailsCard';

describe('MovieDetailsCard', () => {
  it.skip('should render the correct content', () => {
    const { getByText } = render(<MovieDetailsCard />);

    expect(
      getByText("Sorry, we can't seem to find the page you were looking for.")
    ).toBeInTheDocument();
  });
});
