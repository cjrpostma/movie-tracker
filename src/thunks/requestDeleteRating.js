import { hasErrored, isLoading, deleteRatingSuccess } from '../actions';
import { deleteRating } from '../apiCalls/deleteRating';
import { getRatings } from '../apiCalls/getRatings';

export const requestDeleteRating = (userId, ratingId) => async dispatch => {
  try {
    dispatch(isLoading(true));
    await deleteRating(userId, ratingId);
    const ratings = await getRatings();
    await dispatch(deleteRatingSuccess(ratings));
    dispatch(isLoading(false));
  } catch (error) {
    dispatch(isLoading(false));
    dispatch(hasErrored(error.message));
  }
};
