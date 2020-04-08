import * as actionTypes from '../actionTypes';

export const loadingReducer = (state = false, action) => {
  switch (action.type) {
    case actionTypes.IS_LOADING:
      return action.payload;
    default:
      return state;
  }
};
