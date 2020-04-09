import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import LoginForm from './LoginForm';

import { cleanup, fireEvent, render } from '@testing-library/react';
import '@testing-library/jest-dom';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { rootReducer } from '../../reducers';

describe('LoginForm', () => {
  it('should render the correct content', () => {
    const store = createStore(rootReducer);
    const { getByPlaceHolderText } = render(
      <Provider store={store}>
        <LoginForm />
      </Provider>
    );
  });
});
