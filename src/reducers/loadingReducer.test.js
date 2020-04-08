import { loadingReducer } from './loadingReducer';
import * as actionTypes from '../actionTypes';

describe('loadingReducer', () => {
  it('should return the initial state', () => {
    const expected = false;
    const result = loadingReducer(undefined, {});
    expect(result).toEqual(expected);
  });

  it('should return state with new isLoading status', () => {
    const expected = true;
    const result = loadingReducer(false, {
      type: actionTypes.IS_LOADING,
      payload: true,
    });

    expect(result).toEqual(expected);
  });
});
