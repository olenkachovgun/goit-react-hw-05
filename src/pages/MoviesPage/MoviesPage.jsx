import { useEffect, useState } from "react";
import MovieList from "../../components/MovieList";
import SearchBar from "../../components/SearchBar/SearchBar";
import { fetchMovieQuery } from "../../services/api";
import { useLocation, useSearchParams } from "react-router-dom";

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [isFirstLoad, setIsFirstLoad] = useState(true);
  const query = searchParams.get("query") ?? " ";
  const location = useLocation();
  console.log(location);

  useEffect(() => {
    const getData = async () => {
      if (!query) return setIsFirstLoad(false);
      try {
        const data = await fetchMovieQuery(query);

        setMovies(data);
      } catch (error) {
        console.log(error);
      }
    };

    getData();
  }, [query]);
  const handleChangeQuery = (query) => {
    // setQuery(query);
    searchParams.set("query", query);
    setSearchParams(searchParams);
    setIsFirstLoad(false);
  };

  return (
    <div className="homeConteiner">
      <SearchBar handleChangeQuery={handleChangeQuery} query={query} />
      {query && movies.length > 0 ? (
        <MovieList movies={movies} />
      ) : (
        !isFirstLoad && (
          <p className="noMovies">
            There are no movies that matched your query.
          </p>
        )
      )}
    </div>
  );
};

export default MoviesPage;
