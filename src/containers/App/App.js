import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { fetchMovies } from '../../apiCalls/fetchMovies';
import { getMovies } from '../../thunks/getMovies';
import MovieCardContainer from '../MovieCardContainer/MovieCardContainer';
import MovieDetailsContainer from '../MovieDetails/MovieDetailsContainer';
import LoginForm from '../LoginForm/LoginForm';
import Header from '../Header/Header';

class App extends Component {
  componentDidMount() {
    this.props.getMovies();
  }

  render() {
    return (
      <div>
        <Header />
        <Route path="/movies/:id" component={MovieDetailsContainer}/>
        <Route path="/login" component={LoginForm} />
        <Route exact path="/" component={MovieCardContainer} />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  getMovies: () => dispatch(getMovies()),
});

App.propTypes = {
  getMovies: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(App);
