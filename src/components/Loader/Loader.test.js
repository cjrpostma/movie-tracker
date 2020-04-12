import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Loader from './Loader';

describe('Loader', () => {
  it('should render the correct content', () => {
    const { getByRole } = render(<Loader />);

    expect(getByRole('status')).toBeInTheDocument();
  });
});
