import { hasErrored, isLoading, requestMovies } from '../actions';
import { fetchMovies } from '../apiCalls/fetchMovies';

export const getMovies = async dispatch => {
  try {
    dispatch(isLoading(true));
    const response = await fetchMovies();
    if (!response.ok) {
      throw Error('Error fetching movies.');
    }
    const data = await response.json();
    dispatch(isLoading(false));
    await dispatch(requestMovies(data.movies));
  } catch (error) {
    dispatch(isLoading(false));
    dispatch(hasErrored(error.message));
  }
};
