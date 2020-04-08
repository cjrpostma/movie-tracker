import * as actionTypes from '../actionTypes';

export const errorReducer = (state = null, action) => {
  switch (action.type) {
    case actionTypes.HAS_ERRORED:
      return action.payload;
    default:
      return state;
  }
};
