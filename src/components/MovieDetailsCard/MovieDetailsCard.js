import React from 'react';
import PropTypes from 'prop-types';
import './MovieDetailsCard.scss';

const MovieDetailsCard = ({ image, releaseDate, title, rating, overview }) => (
  <section className="movie-details-card-wrapper">
    <img src={image} alt={title} />
    <article>
      <p>Release Date: {releaseDate}</p>
      <h2>{title}</h2>
      <p>Rating: {rating}</p>
      <p>{overview}</p>
    </article>
  </section>
);

MovieDetailsCard.propTypes = {
  image: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  releaseDate: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default MovieDetailsCard;
