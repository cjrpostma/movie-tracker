import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';
import { cleanup, render, waitForElement } from '@testing-library/react';

import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import rootReducer from '../../reducers';

import App from './App';

import { getMovies } from '../../apiCalls/getMovies';

jest.mock('../../apiCalls/getMovies.js');

function renderWithRedux(
  component,
  {
    initialState,
    store = createStore(rootReducer, initialState, applyMiddleware(thunk)),
  } = {}
) {
  return {
    ...render(
      <Provider store={store}>
        <BrowserRouter>{component}</BrowserRouter>
      </Provider>
    ),
  };
}

const mockResponse = [
  {
    id: 1,
    title: 'Bloodshot',
    poster_path: 'https://image.jpg',
    backdrop_path: 'https://image.jpg',
    release_date: '2020-03-05',
    overview: 'After he and his wife are murdered...',
    average_rating: 5.75,
  },
  {
    id: 2,
    title: 'Sonic the Hedgehog',
    poster_path: 'https://image.jpg',
    backdrop_path: 'https://image.jpg',
    release_date: '2020-02-12',
    overview: 'Based on the global blockbuster videogame...',
    average_rating: 5.6,
  },
];

describe('App', () => {
  beforeEach(() => {
    getMovies.mockResolvedValueOnce(mockResponse);
  });

  afterEach(cleanup);

  it('should render the correct content', async () => {
    const {
      getByRole,
      getByText,
      queryAllByAltText,
      queryAllByText,
    } = renderWithRedux(<App />);

    expect(getByText('Movie Tracker')).toBeInTheDocument();
    expect(getByText('Log in')).toBeInTheDocument();
    expect(getByRole('navigation')).toBeInTheDocument();
    expect(getByText('Latest')).toBeInTheDocument();
    expect(getByText('Top Rated')).toBeInTheDocument();
    expect(getByRole('status')).toBeInTheDocument();

    // await waitForElement(() => {
    // expect(queryAllByAltText('Poster for Bloodshot')[0]).toBeInTheDocument();
    // expect(queryAllByText('Bloodshot')[0]).toBeInTheDocument();
    // expect(queryAllByText('6')[0]).toBeInTheDocument();
    // });
  });
});
