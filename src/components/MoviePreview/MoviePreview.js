import React from 'react';
import PropTypes from 'prop-types';
import defaultImage from '../../images/noPosterImg.png';
import styles from './MoviePreview.module.css';

const MOVIE_PREVIEW_URL = 'https://image.tmdb.org/t/p/w500';

const MoviePreview = ({ posterUrl, title, vote }) => {
  return (
    <div>
      <img
        className={styles.Image}
        src={posterUrl ? `${MOVIE_PREVIEW_URL}${posterUrl}` : defaultImage}
        alt={`${title} poster`}
      />
      <div className={styles.MovieContent}>
        <p className={styles.Title}>{title}</p>
        <p className={styles.Vote}>{vote}</p>
      </div>
    </div>
  );
};

export default MoviePreview;

MoviePreview.defaultProps = {
  posterUrl: '',
};

MoviePreview.propTypes = {
  posterUrl: PropTypes.string,
  title: PropTypes.string.isRequired,
  vote: PropTypes.number.isRequired,
};
