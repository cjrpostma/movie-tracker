import * as actionTypes from '../actionTypes';
import { errorReducer } from './errorReducer';

describe('errorReducer', () => {
  it('should return the initial state', () => {
    const expected = null;
    const result = errorReducer(undefined, {});

    expect(result).toEqual(expected);
  });

  it('should return state with a new error message', () => {
    const expected = 'Please use a valid username and password.';
    const result = errorReducer(null, {
      type: actionTypes.HAS_ERRORED,
      payload: 'Please use a valid username and password.',
    });

    expect(result).toEqual(expected);
  });
});
