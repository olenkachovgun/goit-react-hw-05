import { useEffect, useState } from "react";
import MovieList from "../../components/MovieList";
import SearchBar from "../../components/SearchBar/SearchBar";
import { fetchMovieQuery } from "../../services/api";
import { useLocation, useSearchParams } from "react-router-dom";

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query") ?? "";
  const location = useLocation();
  console.log(location);

  useEffect(() => {
    const getData = async () => {
      if (!query) return;
      try {
        const data = await fetchMovieQuery(query);

        setMovies(data);
      } catch (error) {
        console.log(error);
        return (
          <p>
            There are no movies matching your search query. Try a different
            query.
          </p>
        );
      }
    };

    getData();
  }, [query]);
  const handleChangeQuery = (query) => {
    // setQuery(query);
    searchParams.set("query", query);
    setSearchParams(searchParams);
  };
  const filteredData = movies.filter((movie) =>
    movie.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
      <SearchBar handleChangeQuery={handleChangeQuery} query={query} />
      {filteredData.length > 0 ? (
        <MovieList movies={filteredData} />
      ) : (
        <p>
          There are no movies matching your search query. Try a different query.
        </p>
      )}
    </div>
  );
};

export default MoviesPage;
