import * as actionTypes from '../actionTypes';

// loading, error actions
export const hasErrored = errorMessage => ({
  type: actionTypes.HAS_ERRORED,
  payload: errorMessage,
});

export const isLoading = status => ({
  type: actionTypes.IS_LOADING,
  payload: status,
});

// user actions
export const loginUser = userInfo => ({
  type: actionTypes.LOGIN_USER,
  payload: userInfo,
});

export const logoutUser = () => ({
  type: actionTypes.LOGOUT_USER,
});

// movie actions
export const getMoviesSuccess = movies => ({
  type: actionTypes.GET_MOVIES_SUCCESS,
  payload: movies,
});

// rating actions
export const getRatingsSuccess = ratings => ({
  type: actionTypes.GET_RATINGS_SUCCESS,
  payload: ratings,
});

export const postRatingSuccess = ratings => ({
  type: actionTypes.POST_RATING_SUCCESS,
  payload: ratings,
});

export const deleteRatingSuccess = ratings => ({
  type: actionTypes.DELETE_RATING_SUCCESS,
  payload: ratings,
});
