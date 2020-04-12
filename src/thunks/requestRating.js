import { hasErrored, isLoading, postRatingSuccess } from '../actions';
import { postRating } from '../apiCalls/postRating';
import { getRatings } from '../apiCalls/getRatings';
import { deleteRating } from '../apiCalls/deleteRating';

export const requestRating = (
  movieID,
  userID,
  newRating,
  ratingID
) => async dispatch => {
  try {
    dispatch(isLoading(true));
    if (ratingID) {
      await deleteRating(userID, ratingID);
    }
    await postRating(movieID, userID, newRating);
    const updatedRatings = await getRatings(userID);
    await dispatch(postRatingSuccess(updatedRatings));
    dispatch(isLoading(false));
  } catch (error) {
    dispatch(isLoading(false));
    dispatch(hasErrored(error.message));
  }
};
