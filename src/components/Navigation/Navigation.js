import React from 'react';
import { NavLink } from 'react-router-dom';
import routes from '../../routes';
import styles from './Navigation.module.css';

const Navigation = () => {
  return (
    <nav>
      <ul className={styles.List}>
        <li className={styles.ListItem}>
          <NavLink
            exact
            to={routes.home}
            className={styles.NavLink}
            activeClassName={styles.NavLinkActive}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to={routes.movies}
            className={styles.NavLink}
            activeClassName={styles.NavLinkActive}
          >
            Movies
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
