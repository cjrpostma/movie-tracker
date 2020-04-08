export const getMovie = (state, id) => {
  return state.movies.filter(movie => movie.id === parseInt(id))
}
