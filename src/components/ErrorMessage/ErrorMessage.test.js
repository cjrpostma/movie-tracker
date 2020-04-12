import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ErrorMessage from './ErrorMessage';

describe('ErrorMessage', () => {
  const mockError = Error('mockMessage');

  it('should render an error if passed an error', () => {
    const { getByText, debug } = render(
      <ErrorMessage message={mockError.message} />
    );

    debug();
    expect(getByText('Error: mockMessage')).toBeInTheDocument();
  });
});
