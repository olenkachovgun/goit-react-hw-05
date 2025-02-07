import MovieList from "../../components/MovieList";
import { useEffect, useState } from "react";
import { fetchMovies } from "../../services/api";

const HomePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const data = await fetchMovies();
      setMovies(data);
    };
    getData();
  }, []);
  console.log(movies);

  return (
    <div>
      <h2>Trending today:</h2>
      <MovieList movies={movies} />
    </div>
  );
};

export default HomePage;
