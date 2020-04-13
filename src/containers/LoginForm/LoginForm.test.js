import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import LoginForm from './LoginForm';

import { fireEvent, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from '../../reducers';

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

    expect(getByRole('button', { name: 'Log in' })).toHaveAttribute('disabled');

    fireEvent.change(getByLabelText('Email'), {
      target: { value: 'sam@turing.io' },
    });

    fireEvent.change(getByLabelText('Password'), {
      target: { value: '123456' },
    });

    expect(getByRole('button', { name: 'Log in' })).not.toHaveAttribute(
      'disabled'
    );

    expect(getByLabelText('Email').value).toEqual('sam@turing.io');
    expect(getByLabelText('Password').value).toEqual('123456');
  });
});
