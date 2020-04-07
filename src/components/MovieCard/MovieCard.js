import React from 'react';
import './MovieCard.css';

const MovieCard = ({
  title,
  image,
  imageBackdrop,
  release,
  description,
  avgRating
}) => (
  <article className="movie-card">
<<<<<<< HEAD
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
=======
    <img src={image} alt={"Poster for " + title} className="movie-card-image"/>
    <div className="title-wrapper">
      <p className="movie-card-title">{title}</p>
      <p className="movie-card-rating">{avgRating}<i className="fas fa-star"></i></p>
>>>>>>> master
    </div>
  </article>
);

export default MovieCard;
