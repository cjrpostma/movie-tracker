import React from 'react';
import { Link } from "react-router-dom";
import './MovieCard.scss';

const MovieCard = ({
  avgRating,
  description,
  id,
  image,
  imageBackdrop,
  release,
  title,
}) => (
  <Link to={"/movies/" + id}>
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
  </Link>
);

export default MovieCard;
