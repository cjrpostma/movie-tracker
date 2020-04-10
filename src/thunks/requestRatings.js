import { hasErrored, isLoading, getRatingsSuccess } from '../actions';
import { getRatings } from '../apiCalls/getRatings';

export const requestRatings = userID => async dispatch => {
  try {
    dispatch(isLoading(true));
    const ratings = await getRatings(userID);
    await dispatch(getRatingsSuccess(ratings));
    dispatch(isLoading(false));

    return true;
  } catch (error) {
    dispatch(isLoading(false));
    dispatch(hasErrored(error.message));
  }
};
