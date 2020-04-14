import { ratingsReducer } from './ratingsReducer';
import * as actionTypes from '../actionTypes';

describe('ratingsReducer', () => {
  it('should return the initial state', () => {
    const expected = [];
    const result = ratingsReducer(undefined, {});
    expect(result).toEqual(expected);
  });

  it('should return state with an array of ratings when getting', () => {
    const expected = [
      {
        id: 50,
        user_id: 2,
        movie_id: 18,
        rating: 5,
        created_at: "2020-04-10T22:18:31.559Z",
        updated_at: "2020-04-10T22:18:31.559Z",
      },
    ];

    const result = ratingsReducer([], {
      type: actionTypes.GET_RATINGS_SUCCESS,
      payload: expected,
    });

    expect(result).toEqual(expected);
  });

  it('should return state with an array of ratings when posting', () => {
    const expected = [
      {
        id: 50,
        user_id: 2,
        movie_id: 18,
        rating: 5,
        created_at: "2020-04-10T22:18:31.559Z",
        updated_at: "2020-04-10T22:18:31.559Z",
      },
    ];

    const result = ratingsReducer([], {
      type: actionTypes.POST_RATING_SUCCESS,
      payload: expected,
    });

    expect(result).toEqual(expected);
  });

  it('should return state with an array of ratings on delete', () => {
    const expected = [
      {
        id: 50,
        user_id: 2,
        movie_id: 18,
        rating: 5,
        created_at: "2020-04-10T22:18:31.559Z",
        updated_at: "2020-04-10T22:18:31.559Z",
      },
    ];

    const result = ratingsReducer([], {
      type: actionTypes.DELETE_RATING_SUCCESS,
      payload: expected,
    });

    expect(result).toEqual(expected);
  });
});
