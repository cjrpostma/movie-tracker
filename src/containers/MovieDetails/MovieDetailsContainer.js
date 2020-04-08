import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { requestMovies } from '../../actions';
import { getMovie } from '../../selectors/';
import './MovieDetailsContainer.scss';
import MovieDetailsCard from '../../components/MovieDetailsCard/MovieDetailsCard';
import Loader from '../../components/Loader/Loader';

const MovieDetails = ({ match, movies}) => {

  const correctMovie = movies.find(movie => movie.id === parseInt(match.params.id)) || {};

  return (
    <div>
      <MovieDetailsCard
        image={correctMovie.poster_path}
        releaseDate={correctMovie.release_date}
        title={correctMovie.title}
        rating={correctMovie.avg_rating}
        overview={correctMovie.overview}
      />
    </div>
  )
}

const mapStateToProps = (state, props) => ({
  movies: getMovie(state, props.match.params.id)
});

export default connect(mapStateToProps)(MovieDetails);
