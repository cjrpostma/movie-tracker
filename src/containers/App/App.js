import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { requestMovies } from '../../thunks/requestMovies';
import MovieCardContainer from '../MovieCardContainer/MovieCardContainer';
import MovieDetailsContainer from '../MovieDetailsContainer/MovieDetailsContainer';
import LoginForm from '../LoginForm/LoginForm';
import Header from '../Header/Header';
import Nav from '../../components/Nav/Nav';
import PageNotFound from '../../components/PageNotFound/PageNotFound';

class App extends Component {
  componentDidMount() {
    this.props.requestMovies();
  }

  render() {
    return (
      <div className="layout">
        <Header />
        <Nav />
        <main className="main">
          <Switch>
            <Route path="/movies/:id" component={MovieDetailsContainer} />
            <Route path="/login" component={LoginForm} />
            <Route exact path="/" component={MovieCardContainer} />
            <Route component={PageNotFound} />
          </Switch>
        </main>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  requestMovies: () => dispatch(requestMovies()),
});

App.propTypes = {
  requestMovies: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(App);
