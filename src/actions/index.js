export const loginUser = userInfo => ({
  type: 'LOGIN_USER',
  payload: userInfo,
});

export const logoutUser = () => ({
  type: 'LOGOUT_USER',
});
