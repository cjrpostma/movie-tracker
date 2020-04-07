import React from 'react';
import { fetchMovies } from '../../apiCalls/fetchMovies';
import MovieCardContainer from '../MovieCardContainer/MovieCardContainer';
import Header from '../Header/Header';

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
        <MovieCardContainer movies={this.state.movies} />
      </div>
    );
  }
}

export default App;
