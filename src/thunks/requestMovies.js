import { hasErrored, isLoading, getMoviesSuccess } from '../actions';
import { getMovies } from '../apiCalls/getMovies';

export const requestMovies = () => async dispatch => {
  try {
    dispatch(isLoading(true));
    const movies = await getMovies();
    await dispatch(getMoviesSuccess(movies));
    dispatch(isLoading(false));
  } catch (error) {
    dispatch(isLoading(false));
    dispatch(hasErrored(error.message));
  }
};
