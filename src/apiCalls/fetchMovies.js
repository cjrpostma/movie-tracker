import { BASE_URL, MOVIES } from './constants';

export const fetchMovies = async () => {
  const response = await fetch(BASE_URL + MOVIES);

  if (!response.ok) {
    throw new Error('Error fetching movies.');
  }

  const data = await response.json();

  return data.movies;
};
