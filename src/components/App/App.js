import React from 'react';
import MovieCardContainer from '../MovieCardContainer/MovieCardContainer';
import { fetchMovies } from '../../apiCalls/fetchMovies';

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
    return <div><MovieCardContainer movies={this.state.movies}/></div>
  }
};

export default App;
