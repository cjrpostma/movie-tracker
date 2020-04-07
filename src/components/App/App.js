import React from 'react';
import MovieCardContainer from '../MovieCardContainer/MovieCardContainer';
import { fetchMovies } from '../../apiCalls/fetchMovies';
import LoginForm from '../LoginForm/LoginForm';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      movies: []
    }
  }

  componentDidMount() {
    fetchMovies().then(movies => this.setState({movies: movies}));
  }

  render() {
    return (
      <div>
        <LoginForm />
        <MovieCardContainer movies={this.state.movies}/>
      </div>)
  }
};

export default App;
