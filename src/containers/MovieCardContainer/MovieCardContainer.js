import React from 'react';
import MovieCard from '../../components/MovieCard/MovieCard';
import './MovieCardContainer.scss';

const showMovies = movies =>
  movies.map(movie => (
    <MovieCard
      key={movie.id}
      title={movie.title}
      image={movie.poster_path}
      imageBackdrop={movie.backdrop_path}
      release={movie.release_date}
      description={movie.overview}
      avgRating={movie.average_rating}
    />
  ));

const MovieCardContainer = ({ movies, label }) => (
  <section className="container-wrapper">
    <h2 className="container-title">{label}</h2>
    <section className="card-container">{showMovies(movies)}</section>
  </section>
);

export default MovieCardContainer;
