export const hasErrored = error => ({
  type: 'HAS_ERRORED',
  payload: error,
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
