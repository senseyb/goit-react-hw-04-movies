import React from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
import MoviePreview from '../MoviePreview';
import styles from './MovieList.module.css';

const MovieList = ({ movies, location }) => {
  return (
    <ul className={styles.List}>
      {movies.map(({ id, poster_path, title, vote_average }) => (
        <li className={styles.ListItem} key={id}>
          <Link
            className={styles.Link}
            to={{
              pathname: `/movies/${id}`,
              state: {
                from: location,
              },
            }}
          >
            <MoviePreview
              posterUrl={poster_path}
              title={title}
              vote={vote_average}
            />
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default withRouter(MovieList);

MovieList.defaultProps = {
  poster_path: '',
};

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      poster_path: PropTypes.string,
      title: PropTypes.string.isRequired,
      vote_average: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
  location: PropTypes.object.isRequired,
};
