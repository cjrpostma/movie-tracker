export const loginUser = userInfo => ({
  type: 'LOGIN_USER',
  payload: userInfo
})

export const logOutUser = () => ({
  type: 'LOGOUT_USER'
});
