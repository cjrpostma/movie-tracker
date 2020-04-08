import { hasErrored, isLoading, loginUser } from '../actions';
import { postUser } from '../apiCalls/postUser';

export const authorizeUser = loginData => async dispatch => {
  try {
    dispatch(isLoading(true));
    const response = await postUser(loginData);
    if (!response.ok) {
      throw Error('Please use a valid username and password.');
    }
    const data = await response.json();
    dispatch(isLoading(false));
    await dispatch(loginUser(data.user));
    dispatch(hasErrored(null));
  } catch (error) {
    dispatch(isLoading(false));
    dispatch(hasErrored(error.message));
  }
};
