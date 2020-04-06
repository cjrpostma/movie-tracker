import React from 'react';
import MovieCard from '../MovieCard/MovieCard';
import './MovieCardContainer.css'

const MovieCardContainer = () => (
  <section className="container-wrapper">
  <h2 className="container-title">Movies</h2>
    <section className="card-container">
      <MovieCard />
      <MovieCard />
      <MovieCard />
      <MovieCard />
      <MovieCard />
      <MovieCard />
      <MovieCard />
    </section>
  </section>
);

export default MovieCardContainer;
