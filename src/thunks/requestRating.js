import { hasErrored, isLoading, postRatingSuccess } from '../actions';
import { postRating } from '../apiCalls/postRating';
import { getRatings } from '../apiCalls/getRatings';

export const requestRating = (movieID, userID, newRating) => async dispatch => {
  try {
    dispatch(isLoading(true));
    const rating = await postRating(movieID, userID, newRating);
    const updatedRatings = await getRatings(userID);
    await dispatch(postRatingSuccess(updatedRatings));
    dispatch(isLoading(false));
  } catch (error) {
    dispatch(isLoading(false));
    dispatch(hasErrored(error.message));
  }
}
