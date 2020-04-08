import { hasErrored, isLoading, loginUser } from '../actions';
import { postUser } from '../apiCalls/postUser';

export const authorizeUser = loginData => async dispatch => {
  try {
    dispatch(isLoading(true));
    const user = await postUser(loginData);
    await dispatch(loginUser(user));
    dispatch(isLoading(false));
    dispatch(hasErrored(null));
  } catch (error) {
    dispatch(isLoading(false));
    dispatch(hasErrored(error.message));
  }
};
