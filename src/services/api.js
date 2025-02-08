import axios from "axios";

const API_Token =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxOThhZmFiODJmNDI2NDEyZjgxZWQ4ZTVlNGExZDI5OSIsIm5iZiI6MTczODk1MjEzMS4yMjQsInN1YiI6IjY3YTY0ZGMzMWZjYmZlZTU0ZDMwMGM3NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.NuOzcHjXpOwDp2M1t9nKoBx_ePOTghZnfnnCEVh_d4I";

// ====
const BASE_URL = "https://api.themoviedb.org/3";

const options = {
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${API_Token}`,
  },
};
export const fetchMovies = async () => {
  const { data } = await axios.get(`${BASE_URL}/trending/movie/day`, options);
  return data.results;
};

export const fetchMovieId = async (movieId) => {
  const { data } = await axios.get(`${BASE_URL}/movie/${movieId}`, options);
  return data;
};

export const fetchMovieCast = async (movieId) => {
  const { data } = await axios.get(
    `${BASE_URL}/movie/${movieId}/credits`,
    options
  );
  return data.cast;
};
export const fetchMovieReviews = async (movieId) => {
  const { data } = await axios.get(
    `${BASE_URL}/movie/${movieId}/reviews`,
    options
  );
  return data.results;
};

// export const fetchMovieQuery = async (query) => {
//   const { data } = await axios.get(`${BASE_URL}/movie/${query}`, options);
//   return data;
// };
//add params in option
