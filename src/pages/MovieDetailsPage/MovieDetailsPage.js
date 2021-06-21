import React, { Component } from 'react';
import { NavLink, Route } from 'react-router-dom';
import { fetchMovieById } from '../../services/api-service';
import Movie from '../../components/Movie';
import Cast from '../../components/Cast';
import Reviews from '../../components/Reviews';
import GoBackButton from '../../components/GoBackButton';
import routes from '../../routes';
import styles from './MovieDetailsPage.module.css';

class MovieDetailsPage extends Component {
  state = {
    poster_path: '',
    title: '',
    overview: '',
    cast: [],
    reviews: [],
  };

  componentDidMount() {
    const { movieId } = this.props.match.params;

    fetchMovieById(movieId)
      .then(({ data: { poster_path, title, overview, credits, reviews } }) => {
        this.setState({
          poster_path,
          title,
          overview,
          cast: credits.cast,
          reviews: reviews.results,
        });
      })
      .catch(console.log);
  }

  handleGoBack = () => {
    const { location, history } = this.props;
    history.push(location?.state?.from || routes.home);
  };

  render() {
    const { poster_path, title, overview, cast, reviews } = this.state;
    const { match, location } = this.props;
    const { handleGoBack } = this;
    const deepLocation = location.state.from;

    return (
      <>
        <GoBackButton onClick={handleGoBack} />
        <Movie poster_path={poster_path} title={title} overview={overview} />
        <div className={styles.NavDetails}>
          <NavLink
            className={styles.NavLinkDetails}
            activeClassName={styles.NavLinkDetailsActive}
            to={{
              pathname: `${match.url}/cast`,
              state: { from: deepLocation },
            }}
          >
            <span>Cast</span>
          </NavLink>
          <NavLink
            className={styles.NavLinkDetails}
            activeClassName={styles.NavLinkDetailsActive}
            to={{
              pathname: `${match.url}/reviews`,
              state: { from: deepLocation },
            }}
          >
            <span>Reviews</span>
          </NavLink>
        </div>

        <Route
          path={`${match.path}/cast`}
          render={props => <Cast {...props} cast={cast} />}
        />
        <Route
          path={`${match.path}/reviews`}
          render={props => <Reviews {...props} reviews={reviews} />}
        />
      </>
    );
  }
}

export default MovieDetailsPage;
