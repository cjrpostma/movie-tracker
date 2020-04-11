import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import LoginForm from './LoginForm';

import { fireEvent, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from '../../reducers';

import { authorizeUser } from '../../thunks/authorizeUser';

describe('LoginForm', () => {
  it('should render the correct content', () => {
    const store = createStore(rootReducer);
    const { getByLabelText, getByRole, getByTestId } = render(
      <Provider store={store}>
        <BrowserRouter>
          <LoginForm />
        </BrowserRouter>
      </Provider>
    );

    expect(getByRole('heading', { name: 'Log in' })).toBeInTheDocument();
    expect(getByTestId('close-button')).toBeInTheDocument();
    expect(getByLabelText('Email')).toBeInTheDocument();
    expect(getByLabelText('Password')).toBeInTheDocument();
    expect(getByRole('button', { name: 'Log in' })).toBeInTheDocument();
  });

  it('should be able to update input values', () => {
    const store = createStore(rootReducer);
    const { getByLabelText, getByRole } = render(
      <Provider store={store}>
        <BrowserRouter>
          <LoginForm />
        </BrowserRouter>
      </Provider>
    );

    fireEvent.change(getByLabelText('Email'), {
      target: { value: 'sam@turing.io' },
    });

    fireEvent.change(getByLabelText('Password'), {
      target: { value: '123456' },
    });

    // fireEvent.click(getByRole('button', { name: 'Log in' }));
  });
});
