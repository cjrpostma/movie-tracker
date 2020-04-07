import React from 'react';
import './MovieCard.css';

const MovieCard = ({
  title,
  image,
  imageBackdrop,
  release,
  description,
  avgRating,
}) => (
  <article className="movie-card">
    <img src={image} alt={`Poster for ${title}`} className="movie-card-image" />
    <div className="title-wrapper">
      <p className="movie-card-title">{title}</p>
      <p className="movie-card-rating">
        {avgRating}
        <i className="fas fa-star"></i>
      </p>
    </div>
  </article>
);

export default MovieCard;
