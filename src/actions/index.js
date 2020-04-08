import * as actionTypes from '../actionTypes';

export const hasErrored = errorMessage => ({
  type: actionTypes.HAS_ERRORED,
  payload: errorMessage,
});

export const isLoading = status => ({
  type: actionTypes.IS_LOADING,
  payload: status,
});

export const loginUser = userInfo => ({
  type: actionTypes.LOGIN_USER,
  payload: userInfo,
});

export const logoutUser = () => ({
  type: actionTypes.LOGOUT_USER,
});

export const requestMovies = movies => ({
  type: actionTypes.REQUEST_MOVIES,
  payload: movies,
});
