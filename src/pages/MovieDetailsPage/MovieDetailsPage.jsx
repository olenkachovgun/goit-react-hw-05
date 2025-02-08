import { useEffect, useState } from "react";
import { NavLink, Outlet, useParams } from "react-router-dom";
import { fetchMovieId } from "../../services/api";
import Navigation from "../../components/Navigation";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const defaultImg =
    "https://dummyimage.com/400x600/cdcdcd/000.jpg&text=No+poster";

  useEffect(() => {
    const getData = async () => {
      const data = await fetchMovieId(movieId);
      setMovie(data);
    };
    getData();
  }, [movieId]);
  console.log(movie);
  if (!movie) {
    return <h2>Loading...</h2>;
  }
  return (
    <div>
      MovieDetailsPage {movieId}
      <div>
        <img
          src={
            movie.poster_path
              ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
              : defaultImg
          }
          width={250}
          alt={movie.title}
        />
        <div>
          <h2>Name: {movie.title}</h2>
          <p>User Score: {Math.round(movie.vote_average * 10)}%</p>
          <h3>Overview</h3>
          <p>{movie.overview}</p>
          <h3>Genres</h3>

          <p>{movie.genres.map((genre) => genre.name).join(", ")}</p>
        </div>
      </div>
      <Navigation movieId={movieId} />
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default MovieDetailsPage;
