import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getMovie } from '../../selectors/';
import MovieDetailsCard from '../../components/MovieDetailsCard/MovieDetailsCard';
import Loader from '../../components/Loader/Loader';

const MovieDetails = ({ match, movie}) => {

  return (
    <div>
      <MovieDetailsCard
        image={movie.poster_path}
        releaseDate={movie.release_date}
        title={movie.title}
        rating={movie.avg_rating}
        overview={movie.overview}
      />
    </div>
  )
}

const mapStateToProps = (state, props) => ({
  movie: getMovie(state, props.match.params.id)
});

export default connect(mapStateToProps)(MovieDetails);
