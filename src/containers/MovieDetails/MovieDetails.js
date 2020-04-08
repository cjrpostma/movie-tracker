import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { requestMovies } from '../../actions';
import './MovieDetails.scss';
import Loader from '../../components/Loader/Loader';

const MovieDetails = ({ match, movies}) => {
  const getMovie = (movies) => {
    const correctMovie = movies.find(movie => movie.id === parseInt(match.params.id));
    console.log(correctMovie);
    if (correctMovie) {
      return (
        <section className="movie-details-wrapper">
          <img src={correctMovie.poster_path} />
          <article>
          <p>Release Date: {correctMovie.release_date}</p>
          <h2>{correctMovie.title}</h2>
          <p>Rating: {correctMovie.average_rating}</p>
          <p>{correctMovie.overview}</p>
          </article>
        </section>
      )
    }
  }

  return <div>{getMovie(movies)}</div>
}

const mapStateToProps = state => ({
  movies: state.movies
});

export default connect(mapStateToProps)(MovieDetails);
