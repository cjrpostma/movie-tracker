import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getTopMovies, getLatestMovies } from '../../selectors';
import './_MovieCardContainer.scss';
import Loader from '../../components/Loader/Loader';
import MovieCard from '../../components/MovieCard/MovieCard';

const MovieCardContainer = ({ isLoading, topMovies, latestMovies }) => {
  const renderedMovies = movies =>
    movies.map(movie => (
      <MovieCard
        avgRating={movie.average_rating}
        description={movie.overview}
        id={movie.id}
        image={movie.poster_path}
        imageBackdrop={movie.backdrop_path}
        key={movie.id}
        release={movie.release_date}
        title={movie.title}
      />
    ));

  return (
    <section className="container-wrapper">
      <h2 className="container-title">Latest</h2>
      {isLoading && <Loader />}
      <section className="card-container">
        {renderedMovies(latestMovies)}
      </section>
      <h2 className="container-title">Top Rated</h2>
      <section className="card-container">{renderedMovies(topMovies)}</section>
    </section>
  );
};

const mapStateToProps = state => ({
  isLoading: state.isLoading,
  topMovies: getTopMovies(state.movies),
  latestMovies: getLatestMovies(state.movies),
});

MovieCardContainer.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      average_rating: PropTypes.number,
      overview: PropTypes.string,
      id: PropTypes.number,
      poster_path: PropTypes.string,
      backdrop_path: PropTypes.string,
      release_date: PropTypes.string,
      title: PropTypes.string,
    })
  ),
};

export default connect(mapStateToProps)(MovieCardContainer);
