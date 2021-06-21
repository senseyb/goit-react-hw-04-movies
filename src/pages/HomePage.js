import React, { Component } from 'react';
import { fetchPopularMovies } from '../services/api-service';
import MovieList from '../components/MovieList';

class HomePage extends Component {
  state = {
    movies: [],
  };

  componentDidMount() {
    fetchPopularMovies()
      .then(({ data }) => this.setState({ movies: data.results }))
      .catch(console.log);
  }

  render() {
    const { movies } = this.state;

    return <MovieList movies={movies} />;
  }
}

export default HomePage;
