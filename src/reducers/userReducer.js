export const userReducer = (state = {}, action) => {
  switch (action.type) {
    case 'LOGIN_USER':
      return action.payload;
      break;
    case 'LOGOUT_USER':
    return null;
      break;
    default:
      return state;
  }
}
