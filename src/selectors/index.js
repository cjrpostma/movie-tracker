export const getMovie = (state, id) => {
  return state.movies.find(movie => movie.id === parseInt(id)) || {};
}
