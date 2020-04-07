import React from 'react';
import './MovieCard.css';

const MovieCard = () => (
  <article className="movie-card">
    <img
      src="https://image.tmdb.org/t/p/original//8WUVHemHFH2ZIP6NWkwlHWsyrEL.jpg"
      alt=""
      className="movie-card-image"
    />
    <div className="title-wrapper">
      <p className="movie-card-title">Bloodshot</p>
      <p className="movie-card-rating">
        5 <i className="fas fa-star"></i>
      </p>
    </div>
  </article>
);

export default MovieCard;
