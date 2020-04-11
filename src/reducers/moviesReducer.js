import * as actionTypes from '../actionTypes';

export const moviesReducer = (state = [], action) => {
  switch (action.type) {
    case actionTypes.GET_MOVIES_SUCCESS:
      return action.payload;
    default:
      return state;
  }
};
