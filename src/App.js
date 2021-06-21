import React, { Suspense, lazy } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import AppBar from './components/AppBar';
import Loader from './components/Loader';
import routes from './routes';
import styles from './App.module.css';

const HomePage = lazy(() =>
  import('./pages/HomePage' /* webpackChunkName: "home-page" */),
);
const MoviesPage = lazy(() =>
  import('./pages/MoviesPage' /* webpackChunkName: "movies-page" */),
);
const MovieDetailsPage = lazy(() =>
  import(
    './pages/MovieDetailsPage/MovieDetailsPage' /* webpackChunkName: "movie-details-page" */
  ),
);

const App = () => {
  return (
    <div className={styles.App}>
      <AppBar />
      <Suspense fallback={<Loader />}>
        <Switch>
          <Route exact path={routes.home} component={HomePage} />
          <Route exact path={routes.movies} component={MoviesPage} />
          <Route path={routes.movieDetails} component={MovieDetailsPage} />
          <Redirect to={routes.home} />
        </Switch>
      </Suspense>
    </div>
  );
};

export default App;
