import React from 'react';
import MovieCardContainer from './MovieCardContainer';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from '../../reducers';

describe('MovieCardContainer', () => {
  let utils;

  beforeEach(() => {
    const store = createStore(rootReducer);
    utils = render(
      <Provider store={store}>
          <MovieCardContainer
            isLoading={false}
            topMovies={[
              {
                id: 37,
                title: "Camp Cold Brook",
                poster_path: "https://image.tmdb.org/t/p/original//monyWRt8a3891KZKEAg6ApsyKv6.jpg",
                backdrop_path: "https://image.tmdb.org/t/p/original//6vZQNgWNv5MOaiVefY9qRPyyhSD.jpg",
                release_date: "2020-04-09",
                overview: "Strange events plague crew members of a reality TV show when they visit an infamous backwoods camp that was the site of a mass murder 20 years earlier.",
                average_rating: 3
              }
            ]}
            latestMovies={[
              {
                id: 37,
                title: "Camp Cold Brook",
                poster_path: "https://image.tmdb.org/t/p/original//monyWRt8a3891KZKEAg6ApsyKv6.jpg",
                backdrop_path: "https://image.tmdb.org/t/p/original//6vZQNgWNv5MOaiVefY9qRPyyhSD.jpg",
                release_date: "2020-04-09",
                overview: "Strange events plague crew members of a reality TV show when they visit an infamous backwoods camp that was the site of a mass murder 20 years earlier.",
                average_rating: 3
              }
            ]}
          />
      </Provider>
    );
  })

  it('should render the correct content', () => {
    const { debug, getByText } = utils;

    const latestTitle = getByText('Latest');
    const topRatedTitle = getByText('Top Rated');

    expect(latestTitle).toBeInTheDocument();
    expect(topRatedTitle).toBeInTheDocument();
  });
});
