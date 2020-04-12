import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Nav from './Nav';

describe('Nav', () => {
  it('should render the correct content', () => {
    const { getByText } = render(
      <BrowserRouter>
        <Nav />
      </BrowserRouter>
    );

    expect(getByText('Browse')).toBeInTheDocument();
    expect(getByText('View all')).toBeInTheDocument();
    expect(getByText('Top rated')).toBeInTheDocument();
    expect(getByText('Filter')).toBeInTheDocument();
    expect(getByText('Rating')).toBeInTheDocument();
    expect(getByText('Release date')).toBeInTheDocument();
  });
});
