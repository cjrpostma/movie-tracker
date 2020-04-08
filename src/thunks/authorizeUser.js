import { loginUser } from '../actions';
import { postUser } from '../apiCalls/postUser';

export const authorizeUser = loginData => async dispatch => {
  try {
    const response = await postUser(loginData);
    if (!response.ok) {
      throw new Error('Please use a valid username and password.');
    }
    const data = await response.json();
    await dispatch(loginUser(data.user));
  } catch (error) {}
};
