import { hasErrored, isLoading, requestMovies } from '../actions';
import { fetchMovies } from '../apiCalls/fetchMovies';

export const getMovies = () => async dispatch => {
  try {
    dispatch(isLoading(true));
    const movies = await fetchMovies();
    await dispatch(requestMovies(movies));
    dispatch(isLoading(false));
  } catch (error) {
    dispatch(isLoading(false));
    dispatch(hasErrored(error.message));
  }
};
