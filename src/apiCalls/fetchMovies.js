export function fetchMovies() {
  return fetch('https://rancid-tomatillos.herokuapp.com/api/v1/movies')
    .then(res => res.json())
    .then(movies => movies.movies)
    .catch(err => console.log(err));
}
