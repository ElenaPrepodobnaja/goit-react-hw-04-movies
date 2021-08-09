import axios from 'axios';

const AXIOS = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  params: {
    api_key: 'ab05c53cef7770959e5a4ff55b551ff7',
    language: 'en-US',
  },
});

function FetchInTrendMovies() {
  return AXIOS.get(`trending/all/day`).then(res => res.data);
}

function FetchSearchMovies(query) {
  return AXIOS.get(`search/movie?&query=${query}&page=1`).then(res => res.data);
}

function FetchAboutMovie(movieId) {
  return AXIOS.get(`movie/${movieId}?`).then(res => res.data);
}

function FetchActors(movieId) {
  return AXIOS.get(`movie/${movieId}/credits?`).then(res => res.data.cast);
}

function FetchReviews(movieId) {
  return AXIOS.get(`movie/${movieId}/reviews?`).then(res => res.data.results);
}

export {
  FetchInTrendMovies,
  FetchSearchMovies,
  FetchAboutMovie,
  FetchActors,
  FetchReviews,
};


