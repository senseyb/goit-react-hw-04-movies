import React from 'react';
import PropTypes from 'prop-types';
import defaultImage from '../../images/noPosterImg.png';
import styles from './Movie.module.css';

const BASE_POSTER_URL = 'https://image.tmdb.org/t/p/w300';

const Movie = ({ poster_path, title, overview }) => {
  return (
    <div className={styles.MovieBox}>
      <img
        className={styles.Image}
        src={poster_path ? `${BASE_POSTER_URL}${poster_path}` : defaultImage}
        alt={`${title} poster`}
      />
      <div>
        <h2 className={styles.MovieTitle}>{title}</h2>
        <p className={styles.MovieOverview}>{overview}</p>
      </div>
    </div>
  );
};

export default Movie;

Movie.defaultProps = {
  poster_path: '',
  overview: 'No overview',
  title: 'No title',
};

Movie.propTypes = {
  overview: PropTypes.string,
  poster_path: PropTypes.string,
  title: PropTypes.string,
};
