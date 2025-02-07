import axios from "axios";
// const API_KEY = "198afab82f426412f81ed8e5e4a1d299";
// axios.defaults.baseURL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`;

// const API_Token =
//   "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxOThhZmFiODJmNDI2NDEyZjgxZWQ4ZTVlNGExZDI5OSIsIm5iZiI6MTczODk1MjEzMS4yMjQsInN1YiI6IjY3YTY0ZGMzMWZjYmZlZTU0ZDMwMGM3NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.NuOzcHjXpOwDp2M1t9nKoBx_ePOTghZnfnnCEVh_d4I";

// ====
const url = "https://api.themoviedb.org/3/trending/movie/day?language=en-US";
const options = {
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxOThhZmFiODJmNDI2NDEyZjgxZWQ4ZTVlNGExZDI5OSIsIm5iZiI6MTczODk1MjEzMS4yMjQsInN1YiI6IjY3YTY0ZGMzMWZjYmZlZTU0ZDMwMGM3NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.NuOzcHjXpOwDp2M1t9nKoBx_ePOTghZnfnnCEVh_d4I",
  },
};
export const fetchMovies = async () => {
  const { data } = await axios.get(url, options);
  return data.results;
};
