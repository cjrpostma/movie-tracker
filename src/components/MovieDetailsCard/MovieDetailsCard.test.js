import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import MovieDetailsCard from './MovieDetailsCard';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from '../../reducers';

describe('MovieDetailsCard', () => {
  const store = createStore(rootReducer);
  let utils;

  beforeEach(() => {
    utils = render(
      <Provider store={store}>
          <MovieDetailsCard
            image={"http://google.com/"}
            releaseDate={"02-02-2020"}
            title={"Dummy Movie"}
            rating={6}
            overview={"Overview"}
            id={5}
          />
      </Provider>);
  })

  it('should render the correct content', () => {
    const { getByText, getByAltText } = utils;

    const movieTitle = getByText("Dummy Movie");
    const movieRating = getByText("Rating: 6");
    const movieRelease = getByText("Release Date: 02-02-2020");
    const movieDescription = getByText("Overview");
    const img = getByAltText("Dummy Movie");

    expect(movieTitle).toBeInTheDocument();
    expect(movieRating).toBeInTheDocument();
    expect(img.src).toEqual("http://google.com/");
    expect(movieRelease).toBeInTheDocument();
    expect(movieDescription).toBeInTheDocument();
  });
});
