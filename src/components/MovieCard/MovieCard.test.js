import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import MovieCard from './MovieCard';
import { BrowserRouter } from 'react-router-dom';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from '../../reducers';

describe('MovieCard', () => {
  const store = createStore(rootReducer);
  let utils;

  beforeEach(() => {
    utils = render(
      <Provider store={store}>
        <BrowserRouter>
          <MovieCard
            avgRating={6}
            description={"Overview"}
            id={5}
            image={"http://google.com/"}
            imageBackdrop={"http://google.com/"}
            key={5}
            release={"02-02-2020"}
            title={"Dummy Movie"}
            user={2}
          />
        </BrowserRouter>
      </Provider>);
  })

  it('should render the correct content', () => {
    const { getByText, getByAltText, debug } = utils;

    const movieTitle = getByText("Dummy Movie");
    const movieRating = getByText("6");
    const img = getByAltText("Poster for Dummy Movie")

    debug();

    expect(movieTitle).toBeInTheDocument();
    expect(movieRating).toBeInTheDocument();
    expect(movieRating).toBeInTheDocument();
    expect(img.src).toEqual("http://google.com/");
  });
});
