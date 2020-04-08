export const loginUser = userInfo => ({
  type: 'LOGIN_USER',
  payload: userInfo
})

export const logOutUser = (logout) => ({
  type: 'LOGOUT_USER',
  payload: logout
});
