import React, { Component } from 'react';
import SearchBar from '../components/Searchbar';
import MovieList from '../components/MovieList';
import { fetchMovieByName } from '../services/api-service';
const queryString = require('query-string');

class MoviesPage extends Component {
  state = {
    movies: [],
  };

  componentDidMount() {
    const query = this.getQueryFromProps(this.props);

    if (query) {
      this.onChangeQuery(query);
    }
  }

  onChangeQuery = query => {
    fetchMovieByName(query)
      .then(({ data }) => {
        this.setState({
          searchQuery: query,
          movies: data.results,
        });
      })
      .then(() => {
        const { history, location } = this.props;

        history.push({
          pathname: location.pathname,
          search: `?query=${query}`,
        });
      })
      .catch(console.log);
  };

  getQueryFromProps = props => queryString.parse(props.location.search).query;

  render() {
    const { movies } = this.state;
    const { onChangeQuery } = this;

    return (
      <>
        <SearchBar onSubmit={onChangeQuery} />
        <MovieList movies={movies} />
      </>
    );
  }
}

export default MoviesPage;
