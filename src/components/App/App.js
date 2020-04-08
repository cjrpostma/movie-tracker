import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { fetchMovies } from '../../apiCalls/fetchMovies';
import MovieCardContainer from '../MovieCardContainer/MovieCardContainer';
import LoginForm from '../../containers/LoginForm/LoginForm';
import Header from '../../containers/Header/Header';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      movies: [],
    };
  }

  componentDidMount() {
    fetchMovies().then(movies => this.setState({ movies }));
  }

  render() {
    return (
      <div>
        <Header />
        <Route path="/movies:id" />
        <Route path="/login" render={() => <LoginForm />} />
        <Route
          exact
          path="/"
          render={() => (
            <MovieCardContainer movies={this.state.movies} label="Trending" />
          )}
        />
      </div>
    );
  }
}

export default App;
