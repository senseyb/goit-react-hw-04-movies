import React from 'react';
import PropTypes from 'prop-types';
import defaultAvatar from '../../images/defaultAvatar.png';
import styles from './Cast.module.css';

const CAST_IMG_URL = 'https://image.tmdb.org/t/p/w200';

const Cast = ({ cast }) => {
  return (
    <>
      {cast.length > 0 ? (
        <ul className={styles.CastList}>
          {cast.map(({ cast_id, profile_path, name, character }) => (
            <li className={styles.CastListItem} key={cast_id}>
              <img
                className={styles.Image}
                src={
                  profile_path
                    ? `${CAST_IMG_URL}${profile_path}`
                    : defaultAvatar
                }
                alt={name}
              />
              <div className={styles.CastItemContent}>
                <h3>{name}</h3>
                <p>{character}</p>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <h2 className={styles.NoInfoTitle}>No Info</h2>
      )}
    </>
  );
};

export default Cast;

Cast.defaultProps = {
  cast: [],
  profile_path: '',
};

Cast.propTypes = {
  cast: PropTypes.arrayOf(
    PropTypes.shape({
      cast_id: PropTypes.number.isRequired,
      profile_path: PropTypes.string,
      name: PropTypes.string.isRequired,
      character: PropTypes.string.isRequired,
    }),
  ),
};
