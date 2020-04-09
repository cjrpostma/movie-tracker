import { hasErrored, isLoading, getRatingsSuccess } from '../actions';
import { getRatings } from '../apiCalls/getRatings';

export const requestRatings = () => async dispatch => {
  try {
    dispatch(isLoading(true));
    const ratings = await getRatings();
    await dispatch(getRatingsSuccess(ratings));
    dispatch(isLoading(false));
  } catch (error) {
    dispatch(isLoading(false));
    dispatch(hasErrored(error.message));
  }
};
