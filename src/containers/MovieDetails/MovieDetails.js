import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { requestMovies } from '../../actions';
import './MovieDetails.scss';
import Loader from '../../components/Loader/Loader';

const MovieDetails = ({ match, movies}) => {
  console.log(movies);
  const getMovie = (movies) => {
    const correctMovie = movies.find(movie => movie.id === parseInt(match.params.id));
    console.log(correctMovie);
    return <div></div>
  }

  return <div>{getMovie(movies)}</div>
}

const mapStateToProps = state => ({
  movies: state.movies
});

export default connect(mapStateToProps)(MovieDetails);
