import React from 'react';
import './MovieDetailsCard.scss';

const MovieDetailsCard = (
  {
    image,
    releaseDate,
    title,
    rating,
    overview
  }) => {
  return <section className="movie-details-card-wrapper">
    <img src={image} />
    <article>
    <p>Release Date: {releaseDate}</p>
    <h2>{title}</h2>
    <p>Rating: {rating}</p>
    <p>{overview}</p>
    </article>
  </section>
}

export default MovieDetailsCard;
