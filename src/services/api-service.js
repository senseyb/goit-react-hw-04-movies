import axios from 'axios';

const API_KEY = '4ee9f3c9031692c2042b06be7b52de80';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';

function fetchPopularMovies() {
  return axios.get(`/trending/movie/week?api_key=${API_KEY}`);
}

function fetchMovieById(id) {
  return axios.get(
    `/movie/${id}?api_key=${API_KEY}&append_to_response=reviews,credits`,
  );
}

function fetchMovieByName(movieName) {
  return axios.get(`search/movie?api_key=${API_KEY}&query=${movieName}`);
}

export { fetchPopularMovies, fetchMovieById, fetchMovieByName };
