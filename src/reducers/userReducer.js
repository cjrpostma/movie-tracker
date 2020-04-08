import * as actionTypes from '../actionTypes';

export const userReducer = (state = null, action) => {
  switch (action.type) {
    case actionTypes.LOGIN_USER:
      return action.payload;
    case actionTypes.LOGOUT_USER:
      return null;
    default:
      return state;
  }
};
