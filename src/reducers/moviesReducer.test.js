import { moviesReducer } from './moviesReducer';
import * as actionTypes from '../actionTypes';

describe('moviesReducer', () => {
  it('should return the initial state', () => {
    const expected = [];
    const result = moviesReducer(undefined, {});
    expect(result).toEqual(expected);
  });

  it('should return state with an array of movies', () => {
    const expected = [
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

    const result = moviesReducer([], {
      type: actionTypes.GET_MOVIES_SUCCESS,
      payload: expected,
    });

    expect(result).toEqual(expected);
  });
});
