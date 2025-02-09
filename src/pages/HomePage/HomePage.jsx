import MovieList from "../../components/MovieList";
import { useEffect, useState } from "react";
import { fetchMovies } from "../../services/api";
import { GiFilmProjector } from "react-icons/gi";
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
    <div className="homeConteiner">
      <h1>
        <GiFilmProjector />
        Trending today
      </h1>
      <MovieList movies={movies} />
    </div>
  );
};

export default HomePage;
