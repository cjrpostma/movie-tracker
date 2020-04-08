export const hasErrored = errorMessage => ({
  type: 'HAS_ERRORED',
  payload: errorMessage,
});

export const isLoading = status => ({
  type: 'IS_LOADING',
  payload: status,
});

export const loginUser = userInfo => ({
  type: 'LOGIN_USER',
  payload: userInfo,
});

export const logoutUser = () => ({
  type: 'LOGOUT_USER',
});
