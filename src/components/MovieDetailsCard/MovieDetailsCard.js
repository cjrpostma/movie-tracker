import React from 'react';
import UserRating from '../UserRating/UserRating';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './MovieDetailsCard.scss';

const MovieDetailsCard = ({ image, releaseDate, title, rating, overview, user }) => (
  <section className="movie-details-card-wrapper">
    <img src={image} alt={title} />
    <article>
      <p>Release Date: {releaseDate}</p>
      <h2>{title}</h2>
      <p>Rating: {rating}</p>
      {user && <UserRating />}
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

const mapStateToProps = state => ({
  user: state.user
});

export default connect(mapStateToProps)(MovieDetailsCard);
