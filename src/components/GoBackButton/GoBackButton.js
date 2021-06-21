import React from 'react';
import PropTypes from 'prop-types';
import styles from './GoBackButton.module.css';

const GoBackButton = ({ onClick }) => {
  return (
    <button className={styles.Button} type="button" onClick={onClick}>
      Go Back
    </button>
  );
};

export default GoBackButton;

GoBackButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};
