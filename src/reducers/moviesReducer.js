import * as actionTypes from '../actionTypes';

export const moviesReducer = (state = [], action) => {
  switch (action.type) {
    case actionTypes.REQUEST_MOVIES:
      return action.payload;
    default:
      return state;
  }
};
