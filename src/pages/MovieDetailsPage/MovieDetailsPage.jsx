import { useEffect, useRef, useState } from "react";
import {
  Link,
  Outlet,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import { fetchMovieId } from "../../services/api";
import Navigation from "../../components/Navigation";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState(null);
  const location = useLocation();
  const goBackUrl = useRef(location?.state ?? "/users");

  const defaultImg =
    "https://dummyimage.com/400x600/cdcdcd/000.jpg&text=No+poster";

  useEffect(() => {
    const getData = async () => {
      const data = await fetchMovieId(movieId);
      setMovie(data);
    };
    getData();
  }, [movieId]);

  if (!movie) {
    return <h2>Loading...</h2>;
  }
  return (
    <div>
      <Link to={goBackUrl.current}> Go back </Link>
      {/* <button type="button" onClick={() => navigate(-1)}>
        Go back
      </button> */}
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
