import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';
import { cleanup, render, waitForElement } from '@testing-library/react';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from '../../reducers';

import Header from './Header';

function renderWithRedux(
  component,
  { initialState, store = createStore(rootReducer, initialState) } = {}
) {
  return {
    ...render(
      <Provider store={store}>
        <BrowserRouter>{component}</BrowserRouter>
      </Provider>
    ),
  };
}

describe('App', () => {
  afterEach(cleanup);

  it('should render the correct content', async () => {
    const { getByText } = renderWithRedux(<Header />);

    expect(getByText('Movie Tracker')).toBeInTheDocument();
    expect(getByText('Log in')).toBeInTheDocument();
  });

  it('should welcome the user when authenticated', () => {
    const user = { id: 2, name: 'Sam', email: 'sam@turing.io' };

    const { getByText } = renderWithRedux(<Header />, {
      initialState: { user },
    });

    expect(getByText('Hi, Sam')).toBeInTheDocument();
    expect(getByText('Log out')).toBeInTheDocument();
  });
});
