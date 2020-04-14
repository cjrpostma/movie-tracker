import React from 'react';
import MovieDetailsContainer from './MovieDetailsContainer';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from '../../reducers';

describe('MovieCardContainer', () => {
  let utils;
  const store = createStore(rootReducer);

  beforeEach(() => {
    utils = render(
      <Provider store={store}>
          <MovieDetailsContainer
            match={{params: {id: 5}}}
            movie={{
              id: 2,
              title: "Sonic the Hedgehog",
              poster_path: "https://image.tmdb.org/t/p/original//aQvJ5WPzZgYVDrxLX4R6cLJCEaQ.jpg",
              backdrop_path: "https://image.tmdb.org/t/p/original//stmYfCUGd8Iy6kAMBr6AmWqx8Bq.jpg",
              release_date: "2020-02-12",
              overview: "Based on the global blockbuster videogame franchise from Sega, Sonic the Hedgehog tells the story of the world’s speediest hedgehog as he embraces his new home on Earth. In this live-action adventure comedy, Sonic and his new best friend team up to defend the planet from the evil genius Dr. Robotnik and his plans for world domination.",
              average_rating: 4.6,
            }}
          />
      </Provider>
    );
  })

  it('should render the correct content', () => {
    const { debug, getByText } = utils;

    debug();
  });
});
