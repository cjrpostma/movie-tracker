import * as actionTypes from '../actionTypes';

export const ratingsReducer = (state = [], action) => {
  switch (action.type) {
    case actionTypes.GET_RATINGS_SUCCESS:
      return action.payload;

    case actionTypes.POST_RATING_SUCCESS:
      return action.payload;

    case actionTypes.DELETE_RATING_SUCCESS:
      return action.payload;

    default:
      return state;
  }
};
