export const getMovie = (state, id) =>
  state.movies.find(movie => movie.id === parseInt(id)) || {};

export const getTopMovies = movies => {
  const moviesCopy = [...movies];
  return moviesCopy.sort((a, b) => b.average_rating - a.average_rating);
};

export const getLatestMovies = movies => {
  const moviesCopy = [...movies];
  return moviesCopy.sort((a, b) => b.release_date - a.release_date);
};

export const getMovieRating = (id, ratings) => {
  const movie = {...ratings.find(item => item.movie_id === id)};

  if (movie.rating) {
    return movie.rating;
  } else {
    return null;
  }
}
