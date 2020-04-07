import React from 'react';
import MovieCard from '../MovieCard/MovieCard';
import './MovieCardContainer.css';

const showMovies = (movies) => {
  return movies.map(movie => (
    <MovieCard
      key={movie.id}
      title={movie.title}
      image={movie.poster_path}
      imageBackdrop={movie.backdrop_path}
      release={movie.release_date}
      description={movie.overview}
      avgRating={movie.average_rating}
    />))
}

const MovieCardContainer = ({ movies }) => (
  <section className="container-wrapper">
  <h2 className="container-title">Movies</h2>
    <section className="card-container">
      {showMovies(movies)}
    </section>
  </section>
);

export default MovieCardContainer;
